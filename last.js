var app= angular.module('app',[]);
app.controller('ctrl',function($scope){
    $scope.keydown = function(e) {
        $scope.kdPress = String.fromCharCode(e.keyCode);
      };
      $scope.disableButton= true;
});