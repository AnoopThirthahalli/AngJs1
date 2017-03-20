

(function () {
  'use strict';
  var app = angular.module("NameCalculator",[]);
    app.controller("NameCalculatorController", function($scope) {
     $scope.name = "";
    $scope.totalValue=0;
    $scope.displayNumeric=function () {
     var totalNmaeValue=calculateNumericString($scope.name);
      $scope.totalValue=totalNmaeValue;
    };

    function calculateNumericString(string) {
      var totString=0;
      totString=string.length;
      // for(var i=0;i<string.length;i++)
      // {
      //   totString+=string.charCodeAt(i);
      // }
      return totString;
      }
  });
})();
