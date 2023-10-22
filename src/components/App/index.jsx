import NewTodoForm from '../NewTodoForm'
import TodoList from '../TodoList'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <NewTodoForm />
      <TodoList />
    </div>
  )
}

export default App
