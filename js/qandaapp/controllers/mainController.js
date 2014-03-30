

app.controller("mainController", function($scope,$firebase){

    $scope.results = [];
    $scope.filterText = null;
    $scope.init = function() {

    var today = new Date();
 

    var url = "https://qandaapp.firebaseio.com/";
	var fireRef = new Firebase(url);


	$scope.questions = $firebase(fireRef);

	  

    };

});

