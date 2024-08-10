import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'
import { selectContacts } from '../../redux/contacts/selectors'
import css from './ContactForm.module.css'

export default function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        return
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newContact = { name, number }

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`)
      return
    }

    dispatch(addContact(newContact))
    setName('')
    setNumber('')
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z\u0080-\u024F]+(?:[-'\s][a-zA-Z\u0080-\u024F]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}
