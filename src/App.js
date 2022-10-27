import './App.css';
import Header from './components/header/Header';
import TodoBody from './components/todobody/TodoBody';
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState([{
    text: "Wash Dishes",
    priority: 'high',
    id: 213
  }]);


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newtodos = [todo, ...todos];
    setTodos(newtodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const deleteTodo = id =>{
      const removeTodo = [...todos].filter(todo => todo.id !== id)
      setTodos(removeTodo);
  }

  return (
    <div className="App">
      <Header onSubmit={addTodo}
      />
      <TodoBody
        todos={todos}
        deleteTodo ={ deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
