import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return[...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    };
 
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));

    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };

    let upperCaseAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            })
        );
        
    };

    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            }else{
                return todo;
            }
     } )
        );

    };

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo;
            }
     } )
        );

    };
    let markAsDoneAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,
                };
            })
        );
        
    };
    return(
        <div>
            <input 
            placeholder="add a new task" 
            value={newTodo}
            onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}> Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ?{textDecorationLine:"line-through",backgroundColor:"red"}:{}}>
                        {todo.task} 
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)} >delete</button>
                        <button onClick={()=>upperCaseOne(todo.id)} >upperCaseOne</button>
                        <button onClick={()=>markAsDone(todo.id)} >mark As Done</button>
                        </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>upperCase All</button>
            <br />
            <button onClick={markAsDoneAll}>mark As Done All</button>
        </div>
    )
}
