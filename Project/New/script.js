var dashboardPageApp = angular.module('dashboardApp', []);
dashboardPageApp.controller('delegationCtrl',function($scope){

    $scope.userprofiles=[];


    $scope.AddStaffModal=function(){
        $('.add-Staff-modal').modal('show');
    };

    $scope.StaffModalClose=function(){
        $('.add-Staff-modal').modal('hide');
    };

    $scope.CancelStaffForm=function(){
        $('.add-Staff-modal').modal('hide');
    };

    $scope.userstemplate=false;




    $scope.addStaffForm=function(){
        var data = {};
        data['firstName'] = $scope.firstName;
        data['lastName'] = $scope.lastName;
        $scope.usertemplate=true;
        $scope.userprofiles.push(data);
        console.log(data);
    }


});

