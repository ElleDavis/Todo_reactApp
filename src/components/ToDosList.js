import ToDoItem from "./ToDoItem";

const ToDosList = (props) => {
    return (
        <div>
            <h2>List:</h2>
            {/* map through todosData => display todoItem and its doItem prop with value of the data */}
            {props.todosData.map((todosData) => 
            <ToDoItem doItem={props.todosData} /> )}
        </div>
    );
};
export default ToDosList 
