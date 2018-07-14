angular.module('app')
    .service('PreviewedImagesService', ['$q', function ($q) {
        let ctrl = this;
        ctrl.database = {
            'nature': [
                'https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/1027393/pexels-photo-1027393.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/221433/pexels-photo-221433.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/158361/kinzig-shore-trees-mirroring-black-forest-158361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/1039302/pexels-photo-1039302.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

            ],
            'people': [
                'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/692901/pexels-photo-692901.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/214576/pexels-photo-214576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/574177/pexels-photo-574177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

            ],
            'women': [
                'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/104516/pexels-photo-104516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/354972/pexels-photo-354972.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/884977/pexels-photo-884977.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/157967/portrait-woman-girl-blond-157967.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',

            ],
            'black-white': [
                'https://images.pexels.com/photos/104516/pexels-photo-104516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/220836/pexels-photo-220836.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/220836/pexels-photo-220836.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

            ],
            'rain': [
                'https://images.pexels.com/photos/119569/pexels-photo-119569.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/950223/pexels-photo-950223.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/268791/pexels-photo-268791.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/268737/pexels-photo-268737.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/68084/pexels-photo-68084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            ],
            'forest': [
                'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/462149/pexels-photo-462149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

            ]
        };
        this.getImagesBySection = section => {
            return $q((resolve, reject) => resolve(ctrl.database[section]))
        }

        this.getSections = () => {
            return $q((resolve,reject) => resolve(Object.keys(ctrl.database)));
        }
    }])