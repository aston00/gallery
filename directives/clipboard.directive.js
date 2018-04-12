angular.module('app')
.directive('clipboard' , function (ngCopy) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.bind('click', function (e) {
				ngCopy(attrs.ngClickCopy);
			});
		}
	}
})