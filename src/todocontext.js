import React, { useState, createContext, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {

    const [todos, setTodos] = useState( () => {
        return localStorage.getItem('todos') ?
            JSON.parse(localStorage.getItem('todos')) : []
    });
    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    
    return(
        <TodoContext.Provider value={[todos, setTodos]} >
            {props.children}
        </TodoContext.Provider>
    )    

}