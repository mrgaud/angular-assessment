app.component('shopComponent',{
    templateUrl:'js/components/shopComponent/shopComponent.html',
    controller:function($scope){
        $scope.showImage = function(id){
            $('.'+id).css('display','inline-block')
            $('.'+id+"-hider").css('display','none')
        }
        $scope.hideImage = function(id){
            $('.'+id).css('display','none')
            $('.'+id+"-hider").css('display','block')
        }
    },
    bindings:{
        product:'='
        ,setId:'&'
    }
})
