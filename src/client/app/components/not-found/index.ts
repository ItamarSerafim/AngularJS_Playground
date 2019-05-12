import * as angular from 'angular';

export default angular.module('App.notFound', [])
.component('notfound', {
  template: `<h1>Not Found</h1><p>{{$ctrl.message}}</p>`,
  controller: function() {
    this.message = 'Sorry, we couldn\'t find this page.'
  }
})
.name
