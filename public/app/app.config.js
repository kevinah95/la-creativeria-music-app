(function() {
    'use strict';
    angular
        .module('lcmApp')
        .config(config);

    function config($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCMuWfhZNPyMp2X8Q-VBEUlwBTc4OFIVTg",
            authDomain: "la-creativeria-music-app.firebaseapp.com",
            databaseURL: "https://la-creativeria-music-app.firebaseio.com",
            projectId: "la-creativeria-music-app",
            storageBucket: "la-creativeria-music-app.appspot.com",
            messagingSenderId: "674798014964"
        };
        firebase.initializeApp(config);

    };


})();