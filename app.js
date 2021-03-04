(function () {
    'use strict';

    angular.module('luncheck', [])
    .controller('itemscheck', itemscheck);

    itemscheck.$inject = ['$scope'];
    function itemscheck($scope) {
        $scope.items = "";
        const msg = Calculate($scope.items);
        $scope.message = msg;
    };

    function Calculate(string) {
        const word = string.split(',');
        console.log(word[2]);
        for(var i=1; i <= word.length; i++){
            if (word<=3) {
                return "Enjoy!"                
            }
            else
                return "Too Muchi"
        }
        
    }

})();