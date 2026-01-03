import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        toprated: null,
        trailerVideo: null,
        movieSearch: null,
        movieSearchFetchData:[],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }, 
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTopRated: (state, action) => {
            state.toprated = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addMovieSearch: (state, action) => {
            state.movieSearch = action.payload 
        },
        addMovieSearchFetchData: (state, action) => {
             state.movieSearchFetchData = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRated, addMovieSearch ,addMovieSearchFetchData} = moviesSlice.actions
export default moviesSlice.reducer