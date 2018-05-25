angular.module('app')
    .service('PreviewedImagesService',['$q', function($q){
        let ctrl = this;
        ctrl.database = {
            'nature': [
               'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/1027393/pexels-photo-1027393.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                
            ],
            'people':[
                'https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ],
            'women':[
                'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/104516/pexels-photo-104516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/354972/pexels-photo-354972.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            ],
            'rain':[
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ],
            'forest':[
                'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',

            ]
        };
        this.getImagesBySection = section => {
            return $q((resolve, reject) => resolve(ctrl.database[section]))
        }
    }])