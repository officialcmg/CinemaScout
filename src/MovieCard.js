import React from "react"


function Moviecard({ movie }) {
    const imdbID = movie.imdbID
    function handleIMDbLink() {
        window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
      }

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
                <h3 onClick={handleIMDbLink} style={{ cursor: "pointer"}}>{movie.Title}</h3>
            </div>
        </div>
)}

export default Moviecard