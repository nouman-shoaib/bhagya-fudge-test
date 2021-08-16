(self["webpackChunkfudge"] = self["webpackChunkfudge"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ 9232);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ 4577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    {
        path: '',
        redirectTo: 'splashscreen',
        pathMatch: 'full'
    },
    {
        path: 'splashscreen',
        component: _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_1__.SplashscreenComponent
    },
    {
        path: 'home',
        component: _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__.SidemenuComponent,
        data: { animationState: 'end' }
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'fudge';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ 4577);
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/material.module */ 8649);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _dashboard_news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/news/news.component */ 648);
/* harmony import */ var _dashboard_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/comments/comments.component */ 9551);
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/users/users.component */ 2971);
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ 9232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__.SidemenuComponent,
        _dashboard_news_news_component__WEBPACK_IMPORTED_MODULE_5__.NewsComponent,
        _dashboard_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__.CommentsComponent,
        _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_7__.UsersComponent,
        _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_8__.SplashscreenComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule] }); })();


/***/ }),

/***/ 9551:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/comments/comments.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/comments.service */ 1760);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function CommentsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "2 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comments_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comments_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", comments_r1.body, " ");
} }
class CommentsComponent {
    constructor(commentService) {
        this.commentService = commentService;
    }
    ngOnInit() {
        this.getComments();
    }
    getComments() {
        this.commentService.getComments().subscribe(data => {
            if (data.length > 0) {
                this.commentsData = data;
            }
        });
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comments_service__WEBPACK_IMPORTED_MODULE_0__.CommentsService)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 6, vars: 1, consts: [[1, "comment-container"], [1, "comments-div"], ["class", "comment-card", 4, "ngFor", "ngForOf"], [1, "comment-card"], ["mat-card-avatar", "", 1, "header-image"], [1, "comment-body"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Top Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CommentsComponent_mat_card_5_Template, 10, 2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.commentsData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent], styles: [".comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 40vh;\n  flex-direction: column;\n}\n.comment-container[_ngcontent-%COMP%]   .comments-div[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.comment-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 900 !important;\n}\n.comment-container[_ngcontent-%COMP%]   .comment-card[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  margin: 5px;\n  padding: 5px;\n}\n.comment-container[_ngcontent-%COMP%]   .comment-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  margin-top: 5%;\n}\n.comment-container[_ngcontent-%COMP%]   .comment-card[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%] {\n  background-image: url('Ellipse 379@2x.png');\n  background-size: cover;\n}\n.comment-container[_ngcontent-%COMP%]   .comment-card[_ngcontent-%COMP%]   .comment-body[_ngcontent-%COMP%] {\n  margin-left: 24%;\n  margin-right: 2%;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFFUjtBQUFJO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRFk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBR2hCO0FBRFk7RUFDSSwyQ0FBQTtFQUNBLHNCQUFBO0FBR2hCO0FBRFk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHaEIiLCJmaWxlIjoiY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuY29tbWVudHMtZGl2IHtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb21tZW50LWNhcmQge1xuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1pbWFnZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0VsbGlwc2VcXCAzNzlAMngucG5nJyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb21tZW50LWJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59Il19 */"] });


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news/news.component */ 648);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments/comments.component */ 9551);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ 2971);








class DashboardComponent {
    constructor() { }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + '%';
        }
        return value;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 117, vars: 1, consts: [[1, "dashboard-container"], [1, "head-container"], [1, "welcome", "aligment-row"], ["src", "../../assets/images/Ellipse 379@2x.png", "alt", "image", 1, "avatar"], [1, "welcome-note", "aligment-row"], [1, "currency-profile-container", "aligment-row"], [1, "currency", "aligment-row"], [1, "expandMore"], [1, "profile", "aligment-row"], [1, "title-container", "aligment-row"], [1, "title", "aligment-row"], [1, "line"], [1, "stats-financial-health-container"], [1, "stats-financial-alignment", "wd50"], [1, "aligment-row"], [1, "wd100"], [1, "wd50", "mrgl20"], [1, "mrgl20"], ["thumbLabel", "", "tickInterval", "1000", "step", "1000", "min", "0", "max", "100000", "aria-label", "units", 3, "displayWith"], [1, "label"], [2, "color", "red"], [2, "color", "orange"], [2, "color", "green"], [1, "performance-goals", "aligment-row"], [1, "performance"], ["src", "../../assets/images/Group 1248.svg", "alt", "image", 1, "wd100"], [1, "goals"], [1, "aligment-row", "wd100", "goal-card-container"], [1, "circle"], [1, "aligment-row", "amount"], [1, "aligment-row", "amount", 2, "justify-content", "space-between"], [1, "news-comments-user-container", "aligment-row"], [1, "wd50"], [1, "wd20"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Welcome, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Alex Martin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".Here\u2019s your personalized financial dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " :GBP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Dashboard Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Quick Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\u00A3563,350");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Your net worth as of today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u00A312,430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Monthy Cashflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\u00A3161,4300");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Overall Liabilities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "My Financial Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "mat-slider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-card-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " POOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " AVERAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " GOOD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Your financial health status is GOOD. However there\u2019s still room for improvement. See how you can improve");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "My Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "My Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Retirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "65% On track");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\u00A3563,350");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\u00A3563,350,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Vacation Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "78% On track");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\u00A3563,350");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\u00A3563,350,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "46% On track");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\u00A3563,350");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\u00A3563,350,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "app-news", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "app-comments", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "app-users", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSlider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardFooter, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _news_news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent, _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__.CommentsComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent], styles: [".dashboard-container[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .wd50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .wd20[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .wd100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .mrgl20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.dashboard-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 900 !important;\n}\n.dashboard-container[_ngcontent-%COMP%]   .aligment-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 57px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome-note[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-left: 10px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .currency-profile-container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-top: 20px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 10vh;\n  box-shadow: 0px 0px 40px #0b0b0b24;\n  border-radius: 10px;\n  opacity: 1;\n  box-sizing: content-box;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0px 0px 0px -30px;\n  font-weight: 500;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: stretch;\n  justify-content: space-between;\n  margin-bottom: 0px !important;\n}\n.dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  color: #0044B1;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  height: 50vh;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .performance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%]   .goal-card-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%]   .goal-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 27%;\n  height: 32vh;\n  box-shadow: 0px 0px 40px #0b0b0b24;\n  border-radius: 10px;\n  opacity: 1;\n  box-sizing: content-box;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%]   .goal-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 116px;\n  line-height: 110px;\n  border-radius: 50%;\n  font-size: 14px;\n  color: #000000;\n  text-align: center;\n  border: 1px solid black;\n  background: #ffff;\n  margin: 30px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%]   .goal-card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-top: 30%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  height: 40vh;\n  flex-direction: row;\n}\n.dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n}\n@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome-note[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0px !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .performance[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .currency-profile-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-news[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-comments[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-users[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media all and (device-width: 1024px) and (device-height: 768px) and (orientation: landscape) {\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome-note[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0px !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh !important;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .performance[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .currency-profile-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-news[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-comments[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-users[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome-note[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0px !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .performance[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .currency-profile-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-news[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-comments[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-users[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome-note[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0px !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .stats-financial-health-container[_ngcontent-%COMP%]   .stats-financial-alignment[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .performance[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .performance-goals[_ngcontent-%COMP%]   .goals[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .currency-profile-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-news[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-comments[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .news-comments-user-container[_ngcontent-%COMP%]   app-users[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUFJO0VBQ0ksMkJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFZO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUVoQjtBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7QUFJSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUdRO0VBQ0ksVUFBQTtBQURaO0FBR1E7RUFDSSxXQUFBO0FBRFo7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBRlI7QUFHUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBRFo7QUFFWTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQWhCO0FBQ2dCO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNwQjtBQUNnQjtFQUNJLFdBQUE7QUFDcEI7QUFDZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNwQjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFEWjtBQUdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQURaO0FBRWE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0FBQWpCO0FBQ2lCO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ3BCO0FBQW9CO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRXhCO0FBQW9CO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FBRXhCO0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFGUjtBQUdRO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUVZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFoQjtBQU1BO0VBRVE7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQUpWO0VBS1U7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQUhkO0VBSWM7SUFDSSxtQkFBQTtJQUNBLDJCQUFBO0VBRmxCO0VBTUU7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0VBSk47RUFLTTtJQUNJLHNCQUFBO0VBSFY7RUFNRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQUpOO0VBS007SUFDSSxXQUFBO0VBSFY7RUFLTTtJQUNJLFdBQUE7RUFIVjtFQU1FO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBSk47RUFNRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQUpOO0VBS007SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUFIVjtFQUtNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBSFY7RUFLTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQUhWO0FBQ0Y7QUFPRTtFQUVNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFOVjtFQU9VO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFMZDtFQU1jO0lBQ0ksbUJBQUE7SUFDQSwyQkFBQTtFQUpsQjtFQVFFO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtFQU5OO0VBT007SUFDSSxzQkFBQTtFQUxWO0VBUUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0VBTk47RUFPTTtJQUNJLFdBQUE7RUFMVjtFQU9NO0lBQ0ksV0FBQTtFQUxWO0VBUUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFOTjtFQVFFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBTk47RUFPTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQUxWO0VBT007SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUFMVjtFQU9NO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBTFY7QUFDRjtBQVNFO0VBRU07SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQVJWO0VBU1U7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQVBkO0VBUWM7SUFDSSxtQkFBQTtJQUNBLDJCQUFBO0VBTmxCO0VBVUU7SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0VBUk47RUFTTTtJQUNJLHNCQUFBO0VBUFY7RUFVRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQVJOO0VBU007SUFDSSxXQUFBO0VBUFY7RUFTTTtJQUNJLFdBQUE7RUFQVjtFQVVFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBUk47RUFVRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQVJOO0VBU007SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUFQVjtFQVNNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBUFY7RUFTTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQVBWO0FBQ0Y7QUFXRTtFQUVNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFWVjtFQVdVO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFUZDtFQVVjO0lBQ0ksbUJBQUE7SUFDQSwyQkFBQTtFQVJsQjtFQVlFO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtFQVZOO0VBV007SUFDSSxzQkFBQTtFQVRWO0VBWUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFWTjtFQVdNO0lBQ0ksV0FBQTtFQVRWO0VBV007SUFDSSxXQUFBO0VBVFY7RUFZRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQVZOO0VBWUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFWTjtFQVdNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBVFY7RUFXTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQVRWO0VBV007SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUFUVjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgLndkNTAge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAud2QyMCB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC53ZDEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubXJnbDIwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxpZ21lbnQtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAgLmhlYWQtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDU3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgLndlbGNvbWUtbm90ZSB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY3VycmVuY3ktcHJvZmlsZS1jb250YWluZXIge1xuICAgICAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAubGluZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zdGF0cy1maW5hbmNpYWwtaGVhbHRoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIC5zdGF0cy1maW5hbmNpYWwtYWxpZ25tZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXQtY2FyZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCAjMGIwYjBiMjQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAtMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0LXNsaWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdC1jYXJkLWZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNDRCMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBlcmZvcm1hbmNlLWdvYWxzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5wZXJmb3JtYW5jZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdvYWxzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAuZ29hbC1jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3JTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnZoO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggIzBiMGIwYjI0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubmV3cy1jb21tZW50cy11c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAubmV3cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXQtY2FyZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAoZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIHtcbiAgICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIC5oZWFkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAud2VsY29tZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLndlbGNvbWUtbm90ZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIC5zdGF0cy1maW5hbmNpYWwtaGVhbHRoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5zdGF0cy1maW5hbmNpYWwtYWxpZ25tZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBlcmZvcm1hbmNlLWdvYWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5nb2FscyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY3VycmVuY3ktcHJvZmlsZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAubmV3cy1jb21tZW50cy11c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFwcC1uZXdzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgICAgIGFwcC1jb21tZW50cyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBhcHAtdXNlcnMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4gIH1cbiAgQG1lZGlhIGFsbCBhbmQgKGRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuICAgIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICAgICAgLmhlYWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC53ZWxjb21lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAud2VsY29tZS1ub3RlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgLnN0YXRzLWZpbmFuY2lhbC1oZWFsdGgtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnN0YXRzLWZpbmFuY2lhbC1hbGlnbm1lbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucGVyZm9ybWFuY2UtZ29hbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5nb2FscyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY3VycmVuY3ktcHJvZmlsZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAubmV3cy1jb21tZW50cy11c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFwcC1uZXdzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgICAgIGFwcC1jb21tZW50cyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBhcHAtdXNlcnMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgXG4gICAgLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgICAgICAuaGVhZC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC53ZWxjb21lLW5vdGUge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAuc3RhdHMtZmluYW5jaWFsLWhlYWx0aC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAuc3RhdHMtZmluYW5jaWFsLWFsaWdubWVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wZXJmb3JtYW5jZS1nb2FscyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5wZXJmb3JtYW5jZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZ29hbHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmN1cnJlbmN5LXByb2ZpbGUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLm5ld3MtY29tbWVudHMtdXNlci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhcHAtbmV3cyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBhcHAtY29tbWVudHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgYXBwLXVzZXJzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIHtcbiAgICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIC5oZWFkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAud2VsY29tZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLndlbGNvbWUtbm90ZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIC5zdGF0cy1maW5hbmNpYWwtaGVhbHRoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5zdGF0cy1maW5hbmNpYWwtYWxpZ25tZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBlcmZvcm1hbmNlLWdvYWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5nb2FscyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY3VycmVuY3ktcHJvZmlsZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAubmV3cy1jb21tZW50cy11c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFwcC1uZXdzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICB9XG4gICAgICAgIGFwcC1jb21tZW50cyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBhcHAtdXNlcnMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG59XG4iXX0= */"] });


/***/ }),

/***/ 648:
/*!**************************************************!*\
  !*** ./src/app/dashboard/news/news.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/news.service */ 1857);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function NewsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Read Full Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, ctx_r0.today, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](news_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", news_r1.body, " ");
} }
class NewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.today = new Date();
    }
    ngOnInit() {
        this.getNews();
    }
    getNews() {
        this.newsService.getNews().subscribe(data => {
            if (data.length > 0) {
                this.newsData = data;
            }
        });
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService)); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 6, vars: 1, consts: [[1, "news-container"], [1, "news-div"], ["class", "news-card", 4, "ngFor", "ngForOf"], [1, "news-card"], [1, "date"], [2, "color", "#0044B1"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Industry News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NewsComponent_mat_card_5_Template, 12, 6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newsData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".news-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 40vh;\n  flex-direction: column;\n}\n.news-container[_ngcontent-%COMP%]   .news-div[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.news-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n.news-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.news-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n  text-align: justify;\n}\n.news-container[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  margin: 5px;\n  padding: 5px;\n}\n.news-container[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin: 16px;\n  font-size: 12px;\n  color: #6F6F6F;\n}\n.news-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 900 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7QUFHWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUdaO0FBQUk7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdaO0FBQUk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFFUiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5uZXdzLWRpdiB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB9XG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5ld3MtY2FyZCB7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 2971:
/*!****************************************************!*\
  !*** ./src/app/dashboard/users/users.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);





function UsersComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 2 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.name);
} }
class UsersComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers().subscribe(data => {
            if (data.length > 0) {
                this.usersData = data;
            }
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 6, vars: 1, consts: [[1, "user-container"], [1, "user-div"], [4, "ngFor", "ngForOf"], ["mat-card-avatar", "", 1, "header-image"], [2, "color", "green", "font-size", "13px"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UsersComponent_mat_card_5_Template, 9, 1, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".user-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 40vh;\n  flex-direction: column;\n}\n.user-container[_ngcontent-%COMP%]   .user-div[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.user-container[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%] {\n  background-image: url('Ellipse 379@2x.png');\n  background-size: cover;\n}\n.user-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 900 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSwyQ0FBQTtFQUNBLHNCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQUVSIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC51c2VyLWRpdiB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbiAgICAuaGVhZGVyLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0VsbGlwc2VcXCAzNzlAMngucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 8649:
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ 552);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 2796);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ 346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 1933);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);












































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule] }); })();


/***/ }),

/***/ 5136:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverBaseUrl;
const apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint;
const apiUrl = `${baseUrl}${apiEndpoint}`;
class ApiService {
    constructor(http) {
        this.http = http;
    }
    //   private createTokenOptions() {
    //     return {headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)};
    //   }
    get(serviceEndpoint, id) {
        let url = `${apiUrl}${serviceEndpoint}`;
        if (id) {
            url += `/${id}`;
        }
        //return this.http.get<T>(url, this.createTokenOptions());
        return this.http.get(url);
    }
    create(serviceEndpoint, item) {
        //const options = this.createTokenOptions();
        //options.headers = options.headers.append('Content-Type', 'application/json');
        return this.http.post(`${apiUrl}${serviceEndpoint}`, JSON.stringify(item)); //, options);
    }
    delete(serviceEndpoint, id) {
        return this.http.delete(`${apiUrl}${serviceEndpoint}/${id}`); //, this.createTokenOptions());
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1760:
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": () => (/* binding */ CommentsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 5136);


class CommentsService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    /**get comments response */
    getComments() {
        return this.baseService.get('posts/1/comments');
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
CommentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1857:
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 5136);


class NewsService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    /**get news response */
    getNews() {
        return this.baseService.get('users/1/posts');
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
NewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 5136);


class UserService {
    constructor(baseService) {
        this.baseService = baseService;
    }
    /**get users response */
    getUsers() {
        return this.baseService.get('users');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4577:
/*!************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidemenuComponent": () => (/* binding */ SidemenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 7528);






class SidemenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) { return new (t || SidemenuComponent)(); };
SidemenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidemenuComponent, selectors: [["app-sidemenu"]], decls: 43, vars: 0, consts: [["fxFlexFill", ""], ["fxLayout", "column", "mode", "side", "opened", "true", 1, "mat-elevation-z8"], ["sidenav", "matSidenav"], [1, "fudge-icon"], ["mat-list-icon", "", "src", "../../assets/icons/Group 1.svg", "alt", "fudge"], ["mat-button", "", 1, "menu-button"], [1, "arrow"]], template: function SidemenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "people_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Advisors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "insert_drive_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "My Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "rss_feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "News Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-sidenav-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListIconCssMatStyler, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background: #023614;\n  color: white;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: none;\n  background-image: url('Rectangle 1.svg');\n  color: white;\n  text-align: center;\n}\n\n.fudge-icon[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n  top: 100px;\n  height: 62px;\n  opacity: 0.5;\n}\n\n.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-left: 25%;\n  font-size: 13px;\n  visibility: hidden;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  background-color: #003B14D9;\n  border-radius: 17px;\n}\n\n.menu-button[_ngcontent-%COMP%]:focus {\n  background-color: #003B14D9;\n  border-radius: 17px;\n}\n\n.menu-button[_ngcontent-%COMP%]:focus   .arrow[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBREk7RUFDSSxtQkFBQTtBQUdSIiwiZmlsZSI6InNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6ICMwMjM2MTQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlXFwgMS5zdmcnKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnVkZ2UtaWNvbntcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgb3BhY2l0eTogMC41O1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG59XG4uYXJyb3cge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWVudS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwM0IxNEQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59XG5cbi5tZW51LWJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAzQjE0RDk7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICAuYXJyb3cge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9232:
/*!********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenComponent": () => (/* binding */ SplashscreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);






function SplashscreenComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SplashscreenComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@changeState.done", function SplashscreenComponent_div_3_Template_div_animation_changeState_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.endState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All your finances in one place.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Find out how our team of highly qualified financial consultants can help you achieve your financial goals.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashscreenComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.viewDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@changeState", ctx_r1.currentState);
} }
function SplashscreenComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SplashscreenComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SplashscreenComponent {
    constructor(router) {
        this.router = router;
        this.arrowClicked = false;
        this.viewDashboardClicked = false;
    }
    ngOnInit() {
        this.currentState = "state1";
        this.dashboardState = "start";
    }
    changeState() {
        this.currentState = "state2";
        this.arrowClicked = true;
    }
    viewDashboard() {
        this.dashboardState = "end";
        this.viewDashboardClicked = true;
    }
    endState() {
        this.currentState = "state1";
    }
    endviewDashboard(event) {
        this.dashboardState = "start";
        if (event.toState === 'end') {
            this.router.navigateByUrl('/home');
        }
    }
}
SplashscreenComponent.ɵfac = function SplashscreenComponent_Factory(t) { return new (t || SplashscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SplashscreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashscreenComponent, selectors: [["app-splashscreen"]], decls: 5, vars: 4, consts: [[1, "splashscreen-container"], ["class", "fudge-icon", 4, "ngIf"], [1, "animation-div"], ["class", "splash-note-div", 4, "ngIf"], ["class", "btn-arrow-div", 4, "ngIf"], [1, "fudge-icon"], ["src", "../../assets/icons/Group 1.svg", "alt", "image", 1, "avatar"], [1, "splash-note-div"], ["mat-button", "", 1, "btn-view-dashboard", 3, "click"], [1, "btn-arrow-div"], ["mat-button", "", 1, "btn-arrow", 3, "click"]], template: function SplashscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SplashscreenComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@viewDashboard.done", function SplashscreenComponent_Template_div_animation_viewDashboard_done_2_listener($event) { return ctx.endviewDashboard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SplashscreenComponent_div_3_Template, 7, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SplashscreenComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewDashboardClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@viewDashboard", ctx.dashboardState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewDashboardClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arrowClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".splashscreen-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url('Rectangle 1.svg'), url('dan-asaki-0uLVXFz6obg-unsplash@2x.png');\n  background-position: center;\n  background-repeat: no-repeat, repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .fudge-icon[_ngcontent-%COMP%] {\n  margin-top: 18%;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .btn-arrow-div[_ngcontent-%COMP%] {\n  display: flex;\n  left: 806px;\n  width: 309px;\n  height: 65px;\n  opacity: 1;\n  color: #ffff;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .btn-arrow-div[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .splash-note-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  visibility: hidden;\n  margin: 50px;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .splash-note-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 65px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .splash-note-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #B2B2B2;\n  font-size: 16px;\n  text-align: justify;\n  margin: 25px;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .splash-note-div[_ngcontent-%COMP%]   .btn-view-dashboard[_ngcontent-%COMP%] {\n  color: #B2B2B2;\n  font-weight: 600;\n  font-size: 16px;\n  width: 35%;\n  border-radius: 9px;\n  border: 1px solid;\n  margin: 20px;\n  height: 7vh;\n}\n.splashscreen-container[_ngcontent-%COMP%]   .animation-div[_ngcontent-%COMP%] {\n  background-color: #ffff;\n  opacity: 1;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzRkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQURRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHWjtBQURRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHWjtBQUFJO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUVSIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2hzY3JlZW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9SZWN0YW5nbGVcXCAxLnN2ZycpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGFuLWFzYWtpLTB1TFZYRno2b2JnLXVuc3BsYXNoQDJ4LnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmZ1ZGdlLWljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxOCU7XG4gICAgfVxuICAgIC5idG4tYXJyb3ctZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbGVmdDogODA2cHg7XG4gICAgICAgIHdpZHRoOiAzMDlweDtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjb2xvcjogI2ZmZmY7XG4gICAgICAgIC5idG4tYXJyb3cge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNwbGFzaC1ub3RlLWRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjQjJCMkIyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXZpZXctZGFzaGJvYXJkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjQjJCMkIyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogN3ZoO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hbmltYXRpb24tZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('changeState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('state1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    transform: 'translateY(100%)', opacity: 0, visibility: 'visible'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('state2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    transform: 'translateY(0)', opacity: 1, display: 'flex'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('state1=>state2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('2000ms'))
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('viewDashboard', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('start', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    backgroundColor: '#ffff',
                    transform: 'translateX(0)', opacity: 0, visibility: 'visible', width: '5%',
                    height: '4px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('end', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    backgroundColor: '#ffff',
                    transform: 'translateX(100%)', opacity: 1, display: 'flex', width: '33%',
                    height: '4px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('start=>end', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('2000ms'))
            ])
        ] } });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverBaseUrl: 'https://jsonplaceholder.typicode.com/',
    apiEndpoint: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map