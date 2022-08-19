import './form.css'

export default function Form({ children, onSubmitEvent }) {
  const onSubmit = event => {
    event.preventDefault()

    onSubmitEvent()
  }
  
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}