angular.module('app')
    .component('appGallerySidemenu', {
        template: require('./gallery-sidemenu.html'),
        bindings: {
            sections: '<',
            getImages: '&'
        },
        controller: function(){
           this.startAnimation = function(event){
               debugger;
            // console.log(event.target.childNodes[1])
               let text = event.target.value;
               
            //   console.log(event.target.childNodes[1]);
           }
        }
    })

require('./gallery-sidemenu.css');