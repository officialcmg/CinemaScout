import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './MovieCard';



const API_URL = process.env.API_URL


function App() {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

	async function searchMovies(title) {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		setMovies(data.Search)
	}

	useEffect(() => {
		searchMovies("Rush Hour")
	}, [])
	
	return (
		<div className='app'>
			<h1>CinemaScout</h1>

			<div className='search'>
				<input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

				<img src={SearchIcon} alt='Search' onClick={() => searchMovies(searchTerm)}/>
			</div>	

			{movies.length > 0 
				? (
				<div className='container'> 
					{movies.map((movie) => <Moviecard movie = {movie}/>)} 
				</div>
				) : (
				<div className='empty'>
					<h2>No movies found</h2>
				</div>
				)
			}
		</div>
	)

		
}
	
	


export default App;

