import logo from './logo.svg';
import './App.css';

import { useState } from "react";



const App = () =>{
  const [todoList,setTodoList] = useState( [] );
 const [todo, setTodot] = useState( [""] );
 const [error,setError]= useState(flase);
 const [isEdit, setEdit] = useState(false);
 
 
 
 const handleSubmit = () => {
    if (todo){
    console.log("handleSubmit");
  let newTodos= [...todoList];
 newTodos.push(todo);
 setTodoList(newTodos);
  setTodo("");  }
  else {
setError(true);
  }
    };
const handleChange = (e) => {
  console .log(e.target.value);
  SetTodo (e.target.value);
  //SetError(false);
 // if(e.target.value ===="") setError(true);
};
const handleMarkAsRead = (index) => {
 
  let newTodos = [...todoList]
  newTodos[index] = {
  ...newTodos [index],
    markAsDone : true,
  };
  setTodoList(newTodos);
  console .log( "newTodos",newTodos);};
  const handledelete = (index) => {
console .log (index);
let newtoDos = [...todoList];
newTodos.slice(index,1)
console .log( newTodos);
setTodoList(newTodos);
  } ;

const handleEdit = (index) => {
  let newTodos = [...todoList];
  console.log ("newTodos [index]".text, newTodos [index].text);
};
const saveEdit = () =>{

}





consol .log ("todoList", todoList);


 return (<div className="App">
  <Button color="danger">Danger!</Button>
  <input type="text" class="form-control my-2" 
  placeholder="add your todo"
  onChange={handleChange} 
  vlaue={todo}
  />
  {error ? <p>Input is emplty</p> : null}
  <button disabled = {error}
  onClick={isEdit ? saveEdit : handleSubmit} className=" mb-2 btn btn-primary">
    {isEdit ? "Edit todo" : "Add Todo"}</button>

{todoList.map ((item, i) => ( 
  <div className = "mb-2 d-flex " key={i}>
  <P style={{
    textdecoration: item.MarkAsDone ?  'Line-through' : 'Normal',
  }}
   className={item.MarkAsDone ?  "w-25"} 

 >
 (${i+1} ${item.text}) ;
 {item.text} </P>
  <button onClick={() => handlerMarkAsRead(i)}>Mark as Read</button>
  <button onClick={() => handlerMarkAsRead(i)}>Delete</button>
  <button onClick={() => handlerMarkAsRead(i)}>Edit</button>
  </div>))}

 </div> 
);
 
};



export default App;
