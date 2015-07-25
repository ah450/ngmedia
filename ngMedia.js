/*
 * ngMedia 0.0.1
 * (c) 2015 Ahmed H. Ismail
 * License: MIT
 */
(function() {
  'use strict';
  angular.module('angularMedia', [])
    .directive('ifMedia', function($window, ngIfDirective) {
      var ngIf = ngIfDirective[0];
      return {
        transclude: ngIf.transclude,
        priority: ngIf.priority,
        terminal: ngIf.terminal,
        restrict: ngIf.restrict,
        link: function($scope, $element, $attr) {
          var initialNgIf = $attr.ngIf, ifEvaluator;
          if (initialNgIf) {
            ifEvaluator = function () {
              return $scope.$eval(initialNgIf) && $window.matchMedia($attr.ifMedia).matches;
            }
          } else { // if there's no ng-if, process normally
            ifEvaluator = function () {
              return $window.matchMedia($attr.ifMedia).matches;
            };
          }
          $attr.ngIf = ifEvaluator;
          ngIf.link.apply(ngIf, arguments);
          angular.element($window).bind('resize', function() {
            $scope.$apply();
          });
        }
      }
    });
})();