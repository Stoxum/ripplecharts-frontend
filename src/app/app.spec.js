describe('AppCtrl', function () {

  it('should have Options defined', inject(function () {
    expect(Options).not.toBeUndefined();
  }));

  it('should have Options.stoxum defined', inject(function () {
    expect(Options.stoxum).not.toBeUndefined();
  }));

  it('should have Options.stoxum.server defined', inject(function () {
    expect(Options.stoxum.server).not.toBeUndefined();
  }));


  describe('isCurrentUrl', function () {
    var AppCtrl, $location, $scope;

    beforeEach(module('stoxumcharts'));

    beforeEach(inject(function ($controller, _$location_, $rootScope) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
    }));

    //it( 'should pass a dummy test', inject( function() {
    //  expect( AppCtrl ).toBeTruthy();
    //}));
  });
});
