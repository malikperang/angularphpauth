'use strict';

soup.factory('loginService',function($http){
	/*var sdo = {
		isLogged: false,
		username: ''
	};
	return sdo;*/
	return {
		login:function(user){
			//if using firebase
			/*var chatRef = new Firebase('https://<YOUR-FIREBASE>.firebaseio.com');
			var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
			  if (error) {
			    // an error occurred while attempting login
			    console.log(error);
			  } else if (user) {
			    // user authenticated with Firebase
			    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
			  } else {
			    // user is logged out
			  }
			});*/
			console.log(user);
			/* $http(
			 	{
			 		method: 'POST',
			 		url: 'http://localhost/SoupKitchen/platforms/android/assets/www/api/vendor/slim/slim',
			 		data : user,
			 		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			 	}).
			    success(function(data, status, headers, config) {
			      // this callback will be called asynchronously
			      // when the response is available
			      console.log(data);
		    }).
			    error(function(data, status, headers, config) {
			      // called asynchronously if an error occurs
			      // or server returns response with an error status.
			      console.log(data);
			    });*/
			var $promise = $http.post('api/login.php',user );//send data to post.php
			return $promise;

			//$promise.success(function(data){
			//	console.log(data);

			//	return data;
			//});
			//else;
			//console.log('enter service function');

		}

	};
});