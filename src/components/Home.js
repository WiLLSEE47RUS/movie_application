import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from "./HeroImage/HeroImage.js";
import Grid from "./Grid/Grid.js"
import Thumb from "./Thumb/Thumb.js";
import Spinner from "./Spinner/Spinner.js";
import SearchBar from "./SearchBar/SearchBar.js";
import Button from "./Button/Button.js";
//hooks
import { useHomeFetch } from "../Hooks/useHomeFetch.js";

//image
import NoImage from '../images/no_image.jpg'


const Home = () => {

	const {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setIsLoadingMore} = useHomeFetch();

	if(error) return <div>Something Went Wrong...</div>

	return (
		<>
			{
				!searchTerm && state.results[0]&&
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			}
			<SearchBar setSearchTerm={setSearchTerm}/>
			<Grid header= {(!searchTerm && 'Popular Movies')||'Search results'}>
				{state.results.map(movie => (
					<Thumb
						key = {movie.id}
						clickable={true}
						image = {
							movie.poster_path
								? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
								:NoImage
						}
						movieId={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner/>}
			{state.page < state.total_pages && !loading &&
				<Button text = 'Load More'  callback={() => setIsLoadingMore(true)}/>}
		</>
	);
};

export default Home;