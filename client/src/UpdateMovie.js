import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useForm from './hooks/useForm';
import axios from 'axios';

const initialValue = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}


export default function UpdateMovie(props) {
const {id} = useParams();
const history = useHistory();
const [formValue, setFormValue, handleChange] = useForm(initialValue);

useEffect(() => {
    axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            setFormValue(res.data)
        })
        .catch(err => console.warn(err))
}, [])

    return (
        <div>
            <h1>Update Movie</h1>
            <div>
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
                    <button onClick={event => {
                        event.preventDefault();
                        const newMovie = formValue;
                        if (typeof newMovie.stars !== 'object') {
                        newMovie.stars = newMovie.stars.split(', ')
                        }
                        axios
                            .put(`http://localhost:5000/api/movies/${id}`, newMovie)
                            .then(res => {
                                props.setUpdate(!props.update);
                                history.push(`/movies/${id}`)
                            })
                            .catch(err => console.warn(err))
                    }}>Submit Changes</button>
                </form>
            </div>
        </div>
    )
}
