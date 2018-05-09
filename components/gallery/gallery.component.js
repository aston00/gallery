angular.module('app')
    .component('appGallery', {
        template: require('./gallery.html'),
        controller: ['SectionsService', 'PreviewedImagesService', function(SectionsService, PreviewedImagesService){
            let ctrl = this;
            this.$onInit = function(){
                
                SectionsService.getSections().then(sections => {
                    console.log(sections);
                    ctrl.sections = sections;
                })

                PreviewedImagesService.getImagesBySection('people')
                    .then(data => {
                        
                        ctrl.images = data;
                    })
            }

            this.onSectionChange = function(section){
                console.log(section);
                PreviewedImagesService.getImagesBySection(section)
                    .then(data => {
                        
                        ctrl.images = data;
                    })
            }
        }]
    })

require('./gallery.css');