var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
  var helloState = {
    name: 'home',
    url: '/home',
    template: '<h3>home world!</h3>'
  }

  var loginState = {
    name: 'login',
    url: '/login',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  var registerState = {
    name: 'register',
    url: '/register',
    template: '<h3>The Registration state</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(loginState);
  $stateProvider.state(registerState);
});