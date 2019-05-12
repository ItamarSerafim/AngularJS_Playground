import * as angular from 'angular';
import templateUrl from './admin.component.html';
import './admin.component.scss';
import { IRootScopeService } from 'angular';

export default angular.module('App.admin', [])
.component('admin',
{
  templateUrl,
  controller: ['$rootScope', function($rootScope: IRootScopeService){


  this.$onInit = function () {
    reziseCards (null);
  }

  function reziseCards (e: Event) {
    let fWidth = '';
    document.querySelectorAll('.admin-card-wrap .card')
    .forEach( (el: Element, index: number) => {
      if(!fWidth) { fWidth =getComputedStyle(el).width; }
      if( index ) el.style.maxWidth = fWidth;
    });
  }
  $rootScope.$on('app.onWindowResized', reziseCards);

  }]
}).name
