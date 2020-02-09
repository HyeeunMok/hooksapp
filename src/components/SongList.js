import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Last of the American Girls', id: 1 },
    { title: 'American Idiot', id: 2 },
    { title: 'Basket Case', id: 3 }
  ]);
  const addSong = (title) => {
    setSongs([
      ...songs, { title, id: uuid()}
    ]);
  }
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
}

export default SongList;