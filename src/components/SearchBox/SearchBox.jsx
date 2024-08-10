import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/filters/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch()

  const handleChange = event => {
    dispatch(setFilter(event.target.value))
  }

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleChange} className={css.input} />
    </label>
  )
}
