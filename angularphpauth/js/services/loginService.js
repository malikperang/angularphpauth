'use strict';

app.factory('loginService', ['$http','$location','sessionService' ,function($http,$location,sessionService){
	return {
		//two parameter provided will be filled in loginCtrl
		login:function(data,scope){
			/*Debug*/
			//console.log(scope);
			//console.log(data);
			/*End debug*/
			var $promise = $http.post('data/user.php',data);
			$promise.then(function(msg){
				var uid = msg.data;
				if(msg.data)	{
					scope.msgtxt = 'Correct Information';
					sessionService.set('user',uid);
					$location.path('/home');
				}
				else			{
					scope.msgtxt = 'incorrect information';
					$location.path('/login');
				}
			});
		},

		//logout function
		logout:function(){
			sessionService.destroy('user');
			$location.path('/login');
		}
	};
}]);