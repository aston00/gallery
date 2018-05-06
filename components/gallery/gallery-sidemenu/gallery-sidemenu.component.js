angular.module('app')
    .component('appGallerySidemenu', {
        template: require('./gallery-sidemenu.html'),
        bindings: {
            sections: '<',
            getImages: '&'
        },
        controller: function(){
           
        }
    })

require('./gallery-sidemenu.css');