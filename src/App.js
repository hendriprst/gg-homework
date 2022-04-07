import './App.css';
import React, { useEffect, useState } from 'react';
import { Login } from './pages/login';
import { getTokenFromUrl } from './pages/auth'
import Home from './pages/home';

const App = () => {
  const [ token, setToken ] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);
    }

    console.log(token, "Logged In");
  }, [])

  return (
    <div className="app">
      {token ? <Home /> : <Login /> }
    </div>
  );
}

export default App;
