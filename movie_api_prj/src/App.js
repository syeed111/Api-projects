import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//key: f5d78563

const API_URL='http://www.omdbapi.com?apikey=f5d78563';

// const movie1={
//   "Title": "That Obscure Object of Desire",
//   "Year": "1977",
//   "imdbID": "tt0075824",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNGQzZGQxZTctMzE2Mi00OGFiLTg2ZjQtZTAwYzMyMjExN2JiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
// };

const App=()=>{

  const [movies,setMovies]=useState([]);
  const[searchItem,setSearchItem]=useState("");
const searchMovies= async(title)=>{
  const response=await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();
  setMovies(data.Search);
  console.log(data.Search)
}

  useEffect(()=>{
      searchMovies('Batman');
  },[]); 

  return(
    
      <div className="app">

           <h1>MovieLand</h1>

           <div className="search">
            <input placeholder="Search for moies" value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} />
            <img src={SearchIcon} alt="search" onClick={()=>{searchMovies(searchItem)}}/>
           </div>
            
    {
      movies?.length>0 ?( <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie1={movie}/>
          ))}
            </div>):(<div className="empty"><h2>No movies found</h2></div>)
    }        
           

      </div>
    
  );
};

export default App;