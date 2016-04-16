(function()
{
	var app=angular.module('time-waste');
	var editprofilecontroller=function(Upload,$scope,$state,$http)
	{ 
        $scope.user=JSON.parse(localStorage['user'])|| undefined;
        console.log($scope.user);


		$scope.$watch(function()
		{
			return $scope.file
		},function()
		{
			$scope.upload($scope.file);
		});



		$scope.upload=function(file)
		{
			if(file)
			{
                 Upload.upload(
                               {
                         url:'api/profile/editphoto',
                         type:'POST',
                         data:{userid:$scope.user._id},
                         file:file
                               }).progress(function(evt)
                               { 
	                        console.log("  uploading file");
                               }).success(function(data)
                               {
   console.log("saved file");
                               }).error(function(err)
                               {
                               	console.log("error in file upload");
                               })
			}

		};

        $scope.updateusername=function()
        {
            var request={
                userid:$scope.user._id,
                username:$scope.user.username
            };

            $http.post('api/profile/updateusername',request).success(function()
              {
                console.log("success updated username");
              }).error(function(error)
              {
                console.log("error in updating username");
              });
        }
        $scope.updatebio=function()
        {
          var request=
          {
            userid:$scope.user._id,
            userbio:$scope.user.bio
          };
           $http.post('api/profile/updateuserbio',request).success(function()
              {
                console.log("success updated userbio");
              }).error(function(error)
              {
                console.log("error in updating userbio");
              });

        }
		
	};

 
 app.controller('editprofilecontroller',['Upload','$scope','$state','$http',editprofilecontroller]);

}());
