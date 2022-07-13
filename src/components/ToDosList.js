import ToDoItem from "./ToDoItem";

const ToDosList = (props) => {
    const {todosData} =props
    return (
        <div>
            <h2>List:</h2>
            {/* map through todosData => display todoItem and its doItem prop with value of the data */}
            <h3>{props.todosData.map(
                (description, tasksName) => (<ToDoItem doItem={description} key={tasksName}/>) )}</h3>
        </div>
    );
};
export default ToDosList 
