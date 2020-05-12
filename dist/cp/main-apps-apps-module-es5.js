(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-apps-apps-module"],{

/***/ "./src/app/main/apps/apps.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/apps/apps.module.ts ***!
  \******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");




var routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule',
    },
    // {
    //     path        : 'dashboards/project',
    //     loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    // },
    {
        path: 'role-management',
        loadChildren: './role-management/role-management.module#RoleManagementModule',
    },
    {
        path: 'change-password',
        loadChildren: './change-password/change-password.module#ChangePasswordModule',
    },
    {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule',
    },
    {
        path: 'role-access-management',
        loadChildren: './role-access-management/role-access-management.module#RoleAccessManagementModule',
    },
    {
        path: 'broker-management',
        loadChildren: './broker-management/broker-management.module#BrokerManagementModule',
    },
    {
        path: 'company-management',
        loadChildren: './company-management/company-management.module#CompanyManagementModule',
    },
    {
        path: 'charterer-management',
        loadChildren: './charterer-management/charterer-management.module#ChartererManagementModule',
    },
    {
        path: 'master/company-admin',
        loadChildren: './company-admin/company-admin.module#CompanyAdminModule',
    },
    {
        path: 'alert-management',
        loadChildren: './alert-management/alert-management.module#AlertManagementModule',
    },
    {
        path: 'vessel-management',
        loadChildren: './vessel-management/vessel-management.module#VesselManagementModule',
    },
];
var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-apps-apps-module-es5.js.map