import React from 'react'
import CreatePlaylist from '../../components/createPlaylist/CreatePlaylist';
import SearchBar from '../../components/searchBar/SearchBar';

const Home = () => {
  return (
    <div>
      <CreatePlaylist />
      <SearchBar />
    </div>
  )
}

export default Home;