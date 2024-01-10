(function() {
    'use strict';
    angular
        .module('app.album')
        .controller('AlbumController', AlbumController);

    function AlbumController($scope, $firebaseObject, $state, $rootScope, toastr) {
        $scope.$$postDigest(function() {
            console.log($rootScope.albumId);
            if (!$rootScope.albumId) {
                $state.go("home");
            } else {
                var ref = firebase.database().ref();
                $scope.album = $firebaseObject(ref.child('albums').child($rootScope.albumId));
                $scope.tracks = $firebaseObject(ref.child('albums').child($rootScope.albumId).child('tracks'));
            }

        });

        $scope.updateReps = function(trackId) {
            $scope.tracks[trackId].reps++;
            $scope.tracks.$save().then(function(fb) {
                toastr.success('Canción escuchada', 'Success');
            }, function(error) {
                toastr.success('Ocurrió un error. Ver consola.', 'Error');
                console.log("Error:", error);
            });

        }




    }
})();