angular.module('app', ['ui.router']);


angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state({
            name: 'home',
            url: '/',
            template: '<app-showcase></app-showcase>'
        })
        .state({
            name: 'section',
            url: '/section/:section',
            template: '<app-section images="vm.items" section="vm.section"></app-section>',
            resolve: {
                data : function(){
                    debugger;
                }
            },
            controller: ['$stateParams', 'PreviewedImagesService', function ($stateParams, PreviewedImagesService){
                this.items = '';
                let ctrl = this;
                this.$onInit = () => {
                    PreviewedImagesService.getImagesBySection($stateParams.section).then(data => {
                        console.log(data);
                        debugger;
                        ctrl.items = data;
                    })
                    debugger;
                    ctrl.section = $stateParams.section;
                    // ctrl.items = '';
                }
                
            }],
            controllerAs: 'vm'
        })
        
}])


// require('./directives/clipboard.directive');
require('./components/app-nav-bar/appNavBar.component');
require('./components/showcase/showcase.component');
require('./components/gallery/gallery.component');
require('./components/gallery/gallery-sidemenu/gallery-sidemenu.component');
require('./components/gallery/gallery-previewer/gallery-previewer.component');
require('./components/footer/footer.component');
require('./components/section/section.component');

require('./services/sections.service');
require('./services/previewed-images.service');

require('./main.css');
// require('./components/skillsPage/skills.component');




