angular.
  module('electorateList').
  component('electorateList', {
  templateUrl: '../app/electorate-list.template.html',
  controller: function ElectorateListController(){
      this.electorates = [
        {
          electorate: 'Big City',
          mp: 'Jo Bloggs',
          party: 'Bloggs Party'
        },
        {
          electorate: 'Small Town',
          mp: 'Chrispy',
          party: 'First Party'
        }
      ];
    }
  });
