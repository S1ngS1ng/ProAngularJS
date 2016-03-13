/**
 * Created by Xing on 12/18/15.
 */
var controllersModule = angular.module("exampleApp.Controllers", []);
controllersModule.controller("dayCtrl", function($scope, days){
    $scope.day = days.today;
});
controllersModule.controller("tomorrowCtrl", function($scope, days){
    $scope.day = days.tomorrow;
})