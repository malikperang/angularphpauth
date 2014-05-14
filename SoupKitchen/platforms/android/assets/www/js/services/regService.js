'use strict';

soup.factory('regService',function($http){
	return {
		register:function(user,alert){
			console.log(user);
			var $promise = $http.post('http://10.0.2.2/SoupKitchen/platforms/android/assets/www/api/register.php',user );//send data to register.php
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