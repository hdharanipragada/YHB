'use strict';
 angular.module('ybhApp').service('MainService',['$http',function($http){
     this.saveUser = function(user){
         return $http({
                url: 'http://serve-angcomp.rhcloud.com/api/YBHuser/',
                method: 'POST',
                data: user,
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
     }
          this.getContent = function(){
         return $http({
                url: '../../Fixtures/contents.json',
                method: 'GET',
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
     }
     
 }]);