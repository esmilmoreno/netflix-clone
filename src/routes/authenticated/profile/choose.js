import { Link } from "react-router-dom"
import { useProfile } from "../../../profile-context"

export default function Choose() {
  const { profiles, switchProfile } = useProfile()
  
  return (
    <div className='profiles-page-content'>
      <h1>Who's watching?</h1>

      <div className='profiles-container'>
        {profiles.map( (profile, index) => {
          return (
            <div key={index} className='profile' onClick={() => switchProfile(profile)}>
              <img className='profile-img' src={profile.icon} alt='not found' />
              {profile.name}
            </div>
          )
        })}
        {profiles.length < 5 && (
          <Link to='new-profile' className='profile'>
            <div className='add-profile-box'>
              <svg xmlns="http://www.w3.org/2000/svg" width='50%' fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
              </svg>
            </div>
            Add Profile
          </Link>
        )}
      </div>

      <Link to='manage-profiles' className='profiles-button-outline'>Manage Profiles</Link>
    </div>
  )
}