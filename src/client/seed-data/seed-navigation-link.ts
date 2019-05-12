const seedLinks = [
  {
    title: "Site Adminstration",
    description: "Site administration page.",
    path: "admin",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/admin-user.png",
    order: 1,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 1,
    lastUpdateDate: "2018-09-20T03:55:31.377Z",
    showAt: "side-menu",
    links: [
      {
        title: "Dashboard",
        description: "Go to dashboard page.",
        path: "admin/dashboard",
        disable: false,
        expanded: false,
        icon: "icon-bar-chart",
        iconUrl: "",
        order: 1,
        id: 1,
        showAt: "side-nav",
        links: [
          {
            title: "Section #1",
            description: "Go to dashboard section #1",
            path: "admin/dashboard/section01",
            disable: false,
            expanded: false,
            icon: "icon-skype",
            iconUrl: "",
            order: 9999999
          },
          {
            title: "Section #2",
            description: "Go to dashboard section #2",
            path: "admin/dashboard/section02",
            disable: false,
            expanded: false,
            icon: "icon-instagram",
            iconUrl: "",
            order: 9999999
          },
        ]
      },
      {
        title: "Gerenciar usuário",
        description: "Ir para a página de gerenciar usuários.",
        path: "admin/user-management",
        disable: false,
        expanded: false,
        icon: "people",
        iconUrl: "",
        order: 9999999,
        createdDate: "2018-09-23T19:09:43.884Z",
        id: 1,
        lastUpdateDate: "2018-09-22T21:21:06.397Z",
        showAt: "",
        links: [
          {
            title: "Permissões",
            description: "Gerenciar permissões de usuários.",
            path: "admin/manage-user-permissions",
            disable: false,
            expanded: false,
            icon: "people",
            iconUrl: "",
            order: 9999999
          }
        ]
      }
    ]
  },
  {
    title: "TODO's",
    description: "Manage all your todo's",
    path: "todos",
    disable: false,
    expanded: false,
    icon: "list",
    iconUrl: "",
    order: 5,
    createdDate: "2018-09-23T19:09:43.884Z",
    id: 2,
    lastUpdateDate: "2018-09-23T04:10:44.980Z",
    showAt: "side-menu"
  },
  {
    title: "Link with very, very long text",
    description: "View and manage this site features.",
    path: "site-features",
    disable: false,
    expanded: false,
    icon: "apps",
    iconUrl: "",
    order: 9999999,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 4,
    lastUpdateDate: "2018-09-20T01:49:41.117Z",
    showAt: "side-menu"
  },
  {
    title: "User permissions",
    description: "Manage user permissions.",
    path: "admin/site-settings/user-permissions",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/user-permission-dark.png",
    order: 2,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 6,
    lastUpdateDate: "2018-09-17T05:30:43.120Z"
  },
  {
    title: "Checklists",
    description: "Create and manage checklists",
    path: "checklists",
    disable: false,
    expanded: false,
    icon: "format_list_numbered",
    iconUrl: "",
    order: 2,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 9,
    lastUpdateDate: null,
    showAt: "side-menu"
  },
  {
    title: "Manage authentication and authorization.",
    description:
      "Manage authentication and authorization in resources of this site.",
    path: "auth-management",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/admin-auth-tile.png",
    order: 2,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 10,
    lastUpdateDate: "2018-09-23T20:08:25.599Z",
    showAt: "admin-page"
  },
  {
    title: "Manage API",
    description: "Manage you API and other data resources.",
    path: "api-management",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/admin-api-management.png",
    order: 3,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 12,
    lastUpdateDate: "2018-09-23T19:18:01.619Z",
    showAt: "admin-page"
  },
  {
    title: "Manage data  - Import/export",
    description: "Manage your data. Import and export",
    path: "data-management",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/admin-data-management.png",
    order: 4,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 15,
    lastUpdateDate: "2018-09-23T19:17:01.392Z",
    showAt: "admin-page"
  },
  {
    title: "Manage site navigation",
    description: "Manage site navigation links",
    path: "site-navigation",
    disable: false,
    expanded: false,
    icon: "",
    iconUrl: "assets/images/admin-site-navigation.png",
    order: 1,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 22,
    lastUpdateDate: "2018-09-23T03:35:26.444Z",
    showAt: "admin-page"
  },
  {
    title: "Manage imports/exports",
    description: "Manage your data, imports and exports",
    path: "admin/data-management",
    disable: false,
    expanded: false,
    icon: "import_export",
    iconUrl: "",
    order: 3,
    createdDate: "2018-09-23T19:09:43.886Z",
    id: 25,
    lastUpdateDate: "2018-09-23T20:18:54.456Z",
    showAt: "side-menu"
  },
  {
    title: "Insights",
    description: "See dashboards and charts on your data",
    path: "insights",
    disable: "",
    expanded: false,
    icon: "show_chart",
    iconUrl: "",
    showAt: "side-menu",
    order: 4,
    createdDate: "2018-09-23T20:26:01.709Z",
    id: 26
  },
  {
    title: "Login",
    description: "Go to login component",
    path: "login",
    disable: false,
    expanded: false,
    icon: "icon-skype",
    iconUrl: "",
    order: 9999999
  },
  {
    title: "About us",
    description: "Go to About us component",
    path: "about",
    disable: false,
    expanded: false,
    icon: "heart",
    iconUrl: "",
    order: 9999999
  },
  {
    title: "contact",
    description: "Get in touch with us",
    path: "contact",
    disable: false,
    expanded: false,
    icon: "id-card",
    iconUrl: "",
    order: 9999999
  }
];

export default seedLinks;
