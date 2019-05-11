import * as angular from 'angular';
import { IStateProvider } from 'angular-ui-router';

export default angular.module('App.about', [])
// .config(['$stateProvider', function($stateProvider: IStateProvider) {
//   console.log('Configuring about page......................................');
//   $stateProvider.state('about', {
//     url: 'about',
//     component: 'about'
//   })
// }])
.component('about',
  {
    template: `<h1>Hello About Component</h1>`,
    controller: function(){
      this.sayHello = function(){ alert('Hello About Page!'); }
    }
  }
)
.name;


// export default angular.module('App.home', [])
// .component('homeComponent', new HomeComponent())
// .config(['$stateProvider', routes]).name;
