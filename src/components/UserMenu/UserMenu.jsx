import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/operations'
import { selectUser } from '../../redux/auth/selectors'
import css from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={css.container}>
      <p className={css.name}>Welcome, {user.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
