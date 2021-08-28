import React from 'react';
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config.js";
//components
import Grid from "./Grid/Grid.js";
import Spinner from "./Spinner/Spinner.js";
import BreadCrumb from "./BreadCrumb/BreadCrumb.js";
import MovieInfo from "./MovieInfo/MovieInfo.js";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar.js";
import Actor from './Actor/Actor.js'
//hook
import { useMovieFetch } from "../Hooks/useMovieFetch.js";
//image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
	const { movieId } = useParams();
	const {state, loading, error} = useMovieFetch(movieId);

	if(loading) return <Spinner/>
	if(error) return <div>Something Went Wrong...</div>

	return (
		<>
			<BreadCrumb movieTitle={state.original_title}/>
			<MovieInfo movie = {state}/>
			<MovieInfoBar
				time = {state.runtime}
				budget={state.budget}
				revenue={state.revenue}
			/>
			<Grid header = "Actors">
				{state.actors.map(actor => (
					<Actor
						key = {actor.credit_id}
						name = {actor.name}
						character={actor.character}
						imageUrl={
							actor.profile_path
							?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
							: NoImage
						}
					/>
				))}
			</Grid>
		</>
	);
};

export default Movie;