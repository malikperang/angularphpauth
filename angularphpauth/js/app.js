'use strict';
//Declare app level module which depend on filters, and services
var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/login',{templateUrl:'partials/login.html',controller:'loginCtrl'});
	$routeProvider.when('/home',{templateUrl:'partials/home.html',controller:'homeCtrl'});
	$routeProvider.otherwise({redirectTo:'/login'});
	
}]);