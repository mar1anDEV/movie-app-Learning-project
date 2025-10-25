


type LinkItem= {
    name: string,
    path: string
}


 export const movieGenres: LinkItem[] = [
    { name: 'All Movies', path: '/movies/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Action', path: '/movies/action/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Adventure', path: '/movies/adventure/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Animation', path: '/movies/animation/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Comedy', path: '/movies/comedy/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Crime', path: '/movies/crime/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Documentary', path: '/movies/documentary/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Drama', path: '/movies/drama/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Family', path: '/movies/family/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Fantasy', path: '/movies/fantasy/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'History', path: '/movies/history/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Horror', path: '/movies/horror/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Music', path: '/movies/music/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Mystery', path: '/movies/mystery/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Romance', path: '/movies/romance/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Science Fiction', path:'/movies/science-fiction/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'TV Movie', path: '/movies/tv-movie/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Thriller', path: '/movies/thriller/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'War', path: '/movies/war/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Western', path: '/movies/western/page_number=:pageNumber/page_size=:pageSize' }
];

   export const seriesGenres : LinkItem[] = [
    { name: 'All TV-Shows', path: '/all-tv-shows/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Action & Adventure', path: '/tv-shows/action-adventure/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Animation', path: '/tv-shows/animation/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Comedy', path: '/tv-shows/comedy/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Crime', path: '/tv-shows/crime/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Documentary', path: '/tv-shows/documentary/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Drama', path: '/tv-shows/drama/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Family', path: '/tv-shows/family/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Kids', path: '/tv-shows/kids/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Mystery', path: '/tv-shows/mystery/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'News', path: '/tv-shows/news/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Reality', path: '/tv-shows/reality/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Sci-Fi & Fantasy', path: '/tv-shows/sci-fi-fantasy/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Soap', path: '/tv-shows/soap/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Talk', path: '/tv-shows/talk/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'War & Politics', path: '/tv-shows/war-politics/page_number=:pageNumber/page_size=:pageSize' },
    { name: 'Western', path: '/tv-shows/western/page_number=:pageNumber/page_size=:pageSize' }
]

    export const menuLinks: LinkItem[] = [
        { name: 'Home', path: '/' },
        { name: 'Trending Now', path: 'movies/trending/' },
        { name: 'Top Rated', path: 'movies/top-rated/' },
        { name: 'Popular', path: 'movies/popular/' },
        { name: 'Movies', path: 'movies/' },
        { name: 'TV-Show', path: 'series/' }
    ];