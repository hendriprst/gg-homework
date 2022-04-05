import React, { useState, useEffect } from 'react'
import Button from '../button/Button';
import './styles.css'

function SearchBar(props) {
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("bohemian");
  const [ data, setData ] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(search);
    e.currentTarget.reset();
  };

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input onChange={handleChange} id="search" type="search" placeholder="Try 'Bohemian'" className="input_get" />
        <Button text="Search" />
      </form>
    </>
  )
}

export default SearchBar;