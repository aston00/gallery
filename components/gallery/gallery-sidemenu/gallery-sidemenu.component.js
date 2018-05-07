angular.module('app')
    .component('appGallerySidemenu', {
        template: require('./gallery-sidemenu.html'),
        bindings: {
            sections: '<',
            getImages: '&'
        },
        controller: function(){
           this.startAnimation = function(event){
               let text = event.target.childNodes[1].value;
               
            //   console.log(event.target.childNodes[1]);
           }
        }
    })

require('./gallery-sidemenu.css');