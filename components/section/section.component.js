angular.module('app')
    .component('appSection', {
        template: require('./section.html'),
        bindings: {
            images: '<'
        },
        controller: function () {

            //TODO:: function for checking scroll location and changing it according to slider shown
            //TODO:: when we click on item in the slider - we show it in main window and update all info


            let ctrl = this;
            ctrl.copiedSuccessful = false;

            ctrl.$onInit = function () {

                console.log(ctrl.imgToPreview);
                console.log(ctrl.images);
                ctrl.imgToPreview = 0;
            }

            ctrl.$onChanges = function (changes) {
                if (changes.images) {
                    ctrl.images = changes.images.currentValue;

                    // let elem = document.querySelector('.carousel-preview-image');
                    // elem.style.backgroundImage = 'url(' + ctrl.images[ctrl.imgToPreview] + ')';
                    // console.log('changes', changes);
                }
            }

            //When we show last item - we need to disable arrow
            ctrl.checkForLastItem = () => {

            }

            this.showNextImage = () => {

                ctrl.imgToPreview++;

                //Moving slider
                if(ctrl.imgToPreview > 2){
                    let sth = document.querySelector('.carousel-bottomt-slider');
                    let width = sth.offsetWidth;
                    let elemW = width * .33;
                    let final = width - 2 * elemW;
                    
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = final * ctrl.imgToPreview; 
                }
                //for moving scroller 
                
            }


            this.showPrevImage = () => ctrl.imgToPreview--;




            this.copyToClipboard = function () {
                let element = document.querySelector('.copy-to-clipboard-input');
                element.select();
                let clipboardCopy = document.execCommand('copy');
                if (clipboardCopy) {
                    ctrl.copiedSuccessful = true;
                } else {
                    console.log('error while copying to clipbaord');
                }
            }


        }
    });

require('./section.css');