import * as angular from "angular";
import "./side-nav.component.scss";
import { Link } from "../../core/site-navigation/links.models";
import SideNavService from "./side-nav.service";
import SideNavComponent from "./side-nav.component";

const sideNaveModule = angular
  .module("app.sidenav", [])
  .service('sidenavService', [SideNavService])
  .component("sublink", {
    bindings: {
      links: "="
    },
    template: `
    <ul class="list-unstyled sidenav-sublinks">
      <li  class="link-item"
        data-ng-repeat="link in  $ctrl.links | filter: $ctrl.searchQuery as results"
        data-ng-init="link.expanded = (results.length == 1)">
        <a class="btn" data-ng-click="$ctrl.goto(link)">
            <i class="fa fa-{{::link.icon || 'dot-circle'}}" data-ng-if="!link.iconUrl"></i>
            <i class="link-iconurl" data-ng-if="link.iconUrl" style="background-image: url({::link.iconUrl})"></i>
            <span class="flex text-left">{{link.title}}</span>
            <i data-ng-if="link.links.length" class="fa fa-chevron-down" data-ng-class="{expanded: link.expanded}"></i>
        </a>

        <sublink
          data-ng-class="{'expanded': (link.expanded || results.length == 1)}"
          da-ng-if="link.links.length" links="link.links"></sublink>
      </li>
    <ul>
  `,
    controller: [
      "$scope",
      "$state",
      function($scope, $state) {
        this.goto = function(link: Link) {
          console.log(link, "\t state is printed to the console...");
          link.expanded = !link.expanded;
          $state.go(link.url);
        };
      }
    ]
  })
  .component('appSideNav', new SideNavComponent())
  .name;

export default sideNaveModule;
