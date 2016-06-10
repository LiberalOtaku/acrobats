angular.module('acrobatApp', [])
.controller('AcrobatController', function($scope) {
  $scope.acrobats = [];
  $scope.acrobat = {};
  $scope.addAcrobat = function() {
    $scope.acrobats.push($scope.acrobat);
    $scope.acrobat = { name: '', act: '' };
  };
  $scope.removeLastAcrobat = function() {
    $scope.acrobats.pop();
  };
  $scope.editAcrobat = function(acrobat) {
    $scope.editing = true;
    $scope.acrobat = acrobat;
  };
  $scope.updateAcrobat = function() {
    $scope.acrobat = {};
    $scope.editing = false;
  };
  $scope.deleteAcrobat = function(index) {
    $scope.acrobats.splice(index, 1);
  };
});
