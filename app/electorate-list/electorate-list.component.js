angular.
  module('electorateList').
  component('electorateList', {
    templateUrl: 'electorate-list/electorate-list.template.html',
    controller: function ElectorateListController($http){
          var self = this;
          self.orderProp = 'party';


          $http.get('electorates.json').then(function(response){
            self.electorates = response.data;
          });
        }
  });
