import './check-box.css'

export default function CheckBox({ text, id, checked, onChange }) {
  return (
    <div className='profile-form-checkbox-container'>
      <label htmlFor={id}className='profile-form-checkbox'>
        <input
          id={id}
          checked={checked}
          onChange={ ({target}) => onChange(target.checked)}
          type='checkbox'
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      </label>
      {text && <label htmlFor={id}>{text}</label>}
    </div>
  )
}