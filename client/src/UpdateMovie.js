import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useForm from './hooks/useForm';

const initialValue = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}


export default function UpdateMovie() {
const {id} = useParams();
const history = useHistory();
const [formValue, setFormValue, handleChange] = useForm(initialValue);

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
                </form>
            </div>
        </div>
    )
}
