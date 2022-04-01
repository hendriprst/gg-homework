import React, { useState } from 'react'
import './getplaylist.css'

function GetPlaylist(props) {
  const [ search, setSearch ] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(search);
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="search" placeholder="Try 'Bohemian'" className="input_get" />
        <button type="submit" className="btn btn_get">Search</button>
      </form>
    </>
  )
}

export default GetPlaylist;