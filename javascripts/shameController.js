/**
 *
 */
(function() {
    var module = angular.module('shameBot', []);
    
    module.controller('shameDispenser', function($scope) {

        $scope.shamename=generateNewRandomName();

        $scope.generateName = function(){
            $scope.shamename = generateNewRandomName();
        }

        $scope.hoaify = function(){
            var tempName = $scope.shamename

            // Change out all the first name possibilities
            for (var replaceMe in hoaRray){
                tempName = tempName.toLowerCase().replace(hoaRray[replaceMe], 'hoa')
            }

            // other odd cases
            tempName = tempName.toLowerCase().replace(' o', ' hoa')
            
            // Change our all the last name possibilities
            for (var replaceMe in nguyenRay){
                tempName = tempName.toLowerCase().replace(nguyenRay[replaceMe], 'Nguyen')
            }            
            $scope.shamename = tempName;
        }

        $scope.tadify = function(){
            var tempName = $scope.shamename
            tempName = tempName.replace('#', '');
            tempName = "#"+tempName.replace(' ', '');

            tempName = tempName.toLowerCase().replace('you', 'u')
            tempName = tempName.toLowerCase().replace('are', 'r')
                        
            $scope.shamename = tempName;
        }

        $scope.chhabrify = function(){
            var tempName = $scope.shamename

            tempNameArr = tempName.toLowerCase().split(' ');
            tempName = tempNameArr[0] + "'s gay";
                        
            $scope.shamename = tempName;
        }

        function generateNewRandomName() {
            var randomNoun=Math.floor(nounArray.length*Math.random());
            var randomAdj=Math.floor(adjArray.length*Math.random());
            console.log(randomNoun);
            console.log(randomAdj);

            return nounArray[randomNoun].toLowerCase() + " " + 
                                adjArray[randomAdj].toLowerCase();   
        }

    });

})();