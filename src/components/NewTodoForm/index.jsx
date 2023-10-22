import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo-slice'
import styles from './NewTodoForm.module.scss'

function NewTodoForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault()
    if (text.length > 0) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <form data-testid='todo-form' onSubmit={submitHandler} className={styles.newTodoForm}>
      <input
        data-testid='todo-input'
        placeholder='Czym się zajmiemy tym razem?'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}

export default NewTodoForm
