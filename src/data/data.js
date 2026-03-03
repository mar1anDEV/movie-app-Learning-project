import svgImdb from '../assets/images/imdb-icon.svg'
import gotBannerSm from '../assets/images/gotBannerImages/smImage.jpg'
import gotBannerMd from '../assets/images/gotBannerImages/game-of-thrones-1-1920x1080.webp'
import constantineBannerSm from '../assets/images/constantineBannerImages/constantine-sm-hero-banner.jpg'
import constantineBannerMd from '../assets/images/constantineBannerImages/constantine-hero-banner.jpg'
import minionsBannerSm from '../assets/images/minionsBannerImges/minions-banner-sm.jpg'
import minionsBannerMd from '../assets/images/minionsBannerImges/minions-banner-md.jpg'
import theHandmaidenBannerSm from '../assets/images/theHandmaidenBannerImages/the-handmaiden-banner-sm.jpg'
import theHandmaidenBannerMd from '../assets/images/theHandmaidenBannerImages/the-handmaiden-banner-md.jpg'
import spartacusBannerSm from '../assets/series-images/Spartacus/Spartacus Season 1/xs.webp'
import spartacusBannerMd from '../assets/series-images/Spartacus/Spartacus Season 1/xl.jpg'
import theAmateurBannerSm from '../assets/movies-images/The Amateur/xs.jpg'
import theAmateurBannerMd from '../assets/movies-images/The Amateur/xl.jpg'
import tylerPerryLastStrawBannerSm from '../assets/movies-images/Straw-2025/tyler-perry-last-straw-banner-sm.jpg'
import tylerPerryLastStrawBannerMd from '../assets/movies-images/Straw-2025/tyler-perry-last-straw-banner-xl.jpg'
import mineBannerSm from '../assets/movies-images/Mine 2016/mine-banner-sm.jpg'
import mineBannerMd from '../assets/movies-images/Mine 2016/mine-banner-md.jpg'
import theGreenMileBannerSm from '../assets/movies-images/The Green Mile/the-green-mile-banner-sm.jpg'
import theGreenMileBannerMd from '../assets/movies-images/The Green Mile/the-green-mile-banner-md.jpg'
import spiritedAwayBannerSm from '../assets/movies-images/Spirited Away/spirited-away-banner-sm.jpg'
import spiritedAwayBannerMd from '../assets/movies-images/Spirited Away/spirited-away-banner-md.jpg'
import kingdomOfHeavenBannerSm from '../assets/movies-images/Kingdom of Heaven 2005/kingdom-of-heaven-banner-sm.jpg'
import kingdomOfHeavenBannerMd from '../assets/movies-images/Kingdom of Heaven 2005/kingdom-of-heaven-banner-md.jpg'
import jeruZalemBannerSm from '../assets/movies-images/Jeruzalem 2015/jeruzalem-banner-sm.jpg'
import jeruZalemBannerMd from '../assets/movies-images/Jeruzalem 2015/jeruzalem-banner-md.jpg'
import legendOfHerculesBannerSm from '../assets/movies-images/Legend Of Hercules 2014/legend-of-hercules-banner-sm.jpg'
import legendOfHerculesBannerMd from '../assets/movies-images/Legend Of Hercules 2014/legend-of-hercules-banner-md.jpg'
import troyBannerSm from '../assets/movies-images/Troy 2004/troy-banner-sm.jpg'
import troyBannerMd from '../assets/movies-images/Troy 2004/troy-banner-md.jpg'
import avatarLastAirbenderBannerSm from '../assets/series-images/Avatar/avatar-last-airbender-banner-sm.jpg'
import avatarLastAirbenderBannerMd from '../assets/series-images/Avatar/avatar-banner-md.webp'


const contentBanners = [
    
    {
        "id": 1,
        "tmdbID": 1399,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/4d3bb72d39a537dc9f85ac9881bfd0e2/manifest/video.m3u8",
        "moviePosterSm": gotBannerSm,
        "moviePosterMd": gotBannerMd,
        "title": "Game of Thrones",
        "undertitle": "Season 07, Episode 01, Dragonstone",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 59,
        "description": "Jon organizes the North's defenses...",
        "starring": [
            { "name": "David Bradley" },
            { "name": "Maisie Williams" },
            { "name": "Kit Harington" }
        ],
        "genres": ["Action", "Adventure", "Drama", "Fantasy"],
        "writers": [
            { "name": "David Benioff" },
            { "name": "D.B. Weiss" },
            { "name": "George R.R. Martin" }
        ],
        "directors": [
            { "name": "David Benioff" },
            { "name": "D.B. Weiss" }
        ]
    },
    {
        "id": 2,
        "tmdbID": 9741,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/f9c5ed082f8015d497a4e56367990cc6/manifest/video.m3u8",
        "title": "Constantine",
        "moviePosterSm": constantineBannerSm,
        "moviePosterMd": constantineBannerMd,
        "undertitle": "2005 Supernatural Action Film",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 121,
        "description": "Supernatural detective John Constantine helps...",
        "starring": [
            { "name": "Keanu Reeves" },
            { "name": "Rachel Weisz" },
            { "name": "Tilda Swinton" }
        ],
        "genres": ["Action", "Fantasy", "Horror", "Thriller"],
        "writers": [
            { "name": "Kevin Brodbin" },
            { "name": "Frank Cappello" },
            { "name": "Jamie Delano" }
        ],
        "directors": [
            { "name": "Francis Lawrence" }
        ]
    },
    {
        "id": 3,
        "tmdbID": 211672,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/8691fc0a0d761510b716fd0ba1d4246d/manifest/video.m3u8",
        "title": "Minions",
        "moviePosterSm": minionsBannerSm,
        "moviePosterMd": minionsBannerMd,
        "undertitle": "2015 Animated Comedy Film",
        "rating": 3,
        "raterProviderImage": svgImdb,
        "duration": 91,
        "description": "Three unlikely heroes - Kevin, Stuart, and Bob...",
        "starring": [
            { "name": "Sandra Bullock" },
            { "name": "Jon Hamm" },
            { "name": "Michael Keaton" }
        ],
        "genres": ["Animation", "Adventure", "Comedy", "Family"],
        "writers": [
            { "name": "Brian Lynch" }
        ],
        "directors": [
            { "name": "Pierre Coffin" },
            { "name": "Kyle Balda" }
        ]
    },
    {
        "id": 4,
        "tmdbID": 290098,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/d597328ed314c10be4e4f32ed3f41263/manifest/video.m3u8",
        "title": "The Handmaiden",
        "moviePosterSm": theHandmaidenBannerSm,
        "moviePosterMd": theHandmaidenBannerMd,
        "undertitle": "2016 Korean Psychological Thriller",
        "rating": 5,
        "raterProviderImage": svgImdb,
        "duration": 105,
        "description": "Set in 1930s Korea under Japanese occupation...",
        "starring": [
            { "name": "Kim Min-hee" },
            { "name": "Kim Tae-ri" },
            { "name": "Ha Jung-woo" }
        ],
        "genres": ["Drama", "Mystery", "Romance", "Thriller"],
        "writers": [
            { "name": "Park Chan-wook" },
            { "name": "Chung Seo-kyung" }
        ],
        "directors": [
            { "name": "Park Chan-wook" }
        ]
    },
    {
        "id": 5,
        "tmdbID": 46648,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/5921d82006d923f6ad861aadaba25c75/manifest/video.m3u8",
        "title": "Spartacus: Blood and Sand",
        "moviePosterSm": spartacusBannerSm,
        "moviePosterMd": spartacusBannerMd,
        "undertitle": "2010 Historical Drama Series - Season 1",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 55,
        "description": "Betrayed by the Romans. Forced into slavery...",
        "starring": [
            { "name": "Andy Whitfield" },
            { "name": "Lucy Lawless" },
            { "name": "John Hannah" },
            { "name": "Manu Bennett" },
            { "name": "Peter Mensah" },
            { "name": "Jai Courtney" }
        ],
        "genres": ["Action", "Adventure", "Drama", "History"],
        "writers": [
            { "name": "Steven S. DeKnight" },
            { "name": "Brent Fletcher" },
            { "name": "Aaron Helbing" },
            { "name": "Todd Helbing" }
        ],
        "directors": [
            { "name": "Steven S. DeKnight" }
        ]
    },
    {
        "id": 6,
        "tmdbID": 1064028,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/33a1437514eafafa0c8942c5f1092e69/manifest/video.m3u8",
        "title": "The Amateur",
        "moviePosterSm": theAmateurBannerSm,
        "moviePosterMd": theAmateurBannerMd,
        "undertitle": "2025 Action Thriller Film",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 108,
        "description": "A CIA cryptographer's wife and colleague are killed...",
        "starring": [
            { "name": "Rami Malek" },
            { "name": "Rachel Brosnahan" },
            { "name": "Caitríona Balfe" },
            { "name": "Jon Bernthal" }
        ],
        "genres": ["Action", "Thriller", "Drama"],
        "writers": [
            { "name": "Ken Nolan" },
            { "name": "Gary Spinelli" }
        ],
        "directors": [
            { "name": "James Hawes" }
        ]
    },
    {
        "id": 7,
        "tmdbID": null,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/fe57d999b0d7438249162ea95f8d2ef7/manifest/video.m3u8",
        "title": "Tyler Perry's The Last Straw",
        "moviePosterSm": tylerPerryLastStrawBannerSm,
        "moviePosterMd": tylerPerryLastStrawBannerMd,
        "undertitle": "2025 Comedy Drama Film",
        "rating": 3,
        "raterProviderImage": svgImdb,
        "duration": 115,
        "description": "When a hardworking single mother reaches her breaking point...",
        "starring": [
            { "name": "Taraji P. Henson" },
            { "name": "Tyler Perry" },
            { "name": "Keke Palmer" },
            { "name": "David Mann" }
        ],
        "genres": ["Comedy", "Drama", "Family"],
        "writers": [
            { "name": "Tyler Perry" }
        ],
        "directors": [
            { "name": "Tyler Perry" }
        ]
    },
    {
        "id": 8,
        "tmdbID": 369557,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/931dbbb517fe956dee68cebad8251ef2/manifest/video.m3u8",
        "title": "Mine",
        "moviePosterSm": mineBannerSm,
        "moviePosterMd": mineBannerMd,
        "undertitle": "2017 War Thriller Film",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 106,
        "description": "After a failed assassination attempt in a hostile desert...",
        "starring": [
            { "name": "Armie Hammer" },
            { "name": "Annabelle Wallis" },
            { "name": "Tom Cullen" },
            { "name": "Clint Dyer" }
        ],
        "genres": ["War", "Thriller", "Drama"],
        "writers": [
            { "name": "Fabio Guaglione" },
            { "name": "Fabio Resinaro" }
        ],
        "directors": [
            { "name": "Fabio Guaglione" },
            { "name": "Fabio Resinaro" }
        ]
    },
    {
        "id": 9,
        "tmdbID": 497,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/ce123a384db78fc130680026cef54f8e/manifest/video.m3u8",
        "title": "The Green Mile",
        "moviePosterSm": theGreenMileBannerSm,
        "moviePosterMd": theGreenMileBannerMd,
        "undertitle": "1999 Fantasy Drama Film",
        "rating": 5,
        "raterProviderImage": svgImdb,
        "duration": 189,
        "description": "Set in 1935, the story follows Paul Edgecomb...",
        "starring": [
            { "name": "Tom Hanks" },
            { "name": "Michael Clarke Duncan" },
            { "name": "David Morse" },
            { "name": "Bonnie Hunt" },
            { "name": "James Cromwell" }
        ],
        "genres": ["Fantasy", "Drama", "Crime"],
        "writers": [
            { "name": "Stephen King" },
            { "name": "Frank Darabont" }
        ],
        "directors": [
            { "name": "Frank Darabont" }
        ]
    },
    {
        "id": 10,
        "tmdbID": 129,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/4d45d45d1304b7ae105d5fc7a64b1ff7/manifest/video.m3u8",
        "title": "Spirited Away",
        "moviePosterSm": spiritedAwayBannerSm,
        "moviePosterMd": spiritedAwayBannerMd,
        "undertitle": "2001 Animated Fantasy Film",
        "rating": 5,
        "raterProviderImage": svgImdb,
        "duration": 125,
        "description": "Ten-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park...",
        "starring": [
            { "name": "Rumi Hiiragi" },
            { "name": "Miyu Irino" },
            { "name": "Mari Natsuki" },
            { "name": "Takashi Naito" }
        ],
        "genres": ["Animation", "Adventure", "Family", "Fantasy"],
        "writers": [
            { "name": "Hayao Miyazaki" }
        ],
        "directors": [
            { "name": "Hayao Miyazaki" }
        ]
    },
    {
        "id": 11,
        "tmdbID": 1495,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/ce03a6d049aac202bed9f189193569ed/manifest/video.m3u8",
        "title": "Kingdom of Heaven",
        "moviePosterSm": kingdomOfHeavenBannerSm,
        "moviePosterMd": kingdomOfHeavenBannerMd,
        "undertitle": "2005 Historical Epic Film",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 144,
        "description": "Set during the Crusades of the 12th century...",
        "starring": [
            { "name": "Orlando Bloom" },
            { "name": "Eva Green" },
            { "name": "Jeremy Irons" },
            { "name": "Liam Neeson" },
            { "name": "Edward Norton" }
        ],
        "genres": ["Action", "Adventure", "Drama", "History", "War"],
        "writers": [
            { "name": "William Monahan" }
        ],
        "directors": [
            { "name": "Ridley Scott" }
        ]
    },
    {
        "id": 12,
        "tmdbID": 296524,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/eb85d95d85fe66f51aa664813f5c4b8c/manifest/video.m3u8",
        "title": "JeruZalem",
        "moviePosterSm": jeruZalemBannerSm,
        "moviePosterMd": jeruZalemBannerMd,
        "undertitle": "2015 Horror Film",
        "rating": 3,
        "raterProviderImage": svgImdb,
        "duration": 94,
        "description": "Two American college students on a backpacking trip...",
        "starring": [
            { "name": "Danielle Jadelyn" },
            { "name": "Yael Grobglas" },
            { "name": "Yon Tumarkin" },
            { "name": "Tom Graziani" }
        ],
        "genres": ["Horror", "Thriller", "Adventure"],
        "writers": [
            { "name": "Doron Paz" },
            { "name": "Yoav Paz" }
        ],
        "directors": [
            { "name": "Doron Paz" },
            { "name": "Yoav Paz" }
        ]
    },
    {
        "id": 13,
        "tmdbID": 218756,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/025576739b9ba288df91cd9c9374514e/manifest/video.m3u8",
        "title": "The Legend of Hercules",
        "moviePosterSm": legendOfHerculesBannerSm,
        "moviePosterMd": legendOfHerculesBannerMd,
        "undertitle": "2014 Action Fantasy Film",
        "rating": 2,
        "raterProviderImage": svgImdb,
        "duration": 99,
        "description": "The origin story of the mythical Greek hero...",
        "starring": [
            { "name": "Kellan Lutz" },
            { "name": "Gaia Weiss" },
            { "name": "Scott Adkins" },
            { "name": "Roxanne McKee" },
            { "name": "Liam Garrigan" }
        ],
        "genres": ["Action", "Adventure", "Fantasy"],
        "writers": [
            { "name": "Daniel Giat" },
            { "name": "Giulio Steve" },
            { "name": "Renny Harlin" }
        ],
        "directors": [
            { "name": "Renny Harlin" }
        ]
    },
    {
        "id": 14,
        "tmdbID": 1271,
        "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/a6162d7445bd0a191f3821a59f8c1005/manifest/video.m3u8",
        "title": "Troy",
        "moviePosterSm": troyBannerSm,
        "moviePosterMd": troyBannerMd,
        "undertitle": "2004 Historical Epic Film",
        "rating": 4,
        "raterProviderImage": svgImdb,
        "duration": 163,
        "description": "An adaptation of Homer's great epic...",
        "starring": [
            { "name": "Brad Pitt" },
            { "name": "Eric Bana" },
            { "name": "Orlando Bloom" },
            { "name": "Diane Kruger" },
            { "name": "Sean Bean" },
            { "name": "Peter O'Toole" }
        ],
        "genres": ["Action", "Adventure", "Drama", "History", "Romance", "War"],
        "writers": [
            { "name": "David Benioff" }
        ],
        "directors": [
            { "name": "Wolfgang Petersen" }
        ]
    },
    {
    "id": 15,
    "tmdbID": 46261,
    "videoID": "https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/8fdf50002b075a020c77e9a145e14f1c/manifest/video.m3u8",
    "title": "Avatar: The Last Airbender",
    "moviePosterSm": avatarLastAirbenderBannerSm,
    "moviePosterMd": avatarLastAirbenderBannerMd,
    "undertitle": "2005-2008 Animated Series - Book 1: Water",
    "rating": 5,
    "raterProviderImage": svgImdb,
    "duration": 23,
    "description": "In a world where people can manipulate the elements of water, earth, fire, and air, the Fire Nation has waged a ruthless war against the other nations for over 100 years. When 12-year-old Aang, the last airbender and the Avatar, awakens from a century-long sleep, he must master all four elements and defeat Fire Lord Ozai to restore balance to the world. Joined by his friends Katara, Sokka, and Toph, Aang embarks on an epic journey of self-discovery, friendship, and the responsibility that comes with great power.",
    "starring": [
        { "name": "Zach Tyler Eisen" },
        { "name": "Mae Whitman" },
        { "name": "Jack De Sena" },
        { "name": "Dante Basco" },
        { "name": "Jessie Flower" },
        { "name": "Mako" }
    ],
    "genres": ["Animation", "Adventure", "Comedy", "Drama", "Family", "Fantasy"],
    "writers": [
        { "name": "Michael Dante DiMartino" },
        { "name": "Bryan Konietzko" }
    ],
    "directors": [
        { "name": "Michael Dante DiMartino" },
        { "name": "Bryan Konietzko" }
    ]
}


]
export default contentBanners;