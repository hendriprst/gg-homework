import React from "react";

const Playlist = ({ images, title, artist, albums }) => {
  return(
    <>
      <img src={images} alt="" />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{albums}</p>
      <button>Select</button>
    </>
  );
}

export default Playlist;