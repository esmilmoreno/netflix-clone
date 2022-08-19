import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../../profile-context'

const profileIcons = [
  'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb_DHMVDo8hDAK3yCzp_kViqNAzRqtn4oFSvy8FppaaBvPEgXCYaVMOX7QyrOZvuznXMuC7CCX4H0-NmnBa5bxs4CCEluvvauk87.png?r=a41',
  'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT4cxkF1q0aSEVCvqYghhYlTJfAE1Oz78QZ2Zco0GN_c1kr_X8Q01ASn1bPFPCo1cy4XB5-hBHWzPhB3te4PXTohBW34bVKPZRAt.png?r=f71',
  'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQeGHKNMmLwGKq16NvKP6XTkbyBE0_KaWc6JahZksi5Xp6gr44E-3ZwFQcQZHe2MHXsC3FSGxriP29b5UbNP8h-NcuhXvO6kIo9T.png?r=b97',
  'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfCQ0DVwUFZeFSrpIWpDME-42I-abt3hLWcLxagNRYhailaYomn6P-al0W7IjbjW78UiZkTdH3ShQcyvzG23vDldu19Ql1xhls-X.png?r=fcc',
  'https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTvR7fxD8jOvAO8eT6xYP9I-63VuTrSThKDoyFoFQLoDAeqPsQXzSPlMNCeVzAVuRpa7xWBIyHLJoWoMTQ_XkQvxKXIQ7I6Jhu0z.png?r=fcd'
]

export default function New() {
  const { profiles, addProfile } = useProfile()
  const [profileName, setProfileName] = useState('')
  const [kids, setKids] = useState(false)

  // here we filter the profile icons to find one that is not in use by any other user.
  const icon = profileIcons.find( current => {
    const inUse = profiles.some( cr => cr.icon === current )

    return !inUse
  })

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const onSubmit = async event => {
    event.preventDefault()

    try {
      await addProfile(icon, profileName, kids)
      goBack()
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className='profiles-page-content'>
      <form onSubmit={onSubmit}>
        <div className='profile-form-header'>
          <h1>Add Profile</h1>
          <h2 className='text-muted'>Add a profile for another person watching Netflix</h2>
        </div>

        <div className='profile-form-content'>
          <img className='profile-img' src={icon} alt='not found' />
          <input
            value={profileName}
            onChange={ ({ target }) => setProfileName(target.value)}
            className='profile-form-input'
            type='text'
            required
            name='name'
            placeholder='Name'
          />
          <div className='profile-form-checkbox-container'>
            <label htmlFor='isKids' className='profile-form-checkbox'>
              <input
                id='isKids'
                checked={kids}
                onChange={ ({target}) => setKids(target.checked)}
                type='checkbox'
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </label>
            <label htmlFor='isKids'>Kid?</label>
          </div>
        </div>

        <div className='profile-form-footer'>
          <button type='submit' className='profiles-button'>Continue</button>
          <button type='button' className='profiles-button-outline' onClick={goBack}>Cancel</button>
        </div>
      </form>
    </div>
  )
}