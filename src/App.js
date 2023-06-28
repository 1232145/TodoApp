import React, { useState } from 'react';
import TodoList from './components/TodoList';
import LoginPage from './components/LoginPage';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', marginTop: 40 }}>
      <h1>Todo List App</h1>
      {
        login ?
          (
            <div>
              <TodoList />
            </div>
          )
          :
          (
            <div><LoginPage setLogin={setLogin}/></div>
          )
      }
    </div>
  );
}

export default App;
