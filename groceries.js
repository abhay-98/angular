var app = angular.module('app',[]);
    app.controller('ctrl',function($scope){
$scope.groceries=[
    {item:'potatoes', purchased: false },
    {item:'tomatoes', purchased: false },
    {item:'brinjal', purchased: false },
    {item:'asparagus', purchased: true }
];
   
$scope.getList = function(){
    return $scope.showList ? "list.html" : "unlist.html";
  };
 
});