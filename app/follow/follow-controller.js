(function()
{
var app=angular.module('time-waste');
var followctrl=function($scope,$http)
{


	$scope.localuser=JSON.parse(localStorage['user']);
    console.log($scope.localuser);



   $http.get('api/follow/getusers').success(function(response)
	                    {
   
	                         	$scope.userdata=response;

	                     }).error(function(err)
	                       {

	                      console.log("errr in server data getting");
	                       });
	 $scope.followuser=function(user,follow)
	   {
console.log(user);
console.log(follow);

      var  request={
      	          userid:user,
      	         followid:follow
      	      }
$http.post('api/follow/followusers',request).success(function(response)
	                    {
                             console.log("server data getting");
	                         console.log(response);

	                     }).error(function(err)
	                       {

	                      console.log("errr in server data getting");
	                       });
	   }                   

 $scope.isfollowing=function(follower)
	   {
          for(var i=0;i<$scope.localuser.following.length;i++)
           {
           	if($scope.localuser.following[i].userid==follower)
           		return true;
           }
return false;
	   }                   



};
app.controller('followctrl',['$scope','$http',followctrl]);

}())