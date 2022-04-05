import './App.css';
import React, { useEffect, useState } from 'react';
import CreatePlaylist from './components/createPlaylist/CreatePlaylist';
import SearchBar from './components/searchBar/SearchBar';

const App = () => {
  const [ data, setData ] = useState([])

  const CLIENT_ID = process.env.REACT_APP_API_KEY;
  const url = "https://accounts.spotify.com/authorize";
  const scope = "playlist-modify-private";

  // const handleSearch = (value) => setQuery(value);

  useEffect(() => {
    fetch(`${url}?access_token=${CLIENT_ID}&scope=${scope}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <CreatePlaylist />
      <br />
      <SearchBar />
    </div>
  );
}

export default App;
