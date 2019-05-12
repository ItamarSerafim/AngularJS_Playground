import { IStateProvider } from 'angular-ui-router';

export default function routes($stateProvider: IStateProvider) {

  $stateProvider
  .state({
    name: 'home',
    url: '/home',
    component: 'home'
  });
}
