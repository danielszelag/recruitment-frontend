import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.scss'

function TodoList() {
  const allTodos = useSelector((state) => state.todos)
  const todo = allTodos.filter((el) => el.isCompleted === false)
  const finished = allTodos.filter((el) => el.isCompleted === true)

  return (
    <>
      {todo.length > 0 && <div className={styles.category}>nad tym pracuję...</div>}
      <ul className={styles.list}>
        {todo.length > 0 &&
          todo.map((item) => (
            <TodoItem isCompleted={false} key={item.id} id={item.id} title={item.title} />
          ))}
      </ul>
      {finished.length > 0 && (
        <div className={styles.category}>
          {finished.length > 0 && todo.length === 0 ? <span>wszystko</span> : <span>już</span>}{' '}
          zrobione!
        </div>
      )}
      <ul className={styles.list}>
        {finished.length > 0 &&
          finished.map((item) => (
            <TodoItem isCompleted={true} key={item.id} id={item.id} title={item.title} />
          ))}
      </ul>
    </>
  )
}

export default TodoList
