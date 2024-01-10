(function() {
    'use strict';
    angular
        .module('app.album')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('album', {
                url: '/album',
                templateUrl: 'app/albums/album/album.view.html',
                controller: 'AlbumController',
                css: 'app/albums/album/album.css'

            });
    };
})();