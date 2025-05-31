import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addnewTask = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false}];
        });

        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };
    let markDoneAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true
            }

        }));
    };

    let markDoneOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id){
            return {
                ...todo,
                isDone: true,
            };
            }else{
                return todo;
            }
        })
        );
    }

    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addnewTask}>Add Task</button>

            <br /><br /><br />
            <h3>Todo Task </h3>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => markDoneOne(todo.id)}>Mark As Done</button>
                    </li>;
                })
                }
            </ul>
            <br /><br />
            <button onClick={markDoneAll} style={{background: "green"}}>Mark All as DONE</button>
        </div>
    )
}