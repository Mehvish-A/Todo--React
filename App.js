import logo from './logo.svg';
import './App.css';
import {TodoLIst} from "./TodoList";
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
      
 
 setTodoList(newTodos);
 updateLocalStorage(newTodos);
 
 setTodo("");}
 
 
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

  setTodoList(newTodos);
  updateLocalStorage(newTodos);
  


const handleEdit = (index) => {
  let newTodos = [...todoList];
  console.log ("newTodos [index]".text, newTodos [index].text);
  setTodo(newTodos[index].text);
  setEdit(true);
  setEditIndex(index);
  
};




const saveEdit = () =>{
console .log(saveEdit,NewTodos);
let newTodos = [...todolist];
newTodos[editIndex] = {
  ...newTodos[editIndex], text : todo ,
};
setTodoList(newTodos);

updateLocalStorage(newTodos);
setEdit(false);
setTodo('');
}

const handleRemoveAll = () => {

  setTodoList ([]);
  updateLocalStorage([]);
}

const updateLocalStorage = (data) =>{
  localStorage.setItems(todoList, JSON.stringify(data))
}

consol .log ("todoList", todoList);


 return (<div className="App">
  <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
 
  <input type="text" class="form-control my-2" 
  placeholder="add your todo"
  onChange={handleChange} 
  vlaue={todo}
  />
  {error ? <p>Input is emplty</p> : null}
  <button disabled = {error}
  onClick={isEdit ? saveEdit : handleSubmit} className=" mb-2 btn btn-primary">
    {isEdit ? "Edit todo" : "Add Todo"}</button>
    <Button color="Danger">Remove All</Button>
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
 
}



export default App;
