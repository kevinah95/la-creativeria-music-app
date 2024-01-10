(function() {
    'use strict';
    angular
        .module('app.albums')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('albums', {
                url: '/albums',
                templateUrl: 'app/albums/albums.view.html',
                controller: 'AlbumsController',
                css: 'app/albums/albums.css'
            });
    };
})();