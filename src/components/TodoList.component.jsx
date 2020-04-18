import React, { useContext } from 'react';
import { TodoContext } from '../todocontext';

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
    
    const deleteTodo = id => {
        setTodos( todos.filter (todo => todo.id !== id) );
    }

    console.log(todos.length);

    if (todos.length !== 0) {
    return (
        <ul className="list-group">
            { todos.map (todo =>
            <li className="list-group-item" key={todo.id}>{todo.title}
            <i className="fa fa-times fa-lg text-danger float-right"
            onClick={deleteTodo.bind(this, todo.id)}></i></li>) }
        </ul>
    )}

    else {
    return (
        <div className="alert alert-warning" role="alert">
        <strong>You have no Task!</strong> Either you are a efficient person or you 
        have nothing to do. 
        </div>
    )
    }
}

export default TodoList;