import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';
import UpdateMovie from './UpdateMovie';
import AddMovie from './AddMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [update, setUpdate] = useState(true)

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, [update]);

  return (
    <>
      <SavedList list={savedList} />

      <Link style={{marginLeft: '1%'}} to='/add-movie'>Add Movie</Link>

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>

      <Route path='/update-movie/:id'>
        <UpdateMovie update={update} setUpdate={setUpdate} />
      </Route>

      <Route path='/add-movie'>
        <AddMovie update={update} setUpdate={setUpdate} />
      </Route>

    </>
  );
};

export default App;
