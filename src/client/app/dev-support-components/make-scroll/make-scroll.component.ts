import templateUrl from './make-scroll.component.html';
import { IComponentOptions, IComponentController } from "../../../../../node_modules/@types/angular/index";

class MakeScrollComponentController implements IComponentController {

  public greeting: string;

  constructor() { }


  public $onInit () {
    this.greeting = 'Everything works fine!!!';
  }
}

export default class MakeScrollComponent implements IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public templateUrl: string;
  public controllerAs: string;

  constructor() {
    this.controller = MakeScrollComponentController;
    this.templateUrl = templateUrl;
    this.controllerAs = 'vm';
  }
}
