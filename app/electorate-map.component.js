angular.
  module('electorateMap').
  component('electorateMap', {
    templateUrl: 'electorate-map.template.html',
    controller: function ElectorateMapController($scope){
      $scope.path = 'GenRoll1042x960.png';
        }
  });
