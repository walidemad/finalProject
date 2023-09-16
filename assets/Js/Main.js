/////////////////////////////////////////////////////////////////////////
//define public variables
/////////////////////////////////////////////////////////////////////////
//const : application name
export const APPLICATIONNAME = "finalProject";
//array : all games in project
export let GamesArray = [];
//array : all main images
export let MainImages = [];
//array : all names of games
export let GamesNames = [];
//array : elements of path
let path = Array.from(window.location.pathname.split("/"));
//string : page name (name+extension)
export let page_name = path[path.length - 1];
/////////////////////////////////////////////////////////////////////////
//define classes
/////////////////////////////////////////////////////////////////////////
//Game
export class Game {
    static counter_objects = 0;
    id = 0;
    name = "";
    version = "";
    company = "";
    release_date = "";
    platform = "";

    description = "";
    category = "";
    game_play = "";
    requirements = {
        os: "",
        cpu: "",
        ram: "",
        gpu: "",
        directx: "",
        hard_disk: ""

    };
    main_image = "";
    images_from_game = [];
    price = 0;
    is_popular = false;
    is_new = false;
    setId = function () {
        // let x = Math.floor(Math.random() * 1000000);
        // GamesArray.forEach(function (v, i) {
        //     // while (x == v.id) {
        //     if ((x == v.id)) return;
        //     x = Math.floor(Math.random() * 1000000);

        //     // }

        // });

        this.id = Game.counter_objects;
        Game.counter_objects += 1;

    }

}

/////////////////////////////////////////////////////////////////////////
//get element from html pages
/////////////////////////////////////////////////////////////////////////

//popular.html
export let elm_popular = document.querySelector(".popular");
export let elms_popular_images = undefined;

//new.html
export let elm_new = document.querySelector(".new");
export let elms_new_images = undefined;

//GameInformation.html
export let elm_slider_images = document.querySelector(".slider-for-game > .images");
export let game_id = parseInt(window.location.search.substr(1).split("=")[1]);
export let elm_game_play = document.querySelector(".game-play");
export let elm_game_play_video = document.querySelector(".game-play > video.video");

//shared
export let elm_toggle_pages = document.querySelector(".toggle-popular-new");
export let elm_toggle_pages_title_page_name = document.querySelector(".toggle-popular-new > .title span.name");
export let elm_toggle_pages_button = document.querySelector(".toggle-popular-new > a.button");
export let elm_search_input = document.querySelector(".search-bar >input");
// export let elm_navbar = document.querySelectorAll(".navbar > .links > li>");
export let elms_navbar = document.querySelectorAll(".navbar > .links > li>a");
/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////

//change text of div:center and text of its button
function changeContentsOfCenter() {
    if (page_name.toLowerCase() == "popular.html") {
        elm_toggle_pages_title_page_name.textContent = "New";
        elm_toggle_pages_button.textContent = "New";
        elm_toggle_pages_button.href = "./New.html";
    } else
        if (page_name.toLowerCase() == "new.html") {
            elm_toggle_pages_title_page_name.textContent = "Popular";
            elm_toggle_pages_button.textContent = "MOST POPULARS";
            elm_toggle_pages_button.href = "./Popular.html";
        }
}

//create new Game object and adding it to GameArray 
function addGameToGamesArray(
    name,
    version,
    company,
    release_date,
    platform,
    description,
    category,
    game_play,
    requirements,
    main_image,
    images_from_game,
    price,
    is_popular = false,
    is_new = false) {
    let game = new Game();
    game.setId();
    // let x = Math.floor(Math.random() * 1000000);
    // GamesArray.forEach(function (v, i) {
    //     // while (x == v.id) {
    //     if ((x == v.id)) return;
    //     x = Math.floor(Math.random() * 1000000);
    // }

    // });
    // game.id = x;
    game.name = name;
    game.version = version;
    game.company = company;
    game.release_date = release_date;
    game.platform = platform;
    game.description = description;
    game.category = category;
    game.game_play = game_play;
    game.requirements = requirements;
    game.main_image = main_image;
    game.images_from_game = images_from_game;
    game.price = price;
    game.is_popular = is_popular;
    game.is_new = is_new;

    GamesArray.push(game);
}

//
function handleClickOfSearchInput() {
    if (elm_search_input) {
        elm_search_input.addEventListener("keypress", function (e) {
            if (elm_search_input.value.trim().length > 0) {
                if (e.keyCode == "13") {
                    console.log(elm_search_input.value.trim().length);

                    window.location.href = `./Games/Search.html?value=${e.target.value.toString().trim()}`;
                }
            }

        });
    }
}
//
function handleClickOfPopularAndNewImages() {
    elms_popular_images = document.querySelectorAll(".popular > .popular-box-image>img ");
    elms_new_images = document.querySelectorAll(".new > .new-box-image>img ");
    let ar = [elms_popular_images, elms_new_images];
    ar.forEach(function (elm) {
        if (elm) {
            Array.from(elm).forEach(function (image) {
                image.addEventListener("click", function (e) {
                    window.location.href = `./../Games/GameInformation.html?id=${e.target.id}`;
                });
            });
        }
    });
}


/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
changeContentsOfCenter();
handleClickOfSearchInput();
handleClickOfPopularAndNewImages();

/////////////////////////////////////////////////////////////////////////
//adding games to GameArray by calling function: addGameToGamesArray
/////////////////////////////////////////////////////////////////////////
//popular
addGameToGamesArray(
    "GOD OF WAR",
    "Ragnarök",
    "Sony Interactive Entertainment",
    "November 9, 2022",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. His vengeance against the Gods of Olympus behind him, Kratos now lives in the realm of Norse deities and monsters.",
    "action adventure",
    "Single-player",
    {
        os: "",
        cpu: "",
        ram: "",
        gpu: "",
        directx: "",
        hard_disk: "106.817GB"
    },
    "Main.jpg",
    [
        "GOD OF WAR (1)",
        "GOD OF WAR (1)",
        "GOD OF WAR (3)",
    ]
    ,
    "69.99$",
    true,
    false
);
//popular
addGameToGamesArray(
    "FIFA 23",
    "23",
    "EA Sports",
    "September 27, 2022",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "EA SPORTS™ FIFA 23 brings The World's Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men's and women's FIFA World Cup™ coming to the game as post-launch updates, the addition of women's club teams, cross-play feature.",
    "sport ",
    "Single-player",
    {
        os: "",
        cpu: "",
        ram: "",
        gpu: "",
        directx: "",
        hard_disk: "40-47 GB"
    },
    "Main.jpg",
    [
        "GOD OF WAR (1)",
        "GOD OF WAR (1)",
        "GOD OF WAR (3)",
    ],
    "59.99$",
    true, false
);
//popular
addGameToGamesArray(
    "spider man miles morales",
    "",
    "Insomniac Games",
    "2020",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "Miles Gonzalo Morales is a playable character in Marvel's Spider-Man and the main protagonist of the standalone spin-off Miles Morales. A 17-year-old teenager, he is a friend of Peter Parker and the son of police officer Jefferson Davis and councilor Rio Morales.",
    "action adventure",
    "",
    "",
    "Main.jpg",
    "",
    "33.90",
    true,
    false
);
//popular
addGameToGamesArray(
    "Gran Turismo 7",
    " 7.0",
    "Polyphony Digital",
    "March 4, 2022",
    "playstation 4",
    " playstation 5 ",
    " PC , XBOX X ,XBOX S",
    "",
    "racing simulation",
    "Main.jpg",
    "",
    "59.99",
    true,
    false
);
//popular
addGameToGamesArray(
    "Ratchet & Clank Rift Apart",
    " 2023",
    "Insomniac",
    "Jul 26, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX Splaystation 4",
    "The intergalactic adventurers are back with a bang in Ratchet & Clank: Rift Apart! Go dimension-hopping with Ratchet and Clank as they venture onto a PC near you for the very first time. Help them take on an evil emperor from another reality as you jump between action-packed worlds and beyond.",
    "intergalactic adventurers",
    "",
    "racing simulation",
    "Main.jpg",
    "",
    "59.99",
    true,
    false
);
//popular
addGameToGamesArray(
    "uncharted 4",
    " 2022",
    "Insomniac",
    "January 2022 ",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "Uncharted 4: A Thief's End is an action-adventure game played from a third-person perspective, with platforming elements. Players traverse several environments, moving through locations including towns, buildings, and wilderness to advance through the game's story.",
    "action adventure",
    "",
    "",
    "Main.jpg",
    "",
    "59.99",
    true,
    false
);
//popular
addGameToGamesArray(
    "The Last of Us ",
    "2020",
    "Sony Interactive Entertainment ",
    "June 19, 2020",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "The Last of Us Part II is an action-adventure game played from a third-person perspective featuring elements of the survival horror genre. The player traverses post-apocalyptic environments such as buildings and forests to advance the story.",
    "action adventure",
    "",
    "",
    "Main.jpg",
    "",
    "39.99",
    true,
    false
);
//popular
addGameToGamesArray(
    "Ghost of Tsushima Directors Cut",
    "2021",
    "DIRECTOR'S CUT",
    "July 17, 2020",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "This is an action game in which players assume the role of a samurai (Jin Sakai) on a quest for vengeance against Mongol invaders in 13th century Japan",
    "action",
    "",
    "",
    "Main.jpg",
    "",
    "69.99",
    true,
    false
);
//new
addGameToGamesArray(
    "Assassins Creed Mirage",
    "2023",
    "Ubisoft Bordeaux",
    "October 5, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "Assassin's Creed Mirage is an action-adventure stealth game intended to be reminiscent of older Assassin's Creed titles, being more linear and story-focused and reducing the number of role-playing elements present in recent installments of the series",
    "action adventure",
    "",
    "",
    "Main.jpg",
    "",
    "49.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Returnal",
    "2023",
    "Housemarque",
    "",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "In Returnal, the players take on the role of Selene, a Deep-Space-Astro-Scout, who crashes with her spaceship on a planet called Atropos. On Atropos, Selene must face the horrors of a time loop that re-awakes her in the same place every time she dies.",
    "third-person shooter",
    "",
    "",
    "Main.jpg",
    "",
    "36.39",
    false,
    true
);
//new
addGameToGamesArray(
    "Armored Core VI Fires of Rubicon",
    "2023",
    "FromSoftware",
    "August 25, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "The gameplay in Armored Core VI emphasizes mecha-based vehicular combat. Players in this game take on the role of expert pilots in control of strong mechs known as Armored Cores. The huge flexibility for modification of these mechs with the use of various parts allows players to enhance and sharpen their capabilities.",
    "Vehicular combat",
    "",
    "",
    "Main.jpg",
    "",
    "59.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Avatar Frontiers of Pandora",
    "2024",
    "Massive Entertainment",
    "December 7, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "Frontiers of Pandora™ is a first-person, action-adventure game set in the open world of the never-before-seen Western Frontier of Pandora. Abducted by the human militaristic corporation known as the RDA, you, a Na'vi, were trained and molded to serve their purpose",
    "action adventure",
    "",
    "",
    "Main.jpg",
    "",
    "69.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Destruction AllStars",
    "2021",
    "Lucid Games",
    "2 February 2021",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "The game is a vehicular combat game in which players need to seek ways to destroy the vehicles of the opponents. AllStars can also eject from their vehicles, whether it be voluntarily or upon destruction.",
    "vehicular combat",
    "",
    "",
    "Main.jpg",
    "",
    "19.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Lies of P",
    "2023",
    "Neowiz Games and Round8 Studio",
    "September 19, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "What is Lies of P? A dark fantasy action game inspired by the classic story of Pinocchio. This macabre Soulslike draws its inspiration from an unlikely source: The Adventures of Pinocchio.",
    "dark fantasy action",
    "",
    "",
    "Main.jpg",
    "",
    "59.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Madden NFL 24",
    "2024",
    "EA Sports",
    "August 25, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "Experience the newest iteration of FieldSENSE™ in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent",
    "sport ",
    "",
    "",
    "Main.jpg",
    "",
    "69.99",
    false,
    true
);
//new
addGameToGamesArray(
    "Armored Core VI Fires of Rubicon",
    "2023",
    "FromSoftware",
    "August 25, 2023",
    "playstation 4 , playstation 5 , PC , XBOX X ,XBOX S",
    "The gameplay in Armored Core VI emphasizes mecha-based vehicular combat. Players in this game take on the role of expert pilots in control of strong mechs known as Armored Cores. The huge flexibility for modification of these mechs with the use of various parts allows players to enhance and sharpen their capabilities.",
    "Vehicular combat",
    "",
    "",
    "Main.jpg",
    "",
    "59.99",
    false,
    true
);


GamesArray.forEach(function (v, i) {
    let item = { image: v.main_image, id: v.id }
    MainImages.push(item);
    GamesNames.push(v.name);
});




