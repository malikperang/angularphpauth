	   //define a module 
       var soup = angular.module('SoupKitchen',['ngRoute','ngResource']);

       //config route
       soup.config(['$routeProvider',function($routeProvider) {
           $routeProvider.when('/',
                {
                    templateUrl : 'js/view/login.html',
                    controller : 'LoginCtrl'
                }
            );
           $routeProvider.when('/register',
                {
                    templateUrl : 'js/view/register.html',
                    controller : 'RegCtrl'
                }
            );
           $routeProvider.when('/home',
                {
                    templateUrl : 'js/view/home.html',
                    controller : 'LoginCtrl'
                }
            );
            $routeProvider.when('/regSuccess',
                {
                    templateUrl : 'js/view/regSuccess.html',
                  
                }
            );
            $routeProvider.when('/map',
                {
                    templateUrl : 'js/view/map.html',
                  
                }
            );
           $routeProvider.otherwise({redirectTo:'/'})
           
       }]);
      soup.run(function($rootScope, $location,$http) {
            $http.cache=true;
            $rootScope.$on( "$routeChangeStart", function(event, next, current) {
                
            });
        });


// pending... just note
        /*app.factory('GetFactory',function($http)
        {
                var users = [];
                var factory = {};

                factory.getUsers = function(){
                    // the problem was here.
                    // as @Michael Butler pointed out.    
                    // Next, Best practices is to return the $http.get
                    // so you can play with promises callbacks 
                    // in the caller controller (as GetCtrl).
                    // promise callbacks : success() & .error
                    var userGetRequest = $http.get('api/get.php');
                    return userGetRequest;
                };
               
                factory.login = function(){
                	var userPostRequest = $http.get('api/post.php');
                	return userPostRequest;
                }
                return factory;
        });

        app.controller('GetCtrl',function($scope,GetFactory)
        {
                    $scope.users = [];

                    GetFactory.getUsers()
                    .success(function(response)
                    {
                        // the api request was OK.
                        // we push because get by default return an object
                        // and here users is an array.
                        $scope.users.push(response);
                        console.log(response); // check navigator console for the server response
                    })
                    .error(function(response)
                    {
                        // something went wrong with the api request
                        console.log(response); // check navigator console for the server response
                    });
        });*/

    