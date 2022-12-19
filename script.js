'use strict';

let  numberOfFilms ; 


const personalMovieDB = {
        count: 0,
        movies:{},
        actors:{},
        genres:[],
        privat: false,
        start: () => {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
            }

        },
        rememberMyFilms: () => {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из послених просмотренных фильмов?', '').trim(),
                      b = prompt('На сколько оцените его?', '').trim();
         
                 if (a != null && b != null && a != '' && b !='' && a.length < 50) {
                     personalMovieDB.movies[a] = b;
                 } else {
                     i--;
                 }
             }
        },

        detectPersonalLevel: () => {
            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB >= 30) {
                console.log('Вы киноман!');
            } else {
                console.log('Произошла ошибка...');
            }
        },

        showMyDB: (hidden) => {
            if (!hidden)  {
                console.log(personalMovieDB);
            }
        },

        toggleVisibleMyDB: () => {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },

        writeYourGenres: () => {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();

                if (genre == '' || genre == null) {
                    console.log('Вы ввели некорректные данные или не ввели их вовсе');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }  
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }

    };


