(function()
{
	var app=angular.module('time-waste');
	var signupcontroller=function($scope,$state,$http)
	{ 
		$scope.createuser=function(req,response)
		{    
			console.log($scope.newuser);

			$http.post('/api/user/signup',$scope.newuser)
           .success(function(response)
           {
           	alert("signup succcedd");

           }).error(function(error)
           {
           	console.log("errorr");
           })
		}

	};

 
 app.controller('signupcontroller',['$scope','$state','$http',signupcontroller]);

}());
