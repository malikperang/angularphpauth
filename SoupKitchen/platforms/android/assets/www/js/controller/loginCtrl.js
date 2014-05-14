  'use strict';

   soup.controller('LoginCtrl',function($scope,loginService,$location,$rootScope){
          $scope.message = 'Log in';
            //$scope.user = []; //disable this or it will override an input
        	 $scope.userLogin = function(){
                   // $scope.users.push(
                    //    {email: $scope.users.email,password:$scope.users.pass}
                     //   );
                    loginService.login($scope.user)
                    .success(function(response){

                        console.log(response);
                        if(response == 'login success'){
                           
                            $scope.alert = 'From angular: Login Success'
                            $location.path("/home");
                        }
                        else{
                            $scope.alert = 'From angular: Login not Success'
                            //$location.path("/login");
                        }

                    });// call login service
                    //console.log(
                      //  {email : $scope.newUsers, password : $scope.newUsers.password});

                };
                  
        });
