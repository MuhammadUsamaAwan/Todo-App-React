import React, { useState, useContext } from 'react';
import { TodoContext } from '../todocontext';
import uuid from 'react-uuid'

export default function AddTodo() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useContext(TodoContext);

    const updateTodo = e => setNewTodo(e.target.value)

    const addTodo = e => {
        e.preventDefault();
        setNewTodo("");
        if (newTodo!=="")
        setTodos(prevTodos => [...prevTodos, {title: newTodo, id: uuid()}]);
    }


    return (
        <form className="input-group" onSubmit={addTodo}>
            <input type="text" className="form-control"
            value={newTodo} onChange={updateTodo}/>
            <button className="btn btn-primary" type="submit">Add Task</button>
        </form>
    )
}