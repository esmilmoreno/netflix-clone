import { useLayoutEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useProfile } from "../../../profile-context"
import CheckBox from "./components/check-box"

export default function Edit() {
  const { getProfile, updateProfile } = useProfile()
  const { id } = useParams()
  const navigate = useNavigate()
  const [profileToEdit, setProfileToEdit] = useState({
    name: ''
  })

  const goBack = () => navigate(-1)

  const handleChange = ({target}) => {
    const name = target.name
    const value = target.value

    setProfileToEdit( prev => {
      return {...prev, [name]: value}
    })
  }

  const onSubmit = async event => {
    event.preventDefault()

    try {
      await updateProfile(id, profileToEdit)
      goBack()
    } catch (err) {
      console.log(err)
    }
  }

  useLayoutEffect(() => {
    const getProfileToDelete = async () => {
      try {
        const profile = await getProfile(id)
        setProfileToEdit(profile)
      } catch (err) {
        console.log(err)
      }
    }
    
    getProfileToDelete()
  }, [id, getProfile])
  
  return (
    <div className='profiles-page-content'>
      <form onSubmit={onSubmit}>
        <div className='profile-form-header'>
          <h1>Edit Profile</h1>
        </div>
        <div className='profile-form-content'>
          <div style={{display: 'flex', gap: '1.5em', alignItems: 'flex-start'}}>
            <img className='profile-img' src={profileToEdit.icon} alt='not found' />
            <div>
              <input
                value={profileToEdit.name}
                onChange={handleChange}
                className='profile-form-input'
                type='text'
                required
                name='name'
                placeholder='Name'
              />

              <div className='profile-form-content'>
                <div>
                  <h2 className='text-muted'>Maturity Settings:</h2>
                  {!profileToEdit.kids ? 
                  <label className='profile-tag'>All Maturity Ratings</label>
                  :
                  <>
                    <label className='profile-tag'>Kids</label>
                    <label className='profile-tag'>7+</label>
                  </>
                  }
                </div>
              </div>

              <h2 className='text-muted'>Autoplay controls</h2>
              <CheckBox 
                id='next'
                checked={profileToEdit.autoPlay}
                onChange={ autoPlay => setProfileToEdit( prev => ({...prev, autoPlay}))}
                text='Autoplay next episode in a series on all devices.'
              />
            </div>
          </div>
        </div>
        <div className='profile-form-footer'>
          <button type='submit' className='profiles-button'>Save</button>
          <button onClick={goBack} type='button' className='profiles-button-outline'>Cancel</button>
          <Link to='delete' type='button' className='profiles-button-outline'>Delete Profile</Link>
        </div>
      </form>
    </div>
  )
}