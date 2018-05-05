angular.module('app')
    .service('SectionsService',['$q', function($q){
        this.getSections = function(){
            return $q((resolve, reject) => {
                resolve([
                    'Nature', 
                    'People',
                    'women',
                    'rain',
                    'forest'
                ])
            })
        }
        
    }]);