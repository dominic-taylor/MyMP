angular.
  module('electorateMap').
  component('electorateMap', {
    templateUrl: 'electorate-map.template.html',
    controller: function ElectorateMapController($scope){
      $scope.path = 'New_Zealand_electorate_2014.svg';
        }
  });
