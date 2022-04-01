import React from 'react'
import Playlist from '../Playlist';

const songList = ({ data }) => {
  const songs = data;

  let song;
  {
    song = songs.map((a) => (
      <Playlist key={a.id} images={a.images} title={a.title} artist={a.artist} albums={a.albums} />
    )
  )}
  return <ul>{song}</ul>
}

export default songList;