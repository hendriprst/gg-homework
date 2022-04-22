import React, { useEffect, useState } from 'react';
import { Login } from './pages/login';
import { getTokenFromUrl } from './data/auth';
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
  }, [])

  return (
    <>
      {token ? <Home /> : <Login /> }
    </>
  );
}

export default App;
