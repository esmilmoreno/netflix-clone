import './base-input.css'

export default function BaseInput({ reference, type, value, onChange, placeHolder}) {
  return (
    <div className='floating-label-input'>
      <input ref={reference} type={type} value={value} onChange={ ({target}) => onChange(target.value) } placeholder=' ' required />
      <label>{placeHolder}</label>
    </div>
  )
}