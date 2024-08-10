import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/operations'
import css from './LoginForm.module.css'

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(6, 'Password is too short').required('Required'),
})

export default function LoginForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
    resetForm()
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  )
}
