import React from 'react';
var uuid = require('react-native-uuid');

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const [rId] = uuid.v4();
        if(inputText){  
            setTodos([...todos, {text: inputText, completed: false, id: rId}]);
            setInputText("");
        } else {
            alert("You cannot add an empty todo");
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button className ="todo-button" type="submit" onClick={submitTodoHandler}>
               <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={statusHandler}>
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;