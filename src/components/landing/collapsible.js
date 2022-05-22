import { useRef } from 'react'
import './collapsible.css'

export default function Collapsible({ title, children}) {
  const input = useRef()

  const toggleShow = () => {
    input.current.checked = !input.current.checked
  }
  
  return (
    <div className='collapsible'>
      <input ref={input} type='radio' name='collapsible' className='collapsible-input' />
      <button className='collapsible-header' onClick={toggleShow}>
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
      </button>
      <div className='collapsible-content'>
        <div style={{padding: '.8em 1.2em'}}>
          {children}
        </div>
      </div>
    </div>
  )
}