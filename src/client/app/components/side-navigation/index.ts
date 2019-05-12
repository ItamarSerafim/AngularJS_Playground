import * as angular from "angular";
import "./side-nav.component.scss";
import { Link } from "../../core/site-navigation/links.models";
import SideNavService from "./side-nav.service";
import SideNavComponent from "./side-nav.component";

const sideNaveModule = angular
  .module("App.sidenav", [])
  .service('sidenavService', [SideNavService])
  .component("sublink", {
    bindings: {
      links: "="
    },
    //  data-ng-init="link.expanded = (results.length == 1)"
    template: `
    <ul class="list-unstyled sidenav-sublinks" >
      <li  class="link-item"
        data-ng-repeat="link in  $ctrl.links | filter: $ctrl.searchQuery as results"
        ng-class="{ active: $ctrl.isActiveUrl(link.url), expanded: link.expanded, collapsed: !link.expanded }"
        >
        <a class="btn" data-ng-click="$ctrl.goto(link)" ui-sref-active="active" ui-sref="{{link.url}}" >
            <i class="fa fa-{{::link.icon || 'dot-circle'}}" data-ng-if="!link.iconUrl"></i>
            <i class="link-iconurl" data-ng-if="link.iconUrl" style="background-image: url({::link.iconUrl})"></i>
            <span class="flex text-left">{{link.title}}</span>
            <i data-ng-if="link.links.length" class="fa fa-chevron-down" data-ng-class="{expanded: link.expanded}"></i>
        </a>

        <sublink
          data-ng-class="{'expanded': (link.expanded || results.length == 1)}"
          data-ng-if="link.links.length" links="link.links"></sublink>
      </li>
    <ul>
  `,
    controller: [
      "$scope",
      "$state",
      '$location',
      function($scope, $state, $location) {

        this.isActiveUrl = function(url: string){
          let parentRoute = $state.$current.parent;

          const isActiveUrl = parentRoute && (parentRoute.self.url + $state.$current.self.url === ('/' + url) );
          return isActiveUrl;
        }

        this.goto = function(link: Link) {
          link.expanded = !link.expanded;
          this.$state = $scope.$state = $state;

          console.log("\t link.url : ", link.url );
          $location.path(link.url || link.path);
          $state.go(link.url );
          this.currentState = $state.$current.name;
          console.log($state.$current.self.url);

        };
      }
    ]
  })
  .component('appSideNav', new SideNavComponent())
  .name;

export default sideNaveModule;
