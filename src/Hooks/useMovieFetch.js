import { useState, useEffect, useCallback} from "react";
import API from "../API.js";
import { isPersistedState } from "../helpers.js";

export const useMovieFetch = (movieId) =>{
	const [state, setState] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		try{
			setLoading(true)
			setError(false)

			const movie = await API.fetchMovie(movieId)
			const credits = await API.fetchCredits(movieId)
			//getDirectors
			const directors = credits.crew.filter(
				member => member.job === 'Director'
			);

			setState({
				...movie,
				actors: credits.cast,
				directors
			});

			setLoading(false);
		}catch (error){
			setError(true)
		}
	}, [movieId])
	useEffect(()=>{

		const sessionState = isPersistedState(movieId)
		if(sessionState){
			setState(sessionState)
			setLoading(false)
			return;
		}

		fetchData();
	}, [movieId, fetchData])

	//write to session storage
	useEffect(()=>{
		sessionStorage.setItem(movieId, JSON.stringify(state))
	},[movieId, state])

	return {state, loading, error}
}