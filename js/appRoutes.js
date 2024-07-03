//Sets up all of the wwebpages with a controller and allows them to be linked to 
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// Sets up the home page and allows the home page to be linked to 
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		// Sets up the number sense and algebra page and allows the page to be linked to 
		.when('/NumberSenseAndAlgebra', {
			templateUrl: 'views/Number Sense and Algebra.html',
			controller: 'MathController'	
		})
		// Sets up the grade 9 page and allows the page to be linked to 
		.when('/grade9',{
			templateUrl:'views/Grade 9.html',
			controller: 'MainController'
		})
		// Sets up the grade 10 page and allows the page to be linked to 
		.when('/grade10',{
			templateUrl:'views/Grade 10.html',
			controller: 'MainController'
		})
		// Sets up the grade 11 page and allows the page to be linked to 
		.when('/grade11',{
			templateUrl:'views/Grade 11.html',
			controller: 'MainController'
		})
		// Sets up the grade 12 page and allows the page to be linked to 
		.when('/grade12',{
			templateUrl:'views/Grade 12.html',
			controller: 'MainController'
		})
		// Sets up the extra help page and allows the page to be linked to 
		.when('/extraHelp', {
			templateUrl:'views/Extra Resources.html',
		})
		// Sets up the linear relations page with a controller and allows the page to be linked to 
		.when('/LinearRelations',{
			templateUrl:'views/Linear Relations.html',
			controller:	'linearRelationsController'
		})
		// Sets up the grade 9 analytic geometry page with a controller and allows the page to be linked to 
		.when('/AnalyticGeometry(9)',{
			templateUrl:'views/Analytic Geometry(9).html',
			controller:'AnalyticController'
		})
		// Sets up the grade 10 measurements and geometry page with a controller and allows the page to be linked to 
		.when('/MeasurementsAndGeometry(9)',{
			templateUrl:'views/Measurements and Geometry(9).html',
			controller: 'MeasurementsController'
		})

		// Sets up the quadratic relations page with a controller and allows the page to be linked to 
		.when('/QuadraticRelations',{
			templateUrl:'views/Quadratic Relations.html',
			controller:'QuadraticController'
		})
		// Sets up the grade 10 analytic geometry page with a controller and allows the page to be linked to 
		.when('/AnalyticGeometry(10)',{
			templateUrl: 'views/Analytic Geometry(10).html',
			controller:'Analytic10Controller'
		})
		// Sets up the trigonometry page with a controller and allows the page to be linked to 
		.when('/Trigonometry',{
			templateUrl: 'views/Trigonometry.html',
			controller:'TrigController'
		})
		//Sets up the characteristics of functions page with a controller and allows the page to be linked to 
		.when('/Characteristics',{
			templateUrl: 'views/Characteristics of Functions.html',
			controller:'CharacterController'
		})
		//Sets up the exponential functions page with a controller and allows the page to be linked to 
		.when('/Exponential',{
			templateUrl: 'views/Exponential Functions.html',
			controller:'ExponentController'
		})
		//Sets up the discrete functions page with a controller and allows the page to be linked to 
		.when('/Discrete',{
			templateUrl: 'views/Discrete Functions.html',
			controller: 'DiscreteController'
		})
		//Sets up the trigonometric functions page with a controller and allows the page to be linked to 
		.when('/Trigonometric',{
			templateUrl: 'views/Trigonometric Functions(11).html',
			controller: 'TrigonometricController'
		})
		//Sets up the Exponential and Logarithmic Functions page with a controller and allows the page to be linked to 
		.when('/ExponentialandLogarithmic',{
			templateUrl: 'views/Exponential and Logarithmic Functions.html',
			controller: 'LogAndExponentController'
		})
		//Sets up the grade 12 Trigonometric Functions page with a controller and allows the page to be linked to 
		.when('/Trigonmetric12',{
			templateUrl: 'views/Trigonometric Functions(12).html',
			controller: 'Trigonometric12Controller'
		})
		//Sets up the polynomial and rational page with a controller and allows the page to be linked to 
		.when('/PolynomialAndRationalFunctions',{
			templateUrl: 'views/Polynomial and Rational Functions.html',
			controller: 'RationalAndPolyController'
		})
		//Sets up the grade 12 characterisitics of functions page with a controller and allows the page to be linked to 
		.when('/CharacteristicsOfFunctions12',{
			templateUrl: 'views/Characteristics of Functions(12).html',
			controller: 'Character12Controller'
		});
	$locationProvider.html5Mode(true);
}]);