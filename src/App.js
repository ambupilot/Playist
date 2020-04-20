import React, { useState } from 'react';
import './App.css';
import AddSongForm from './AddSongForm'
import SongsTable from './SongsTable'

const App = () => {

  // tijdelijke data
const songsData = [
  { id: 1, title: 'Money for nothing', artist: 'Dire Straits', genre: 'rock', rating: 4 },
  { id: 2, title: 'Looking for the summer', artist: 'Chris Rea', genre: 'rock', rating: 5 },
  { id: 3, title: 'Oude Maasweg', artist: 'Amazing stroopwafels', genre: 'Nederlands', rating: 5 },
  { id: 4, title: 'Sierra', artist: 'Bosz Scaggs', genre: 'International', rating: 4 },
  { id: 5, title: 'Redbud tree', artist: 'Mark Knopfler', genre: 'rock', rating: 5 }
]

const [ songs , setSongs ] = useState(songsData)
console.log('initiele songsData ', songsData);

const addSong = song => {
  console.log('song in addSong: ',song)
  setSongs([ ...songs, song])
}

const deleteSong = id => {
  setSongs(songs.filter(song => song.id !== id))
}

// selectbox GENRES waarden
const songGenres = [
  { id: 0, name: "Welk genre ?" },
  { id: 1, name: "Rock" },
  { id: 2, name: "Pop" },
  { id: 3, name: "Nederlands" },
  { id: 4, name: "Jazz" }
]
// selectbox RATING waarden
const songRating = [
  { id: 0, name: "Welke rating ?" },
  { id: 1, name: "1 ster" },
  { id: 2, name: "2 sterren" },
  { id: 3, name: "3 sterren" },
  { id: 4, name: "4 sterren" },
  { id: 5, name: "5 sterren" }
]

  return (
    <div className="page">
      <header>
        <h1>Playlist</h1>
      </header>
      <div className="content-container">
        <main>
          <h2>Input formulier</h2>
          <AddSongForm songGenres={songGenres} songRating={songRating} addSong={addSong}/>
        </main>
        <div className="output">
          <SongsTable songs={songs} deleteSong={deleteSong}/>
        </div>
      </div>
    </div>
  );
}

export default App;