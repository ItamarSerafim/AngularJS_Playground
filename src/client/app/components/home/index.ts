

import * as angular from 'angular';
import HomeComponent from './home.component';
import './home.component.scss';
export default angular.module('App.home', [])
.component('home', new HomeComponent)
.name
