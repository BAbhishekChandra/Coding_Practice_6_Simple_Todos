// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  // console.log(todoDetails)
  const {id, title} = todoDetails
  // console.log(id, title)
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="li-container">
      <p className="title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
