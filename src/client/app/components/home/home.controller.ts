
class HomeComponentController implements ng.IComponentController {

  public greeting: string;

  constructor() {}

  public $onInit () {
    this.greeting = 'Hello from Home component!';
  }
}


export default class HomeController implements ng.IComponentController {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public template: string;

  constructor() {
    this.controller = HomeComponentController;
    this.template = `
      <h3>{{greeting}}</h3>
    `;
  }
}
