import * as angular from 'angular';
import templateUrl from './login.component.html';
import './login.component.scss';
import { LoginController } from './login.controller';

export default angular.module('App.login', [])
.component('login',
  {
    templateUrl,
    controller: LoginController
  }
)
.name;

// login.component.
