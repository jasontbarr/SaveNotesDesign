﻿//$stateProvider.state('login', { url: '/login', controller: 'LoginController', resolve: { user: ['authService', '$q', function (authService, $q) { if (authService.user) { return $q.reject({ authorized: true }); } }] }, templateUrl: 'modules/admin/views/login.html' });
//$stateProvider.state('login', { url: '/login', controller: 'LoginController', resolve: { user: ['authService', '$q', function (authService, $q) { if (authService.user) { return $q.reject({ authorized: true }); } }] }, templateUrl: 'modules/admin/views/login.html' });