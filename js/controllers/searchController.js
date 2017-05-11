angular.module('spotiApp')
    .controller('searchController', function($scope, spotifyService, $rootScope) {
        $scope.searchArtist = function() {
            var query = $scope.artistName
                //promise
            spotifyService.searchArtist(query)
                .then(function(response) {
                    $rootScope.artists = response.data.artists.items
                })
        }
    })
