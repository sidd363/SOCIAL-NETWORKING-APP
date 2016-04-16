(function()
{
	angular.module('time-waste', ['ui.router','ngFileUpload'])
	.config(function($stateProvider,$urlRouterProvider)
	{  $urlRouterProvider.otherwise('/');
		$stateProvider
		.state('signup',
		{
			url:"/signup",
			templateUrl:"app/signup/signup.html",
			controller:"signupcontroller"
		}
			)
		.state('editprofile',
		{
			url:"/edit-profile",
			templateUrl:"app/profile/edit-profile-view.html",
			controller:"editprofilecontroller"
		}
			)
        .state('main',
              {
            url:"/",
            templateUrl:"app/main/main.html",
            controller:"maincontroller"
        })
           .state('follow',
              {
            url:"/follow-users",
               templateUrl:"app/follow/follow.html",
            controller:"followctrl"
        })
        .state('logout',
              {
            url:"/index",
            templateUrl:"/index.html"
           
        })
		
	})



}());
