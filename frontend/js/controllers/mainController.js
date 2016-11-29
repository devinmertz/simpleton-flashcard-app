(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log'];

    function MainController($log) {
        var mc = this;

        mc.test = 'Testing';
        $log.info('Test');
    }
})();