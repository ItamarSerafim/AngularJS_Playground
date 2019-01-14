import * as angular from 'angular';
import HomeComponent from './home.component';
import routes from './home.routes';
export default angular.module('App.home', [])
.component('homeComponent', new HomeComponent())
.config(['$stateProvider', routes]).name;
