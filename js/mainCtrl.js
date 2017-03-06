app.controller('mainCtrl', function($scope, mainSrvc, $stateParams) {
    mainSrvc.getProducts().then(function(response) {
        console.log(response.data);
        $scope.products = response.data
        $scope.products.map(function(x) {
            if ($stateParams.id === x.id){
                $scope.product = x
            }
        })
    })
    $scope.setId = function(id){
        $scope.products.map(function(x){
            if(id === x.id){
                $scope.product = x
            }
        })
    }
})
