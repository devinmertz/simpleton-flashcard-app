(function () {
    'use strict';

    angular
        .module('app')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$log'];

    function AuthController($log) {
        var mc = this;

        mc.test = 'Testing';
        $log.info('Test');
    }
})();