import React, { useState } from 'react';

const AddSongForm = props => {

const initialFormState = {
    id: null,
    artist: '',
    title: '',
    genre: '',
    rating: ''
}
const [ song, setSong ] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target

    // effe checken
    //console.log('event.target',event.target)
    //console.log('event.target.value ', event.target.value)
    //console.log('[name]: value ',{[name]: value})
    //console.log('waarde van song voor set',song);
    
    const songid = props.songGenres.length + 1

    setSong({ ...song, id: songid, [name]: value })
    console.log('waarde van song ',song);
}

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!song.artist || !song.title) return

            props.addSong(song)
            setSong(initialFormState)
        }}
        >
    <div className="formRow">
        <input
            type="text"
            name="title"
            value={song.title}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Wat is de titel ?"
        />
        <input
            type="text"
            name="artist"
            value={song.artist}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Wie is de artiest ?"
        />
        <select id="selectGenre" name="genre" className="selectInForm" value="0" onChange={handleInputChange}>
        {props.songGenres.length > 0 ? (
                props.songGenres.map(genre => (
                <option key={genre.id} value={genre.genre}> {genre.name} </option>
                        ))
            ) : (
                <option value="0">- geen opties -</option>
                )
            }
        </select>
        <select id="selectRating" name="rating" className="selectInForm" value="0" onChange={handleInputChange}>
        {props.songRating.length > 0 ? (
                props.songRating.map(rate => (
                        <option key={rate.id} value={rate.id}>{rate.name}</option>
                        ))
            ) : (
                <option value="0">- geen opties -</option>
                )
            }
        </select>
        <button onClick={handleInputChange} className="addBtnForm">Voeg toe</button>
    </div>  
    </form>


        )
    }

export default AddSongForm