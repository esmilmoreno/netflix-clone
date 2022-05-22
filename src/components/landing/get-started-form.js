import { useEffect, useRef, useState } from 'react'
import './get-started-form.css'
import { useNavigate } from 'react-router-dom'
import BaseInput from './base-input'

export default function GetStartedForm() {
  const input = useRef()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit = event => {
    event.preventDefault()
    navigate('signup', {state: {email}})
  }

  useEffect( () => {
    setError( () => {
      if(!email) return 'Email is required!'
      if(!input.current.checkValidity()) return 'Please enter a valid email address'
      return ''
    })
  }, [email])

  return (
    <form className='getstarted-form' onSubmit={onSubmit}>
      <h3 style={{fontWeight: 'normal'}}>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className='getstarted-form-row'>
        <BaseInput
          reference={input}
          type='email'
          value={email}
          onChange={setEmail}
          placeHolder='Email address'
        />
        <button className='landing-button large get-started-button' type='submit'>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <p className='invalid-label'>{error}</p>
      </div>
    </form>
  )
}