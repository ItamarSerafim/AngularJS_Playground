import { Link } from '../../core/site-navigation/links.models';
import seedLinks from '../../../seed-data/seed-navigation-link';

export default class SideNavService {
  seedLinks: Link[]; //TODO: remove this mock
  links: Link[] = seedLinks.map<Link>(link => Link.fromJSON(link));
  private isOpen: boolean = true;
  constructor(){

  }
  get open(): boolean { return  this.isOpen; }
  set open(flag: boolean) { this.isOpen = flag; }

  sayHello() {alert('Hello Service!')}
}
