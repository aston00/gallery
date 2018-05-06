angular.module('app')
    .component('appGalleryPreviewer', {
        template: require('./gallery-previewer.html'),
        bindings: {
          
            images:'<'
        },
        controller: function(){
            
        }
    })

require('./gallery-previewer.css');