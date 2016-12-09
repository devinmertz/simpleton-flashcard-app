'use strict';

angular
	.module('app', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngAria', 'ngAnimate']);

app.config(function ($routeProvider) {
	$routeProvider
		.otherwise("/", {
			templateUrl: "./templates/home.html",
			controller: "MainController"
		})
		.when("/", {
			templateUrl: "./templates/home.html",
			controller: "MainController"
		})
});