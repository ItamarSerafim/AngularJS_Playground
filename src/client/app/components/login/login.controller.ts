import { IComponentController } from 'angular';

export class LoginController implements IComponentController {

  constructor (){
    console.log('I\'ve been created!!!');
  }

  public sayHello() {
    alert('Hello from Login Controller');
  }
  sayHi() {
    alert('Hi, I\'m from Login Controller');
  }
}
