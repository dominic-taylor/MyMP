angular.
  module('electorateMap').
  component('electorateMap', {
    templateUrl: 'app/electorate-map/electorate-map.template.html',
    controller: function ElectorateMapController($scope){
      $scope.path = 'GenRoll1042x960.png';
        }
  });
