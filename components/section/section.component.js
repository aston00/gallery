angular.module('app')
    .component('appSection', {
        template: require('./section.html'),
        bindings: {
            images: '<'
        },
        controller: function(){

            let ctrl = this;
            ctrl.copiedSuccessful = false;
            
            ctrl.$onInit = function() {
               
                console.log(ctrl.imgToPreview);
                console.log(ctrl.images);
                ctrl.imgToPreview = '';
            }

            ctrl.$onChanges = function(changes){
               if(changes.images){
                   ctrl.images = changes.images.currentValue;
                   ctrl.imgToPreview = ctrl.images[0];
                   console.log('changes', changes);
               } 
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

            // var slideIndex = 1;
            // showSlides(slideIndex);
            
            // function plusSlides(n) {
            //   showSlides(slideIndex += n);
            // }
            
            // function currentSlide(n) {
            //   showSlides(slideIndex = n);
            // }
            
            // function showSlides(n) {
            //   var i;
            //   var slides = document.getElementsByClassName("mySlides");
            //   var dots = document.getElementsByClassName("demo");
            //   var captionText = document.getElementById("caption");
            //   if (n > slides.length) {slideIndex = 1}
            //   if (n < 1) {slideIndex = slides.length}
            //   for (i = 0; i < slides.length; i++) {
            //       slides[i].style.display = "none";
            //   }
            //   for (i = 0; i < dots.length; i++) {
            //       dots[i].className = dots[i].className.replace(" active", "");
            //   }
            //   slides[slideIndex-1].style.display = "block";
            //   dots[slideIndex-1].className += " active";
            //   captionText.innerHTML = dots[slideIndex-1].alt;
            // }




        }
    });

require('./section.css');