import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import css from './RegistrationPage.module.css'

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  )
}
