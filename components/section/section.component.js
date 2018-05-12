angular.module('app')
    .component('appSection', {
        template: require('./section.html'),
        bindings: {
            sections: '<'
        },
        controller: function(){

            let ctrl = this;
            ctrl.copiedSuccessful = false;
            debugger;
            ctrl.$onInit = function() {
                debugger;
                console.log(ctrl.sections);
            }

            this.$onChanges = function(changes){
                
                debugger;
                
            }


            this.copyToClipboard = function(){
                let element = document.querySelector('.copy-to-clipboard-input');
                element.select();
                let clipboardCopy = document.execCommand('copy');
                if(clipboardCopy){
                    ctrl.copiedSuccessful = true;
                } else {
                    console.log('error while copying to clipbaord');
                }
            }
        }
    });

require('./section.css');