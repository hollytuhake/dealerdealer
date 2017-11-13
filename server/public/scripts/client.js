var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/dealers', {
        templateUrl: 'views/dealers.html',
        controller: 'DealerController as dc'
    }).when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrderController as oc'
    }).when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductController as pc'
    })
});