import React,{useState, useEffect} from 'react'
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [completedTodos,setCompletedTodos] = useState([])

  const handleAddTodo = () =>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
  };
  
  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  };

  const handCompleteTodo = (index)=>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + 'at' + h + ':' + m + ':' + s;
    
    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn
    }
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'))
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])
  return (
    <div className="App">
      <h1>Meus afazeres</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title ?"/>
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What's the task description ?"/>
          </div>
          <div className="todo-input-item">
            <label>Title</label>
            <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen===true &&  'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className="todo-list">
        {isCompleteScreen===false && allTodos.map((item,index)=>{
              return(
                <div className="todo-list-item" key={index}>
              <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
              <div>
                <AiOutlineDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?' />
                <BsCheckLg className='check-icon' onClick={()=>handCompleteTodo(index)} title='Complete?'/>
              </div>
            </div>
              );
            })}

        </div>
      </div>
    </div>
  );
}

export default App;
