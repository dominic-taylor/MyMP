angular.
  module('electorateList').
  component('electorateList', {
    templateUrl: 'electorate-list/electorate-list.template.html',
    controller: function ElectorateListController($http){
          $http.get('electorates.json').then(function(response){
            self.electorates = response.data;
          });
          var self = this;
          self.orderProp = 'party';
          self.quantity = 3;
          
        }
  });
