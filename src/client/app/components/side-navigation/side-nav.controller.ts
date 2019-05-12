import { Link } from '../../core/site-navigation/links.models';
import { ILocationService } from '../../../../../node_modules/@types/angular/index';
import { IState } from '../../../../../node_modules/@types/angular-ui-router/index';

export default class SideNavController implements ng.IComponentController {
  links: Link[];

  $state: IState;
  public static $inject: string[] = ['$location', '$state'];
  constructor(private $location: ILocationService, $state: IState){
    this.$state = $state;
  }

  goto(link: Link){
    link.expanded = !link.expanded;
    this.$location.path(link.url || link.path);
  }

  isActiveUrl = function(url: string){
    const isActiveUrl = this.$state.$current.parent.self.url + this.$state.$current.self.url === '/' + url;
    return isActiveUrl;
  }


  // $onInit(){
  // }
}
