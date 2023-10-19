import React from 'react'
import Login from './login'
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  
  return (
    <div>
      <Login/>
     { isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
    </div>
  )
}

export default App