function routerConfig ($stateProvider, $urlRouterProvider) {
 $stateProvider
   .state('root', {
     abstract: true,
     templateUrl: 'templates/root.tpl.html'
   })
   .state('root.main', {
     url: '/',
     templateUrl: 'templates/main.tpl.html'
   })
   .state('root.main.login', {
     url: 'login',
     templateUrl: 'templates/login.tpl.html',
     controller: 'LoginController as login'
   })
   .state('root.main.register', {
     url: 'register',
     templateUrl: 'templates/register.tpl.html',
     controller: 'RegisterController as register'
   })
   .state('root.user', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
   })
   .state('root.user.class', {
    url: '/class',
    template: '<ui-view></ui-view>'
   })
   .state('root.user.class.list', {
    url: '/list',
    templateUrl: 'templates/listclass.tpl.html',
    controller: 'ClassController as class'
   })
   .state('root.user.class.about', {
    url: '/about',
    templateUrl: 'templates/about.tpl.html',
    controller: 'AboutController as about'
   })

    .state('root.user.class.add', {
    url: '/add',
    templateUrl: 'templates/addclass.tpl.html',
    controller: 'ClassAddController as addclass'
   })
    .state('root.user.class.users', {
    url: '/users',
    templateUrl: 'templates/userlist.tpl.html',
    controller: 'UserListController as userlist'
   })
   .state('root.user.home', {
    url:'/home',
    templateUrl: 'templates/home.tpl.html',
    controller: 'HomeController as home'
   })


 $urlRouterProvider.otherwise('/login');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
