import { useLayoutEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProfile } from "../../../profile-context"

export default function Delete() {
  const { id } = useParams()
  const { getProfile, deleteProfile } = useProfile()
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async event => {
    event.preventDefault()

    try {
      await deleteProfile(id)
      navigate(-2)
    } catch (err) {
      console.log(err)
    }
  }

  useLayoutEffect( () => {
    const getProfileToDelete = async () => {
      try {
        const profile = await getProfile(id)
        setProfile(profile)
      } catch (err) {
        console.log(err)
      }
    }
    
    getProfileToDelete()
  }, [id, getProfile])
  
  if(profile) return (
    <div className='profiles-page-content'>
      <form onSubmit={onSubmit}>
        <h1>Delete Profile?</h1>

        <div className='profile-form-content'>
          <div style={{display: 'flex', gap: '1.5em', alignItems: 'center'}}>
            <div className='profile'>
              <img className='profile-img' src={profile.icon} alt='not found' />
              <h2 className='text-muted'>{profile.name}</h2>
            </div>
            <div>
              <h2 style={{maxWidth: '25vw'}}>
                This profile's history - including My List, ratings and activity - will be gone forever, and you won't be able to access it again.
              </h2>
            </div>
          </div>
        </div>

        <div className='profile-form-footer'>
          <button type='button' onClick={ () => navigate(-1)} className='profiles-button'>Keep Profile</button>
          <button type='submit' className='profiles-button-outline'>Delete Profile</button>
        </div>
      </form>
    </div>
  )
}