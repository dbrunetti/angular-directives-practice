var app = angular.module('testFeed',[]);

app.directive('post', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/post.html',
		replace: true
	};
});