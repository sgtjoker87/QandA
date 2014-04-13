

app.controller("mainController", function($scope,$firebase){

    $scope.results = [];
    $scope.filterText = null;
    $scope.availableGenres = ['Virginia Tech Hokies'];
    $scope.genreFilter = null;
    $scope.init = function() {

    var today = new Date();
 

    var url = "https://qandaapp.firebaseio.com/questions";
	var fireRef = new Firebase(url);


	$scope.questions = $firebase(fireRef);

	$scope.layout = 'grid';


    };

});

app.filter('isNetwork', function() {
    return function(input, network) {
        if (typeof genre == 'undefined' || network == null) {
            return input;
        } else {
            var out = [];
            for (var a = 0; a < input.length; a++){
                for (var b = 0; b < input[a].questions.questions.network.length; b++){
                    if(input[a].questions.questions.network[b] == network) {
                        out.push(input[a]);
                    }
                }
            }
            return out;
        }
    };
});

