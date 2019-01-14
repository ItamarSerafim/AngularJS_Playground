import { Link } from '../../core/site-navigation/links.models';
import { ILocationService } from '../../../../../node_modules/@types/angular/index';

export default class SideNavController implements ng.IComponentController {
  links: Link[];
  public static $inject: string[] = ['$location'];
  constructor(private $location: ILocationService){}

  goto(link: Link){
    console.log(link, "\t state is printed to the console...");
    link.expanded = !link.expanded;
    this.$location.path(link.url);
  }

  // $onInit(){
  // }
}
