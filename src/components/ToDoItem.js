const ToDoItem = (props) => {
    // const{tasksName, description}=props.doItem
         return (
        <div>
            {/* this returns the individual properties from the data */}
            <h3>{props.todosData.tasksName}</h3>
             <p>{props.todosData.description}</p>
        </div>
        )
}
export default ToDoItem