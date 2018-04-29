angular.module('app', ['ui.router']);


angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state({
            name: 'home',
            url: '/',
            template: '<app-showcase></app-showcase>'
        })
        
}])


// require('./directives/clipboard.directive');
require('./components/app-nav-bar/appNavBar.component');
require('./components/showcase/showcase.component');
require('./main.css');
// require('./components/skillsPage/skills.component');




