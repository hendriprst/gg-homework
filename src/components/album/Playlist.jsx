import React from "react";
import "./styles.css";

const Playlist = ({ images, title, artist, albums }) => {
  return(
    <>
    <div className="card">
      <img className="card-img" src={images} alt="img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-artist">Artist: {artist}</p>
      <p className="card-album">Album: {albums}</p>
      <button type="submit" className="btn btn_select">Select</button>
    </div>
    </>
  );
}

export default Playlist;