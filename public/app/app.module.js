(function() {
    'use strict';
    angular
        .module('lcmApp', [
            /*
             * Everybody has access to these.
             * We could place these under every feature area,
             * but this is easier to maintain.
             */
            'app.core',
            /*
             * Feature areas
             */
            'app.home', 'app.albums', 'app.album'

        ]);
})();