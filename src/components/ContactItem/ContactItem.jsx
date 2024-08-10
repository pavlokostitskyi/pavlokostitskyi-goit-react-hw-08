import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import css from './ContactItem.module.css'

export default function ContactItem({ contact }) {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteContact(contact.id))

  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}
