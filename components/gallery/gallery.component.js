angular.module('app')
    .component('appGallery', {
        template: require('./gallery.html'),
        controller: ['SectionsService', 'PreviewedImagesService', function (SectionsService, PreviewedImagesService) {
            let ctrl = this;
            this.$onInit = () => {
                ctrl.sortedSections = [];
                SectionsService.getSections().then(sections => {

                    let chunk = 4;

                    for (let i = 0, j = sections.length; i < j; i += chunk) {
                        ctrl.sortedSections.push(sections.slice(i, i + chunk));
                    }
                   
                    let lastArray = ctrl.sortedSections[ctrl.sortedSections.length - 1];
                    let difference = 0;
                    let arraySort = [];
                    if (lastArray.length < 4) 
                        lastArray.length = 4;

                    ctrl.sections = ctrl.sortedSections;
                });

                PreviewedImagesService.getImagesBySection('people').then(data => ctrl.images = data);
            }

            this.onSectionChange = section => {
                if (section == '')
                    return;

                PreviewedImagesService.getImagesBySection(section)
                    .then(data => ctrl.images = data);
            }
        }]
    })

require('./gallery.css');