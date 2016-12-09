'use strict';

angular
	.module('app', ['ngMaterial', 'ngRoute', 'ngMessages', 'ngAria', 'ngAnimate']);

angular
	.module('app')
	.config(function ($routeProvider, $mdThemingProvider) {
		$routeProvider
			.otherwise("/", {
				templateUrl: "./templates/home.html",
				controller: "MainController"
			})
			.when("/", {
				templateUrl: "./templates/home.html",
				controller: "MainController"
			});

		$mdThemingProvider.theme('default')
			.primaryPalette('green', {
				'default': '600',
				'hue-1': '100',
				'hue-2': '800',
				'hue-3': 'A100'
			})
			.accentPalette('orange', {
			'default': '200' 
		});
	});