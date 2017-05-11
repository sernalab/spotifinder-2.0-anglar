angular.module('spotiApp')
    .factory('spotifyService', function($http) {
        function searchArtist(nameArtist) {
            var urlArtistName = 'https://api.spotify.com/v1/search?type=artist&query=' + nameArtist
            return $http.get(urlArtistName)
        }
    })
