import React, { useState } from 'react';

const AddSongForm = props => {

const initialFormState = {
    id: null,
    inputSongTitle: '',
    inputSongArtist: '',
    selectGenre: '',
    selectRating: ''
}
const [ song, setSong ] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target

        // effe checken
    console.log('event.target',event.target)
    console.log('event.target.value ', event.target.value)
    console.log('[name]: value ',{[name]: value})
    console.log('waarde van song voor set',song);
  
    setSong({ ...song, [name]: value })
    console.log('waarde van song ',song);
}

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!song.inputSongTitle || !song.inputSongArtist) 
            return

            props.addSong(song)
            setSong(initialFormState)
        }}
        >
    <div className="formRow">
        <input
            type="text"
            name="inputSongTitle"
            value={song.inputSongTitle}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Wat is de titel ?"
        />
        <input
            type="text"
            name="inputSongArtist"
            value={song.inputSongArtist}
            onChange={handleInputChange}
            className="inputField"
            placeholder="Wie is de artiest ?"
        />
        <select id="selectGenre" name="selectGenre" className="selectInForm" onChange={handleInputChange}>
        {props.songGenres.length > 0 ? (
                props.songGenres.map(genre => (
                <option key={genre.id} value={genre.id}> {genre.name} </option>
                        ))
            ) : (
                <option value="0">- geen opties -</option>
                )
            }
        </select>
        <select id="selectRating" name="selectRating" className="selectInForm" onChange={handleInputChange}>
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