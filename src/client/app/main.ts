// import templateUrl from './app.component.html';
import templateUrl from './app.component.html';

import * as angular from 'angular';
import 'angular-ui-router';
import {
  IStateProvider,
  IUrlRouterProvider,
  IState
} from '../../../node_modules/@types/angular-ui-router/index';
import homeModule from './components/home/index';
import makeScrollModule from './dev-support-components/make-scroll/index'; /* TODO: remove this test*/
import AppComponent from './app.component';
import { AppComponentController } from './app.component';
import sideNavModule from './components/side-navigation/index';

let app: ng.IModule = angular.module('App', ['ui.router', homeModule, makeScrollModule, sideNavModule])
// TODO: What did I want to do here? Can't remember
// .run(['$rootScope', function($rootScope: ng.IScope, $state: IState){
//   $rootScope['$state']  = $state;
// }])
.component('appComponent', new AppComponent())
// TODO Remove this test component
.component('test', {
  template: '<h1>{{message}}, It\'s me!</h1>',
  controller: [
    '$scope',
    function testController($scope) {
      $scope.message = 'Hello test!';
    }
  ]
})

.component('dashboard', {
  template: `
    <h1>Dashboard component not implemented.</h1>
    <p class="warning">Coming soon!</p>
    <ul class="list-inline">
    <li class="list-inline-item" ng-class="{ active: $state.includes('section01') }"><a class="btn btn-default" ui-sref=".section01">Section #1</a></li>
    <li class="list-inline-item" ng-class="{ active: $state.includes('section02') }"><a class="btn btn-default" ui-sref=".section02">Section #2</a></li>

    </ul>
    <div ui-view=""></div>
  `
})
.component('section01', {
  template: `
    <h3>Section #1 component not implemented.</h3>
    <p class="warning">Coming soon!</p>
  `
})
.component('section02', {
  template: `
    <h3>Section #2 component not implemented.</h3>
    <p class="warning">Coming soon!</p>
  `
})
.component('login', {
  template: `
    <h1>Login component not implemented.</h1>
    <p class="warning">Coming soon!</p>
  `
})

.component('slide-gallery', {
  template: `
    <h1>Slide Gallery component not implemented.</h1>
    <p class="warning">Coming soon!</p>
  `
})

.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider ) => {
    $stateProvider

    .state({
      name: 'dashboard',
      url: '/admin/dashboard',
      component: 'dashboard',

    })
    .state('dashboard.section01',{
      url: '/section01',
      template: '<section01></section01>'
    })
    .state('dashboard.section02',{
      url: '/section02',
      template: '<section02></section02>'
    })
    .state({
      name: 'login',
      url: '/login',
      component: 'login'
    })
    .state({
      name: 'slide-gallery',
      url: '/slide-gallery',
      component: 'slide-gallery'
    })
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

