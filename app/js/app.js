angular
  .module('MainApp', ['ngMaterial', 'ngMdIcons'])
  
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('red');
  })
  
  
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    var ctrl = this;
    
    ctrl.toggleMenu = function() {
      $mdSidenav('left').toggle();
      console.log("Menu toggled");
    }
  })
  
;