'use strict';

soup.controller('mapCtrl', function($scope,$http){
	var getlat = window.localStorage.getItem("latitude");
    var getlng = window.localStorage.getItem("longitude");

    $scope.lat = getlat;
    $scope.lng = getlng;
	 //console.log(getlat);
	 //console.log(getlng);

	$scope.trackMe = function(){
		// Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            //save to local storage
            localStorage.setItem("latitude", lat);
            localStorage.setItem("longitude", lng);

            //set map
            var latLong = new google.maps.LatLng(lat,lng);

            var mapOptions = {
                center: latLong,
                zoom : 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

        

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

               var marker = new google.maps.Marker({
		      position: latLong,
		      map: map,
		      title: 'Hello World!'
		  });
        }

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

	}
	$scope.submitGeo = function(){
		var data = {
			latitude :   $scope.lat,
			longitude : $scope.lng
		}
		 $http({
		 		method: 'POST', 
		 		url: 'api/controller.php',
		 		data : data
		 	})
		    .success(function(data, status, headers, config) {
		      // this callback will be called asynchronously
		      // when the response is available
		      console.log(data);
		    })
		    .error(function(data, status, headers, config) {
		      // called asynchronously if an error occurs
		      // or server returns response with an error status.
		    });

		//console.log(data);

	},
	$scope.getCurGeo = function(){
		
		$http({
		 		method: 'GET', 
		 		url: 'api/get.php',
		 	})
		    .success(function(data, status, headers, config) {
		      // this callback will be called asynchronously
		      // when the response is available
		      console.log(data);
		      $scope.curLat = data['latitude'];
		      $scope.curLng = data['longitude'];
		    })
		    .error(function(data, status, headers, config) {
		      // called asynchronously if an error occurs
		      // or server returns response with an error status.
		    });
	}
	

});