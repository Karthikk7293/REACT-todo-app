import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [toDos,setToDos] = useState([]);
  const [toDo,setToDo] = useState('');

  return (
   
    <div className="container">
      <div className="header">
        <h1>Tasks</h1>
      </div>
      <div className="row">
        <div className="col-lg-4  bg-light shadow m-3 py-4 rounded">
          <div className="mainHeading">
            <h1>ToDo List</h1>
          </div>
          <div className="input">
            <input type="text" id='ip' value={toDo} onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
            <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
          </div>
        </div>
        <div className="col-lg-7 bg-light shadow m-3 py-2 rounded">
          <div className="subHeading">
            <br/>
            <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
          </div>
          {
            toDos.map((obj)=>{
              return (
<div className="todos">
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} type="checkbox" value={obj.value} name="" id=""  />
                <p>{obj.text}</p>
              </div>
              <div className="right">
              <i onClick={(e)=>{
                setToDos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id != obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
          </div>

            </div>
          </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );

}

export default App;
