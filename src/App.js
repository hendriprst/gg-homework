import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from './components/album/Playlist';
import GetPlaylist from './components/searchBar/GetPlaylist';

// const TrackLoop = () => {
//   const AllList = AllSample.map((a) => (
//     <Playlist 
//       images={a.album.images[1].url}
//       title={a.album.name}
//       artist={a.album.artists[0].name}
//       albums={a.name}
//     />
//   ));
//   return AllList;
// }

const App = () => {
  const [ data, setData ] = useState([]);
  const [ query, setQuery ] = useState("bohemian");

  const handleSearch = (value) => setQuery(value);

  useEffect(() => {
    axios(`https://api.spotify.com/v1/search?q=${query}&type=artist`)
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
