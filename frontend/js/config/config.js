(function () {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider', '$mdThemingProvider'];

	function config($routeProvider, $mdThemingProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './templates/home.tpl.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.when('/login', {
				templateUrl: './templates/login.tpl.html',
				controller: 'AuthController',
				controllerAs: 'auth'
			})
			.otherwise('/');

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
	}
})();