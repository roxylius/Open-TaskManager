import { useState } from 'react'

//import components
import Login from './components/Login';
import TaskForm from './components/TaskForm';

import './styles/App.css'
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [username, setUsername] = useLocalStorage('username', '');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn ? (
        <TaskForm onLogout={handleLogout} username={username}/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
