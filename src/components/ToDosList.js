import ToDoItem from "./ToDoItem";



const ToDosList = (props) => {
    // console.log(props.doList)
return (
    <div>
        <h2>List:</h2>
        {/* map through todosData => display these props in a h3 and Para */}
        {props.todosData.map((todosData) => 
        //This calls the todoItem function and its doItem prop with the value from the data file
        <ToDoItem doItem={props.todosData} />  )}
        {/* 
        //this returned the individual properrties from the data
        // <div>
        // <h3>{todosData.tasksName} </h3>
        // <p>{todosData.description} </p>
        // </div> */}

       
    </div>
    )
};

export default ToDosList 
