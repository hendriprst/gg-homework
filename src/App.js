import './App.css';
import React, { useState, useEffect } from 'react';
import Playlist from './components/album/Playlist';
import GetPlaylist from './components/searchBar/GetPlaylist';

const App = () => {
  const [ data, setData ] = useState([]);
  const [ query, setQuery ] = useState("bohemian");
  const [ selected, setSelected ] = useState([]);

  const handleSearch = (value) => setQuery(value);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }, [query]);

  return (
    <div>
      <GetPlaylist onSearch={handleSearch} />
      <Playlist data={data} />
      {/* <TrackLoop /> */}
    </div>
  );
}

export default App;
