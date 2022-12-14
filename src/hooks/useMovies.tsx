import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const resps = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ]);
        
        setMoviesState({
          nowPlaying: resps[0].data.results,
          popular: resps[1].data.results,
          topRated: resps[2].data.results,
          upcoming: resps[3].data.results,
        })

        // const respActuales = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        // const respPopulares = await movieDB.get<MovieDBMoviesResponse>('/popular');
        // setPeliculasActuales(respActuales.data.results);
        // setPeliculasPopulares(respPopulares.data.results);
        
        setIsLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, [])
      

  return {
    ...moviesState,
    isLoading
  }
}
