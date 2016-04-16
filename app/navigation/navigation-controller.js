(function()
{
var app=angular.module('time-waste');
var navigationcontroller=function($scope,$http,$state)
{
	if(localStorage['user'])
		$scope.loggedin=true;
	else
		$scope.loggedin=false;
$scope.loginuser=function(req,res)
{
	      $http.post('/api/user/login',$scope.login).success(function(response){
		                               console.log(response);
                                  localStorage.setItem('user',JSON.stringify(response));
                                  $scope.loggedin=true;
	                             }).error(function(error){
		                          console.log("error");
                            	})

};

$scope.logout=function()
{
    localStorage.clear();
    $scope.loggedin=false;
      $state.go('logout');
}

};


app.controller('navigationcontroller',['$scope','$http','$state',navigationcontroller]);
}());
