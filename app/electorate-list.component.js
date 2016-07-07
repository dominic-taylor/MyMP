angular.
  module('mpApp').
  component('electorateList', {
  template:
  '<ul>' +
    '<li ng-repeat="electorate in $ctrl.electorates">' +
      '<p>{{electorate.electorate}}</p>' +
      '<p>{{electorate.mp}} </p>' +
      '<p>{{electorate.party}} </p>' +
      '<p>Number of MPS: {{electorates.length}}</p>'+
    '</li>' +
  '</ul>',
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
