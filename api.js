import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8613018dd2c57bfbee7b8555026b46ab",
        language: "en-US"
    }
});

export const movies = {
    getNowPlaying: () => api.get("movie/now_playing"),
    getUpcoming: () => api.get("movie/upcoming"),
    getPopular: () => api.get("movie/popular"),
    getMovie: (id) => api.get(`movie/${id}`, {
        params: { append_to_response: "videos" }
    }),
    searchMovies: (term) => api.get(`search/movie`, {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tv = {
    getShow: id => api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("tv/popular"),
    getAiringThisWeek: () => api.get("tv/on_the_air"),
    getTopRated: () => api.get("tv/top_rated"),
    getAiringToday: () => api.get("tv/airing_today"),
    searchTv: term => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};