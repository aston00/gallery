angular.module('app')
    .component('appSection', {
        template: require('./section.html'),
        bindings: {
            images: '<',
            section: '<'
        },
        controller: ['$window', function ($window) {

            let ctrl = this;

            ctrl.$onInit = () => {
                ctrl.leftDisabled = true;
                ctrl.rightDisabled = false;
                ctrl.imgToPreview = 0;
                ctrl.copiedSuccessfully = false;
            }

            ctrl.$onChanges = changes => {
                if (changes.images) {
                    ctrl.images = changes.images.currentValue;
                    document.documentElement.scrollTop = 0;
                }
            }

            //Showing chosen item 
            ctrl.showChosenItem = index => {
                ctrl.copiedSuccessfully = false;
                //Checking whether item we choose is eithe last or first 
                ctrl.leftDisabled = index == 0;
                ctrl.rightDisabled = index == ctrl.images.length - 1

                ctrl.imgToPreview = index;
            }


            this.showNextImage = () => {
                ctrl.copiedSuccessfully = false;
                //Arrows accessibility section
                ctrl.leftDisabled = false;
                ctrl.rightDisabled = ctrl.imgToPreview + 2 >= ctrl.images.length;
                if (ctrl.imgToPreview == ctrl.images.length - 1)
                    return;

                //Showing next image
                ctrl.imgToPreview++;

                //Moving slider in the bottom slider section
                let slider = document.querySelector('.carousel-bottomt-slider');
                let sliderWidth = slider.offsetWidth;
                let f = ctrl.imgToPreview / 3;
                if (Number.isInteger(f))
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth;
            }

            this.showPrevImage = () => {
                ctrl.copiedSuccessfully = false;
                //Arrows accessibility section
                ctrl.leftDisabled = ctrl.imgToPreview - 2 < 0;
                ctrl.rightDisabled = false;
                if (ctrl.imgToPreview == 0) {
                    return;
                }

                //Showing previous image
                ctrl.imgToPreview--;

                //Moving slider in the bottom slider section
                let slider = document.querySelector('.carousel-bottomt-slider');
                let sliderWidth = slider.offsetWidth;
                let f = (ctrl.imgToPreview + 1) / 3;
                if (Number.isInteger(f))
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth - sliderWidth;
                else
                    document.querySelector('.carousel-bottomt-slider').scrollLeft = Math.floor(f) * sliderWidth;

            }


            this.copyToClipboard = () => {

                //Creating input out of user's view
                let newElement = document.createElement('input');
                let bodyElement = document.querySelector('body');
                debugger;
                //To prevent user from seeing created input
                newElement.style.position = 'absolute';
                newElement.style.top = '-2000rem';
                newElement.style.left = '-2000rem';

                //Passing image link into input field
                newElement.value = ctrl.images[ctrl.imgToPreview];

                //Appending element to body and adding link to the clipboard
                bodyElement.appendChild(newElement);
                newElement.select();
                let clipboardCopy = document.execCommand('copy');

                if (clipboardCopy)
                    ctrl.copiedSuccessfully = true;
                else
                    console.log('error while copying to clipbaord');

                //Removing created element from the body
                bodyElement.removeChild(newElement);
            }
        }]
    });

require('./section.css');