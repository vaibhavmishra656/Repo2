ShareApp.controller("testCtr", ["$scope", "$http", "$timeout", "SharewebListService", "SharewebCommonFactoryService", "GlobalConstants",
    function ($scope, $http, $timeout, SharewebListService, SharewebCommonFactoryService, GlobalConstants) {
    let listID = "653eaeb8-ca8f-406b-9764-96638124c1ee";
    let urlPath = _spPageContextInfo.webAbsoluteUrl;
    let listpath = "/getbyid('" + listID + "')/items?$select=Id,Title,LastName,FirstName,EmpID,DeptID,Email,Phone"
    $scope.getItems =function(){    
        SharewebListService.getRequest(urlPath,listpath).then(function(data){
            $scope.items = data.d.results;
        },
        function(data){
            alert(JSON.stringify(data));
        }
        )}
    $scope.getItems();

}]);