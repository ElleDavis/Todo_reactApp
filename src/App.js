import "./App.css";
import todosData from './data/todosData'
import { Component } from "react";
import Navbar from "./components/NavBar";
import ToDosList from "./components/ToDosList"

class App extends Component{
  render(){
    return (
      <div className= "App">
        <Navbar />
       {todosData && <ToDosList todosData={todosData} />}
       
      </div>
    )
  }
}


export default App;
