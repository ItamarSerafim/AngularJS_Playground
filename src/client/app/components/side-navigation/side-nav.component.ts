
import { IComponentOptions } from "../../../../../node_modules/@types/angular/index";
import SideNavController from "./side-nav.controller";
import templateUrl from './side-nav.component.html';
export default class SideNavComponent implements IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public templateUrl: string;
  public controllerAs: string;
  public bindings = {
    links: "<"
  }
  constructor(){
    this.controller = SideNavController;
    this.templateUrl = templateUrl;
    this.controllerAs = 'vm'; // FIXME: don't use controllerAs
    // this.bindings = {
    //   links: "<"
    // }
  }
}
