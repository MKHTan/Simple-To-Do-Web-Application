var App = angular.module('App', []);

App.controller('todoCtrl', function($scope, $http) {
  $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
		
		
	$scope.add = function(){
		$scope.todos.push({
			task: $scope.todoTask,
			complete: false,
			description: $scope.todoDesc
		});
		$scope.todoTask = "";
		$scope.todoDesc = "";
	};
	
	$scope.remove = function(){
	};
});