angular.module('app')
    .component('appSection', {
        template: require('./section.html'),
        bindings: {
            images: '<'
        },
        controller: function () {

          
            //TODO:: when we click on item in the slider - we show it in main window and update all info
            //TODO:: added name of file handling

            let ctrl = this;
            ctrl.copiedSuccessful = false;

            ctrl.$onInit = function () {
                ctrl.leftDisabled = false;
                ctrl.rightDisabled = false;
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

           

            this.showNextImage = () => {
                //WRONG FLOW - 
                ctrl.rightDisabled = ctrl.imgToPreview + 1 == ctrl.images.length - 1 ? true : false;
                if (ctrl.imgToPreview == ctrl.images.length - 1 ){
                    
                    return;
                }
                ctrl.imgToPreview++;

                //Moving slider
                
              
                let sth = document.querySelector('.carousel-bottomt-slider');
                let width = sth.offsetWidth;
                console.log('width', width);
                let elemW = width * .33;
                console.log('elemW', elemW);
                // let final = width - 2 * elemW;
                let f = ctrl.imgToPreview / 3;


                if (Number.isInteger(f)) {
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = f * width ;
                }
            }
            




            this.showPrevImage = () => {
                if(ctrl.imgToPreview == 0){
                    ctrl.leftDisabled = true;
                    return;
                }
                ctrl.imgToPreview--;

                let sth = document.querySelector('.carousel-bottomt-slider');
                let width = sth.offsetWidth;
                console.log('width', width);
                let elemW = width * .33;
                console.log('elemW', elemW);
                let f = (ctrl.imgToPreview + 1)/ 3;


                if (Number.isInteger(f)) {
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = f * width - width;
                } else {
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = Math.floor(f) * width;
                }

            }


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