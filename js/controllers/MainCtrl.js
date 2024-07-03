//Controller for the home Page
angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
	//Creates an array of all the subject pages
	$scope.subjects =['/NumberSenseAndAlgebra','/LinearRelations','/AnalyticGeometry(9)','/MeasurementsAndGeometry(9)', '/QuadraticRelations', '/AnalyticGeometry(10)', '/Trigonometry', '/Characteristics', '/Exponential', '/Discrete', '/Trigonometric', '/ExponentialandLogarithmic', '/Trigonmetric12', '/PolynomialAndRationalFunctions','/CharacteristicsOfFunctions12']
	//Creates an array of all the grade 9 subjects
	$scope.subjects9 = ['/NumberSenseAndAlgebra','/LinearRelations','/AnalyticGeometry(9)','/MeasurementsAndGeometry(9)']
	//Creates an array of all the grade 10 subjects
	$scope.subjects10 = [ '/QuadraticRelations', '/AnalyticGeometry(10)', '/Trigonometry']
	//Creates an array of all the grade 11 subjects
	$scope.subjects11 = [  '/Characteristics', '/Exponential', '/Discrete', '/Trigonometric']
	//Creates an array of all the grade 12 subjects
	$scope.subjects12 = ['/ExponentialandLogarithmic', '/Trigonmetric12', '/PolynomialAndRationalFunctions','/CharacteristicsOfFunctions12']
	//Creates a random number between 1 and 15
	$scope.RandomNumber = (Math.floor(Math.random()*15));
	//Creates a random number between 1 and 4
	$scope.RandomNumber2 = (Math.floor(Math.random()*4));
	//Creates a random number between 1 and 3
	$scope.RandomNumber3 = (Math.floor(Math.random()*3));
});