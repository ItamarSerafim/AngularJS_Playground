import * as angular from 'angular';

export default angular.module('App.about', [])
.component('about',
  {
    template: `<h1>Hello About Component</h1><p>Know about us......</p>`,
    controller: [function(){
      this.sayHello = function(){ alert('Hello About Page!'); }
    }]
  }
)
.name;
