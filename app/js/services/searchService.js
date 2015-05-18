'use strict';

socialNetworkApp.factory('searchService',
    function searchService($http, $q, baseServiceUrl, authService) {
        var serviceUrl = baseServiceUrl + '/users/search?searchTerm=';

        return {
            searchUserWithQ: function (searchData) {
                var deferred = $q.defer();
                $http.get(serviceUrl + searchData,
                    {
                        headers: authService.getAuthHeaders()
                    })
                    .success(function (data) {
                        deferred.resolve(data)
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });
                return deferred.promise;
            }
        }
    });