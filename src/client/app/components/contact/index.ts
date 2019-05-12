import * as angular  from 'angular';

export default angular.module('App.contact', [])
.component('contact', {
  template: `<h1>Contact page</h1>`,
  controller: [function(){
    this.sayHello = function(){ alert('Hello contact!'); }
  }]
}).name
