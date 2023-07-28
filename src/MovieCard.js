import React from "react"


function Moviecard({ movie }) {
    const imdbID = movie.imdbID
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3><a
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
          >{movie.Title}</h3>
            </div>
        </div>
)}

export default Moviecard
