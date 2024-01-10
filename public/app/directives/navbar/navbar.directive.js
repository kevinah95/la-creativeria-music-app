(function() {
    'use strict';
    angular
        .module('lcmApp')
        .directive('navbarDirective', navbarDirective);

    function navbarDirective() {
        var directive = {
            templateUrl: 'app/directives/navbar/navbarDirective.html',
            transclude: true,
            replace: true,
            controller: 'NavbarController',
            controllerAs: 'navbar'
        };
        return directive;
    }
})();