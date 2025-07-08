import { useState } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import './styles/App.css';
import { useLocalStorage } from './hooks/useLocalStorage';


// component, which handles routing between the login and task form.
function App() {
  // State for current user's username.
  const [user, setUser] = useLocalStorage('user', null);

  // Handles the login action.
  const handleLogin = (username) => {
    setUser(username);
  };

  // Handles the logout action.
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <TaskForm username={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;