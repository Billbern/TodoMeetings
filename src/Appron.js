import { useState } from 'react';
import './App.css';
import TodoDisplay from './components/Tododisplay';
import TopBar from './components/Topbar';


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <div className="todobox">
        <div className="todotop">
          <TopBar todo={todos} settodo={setTodos} />
        </div>
        <TodoDisplay todos={todos}/>
      </div>
    </div>
  );
}

export default App;
