angular.module('app')
    .component('appGallery', {
        template: require('./gallery.html'),
        controller: ['SectionsService', function(SectionsService){
            let ctrl = this;
            this.$onInit = function(){
                SectionsService.getSections().then(sections => {
                    ctrl.sections = sections;
                })
            }
        }]
    })

require('./gallery.css');