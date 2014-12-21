var spangular = angular.module("spangular",['ngRoute']);

//routing
spangular.config(function($routeProvider)
{
    $routeProvider
    .when('/about', {
        templateUrl : 'pages/about.html',
        pageTitle :"About",
        controller  : "page"
    })
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        pageTitle :"Contact",
        controller  : "page"
    })
    .when('/page', {
        templateUrl : 'pages/page.html',
        pageTitle :"Page",
        controller  : "page"
    })
     .when('/', {
        templateUrl : 'pages/home.html',
        pageTitle :"Home",
        controller  : "page"
    })
    .otherwise({
        redirectTo: '/'
    });

});
 
//This function is called everytime a new page is called
//and it updates the page title.
spangular.run(['$location', '$rootScope', function($location, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
    {
        $rootScope.title = current.$$route.pageTitle;
    });


}]);


//Controllers
spangular.controller("page",function ($scope, $location) 
{ 
 	//page is loaded
    
});

spangular.controller("navController",function ($scope, $location) 
{ 
 	//Navigational Controller
   
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
});