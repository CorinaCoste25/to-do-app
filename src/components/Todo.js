import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return { ...el, completed: !el.completed } 
            }
            return el
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
            <button className="complete-button" onClick={completeHandler}>
                <i className="fas fa-check" />
            </button>
            <button className="trash-button" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;