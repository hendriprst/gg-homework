import React from "react";
import "../App.css";

const Playlist = (props) => {
  return(
    <>
      <img className="card-img" src={props.images} alt="img" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-artist">Artist: {props.artist}</p>
      <p className="card-album">Album: {props.albums}</p>
      <button href="#">Select</button>
    </>
  );
}

export default Playlist;