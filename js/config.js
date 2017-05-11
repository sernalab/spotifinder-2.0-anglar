angular.module('spotiApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/search.html',
                controller: 'searchController'
            })
    })
