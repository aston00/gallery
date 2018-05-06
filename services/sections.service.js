angular.module('app')
    .service('SectionsService',['$q', function($q){
        this.getSections = function(){
            return $q((resolve, reject) => {
                resolve([
                    'nature', 
                    'people',
                    'women',
                    'rain',
                    'forest'
                ])
            })
        }
        
    }]);