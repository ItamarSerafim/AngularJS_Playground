// import templateUrl from './app.component.html';
import templateUrl from './app.component.html';

import * as angular from 'angular';
import 'angular-ui-router';
import {
  IStateProvider,
  IUrlRouterProvider
} from '../../../node_modules/@types/angular-ui-router/index';
import homeModule from './components/home/index';
import makeScrollModule from './dev-support-components/make-scroll/index'; /* TODO: remove this test*/
import AppComponent from './app.component';
import { AppComponentController } from './app.component';
import sideNavModule from './components/side-navigation/index';

let app: ng.IModule = angular.module('App', ['ui.router', homeModule, makeScrollModule, sideNavModule])

.component('appComponent', new AppComponent())

.component('test', {
  template: '<h1>{{message}}</h1>',
  controller: [
    '$scope',
    function testController($scope) {
      $scope.message = 'Hello test!';
    }
  ]
})
.component('testio', {
  template: '<h1>{{message}}</h1>',
  controller: [
    '$scope',
    function testController($scope) {
      $scope.message = 'This is testio component';
    }
  ]
})

.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider ) => {
    $stateProvider
    .state({
      name: 'test',
      url: '/test',
      component: 'test'
    })
    .state({
      name: 'testio',
      url: '/testio',
      component: 'testio'
    });

    $urlRouterProvider.otherwise('/test');
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['App']);
});

console.log('Hey! \nthis is angulaJs!');
