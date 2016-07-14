angular.
  module('electorateMap').
  component('electorateMap', {
    templateUrl: 'electorate-map.template.html',
    controller: function ElectorateMapController($scope){
      // if option is maori path = maori
      // else path is == general
      $scope.path = 'GenRoll1042x960.png';
        }
  });
