import { IComponentController, IRootScopeService } from 'angular';

export class AdminController implements IComponentController {
  public static $inject: string[] = ["$rootScope"];
  constructor (private $rootScope: IRootScopeService) {

    $rootScope.$on('app.onWindowResized', this.reziseCards);
  }


  public $onInit() {
    this.reziseCards (null);
  }

  private reziseCards (e: Event) {
    let fWidth = '';
    document.querySelectorAll('.admin-card-wrap .card')
    .forEach( (el: Element, index: number) => {
      if(!fWidth) { fWidth =getComputedStyle(el).width; }
      if( index ) el.style.maxWidth = fWidth;
    });
  }


}
