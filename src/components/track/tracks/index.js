import React from 'react'
import Playlist from '../Playlist';

const trackList = ({ data }) => {
  const tracks = data;

  let track;

  track = tracks.map((a) => (
      <Playlist key={a.id} images={a.images} title={a.title} artist={a.artist} albums={a.albums} />
  ));
  return <ul>{track}</ul>
};

export default trackList;