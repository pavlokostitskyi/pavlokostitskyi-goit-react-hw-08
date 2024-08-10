import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectContacts } from '../../redux/contacts/selectors'
import css from './ContactsPage.module.css'

export default function ContactsPage() {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found</p>}
    </div>
  )
}
