import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./auth-context";
import Spinner from "./components/spinner";
import { db } from "./firebase";

const profileContext = createContext()

export const useProfile = () => {
  return useContext(profileContext)
}

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth()
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const switchProfile = useCallback( (profile) => {
    setCurrentProfile(profile)
  }, [])
  
  const getProfile = useCallback( (id) => {
    return new Promise( async (resolve, reject) => {
      setLoading(true)
      
      try {
        const profile = await getDoc(doc(db, 'profiles', id))
        resolve(profile.data())
      } catch (err) {
        reject(err)
      }

      setLoading(false)
    })
  }, [])
  
  const getProfiles = useCallback( async () => {
    if(!user) return

    try {
      const q = query(collection(db, "profiles"), where("uid", "==", user.uid));
      const result = await getDocs(q)
  
      setProfiles(result.docs.map( doc => {
        return {id: doc.id, ...doc.data()}
      }))
    } catch (err) {
      console.log(err);
    }
  }, [user])
  
  const addProfile = useCallback( (icon, name, kids) => {
    return new Promise( async (resolve, reject) => {
      const profilesCollection = collection(db, 'profiles')
      
      setLoading(true)
      
      try {
        await addDoc(profilesCollection, {uid: user.uid, icon, name, kids:kids || false, autoPlay: true})
        getProfiles()
        resolve()
      } catch (err) {
        reject(err)
      }

      setLoading(false)
    })
  }, [getProfiles, user.uid])

  const updateProfile = useCallback( (id, data) => {
    return new Promise( async (resolve, reject) => {
      setLoading(true)

      try {
        await updateDoc(doc(db, 'profiles', id), data)
        getProfiles()
        resolve()
      } catch (err) {
        reject(err)
      }

      setLoading(false)
    })
  }, [getProfiles])

  const deleteProfile = useCallback( id => {
    return new Promise( async (resolve, reject) => {
      setLoading(true)

      try {
        await deleteDoc(doc(db, 'profiles', id))
        getProfiles()
        resolve()
      } catch (err) {
        reject(err)
      }

      setLoading(false)
    })
  }, [getProfiles])
  
  useEffect( () => {
    getProfiles()
  }, [getProfiles])
  
  const context = useMemo( () =>{
    return {
      profiles,
      currentProfile,
      switchProfile,
      getProfile,
      addProfile,
      updateProfile,
      deleteProfile
    }
  }, [profiles, currentProfile, switchProfile, getProfile, addProfile, updateProfile, deleteProfile])
  
  return (
    <profileContext.Provider value={context}>
      {children}
      {loading && <div className='loading-screen'>
        <Spinner />
      </div>}
    </profileContext.Provider>
  )
}