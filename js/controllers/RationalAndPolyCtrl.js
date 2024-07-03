//Controller for the rational and polynomials Page
//Refer to comments on Measurements Ctrl 
angular.module('RationalAndPolyCtrl', []).controller('RationalAndPolyController', function($scope, $http,$window, $location) {
	$http.get('/api/PolynomialAndRationalFunctions').
	
   then(function(response) {
	  $scope.question = response.data[0].Question;
	  $scope.question2 = response.data[1].Question;
	  $scope.question3 = response.data[2].Question;
	  $scope.Hint1 = response.data[0].Hint;
	  $scope.Hint2 = response.data[1].Hint;
	  $scope.Hint3 = response.data[2].Hint;
	  $scope.Solution1=response.data[0].Solution;
	  $scope.Solution2=response.data[1].Solution;
	  $scope.Solution3=response.data[2].Solution;
	  $scope.Q1C1 = response.data[2].Choices.substring(0, response.data[2].Choices.indexOf(","));
	  $scope.Q1C2 = response.data[2].Choices.substring(response.data[2].Choices.indexOf(",")+1, response.data[2].Choices.indexOf(" "));
	  $scope.Q1C3 = response.data[2].Choices.substring(response.data[2].Choices.indexOf(" ")+1);
	  $scope.Q3C1 = response.data[0].Choices.substring(0, response.data[0].Choices.indexOf(","));
	  $scope.Q3C2 = response.data[0].Choices.substring(response.data[0].Choices.indexOf(",")+1, response.data[0].Choices.indexOf(" "));
	  $scope.Q3C3 = response.data[0].Choices.substring(response.data[0].Choices.indexOf(" ")+1);
	  $scope.Answer1 = response.data[0].Answer;
	  $scope.Answer2 = response.data[1].Answer;
	  $scope.Answer3 = response.data[2].Answer;
   });
	$scope.score = "0";
 	$scope.checkRadioButton = function(buttonValue, answer){
		 if(angular.equals(buttonValue, answer)){
			 $window.alert("Correct");
			 $scope.score++;
		 }else{
			 $window.alert("Wrong");
		 }
	}
	$scope.showHint = function(hint){
	   $window.alert(hint);
   }
   $scope.checkText = function(Value, answer){
	if(angular.equals(Value, answer)){
		$window.alert("Correct");
		$scope.score++;

	}else{
		$window.alert("Wrong");
	}
}
	$scope.showSolution = function(solution){
		$window.alert(solution);
}
	$scope.checkDropDown = function(myChoice, answer){
		if(angular.equals(myChoice, answer)){
			$window.alert("Correct");
			$scope.score++;
		}else{
			$window.alert("Wrong");
		}
	}
	$scope.Enabled1 = true;
	$scope.Enabled2 = true;
	$scope.Enabled3 = true;
	$scope.disableButton1 = function(){
		$scope.Disabled1 = true;
		$scope.Enabled1 = false;
}
	$scope.disableButton2 = function(){
		$scope.Disabled2 = true;
		$scope.Enabled2 = false;
}
	$scope.disableButton3 = function(){
		$scope.Disabled3 = true;
		$scope.Enabled3 = false;
}
$scope.showScore = function(){
	window.alert("Your score is " + $scope.score + "/3");
}
$scope.reset = function(){
	$scope.Enabled1 = true;
	$scope.Enabled2 = true;
	$scope.Enabled3 = true;
	$scope.Disabled1 = false;
	$scope.Disabled2 = false;
	$scope.Disabled3 = false;
	$scope.myChoice = null;
	$scope.buttonValue = null;
	$scope.Value = null;
	$scope.score = "0";
}
$scope.goExtraHelp = function(){
	$location.path('/extraHelp');
;
}
$scope.goHome = function(){
	window.location = "/";
}
});
