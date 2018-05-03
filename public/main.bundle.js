webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_new_in_new_in_component__ = __webpack_require__("./src/app/components/new-in/new-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_bags_bags_component__ = __webpack_require__("./src/app/components/bags/bags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_clothing_clothing_component__ = __webpack_require__("./src/app/components/clothing/clothing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_consulting_consulting_component__ = __webpack_require__("./src/app/components/consulting/consulting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_designers_designers_component__ = __webpack_require__("./src/app/components/designers/designers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shoes_shoes_component__ = __webpack_require__("./src/app/components/shoes/shoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_accessories_accessories_component__ = __webpack_require__("./src/app/components/accessories/accessories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_editorial_editorial_component__ = __webpack_require__("./src/app/components/editorial/editorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sales_sales_component__ = __webpack_require__("./src/app/components/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_closet_closet_component__ = __webpack_require__("./src/app/components/closet/closet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_samplebanner_samplebanner_component__ = __webpack_require__("./src/app/components/samplebanner/samplebanner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import components















//routes setup
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'new-in', component: __WEBPACK_IMPORTED_MODULE_3__components_new_in_new_in_component__["a" /* NewInComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'bags', component: __WEBPACK_IMPORTED_MODULE_5__components_bags_bags_component__["a" /* BagsComponent */] },
    { path: 'clothing', component: __WEBPACK_IMPORTED_MODULE_6__components_clothing_clothing_component__["a" /* ClothingComponent */] },
    { path: 'consulting', component: __WEBPACK_IMPORTED_MODULE_7__components_consulting_consulting_component__["a" /* ConsultingComponent */] },
    { path: 'designers', component: __WEBPACK_IMPORTED_MODULE_8__components_designers_designers_component__["a" /* DesignersComponent */] },
    { path: 'shoes', component: __WEBPACK_IMPORTED_MODULE_9__components_shoes_shoes_component__["a" /* ShoesComponent */] },
    { path: 'accessories', component: __WEBPACK_IMPORTED_MODULE_10__components_accessories_accessories_component__["a" /* AccessoriesComponent */] },
    { path: 'editorial', component: __WEBPACK_IMPORTED_MODULE_11__components_editorial_editorial_component__["a" /* EditorialComponent */] },
    { path: 'sales', component: __WEBPACK_IMPORTED_MODULE_12__components_sales_sales_component__["a" /* SalesComponent */] },
    { path: 'closet', component: __WEBPACK_IMPORTED_MODULE_13__components_closet_closet_component__["a" /* ClosetComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'banner', component: __WEBPACK_IMPORTED_MODULE_16__components_samplebanner_samplebanner_component__["a" /* SamplebannerComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_banner_banner_component__ = __webpack_require__("./src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_new_in_new_in_component__ = __webpack_require__("./src/app/components/new-in/new-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_designers_designers_component__ = __webpack_require__("./src/app/components/designers/designers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_clothing_clothing_component__ = __webpack_require__("./src/app/components/clothing/clothing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_shoes_shoes_component__ = __webpack_require__("./src/app/components/shoes/shoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_bags_bags_component__ = __webpack_require__("./src/app/components/bags/bags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_accessories_accessories_component__ = __webpack_require__("./src/app/components/accessories/accessories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_consulting_consulting_component__ = __webpack_require__("./src/app/components/consulting/consulting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editorial_editorial_component__ = __webpack_require__("./src/app/components/editorial/editorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sales_sales_component__ = __webpack_require__("./src/app/components/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_closet_closet_component__ = __webpack_require__("./src/app/components/closet/closet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_samplebanner_samplebanner_component__ = __webpack_require__("./src/app/components/samplebanner/samplebanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import carousel module for banner
//component imports




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_new_in_new_in_component__["a" /* NewInComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_designers_designers_component__["a" /* DesignersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_clothing_clothing_component__["a" /* ClothingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_shoes_shoes_component__["a" /* ShoesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_bags_bags_component__["a" /* BagsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_accessories_accessories_component__["a" /* AccessoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_consulting_consulting_component__["a" /* ConsultingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_editorial_editorial_component__["a" /* EditorialComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sales_sales_component__["a" /* SalesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_closet_closet_component__["a" /* ClosetComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_samplebanner_samplebanner_component__["a" /* SamplebannerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/accessories/accessories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accessories/accessories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  accessories works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/accessories/accessories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessoriesComponent = /** @class */ (function () {
    function AccessoriesComponent() {
    }
    AccessoriesComponent.prototype.ngOnInit = function () {
    };
    AccessoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accessories',
            template: __webpack_require__("./src/app/components/accessories/accessories.component.html"),
            styles: [__webpack_require__("./src/app/components/accessories/accessories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessoriesComponent);
    return AccessoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar is-white\">\n    <div class=\"container\">\n      <div class=\"navbar-brand\">\n        <a class=\"navbar-item brand-text\" href=\"../\">\n          Bulma Admin\n        </a>\n        <div class=\"navbar-burger burger\" data-target=\"navMenu\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </div>\n      <div id=\"navMenu\" class=\"navbar-menu\">\n        <div class=\"navbar-start\">\n          <a class=\"navbar-item\" href=\"admin.html\">\n            Home\n          </a>\n          <a class=\"navbar-item\" href=\"admin.html\">\n            Orders\n          </a>\n          <a class=\"navbar-item\" href=\"admin.html\">\n            Payments\n          </a>\n          <a class=\"navbar-item\" href=\"admin.html\">\n            Exceptions\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </nav>\n  <!-- END NAV -->\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column is-3\">\n        <aside class=\"menu\">\n          <p class=\"menu-label\">\n            General\n          </p>\n          <ul class=\"menu-list\">\n            <li><a class=\"is-active\">Dashboard</a></li>\n            <li><a>Customers</a></li>\n          </ul>\n          <p class=\"menu-label\">\n            Administration\n          </p>\n          <ul class=\"menu-list\">\n            <li><a>Team Settings</a></li>\n            <li>\n              <a>Manage Your Team</a>\n              <ul>\n                <li><a>Members</a></li>\n                <li><a>Plugins</a></li>\n                <li><a>Add a member</a></li>\n              </ul>\n            </li>\n            <li><a>Invitations</a></li>\n            <li><a>Cloud Storage Environment Settings</a></li>\n            <li><a>Authentication</a></li>\n          </ul>\n          <p class=\"menu-label\">\n            Transactions\n          </p>\n          <ul class=\"menu-list\">\n            <li><a>Payments</a></li>\n            <li><a>Transfers</a></li>\n            <li><a>Balance</a></li>\n          </ul>\n        </aside>\n      </div>\n      <div class=\"column is-9\">\n        <nav class=\"breadcrumb\" aria-label=\"breadcrumbs\">\n          <ul>\n            <li><a href=\"../\">Bulma</a></li>\n            <li><a href=\"../\">Templates</a></li>\n            <li><a href=\"../\">Examples</a></li>\n            <li class=\"is-active\"><a href=\"#\" aria-current=\"page\">Admin</a></li>\n          </ul>\n        </nav>\n        <section class=\"hero is-info welcome is-small\">\n          <div class=\"hero-body\">\n            <div class=\"container\">\n              <h1 class=\"title\">\n                Hello, Admin.\n              </h1>\n              <h2 class=\"subtitle\">\n                I hope you are having a great day!\n              </h2>\n            </div>\n          </div>\n        </section>\n        <section class=\"info-tiles\">\n          <div class=\"tile is-ancestor has-text-centered\">\n            <div class=\"tile is-parent\">\n              <article class=\"tile is-child box\">\n                <p class=\"title\">439k</p>\n                <p class=\"subtitle\">Users</p>\n              </article>\n            </div>\n            <div class=\"tile is-parent\">\n              <article class=\"tile is-child box\">\n                <p class=\"title\">59k</p>\n                <p class=\"subtitle\">Products</p>\n              </article>\n            </div>\n            <div class=\"tile is-parent\">\n              <article class=\"tile is-child box\">\n                <p class=\"title\">3.4k</p>\n                <p class=\"subtitle\">Open Orders</p>\n              </article>\n            </div>\n            <div class=\"tile is-parent\">\n              <article class=\"tile is-child box\">\n                <p class=\"title\">19</p>\n                <p class=\"subtitle\">Exceptions</p>\n              </article>\n            </div>\n          </div>\n        </section>\n        <div class=\"columns\">\n          <div class=\"column is-6\">\n            <div class=\"card events-card\">\n              <header class=\"card-header\">\n                <p class=\"card-header-title\">\n                  Events\n                </p>\n                <a href=\"#\" class=\"card-header-icon\" aria-label=\"more options\">\n                  <span class=\"icon\">\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </span>\n                </a>\n              </header>\n              <div class=\"card-table\">\n                <div class=\"content\">\n                  <table class=\"table is-fullwidth is-striped\">\n                    <tbody>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                      <tr>\n                        <td width=\"5%\"><i class=\"fa fa-bell-o\"></i></td>\n                        <td>Lorum ipsum dolem aire</td>\n                        <td><a class=\"button is-small is-primary\" href=\"#\">Action</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <footer class=\"card-footer\">\n                <a href=\"#\" class=\"card-footer-item\">View All</a>\n              </footer>\n            </div>\n          </div>\n          <div class=\"column is-6\">\n            <div class=\"card\">\n              <header class=\"card-header\">\n                <p class=\"card-header-title\">\n                  Inventory Search\n                </p>\n                <a href=\"#\" class=\"card-header-icon\" aria-label=\"more options\">\n                  <span class=\"icon\">\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </span>\n                </a>\n              </header>\n              <div class=\"card-content\">\n                <div class=\"content\">\n                  <div class=\"control has-icons-left has-icons-right\">\n                    <input class=\"input is-large\" type=\"text\" placeholder=\"\">\n                    <span class=\"icon is-medium is-left\">\n                      <i class=\"fa fa-search\"></i>\n                    </span>\n                    <span class=\"icon is-medium is-right\">\n                      <i class=\"fa fa-check\"></i>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n              <header class=\"card-header\">\n                <p class=\"card-header-title\">\n                  User Search\n                </p>\n                <a href=\"#\" class=\"card-header-icon\" aria-label=\"more options\">\n                  <span class=\"icon\">\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </span>\n                </a>\n              </header>\n              <div class=\"card-content\">\n                <div class=\"content\">\n                  <div class=\"control has-icons-left has-icons-right\">\n                    <input class=\"input is-large\" type=\"text\" placeholder=\"\">\n                    <span class=\"icon is-medium is-left\">\n                      <i class=\"fa fa-search\"></i>\n                    </span>\n                    <span class=\"icon is-medium is-right\">\n                      <i class=\"fa fa-check\"></i>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script async type=\"text/javascript\" src=\"../js/bulma.js\"></script>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/bags/bags.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bags/bags.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bags works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/bags/bags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BagsComponent = /** @class */ (function () {
    function BagsComponent() {
    }
    BagsComponent.prototype.ngOnInit = function () {
    };
    BagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bags',
            template: __webpack_require__("./src/app/components/bags/bags.component.html"),
            styles: [__webpack_require__("./src/app/components/bags/bags.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BagsComponent);
    return BagsComponent;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = ".banner {\n  background-image: url('img1.f7b622db00656db55632.jpg');\n  background-position: center;\n  background-size: cover;\n  max-height: 410px;\n}\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-large banner\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/closet/closet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/closet/closet.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  closet works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/closet/closet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClosetComponent = /** @class */ (function () {
    function ClosetComponent() {
    }
    ClosetComponent.prototype.ngOnInit = function () {
    };
    ClosetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-closet',
            template: __webpack_require__("./src/app/components/closet/closet.component.html"),
            styles: [__webpack_require__("./src/app/components/closet/closet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClosetComponent);
    return ClosetComponent;
}());



/***/ }),

/***/ "./src/app/components/clothing/clothing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/clothing/clothing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='carousel is-5 carousel-animated carousel-animate-slide'>\n  <div class='carousel-container'>\n    <div class='carousel-item is-active'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n    <div class='carousel-item'>\n      <figure class=\"image is-2by1\"><img src=\"https://bulma.io/images/placeholders/640x320.png\"></figure>\n    </div>\n  </div>\n  <div class=\"carousel-navigation is-centered\">\n    <div class=\"carousel-nav-left\">\n      <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"carousel-nav-right\">\n      <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clothing/clothing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClothingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClothingComponent = /** @class */ (function () {
    function ClothingComponent() {
    }
    ClothingComponent.prototype.ngOnInit = function () {
    };
    ClothingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clothing',
            template: __webpack_require__("./src/app/components/clothing/clothing.component.html"),
            styles: [__webpack_require__("./src/app/components/clothing/clothing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClothingComponent);
    return ClothingComponent;
}());



/***/ }),

/***/ "./src/app/components/consulting/consulting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consulting/consulting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  consulting works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/consulting/consulting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultingComponent = /** @class */ (function () {
    function ConsultingComponent() {
    }
    ConsultingComponent.prototype.ngOnInit = function () {
    };
    ConsultingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-consulting',
            template: __webpack_require__("./src/app/components/consulting/consulting.component.html"),
            styles: [__webpack_require__("./src/app/components/consulting/consulting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultingComponent);
    return ConsultingComponent;
}());



/***/ }),

/***/ "./src/app/components/designers/designers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/designers/designers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='carousel carousel-animated carousel-animate-slide'>\n  <div class='carousel-container'>\n    <div class='carousel-item has-background is-active'>\n      <img class=\"is-background\" src=\"https://wikiki.github.io/images/merry-christmas.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n      <div class=\"title\">Merry Christmas</div>\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://wikiki.github.io/images/singer.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n      <div class=\"title\">Original Gift: Offer a song with <a href=\"https://lasongbox.com\" target=\"_blank\">La Song Box</a></div>\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://wikiki.github.io/images/sushi.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n      <div class=\"title\">Sushi time</div>\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://wikiki.github.io/images/life.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n      <div class=\"title\">Life</div>\n    </div>\n  </div>\n  <div class=\"carousel-navigation is-overlay\">\n    <div class=\"carousel-nav-left\">\n      <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"carousel-nav-right\">\n      <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/designers/designers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesignersComponent = /** @class */ (function () {
    function DesignersComponent() {
    }
    DesignersComponent.prototype.ngOnInit = function () {
    };
    DesignersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-designers',
            template: __webpack_require__("./src/app/components/designers/designers.component.html"),
            styles: [__webpack_require__("./src/app/components/designers/designers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DesignersComponent);
    return DesignersComponent;
}());



/***/ }),

/***/ "./src/app/components/editorial/editorial.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editorial/editorial.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n<i class=\"fa fa-chevron-left\" aria-hidden=\"false\"></i>\n"

/***/ }),

/***/ "./src/app/components/editorial/editorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorialComponent = /** @class */ (function () {
    function EditorialComponent() {
    }
    EditorialComponent.prototype.ngOnInit = function () {
    };
    EditorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editorial',
            template: __webpack_require__("./src/app/components/editorial/editorial.component.html"),
            styles: [__webpack_require__("./src/app/components/editorial/editorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorialComponent);
    return EditorialComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0;\n}\n\n.bannerStyle h1 {\n    background-color: #ccc;\n    min-height: 300px;\n    text-align: center;\n    line-height: 300px;\n}\n\n.leftRs {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    left: 0;\n}\n\n.rightRs {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    right: 0;\n}\n\n.bannerimg {\n  max-height: 300px;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-light\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title bannertitle\">\n        Fire Sale\n      </h1>\n      <h2 class=\"subtitle\">\n        Get it while it's hot\n      </h2>\n    </div>\n    <ngx-carousel\n      [inputs]=\"carouselTile\"\n      (carouselLoad)=\"carouselTileLoad($event)\">\n\n            <ngx-tile NgxCarouselItem *ngFor=\"let Tile of carouselTileItems\">\n                <img class='bannerimg' src='../../assets/images/model1.jpg' />\n            </ngx-tile>\n\n          <button NgxCarouselPrev class='leftRs'>&lt;</button>\n          <button NgxCarouselNext class='rightRs'>&gt;</button>\n    </ngx-carousel>\n  </div>\n</section>\n\n<div class=\"columns is-gapless\">\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n</div>\n<div class=\"is-divider\" data-content=\"Best Sellers\"></div>\n<div class=\"columns is-gapless\">\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n  <div class=\"column\">\n    <figure class=\"image\">\n      <img src=\"../../assets/images/model1.jpg\" alt=\"Image\">\n    </figure>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-4 is-offset-4\">\n        <h3 class=\"title has-text-grey\">Login</h3>\n        <p class=\"subtitle has-text-grey\">Please login to proceed.</p>\n        <div class=\"box\">\n          <figure class=\"avatar\">\n            <img src=\"https://placehold.it/128x128\">\n          </figure>\n          <form>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"password\" placeholder=\"Your Password\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"checkbox\">\n                <input type=\"checkbox\">\n                Remember me\n              </label>\n            </div>\n            <button class=\"button is-block is-info is-large is-fullwidth\">Login</button>\n          </form>\n        </div>\n        <p class=\"has-text-grey\">\n          <a routerLink ='/register'>Sign Up</a> &nbsp;·&nbsp;\n          <a href=\"../\">Forgot Password</a> &nbsp;·&nbsp;\n          <a href=\"../\">Need Help?</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<script async type=\"text/javascript\" src=\"../js/bulma.js\"></script>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-menu {\n  font-size: .75rem;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink='home'>\n      Dropshop\n    </a>\n    <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\">\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item\" routerLink = 'new-in'>NEW-IN</a>\n      <a class=\"navbar-item\" routerLink = 'designers'>DESIGNERS</a>\n      <a class=\"navbar-item\" routerLink = 'clothing'>CLOTHING</a>\n      <a class=\"navbar-item\" routerLink = 'shoes'>SHOES</a>\n      <a class=\"navbar-item\" routerLink = 'bags'>BAGS</a>\n      <a class=\"navbar-item\" routerLink = 'accessories'>ACCESSORIES</a>\n      <a class=\"navbar-item\" routerLink = 'consulting'>CONSULTING</a>\n      <a class=\"navbar-item\" routerLink = 'editorial'>EDITORIAL</a>\n      <a class=\"navbar-item\" routerLink = 'sales'>SALES</a>\n      <a class=\"navbar-item\" routerLink = 'closet'>CLOSET</a>\n    </div>\n    <div class=\"navbar-end\">\n      <a class=\"navbar-item\" routerLink='login'>Login</a>\n      <a class=\"navbar-item\" routerLink='register'>Register</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-in/new-in.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-in/new-in.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new-in works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/new-in/new-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewInComponent = /** @class */ (function () {
    function NewInComponent() {
    }
    NewInComponent.prototype.ngOnInit = function () {
    };
    NewInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-in',
            template: __webpack_require__("./src/app/components/new-in/new-in.component.html"),
            styles: [__webpack_require__("./src/app/components/new-in/new-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewInComponent);
    return NewInComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-success is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-4 is-offset-4\">\n        <h3 class=\"title has-text-grey\">Login</h3>\n        <p class=\"subtitle has-text-grey\">Please login to proceed.</p>\n        <div class=\"box\">\n          <figure class=\"avatar\">\n            <img src=\"https://placehold.it/128x128\">\n          </figure>\n          <form>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"password\" placeholder=\"Your Password\">\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"checkbox\">\n                <input type=\"checkbox\">\n                Remember me\n              </label>\n            </div>\n            <button class=\"button is-block is-info is-large is-fullwidth\">Login</button>\n          </form>\n        </div>\n        <p class=\"has-text-grey\">\n          <a href=\"../\">Sign Up</a> &nbsp;·&nbsp;\n          <a href=\"../\">Forgot Password</a> &nbsp;·&nbsp;\n          <a href=\"../\">Need Help?</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sales/sales.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sales works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sales',
            template: __webpack_require__("./src/app/components/sales/sales.component.html"),
            styles: [__webpack_require__("./src/app/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/components/samplebanner/samplebanner.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-carousel\n          [inputs]=\"carouselOne\"\n          (carouselLoad)=\"myfunc($event)\">\n          <ngx-item NgxCarouselItem>\n            <img src='../../assets/images/img3.jpg'/>\n          </ngx-item>\n          <ngx-item NgxCarouselItem>\n            <img src='../../assets/images/img3.jpg'/>\n          </ngx-item>\n          <ngx-item NgxCarouselItem>\n            <img src='../../assets/images/img3.jpg'/>\n          </ngx-item>\n          <button NgxCarouselPrev class='leftRs'>&lt;</button>\n          <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n\n<ngx-carousel\n  [inputs]=\"carouselTile\"\n  (carouselLoad)=\"carouselTileLoad($event)\">\n\n        <ngx-tile NgxCarouselItem *ngFor=\"let Tile of carouselTileItems\">\n            <img class='bannerimg' src='../../assets/images/img2.jpg' />\n        </ngx-tile>\n\n      <button NgxCarouselPrev class='leftRs'>&lt;</button>\n      <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n"

/***/ }),

/***/ "./src/app/components/samplebanner/samplebanner.component.scss":
/***/ (function(module, exports) {

module.exports = ".bannerStyle h1 {\n  background-color: #ccc;\n  min-height: 300px;\n  text-align: center;\n  line-height: 300px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n\n.bannerimg {\n  max-height: 300px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/samplebanner/samplebanner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplebannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SamplebannerComponent = /** @class */ (function () {
    function SamplebannerComponent() {
    }
    SamplebannerComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    SamplebannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-samplebanner',
            template: __webpack_require__("./src/app/components/samplebanner/samplebanner.component.html"),
            styles: [__webpack_require__("./src/app/components/samplebanner/samplebanner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SamplebannerComponent);
    return SamplebannerComponent;
}());

// public myfunc(event: Event) {
//    // carouselLoad will trigger this funnction when your load value reaches
//    // it is helps to load the data by parts to increase the performance of the app
//    // must use feature to all carousel
// }


/***/ }),

/***/ "./src/app/components/shoes/shoes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shoes/shoes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shoes works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/shoes/shoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoesComponent = /** @class */ (function () {
    function ShoesComponent() {
    }
    ShoesComponent.prototype.ngOnInit = function () {
    };
    ShoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shoes',
            template: __webpack_require__("./src/app/components/shoes/shoes.component.html"),
            styles: [__webpack_require__("./src/app/components/shoes/shoes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoesComponent);
    return ShoesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map