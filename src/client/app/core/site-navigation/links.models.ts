
export interface ILink {
  id?: number;
  title: string;
  description?: string;
  path: string;
  disable?: boolean;
  expanded?: boolean;
  icon?: string;
  iconUrl?: string;
  showAt?: string;
  order?: number;
  createdDate?: Date;
  lastUpdateDate?: Date;
  links?: Link[];
}

export class Link implements ILink {
  id?: number;
  title: string;
  description?: string;
  path: string;
  url: string;
  disable?: boolean;
  expanded?: boolean;
  icon?: string;
  iconUrl?: string;
  showAt?: string;
  order?: number;
  createdDate?: Date;
  lastUpdateDate?: Date;
  links?: Link[];

  constructor(attr: ILink ){
    this.title = attr.title;
    this.path = this.url = attr.path;
    this.id = attr.id;
    this.description = attr.description;
    this.disable = attr.disable;
    this.expanded = attr.expanded;
    this.icon = attr.icon;
    this.iconUrl = attr.iconUrl;
    this.showAt = attr.showAt;
    this.order = attr.order;
    this.createdDate = attr.createdDate;
    this.lastUpdateDate = attr.lastUpdateDate;
    this.links = attr.links
  }

  static fromJSON(linkObj: any): Link {
    linkObj.createdDate = new Date(linkObj.createdDate);
    linkObj.lastUpdateDate = new Date(linkObj.lastUpdateDate);
    if(linkObj.links) {
      linkObj.links = Link.listFromJSON(linkObj.links);
    }
    // More validations to come...
    return new Link(linkObj);
  }
  static listFromJSON(linksObj: Array<any>): Link[] {
    let links: Link[] = [];
    if( Array.isArray(linksObj)) {
      links = linksObj.map<Link>(item => {
        return this.fromJSON(item);
      });
    }
    return links;
  }

}


enum LinkTypes {
  SidMenu = 'side-menu',
  Footer = 'footer',
  TopNav = 'top-navigation'
}
