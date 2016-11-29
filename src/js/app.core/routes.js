function routerConfig ($stateProvider, $urlRouterProvider) {
 $stateProvider
   .state('root', {
     abstract: true,
    //  url: '/main',
     templateUrl: 'templates/main.tpl.html'
   })
   .state('root.main.login', {
     url: '/login',
     templateUrl: 'templates/login.tpl.html',
     controller: 'LoginController as login'
   })
   .state('root.main.register', {
     url: '/register',
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
    templateUrl: 'templates/class.tpl.html'
   })
   .state('root.user.home', {
    url:'/home',
    templateUrl: 'templates/home.tpl.html'
   })


 $urlRouterProvider.otherwise('/login');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
