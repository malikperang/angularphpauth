'use strict';

app.factory('sessionService', ['$http', function($http){
	return{
		//set session data
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		//get session data
		get:function(key){
			return sessionStorage.getItem(key,value);
		},
		//delete session
		destroy:function(key){
			return sessionStorage.removeItem(key);
		},
	};
}])