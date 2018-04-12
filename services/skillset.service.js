class SkillsetService {
    constructor($q) {
        this.q = $q;
    }

    getSkillset = function () {
        this.q((resolve, reject) => {
            return resolve([
                'JS',
                'NodeJS',
                'AngularJS 1.x',
                'ReactJS'
            ])
        })
    }
}

angular.module('app')
    .service('SkillsetService', ['$q', SkillsetService]);