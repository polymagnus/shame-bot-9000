/**
 *
 */
(function() {
    var module = angular.module('shameBot', []);
    
    module.controller('shameDispenser', function($scope) {

        $scope.shamename='Fairy Princesses';

        $scope.generateName = function(){

            var randomNoun=Math.floor(nounArray.length*Math.random());
            var randomAdj=Math.floor(adjArray.length*Math.random());

            $scope.shamename =  nounArray[randomNoun].toLowerCase() + " " + 
                                adjArray[randomAdj].toLowerCase();
        }

        $scope.hoaify = function(){
            var tempName = $scope.shamename

            // Change out all the first name
            for (var replaceMe in hoaRray){
                tempName = tempName.toLowerCase().replace(hoaRray[replaceMe], 'Hoa')
            }

            // Change our all the last name
            for (var replaceMe in nguyenRay){
                tempName = tempName.toLowerCase().replace(nguyenRay[replaceMe], 'Nguyen')
            }            
            $scope.shamename = tempName;
        }

    });

})();