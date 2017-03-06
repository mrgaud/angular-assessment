var app = angular.module('assessment', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'views/home.html'
    })
    .state('shop',{
        url:'/shop',
        templateUrl:'views/shop.html'
    })
    .state('blog',{
        url:'/blog',
        templateUrl:'views/blog.html'
    })
    .state('about',{
        url:'/about',
        templateUrl:'views/about.html'
    })
    .state('product',{
        url:'/product/:id',
        templateUrl:'views/product-details.html'
    })
})
