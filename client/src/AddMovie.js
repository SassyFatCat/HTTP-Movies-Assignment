import React from 'react'
import useForm from './hooks/useForm';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const initialValue = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: ''
}

export default function AddMovie(props) {
const [formValue, setFormValue, handleChange, handleStarsChange] = useForm(initialValue);
const history = useHistory();


const addMovie = event => {
    event.preventDefault();

    const newMovie = formValue;
    newMovie.stars = newMovie.stars.split(', ')

    axios
        .post('http://localhost:5000/api/movies', newMovie)
        .then(res => {
            props.setUpdate(!props.update);
            setFormValue(initialValue)
            console.log(res)
            history.push(`/movies/${res.data[res.data.length - 1].id}`)
        })
        .catch(err => console.warn(err))
}

    return (
        <div>
            <h1>Add a Movie</h1>
            <form>
                    <label>Title: </label>
                    <input
                        type='text'
                        name='title'
                        value={formValue.title}
                        onChange={handleChange}
                    ></input>
                    <label>Director: </label>
                    <input
                        type='text'
                        name='director'
                        value={formValue.director}
                        onChange={handleChange}
                    ></input>
                    <label>Metascore: </label>
                    <input
                        type='number'
                        name='metascore'
                        value={formValue.metascore}
                        onChange={handleChange}
                    ></input>
                    <label>Stars: </label>
                    <input
                        type='text'
                        name='stars'
                        value={formValue.stars}
                        onChange={handleChange}
                    ></input>
                    <button onClick={addMovie}>Add Movie</button>
            </form>
        </div>
    )
}
