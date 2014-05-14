  'use strict';

   soup.controller('RegCtrl',function($scope,regService,$location,$rootScope){
          $scope.message = 'Register';
            //$scope.user = []; //disable this or it will override an input
        	 $scope.userReg = function(){
                var userdata = $scope.user;

                  regService.register($scope.user)
                  .success(function(response){
                    if(response == 'success'){
                      $scope.message = 'register success';
                      $location.path('/regSuccess');
                    }else{

                    }
                  });

                };
                  
        });
