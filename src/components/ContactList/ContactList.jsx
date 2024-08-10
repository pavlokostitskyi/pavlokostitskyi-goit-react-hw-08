import { useSelector } from 'react-redux'
import ContactItem from '../ContactItem/ContactItem'
import { selectContacts } from '../../redux/contacts/selectors'
import { selectFilter } from '../../redux/filters/selectors'
import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}
