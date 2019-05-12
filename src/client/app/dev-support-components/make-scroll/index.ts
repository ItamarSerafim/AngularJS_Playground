import * as angular from 'angular';
import HomeComponent from './make-scroll.component';
import { IStateProvider } from 'angular-ui-router';

export default angular.module('App.makeScroll', [])
.component('makeScrollComponent', new HomeComponent())
.config(['$stateProvider', function routes($stateProvider: IStateProvider) {

  $stateProvider
  .state({
    name: 'make-scroll',
    url: '/make-scroll',
    component: 'makeScrollComponent'
  });
}]).name;
