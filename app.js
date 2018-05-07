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
require('./components/gallery/gallery.component');
require('./components/gallery/gallery-sidemenu/gallery-sidemenu.component');
require('./components/gallery/gallery-previewer/gallery-previewer.component');
require('./components/footer/footer.component');

require('./services/sections.service');
require('./services/previewed-images.service');

require('./main.css');
// require('./components/skillsPage/skills.component');




