'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat: false
    },

    a = prompt('Один из послених просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из послених просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    

    console.log(personalMovieDB);