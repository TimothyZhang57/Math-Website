//Controller for the measurements and geometry Page
angular.module('MeasurementsCtrl', []).controller('MeasurementsController', function($scope, $http,$window, $location) {
	//Gets the required api with the information from the database
	$http.get('/api/Measurements').
	
   then(function(response) {
	 //Gets the questions from the database and sets them to variable
	  $scope.question = response.data[0].Question;
	  $scope.question2 = response.data[1].Question;
	  $scope.question3 = response.data[2].Question;
	  //Gets the hints from the database and sets them to variable
	  $scope.Hint1 = response.data[0].Hint;
	  $scope.Hint2 = response.data[1].Hint;
	  $scope.Hint3 = response.data[2].Hint;
	  //Gets the solutions from the database and sets them to variable
	  $scope.Solution1=response.data[0].Solution;	
	  $scope.Solution2=response.data[1].Solution;
	  $scope.Solution3=response.data[2].Solution;
	 //Gets the choices from the database and sets them to variable
	  $scope.Q1C1 = response.data[0].Choices.substring(0, response.data[0].Choices.indexOf(","));
	  $scope.Q1C2 = response.data[0].Choices.substring(response.data[0].Choices.indexOf(",")+1, response.data[0].Choices.indexOf(" "));
	  $scope.Q1C3 = response.data[0].Choices.substring(response.data[0].Choices.indexOf(" ")+1);
	  $scope.Q3C1 = response.data[2].Choices.substring(0, response.data[2].Choices.indexOf(","));
	  $scope.Q3C2 = response.data[2].Choices.substring(response.data[2].Choices.indexOf(",")+1, response.data[2].Choices.indexOf(" "));
	  $scope.Q3C3 = response.data[2].Choices.substring(response.data[2].Choices.indexOf(" ")+1);
	  //Gets the answers from the database and sets them to variable
	  $scope.Answer1 = response.data[0].Answer;
	  $scope.Answer2 = response.data[1].Answer;
	  $scope.Answer3 = response.data[2].Answer;
   });
   //Sets the score variable
	$scope.score = "0";
	//Function for checking the radio button by checking if the value of the button matches the answer
 	$scope.checkRadioButton = function(buttonValue, answer){
		 if(angular.equals(buttonValue, answer)){
			 //Tells the user that they did the question right and increase the score
			 $window.alert("Correct");
			 $scope.score++;
		 }else{
			 //Tells the user that they did the question wrong
			 $window.alert("Wrong");
		 }
	}
	//Function for showing the hint by alertings the user with the hint
	$scope.showHint = function(hint){
	   $window.alert(hint);
   }
   	//Function for checking the text field by checking if the value of the text field matches the answer
   $scope.checkText = function(Value, answer){
	//Tells the user that they did the question right and increase the score
	if(angular.equals(Value, answer)){
		$window.alert("Correct");
		$scope.score++;
	}else{
		//Tells the user that they did the question wrong
		$window.alert("Wrong");
	}
}	
	//Function for showing the hint by alertings the user with the solution
	$scope.showSolution = function(solution){
		$window.alert(solution);
}
	//Function for checking the dropdown list by checking if the value of the dropdown list matches the answer
	$scope.checkDropDown = function(myChoice, answer){
		if(angular.equals(myChoice, answer)){
			$window.alert("Correct");
			$scope.score++;
		}else{
			$window.alert("Wrong");
		}
	}
	//Sets the submit  buttons to be enabled
	$scope.Enabled1 = true;
	$scope.Enabled2 = true;
	$scope.Enabled3 = true;
	//Creates a function that enables the first solution button once it is clicked and disables the first submit button
	$scope.disableButton1 = function(){
		$scope.Disabled1 = true;
		$scope.Enabled1 = false;
}
   //Creates a function that enables the second solution button once it is clicked and disables the third submit button
	$scope.disableButton2 = function(){
		$scope.Disabled2 = true;
		$scope.Enabled2 = false;
}
    //Creates a function that enables the third solution button once it is clicked and disables the third submit button
	$scope.disableButton3 = function(){
		$scope.Disabled3 = true;
		$scope.Enabled3 = false;
}
   //Function that alerts the user with their score
	$scope.showScore = function(){
		window.alert("Your score is " + $scope.score + "/3");
}
   //Function that resets the webpages by resetting the score, buttons and choices to their original state
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
	//Function that allows the user to go to the extra help page
	$scope.goExtraHelp = function(){
		$location.path('/extraHelp');
}
	//Function that allows the user to go back home
$scope.goHome = function(){
	window.location = "/";
}
});
