
const ToDoItem = (props) => {
    return (
        <div>
            <h3>{props.todosData.tasksName} </h3>
            <p>{props.todosData.description} </p>
        </div>
    )
}
export default ToDoItem