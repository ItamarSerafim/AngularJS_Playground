import templateUrl from './app.component.html';
import './app.component.scss';
import { IComponentOptions, IComponentController } from "../../../node_modules/@types/angular/index";
import routes from './components/home/home.routes';

import SideNavService from './components/side-navigation/side-nav.service';
import { Link } from './core/site-navigation/links.models';

export class AppComponentController implements IComponentController {

  public greeting: string;
  links: Link[] = [];
  public static $inject: string[] = ["sidenavService"];

  constructor(private sideNavService: SideNavService) {
    this.links = this.sideNavService.links;
  }

  sayHello() {
    alert('It is about to say hello');
    console.log('It is about to say hello');
    this.sideNavService.sayHello();
  }
  openSidenav(){
    this.sideNavService.open = true;
  }

  toggleSidenav(){
    this.sideNavService.open = !this.sideNavService.open;
  }


  public $onInit () {
    this.links = this.sideNavService.links;
    this.greeting = 'Everything works fine!!!';
  }
}

export default class AppComponent implements IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public templateUrl: string;
  public controllerAs: string;

  constructor() {
    this.controller = AppComponentController;
    this.templateUrl = templateUrl;
    this.controllerAs = 'vm'; // FIXME: Don't use controllerAs

  }

}


// TODO:
// 1. Implement side navigation layout controller.
// 2. Implement top navigation layout controller.
// 3. Implement mobile layout adaptations.
// 4.

