'use strict';

/**
 * @ngdoc function
 * @name ybhApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ybhApp
 */
angular.module('ybhApp')
  .controller('MainCtrl',['$scope','MainService', function ($scope,MainService,$timeout) {
    
    $scope.regUser = {};
    $scope.saved = false;

    $scope.getData = function(){
      MainService.getContent().then(function(resp){
        $scope.pageData = resp.data[0];
    },function(err){
        console.log(err);
    });
    }
    $scope.getData();

    $scope.registerNewUser = function(user){
      MainService.saveUser(user).then(function(resp){
        swal("Registered Successfully! !");
        $scope.regUser = {};
      },function(err){
          console.log(err);
      })
    }
  }]);
