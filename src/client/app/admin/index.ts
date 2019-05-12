import * as angular from 'angular';
import templateUrl from './admin.component.html';
import './admin.component.scss';
import { AdminController } from './admin.controller';

export default angular.module('App.admin', [])
.component('admin',
{
  templateUrl,
  controller: AdminController
}).name
