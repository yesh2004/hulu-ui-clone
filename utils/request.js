const API_KEY=process.env.API_KEY

export default{
	fetchTrending:{
		title:'Trending',
		url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
	},
	fetchTopRated:{
		title:'Top Rated',
		url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
	},
	fetchComedyMovies:{
		title:'Comedy',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
	},
	fetchActionMovies:{
		title:'Action',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
	},
	fetchHorrorMovies:{
		title:'Horror',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
	},
	fetchMysteryMovies:{
		title:'Mystery',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
	},
	fetchRomanceMovies:{
		title:'Romance',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
	},
	fetchTV:{
		title:'TV Movie',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
	},
	fetchSciFiMovies:{
		title:'Sci-Fi',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
	},
	fetchAnimationMovies:{
		title:'Animation',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
	},
	fetchWesternMovies:{
		title:'Western',
		url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
	}
}