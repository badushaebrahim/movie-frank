import React, { useEffect, useState } from 'react';
import { useHistory  } from "react-router-dom";
import './home.css';
import Movie from './components/Movie';
import Homebtns from './components/homebtns';
import { Button } from '@material-ui/core';

const  test = "https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&include_adult=true&include_genres=adult&include_video=true&page=1";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie/?api_key=26ba5e77849587dbd7df199727859189&?certification_country=US&certification=R&include_adult=true&sort_by=vote_average.desc"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=26ba5e77849587dbd7df199727859189&query=";

function App() {
  let token = localStorage.getItem('token');
  const [movies, setMovies] = useState([]);
  const[isLoginedin,setLogin] = useState(true)
  // var isLoginedin = false

  const getMovies = (API) => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
       // alert(movies)
      })
  }
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `Login`; 
    history.push(path);
  }
  const register = () =>{ 
    let path = `register`; 
    history.push(path);
  }
  useEffect(() => {
    getMovies(test);
    // setLogin(isLoginedin = checktok())r
    // alert(token)
    // r()
  }, [])
 function r(){
   console.log("h")
  if (token != null){
   setLogin(isLoginedin = true)
  }
  // return alert("fun")
  else
    setLogin(isLoginedin= false)
 }
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  }
  const logOut = () => {
    localStorage.setItem('token', null);
    this.props.history.push('/');
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
   const [searchTerm, setSearchTerm] = useState('');
  const [count,setCount] = useState(2);
function showmore(){
setCount(count+1);
const test2 =     "https://api.themoviedb.org/3/discover/movie/?api_key=26ba5e77849587dbd7df199727859189&?certification_country=US&certification=R&sort_by=vote_average.desc&include_adult=true&page="+count

const FEATURED_API2 = "https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page="+count;
fetch(test2)
.then(response => response.json())
.then(data => {
  setMovies(movies.concat(data.results));
})
}

  return (
    <div className= "body">
    <div className='diver2'> <h1>Movies </h1></div>
    
      <header>
        
        <form onSubmit={handleFormSubmit}>
          <input
            className="search"
            placeholder="Search..."
            type="search"
            value={searchTerm}
            onChange={handleOnChange}
             />
        </form>
            {isLoginedin?  <Homebtns  />   :  <Button onClick={logOut} className="button_style"  variant="contained"color="primary"size="small" >Logout</Button> }
        
      </header>
      <div className="movie-container">
        {movies.map((movie) =>
          <Movie {...movie} key={movie.id} />
        )}
        
      </div>
      <div className='diver'>
        <button className='custom-btn btn-4' onClick={showmore}>show more</button>
        </div>
    </div>
  );
}

export default App;
