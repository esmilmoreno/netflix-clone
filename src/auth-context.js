import { createContext, useContext, useEffect, useMemo, useReducer } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase'
import { addDoc, collection, getDocs, limit, onSnapshot, query, where } from "firebase/firestore"
import Spinner from "./components/spinner"

const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
  const initialState = {
    loading: true,
    user: null,
    account: null
  }

  function authReducer( prevState, action ) {
    switch (action.type) {
      case 'AUTH_STATE_CHANGE':
        return {
          ...prevState,
          user: action.user,
          account: action.account,
          loading: action.loading
        }
      case 'ACCOUNT_CHANGE':
        return {
          ...prevState,
          account: action.account,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          user: null,
          account: null,
          loading: false
        }
      default:
        return prevState
    }
  }

  const [authState, dispatch] = useReducer(authReducer, initialState)

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth)
  }
  
  function createAccount( planName ) {
    return new Promise( async (resolve, reject) => {
      try {
        const newAccount = {
          uid: authState.user.uid,
          planName: planName
        }
        const accountCollection = collection(db, 'accounts')

        await addDoc(accountCollection, newAccount)
        resolve('Your account has been created')
      } catch (err) {
        reject(err)
      }
    })
  }
  
  const authStateContext = useMemo( () => {
    return {
      ...authState,
      signUp,
      signIn,
      signOut: logOut,
      createAccount
    }
    // eslint-disable-next-line
  }, [authState])
  
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      // first we need to query the account, and wait for the response
      if(!user) return dispatch({ type: 'LOGOUT'})
      
      const accountCollection = collection(db, 'accounts')
      const q = query(accountCollection, where('uid', '==', user.uid), limit(1))
      const result = await getDocs(q)
      const account = result.docs[0] ? {...result.docs[0].data(), id: result.docs[0].id} : null
      
      dispatch({type: 'AUTH_STATE_CHANGE', user, account, loading: false})
    })

    return unsubscribe
  }, [])

  useEffect( () => {
    if(!authStateContext.user) return
    
    const q = query(collection(db, "accounts"), where("uid", "==", authStateContext.user.uid));

    const unsubscribe = onSnapshot(q, result => {
      const account = result.docs[0] ? {...result.docs[0].data(), id: result.docs[0].id} : null
      
      dispatch({ type: 'ACCOUNT_CHANGE', account})
    })

    return unsubscribe
  }, [authStateContext.user])
  
  if(authStateContext.loading) return (
    <div className='loading-screen'>
      <Spinner />
    </div>
  )
  
  return (
    <authContext.Provider value={authStateContext}>
      {children}
    </authContext.Provider>
  )
}