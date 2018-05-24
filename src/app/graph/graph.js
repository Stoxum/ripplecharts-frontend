angular.module('stoxumcharts.graph', [
  'ui.state',
  'ui.bootstrap',
  'stoxumName'
])

  .config(function config($stateProvider) {
    $stateProvider.state('graph-id', {
      url: '/graph/:id',
      views: {
        "main": {
          controller: 'GraphCtrl',
          templateUrl: 'graph/graph.tpl.html'
        }
      },
      data: { pageTitle: 'Account Explorer' }
    })
      .state('graph', {
        url: '/graph',
        views: {
          "main": {
            controller: 'GraphCtrl',
            templateUrl: 'graph/graph.tpl.html'
          }
        },
        data: { pageTitle: 'Account Explorer' }
      });
  })

  .controller('GraphCtrl', function GraphCtrl($scope, $state, $location, stoxumName) {
    if ($state.params.id) {
      store.session.set('graphID', $state.params.id);
      //$location.path("/graph").replace();
    }

    var graph = new networkGraph(stoxumName);
    //stop the listeners when leaving page
    $scope.$on("$destroy", function () {
      graph.suspend();
    });
  });
