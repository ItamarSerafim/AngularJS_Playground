import templateUrl from './home.component.html';
import { IComponentOptions, IComponentController } from 'angular';//"../../../../../node_modules/@types/angular/index";

class HomeComponentController implements IComponentController {

  public greeting: string;

  constructor() { }

  public $onInit () {
    this.greeting = 'Everything works fine!!!';
  }
}

export default class HomeComponent implements IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public templateUrl: string;
  public controllerAs: string;

  constructor() {
    this.controller = HomeComponentController;
    this.templateUrl = templateUrl;
    this.controllerAs = 'vm';
  }
}
