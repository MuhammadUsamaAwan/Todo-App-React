import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoProvider} from './todocontext';
import Header from './components/Header.component';
import TodoList from './components/TodoList.component'
import AddTodo from './components/AddTodo.component'

function App() {
  return (
    <TodoProvider>
    <div className="container pt-5">
      <Header title="Todo List"/>
      <TodoList />
      <AddTodo />
    </div>
    </TodoProvider>
  );
}

export default App;
