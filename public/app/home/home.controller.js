(function() {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeController', HomeController)
        .filter('orderObjectBy', orderObjectBy);

    function HomeController($scope, $firebaseObject) {
        var ref = firebase.database().ref();
        $scope.albums = $firebaseObject(ref.child('albums'));
        $scope.songs = [];
        ref.child("albums").on("value", function(snapshot) {
            console.log("There are " + snapshot.numChildren() + " messages");
            $scope.songs = [];
            snapshot.forEach(function(childSnapshot) {
                console.log(childSnapshot.val().tracks);
                console.log(childSnapshot.val().name);
                var field = "reps";
                var reverse = true;
                angular.forEach(childSnapshot.val().tracks, function(item) {
                    item.album = childSnapshot.val().name;
                    item.cover = childSnapshot.val().cover;
                    $scope.songs.push(item);
                });
                $scope.songs.sort(function(a, b) {
                    return (a[field] > b[field] ? 1 : -1);
                });
                if (reverse) $scope.songs.reverse();
            });

        });
    }

    function orderObjectBy() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item) {
                filtered.push(item);
            });
            filtered.sort(function(a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        }
    }
})();