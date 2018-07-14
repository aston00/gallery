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
                ctrl.currentSection = 0;
                ctrl.topDisabled = true;
                ctrl.bottomDisabled = false;
            };

            this.$onChanges = changes => {
                if (changes.sections && changes.sections.currentValue) 
                    ctrl.sections = changes.sections.currentValue;
            };

            this.showNextSections = () => {
                let eleme = document.querySelector('.gallery-sidemenu-link-list');
                let height = eleme.offsetHeight;
                let scrollHeight = eleme.scrollHeight;
                eleme.scrollTop += height;
                ctrl.topDisabled = false;
                ctrl.bottomDisabled = ctrl.currentSection == ctrl.sections.length - 2;
                ctrl.currentSection++;
            };

            this.showPrevSections = () => {
                ctrl.topDisabled = ctrl.currentSection <= 1;
                let eleme = document.querySelector('.gallery-sidemenu-link-list');
                let height = eleme.offsetHeight;
                let now = eleme.scrollTop;
                eleme.scrollTop = now - height;
                ctrl.bottomDisabled = false;
                ctrl.currentSection--;
            };
        }
    })

require('./gallery-sidemenu.css');