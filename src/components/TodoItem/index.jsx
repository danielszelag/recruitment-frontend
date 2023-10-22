import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../../redux/todo-slice'
import styles from './TodoItem.module.scss'

function TodoItem({ id, title, isCompleted }) {
  const dispatch = useDispatch()

  function handleToggle() {
    dispatch(toggleComplete(id))
  }

  function handleDelete(e) {
    e.stopPropagation()
    dispatch(deleteTodo(id))
  }

  return (
    <li onClick={handleToggle} className={`${styles.item} ${isCompleted ? styles.done : ' '}`}>
      <div className={styles.title}>{title}</div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        usuń
      </button>
    </li>
  )
}

export default TodoItem
