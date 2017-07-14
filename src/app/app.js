'use strict';

angular
    .module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',

        'BlurAdmin.theme',
        'BlurAdmin.pages'
    ])


.constant('appConfig', {
    title: '<span>ATF</span>&nbsp;Board',
    logo: '',
    state: 'dashboard'

})

.controller('mainCtrl', MainController)

.filter('trust', trustHtml)

;
/** @ngInject */
function MainController($scope, appConfig) {
    $scope.config = appConfig;

}

/** @ngInject */
function trustHtml($sce) {
    return function(html) {
        return $sce.trustAsHtml(html);
    }

}