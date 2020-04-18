import React, { useContext } from 'react';
import { TodoContext } from '../todocontext';

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
    
    const deleteTodo = id => {
        setTodos( todos.filter (todo => todo.id !== id) );
    }

    return (
        <div>
            <ul className="list-group">
                { todos.map (todo =>
                <li className="list-group-item" key={todo.id}>{todo.title}
                <i className="fa fa-times fa-lg text-danger float-right"
                onClick={deleteTodo.bind(this, todo.id)}></i></li>) }
            </ul>
        </div>
    )
}

export default TodoList;