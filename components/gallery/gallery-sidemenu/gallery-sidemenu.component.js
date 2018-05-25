angular.module('app')
    .component('appGallerySidemenu', {
        template: require('./gallery-sidemenu.html'),
        bindings: {
            sections: '<',
            getImages: '&'
        },
        controller: function () {
            let ctrl = this;
            
            this.$onInit = () => {
                ctrl.sortedSections = [];
                ctrl.currentSection = '';
                ctrl.topDisabled = false;
                ctrl.bottomDisabled = false;
            }

            this.$onChanges = changes => {
                if (changes.sections.currentValue != undefined) {
                    ctrl.sections = changes.sections.currentValue;
                    var i, j, chunk = 3;
                    ctrl.sortedSections = [];
                    for (i = 0, j = ctrl.sections.length; i < j; i += chunk) {
                        ctrl.sortedSections.push(ctrl.sections.slice(i, i + chunk));
                        // do whatever
                    }

                    
                }
            }

            this.showNextSections =  () => {
                let eleme = document.querySelector('.gallery-sidemenu-link-list');
                let height = eleme.offsetHeight;
                eleme.scrollTop = height;
            }

          
            this.showPrevSections = () => {
                let eleme = document.querySelector('.gallery-sidemenu-link-list');
                let height = eleme.offsetHeight;
                eleme.scrollTop = document.documentElement.scrollTop - height;
            }
        }
    })

require('./gallery-sidemenu.css');