(function() {
    'use strict';
    angular
        .module('app.albums')
        .controller('AlbumsController', AlbumsController);

    function AlbumsController($scope, $firebaseObject, $rootScope, $state, toastr) {
        var ref = firebase.database().ref();
        $scope.albums = $firebaseObject(ref.child('albums'));
        $scope.changeDir = function(albumId) {
            $rootScope.albumId = albumId;
            $state.go("album");
        }

        $scope.updateSolds = function(albumId) {
            console.log(albumId);
            $scope.albums[albumId].solds++;
            $scope.albums.$save().then(function(fb) {
                toastr.success('Álbum vendido.', 'Success');
            }, function(error) {
                toastr.success('Ocurrió un error. Ver consola.', 'Error');
                console.log("Error:", error);
            });

        }
    }
})();