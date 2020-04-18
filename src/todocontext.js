import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todos, setTodos] = useState( [
        {title : "Learn React", id: 1},
        {title : "Eat Dinner", id: 2},
        {title : "Go to Sleep", id: 3}]);
    return(
        <TodoContext.Provider value={[todos, setTodos]} >
            {props.children}
        </TodoContext.Provider>
    )    

}