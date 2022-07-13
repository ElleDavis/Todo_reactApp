const ToDoItem = (props) => {
    const{tasksName,description } = props.doItem
     return (
         <div>
            {/* this returns the individual properties from the data */}
            <h3>{tasksName}</h3>
            <p>{description}</p>
        </div>
        )
}
export default ToDoItem