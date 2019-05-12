// import templateUrl from './app.component.html';
import templateUrl from './app.component.html';

import * as angular from 'angular';
import 'angular-ui-router';
import {
  IStateProvider,
  IUrlRouterProvider,
  IState
} from '../../../node_modules/@types/angular-ui-router/index';

import AppComponent from './app.component';
import adminModule from './admin/index'; // It is not in components folder because is a module and should be lazy loaded.
import aboutModule from './components/about/index';
import homeModule from './components/home/index';
import loginModule from './components/login/index';
import notFoundModule from './components/not-found/index';
import contactModule from './components/contact/index';
import makeScrollModule from './dev-support-components/make-scroll/index'; /* TODO: remove this test*/
import sideNavModule from './components/side-navigation/index';

import { IWindowService, IRootScopeService } from 'angular';

let app: ng.IModule = angular.module('App', [
  'ui.router',
  homeModule,
  notFoundModule,
  aboutModule,
  makeScrollModule,
  loginModule,
  contactModule,
  sideNavModule,
  adminModule
])
// TODO: What did I want to do here? Can't remember
// .run(['$rootScope', function($rootScope: ng.IScope, $state: IState){
//   $rootScope['$state']  = $state;
// }])
.run(["$window", "$rootScope", function ($window: IWindowService, $rootScope: IRootScopeService) {
  window['leRootScope'] = $rootScope;
  $window.addEventListener('resize', function(e) {
    $rootScope.$broadcast('app.onWindowResized', e);
  });
} ])
.service('windowService', ['$window', '$rootScope', function($window: IWindowService, $rootScope: IRootScopeService ){
  function onWindowResized() {
    $window.addEventListener('resize', function(e){
      $rootScope.$broadcast('app.onWindowResized', e);
    })
  }

  return {
    onWindowResized
  }
}])
.component('appComponent', new AppComponent())
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
    .state({
      name: 'admin',
      url: '/admin',
      component: 'admin',

    })
    .state({
      name: 'site-navigation',
      url: '/site-navigation',
      component: 'site-navigation',

    })
    .state('dashboard.section01',{
      url: '/section01',
      template: '<section01></section01>'
    })
    .state('dashboard.section02',{
      url: '/section02',
      template: '<section02></section02>'
    })
    .state('main', {
      url: '',
      redirectTo: 'home'
    })
    .state('home', {
      url: '/home',
      component: 'home'
    })
    .state('about', {
      url: '/about',
      component: 'about'
    })
    .state('contact', {
      url: '/contact',
      component: 'contact'
    })
    .state('notfound', {
      url: '/notfound',
      component: 'notfound'
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
    });

    $urlRouterProvider.otherwise('/notfound');
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['App']);
});

console.log('Hey! \nthis is angulaJs!');

