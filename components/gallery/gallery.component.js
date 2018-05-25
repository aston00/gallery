angular.module('app')
    .component('appGallery', {
        template: require('./gallery.html'),
        controller: ['SectionsService', 'PreviewedImagesService', function (SectionsService, PreviewedImagesService) {
            let ctrl = this;
            this.$onInit = () => {

                SectionsService.getSections().then(sections => ctrl.sections = sections);

                PreviewedImagesService.getImagesBySection('people').then(data => ctrl.images = data);
            }

            this.onSectionChange = section => {

                PreviewedImagesService.getImagesBySection(section)
                    .then(data => ctrl.images = data );
            }
        }]
    })

require('./gallery.css');