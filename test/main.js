(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-rtb-share></app-rtb-share>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rtb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emails-editor/emails-editor.component */ "./src/app/emails-editor/emails-editor.component.ts");
/* harmony import */ var _rtb_share_rtb_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rtb-share/rtb-share.component */ "./src/app/rtb-share/rtb-share.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_5__["EmailsEditorComponent"],
                _rtb_share_rtb_share_component__WEBPACK_IMPORTED_MODULE_6__["RtbShareComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.html":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"emails-editor\">\n  <ng-container *ngFor=\"let email of emails\">\n    <span class=\"email-pill\" *ngIf=\"email.status; else incorrect\">\n      <span class=\"email-pill-text\" (click)=\"toggleEditing($event)\">{{email.email}}</span>\n      <input type=\"text\" value={{email.email}} class=\"email-pill-input\" (keyup)=\"enterPress($event)\" (click)=\"toggleEditing($event)\" (blur)=\"toggleEditing($event)\">\n      <span class=\"email-pill-delete\" (click)=\"deleteClick(email)\">&#215;</span>\n    </span>\n    <ng-template #incorrect>\n      <span class=\"email-pill-error\">\n        <span class=\"email-pill-error-text\">{{email.email}}</span>\n        <input type=\"text\" value={{email.email}} class=\"email-pill-input\" (keyup)=\"enterPress($event)\" (click)=\"toggleEditing($event)\" (blur)=\"toggleEditing($event)\">\n        <span class=\"email-pill-delete\" (click)=\"deleteClick(email)\">&#215;</span>\n      </span>\n    </ng-template>\n\n  </ng-container>\n\n  <input\n    class=\"emails-textarea\"\n    (blur)=\"inputChange($event)\"\n    (keydown)=\"inputChange($event)\"\n    (paste)=\"pasteFunction($event)\"\n    placeholder=\"add more people...\"\n  >\n</div>\n"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.less":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emails-editor {\n  border: 1px #ccc;\n  height: 100px;\n  box-sizing: border-box;\n  width: calc(100% - 16px);\n  background-color: #fff;\n  padding: 7px 4px 3px 8px;\n  color: #4d4d4d;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n.emails-editor input {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  line-height: 24px;\n  border: none;\n  background: transparent;\n  resize: none;\n  outline: none;\n  height: 24px;\n  padding: 0 0 0 7px;\n  overflow: hidden;\n}\n.emails-editor input::-webkit-input-placeholder {\n  color: #999999;\n}\n.emails-editor input::-ms-input-placeholder {\n  color: #999999;\n}\n.emails-editor input::placeholder {\n  color: #999999;\n}\n.email-pill {\n  background-color: rgba(102, 152, 255, 0.2);\n  border-radius: 12px;\n  padding: 0px 8px 0px 10px;\n  margin: 0 4px 3px 0px;\n  height: 24px;\n  line-height: 24px;\n  display: inline-flex;\n  position: relative;\n}\n.email-pill.editing {\n  background: transparent;\n}\n.email-pill-text {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  max-width: calc(100% - 13px);\n  display: inline-block;\n  margin-right: 7px;\n}\n.email-pill-text.editing {\n  color: transparent;\n}\n.email-pill-delete {\n  font-size: 21px;\n  cursor: pointer;\n  display: inline-block;\n}\n.email-pill-delete.visible {\n  visibility: hidden;\n}\n.email-pill-input {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  line-height: 24px;\n  border: none;\n  background: transparent;\n  opacity: 0;\n  width: calc(100% - 35px);\n  outline: none;\n  display: inline-block;\n  position: absolute;\n}\n.email-pill-input.visible {\n  opacity: 1;\n}\n.email-pill-error {\n  padding: 0 7px 0px 10px;\n  margin: 0 4px 3px 0px;\n  height: 24px;\n  display: inline-flex;\n  position: relative;\n  line-height: 24px;\n}\n.email-pill-error-delete {\n  font-size: 24px;\n  cursor: pointer;\n}\n.email-pill-error-delete.visible {\n  visibility: hidden;\n}\n.email-pill-error-text {\n  font-size: 14px;\n  line-height: 24px;\n  max-width: calc(100% - 13px);\n  display: inline-block;\n  border-bottom: 1px dashed #d14836;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  margin-right: 6px;\n}\n.email-pill-error-text.editing {\n  color: transparent;\n  border-bottom: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxzLWVkaXRvci9DOi9Vc2Vycy9zYXZvbGtvdi9EZXNrdG9wL3J0Yi10ZXN0L3J0Yi9zcmMvYXBwL2VtYWlscy1lZGl0b3IvZW1haWxzLWVkaXRvci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZW1haWxzLWVkaXRvci9lbWFpbHMtZWRpdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7QURQQTtFQVdRLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRHBCQTtFQXdCUSxjQUFBO0FDRFI7QUR2QkE7RUF3QlEsY0FBQTtBQ0RSO0FEdkJBO0VBd0JRLGNBQUE7QUNEUjtBREtBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURLSTtFQUNJLHVCQUFBO0FDSFI7QURNSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNKUjtBREtRO0VBQ0ksa0JBQUE7QUNIWjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0pSO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FETUk7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0pSO0FES1E7RUFDSSxVQUFBO0FDSFo7QURRQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTko7QURPSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDTFI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURPSTtFQUNJLGVBQUE7RUFHQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDUFI7QURRUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNOWiIsImZpbGUiOiJzcmMvYXBwL2VtYWlscy1lZGl0b3IvZW1haWxzLWVkaXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWNvbG9yOiAjNGQ0ZDRkO1xuQGZvbnQtc2l6ZTogMTRweDtcblxuLmVtYWlscy1lZGl0b3Ige1xuICAgIGJvcmRlcjogMXB4ICAjY2NjO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggNHB4IDNweCA4cHg7XG4gICAgY29sb3I6IEBmb250LWNvbG9yO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCA3cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIH1cbn1cblxuLmVtYWlsLXBpbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLDE1MiwyNTUsLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggMTBweDtcbiAgICBtYXJnaW46IDAgNHB4IDNweCAwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuZWRpdGluZyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogQGZvbnQtY29sb3I7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTNweCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjdweDtcbiAgICAgICAgJi5lZGl0aW5nIHtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLWRlbGV0ZXtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLWlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZW1haWwtcGlsbC1lcnJvciB7XG4gICAgcGFkZGluZzogMCA3cHggMHB4IDEwcHg7XG4gICAgbWFyZ2luOiAwIDRweCAzcHggMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7ICAgIFxuICAgICYtZGVsZXRle1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLXRleHQge1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7ICAgIFxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTNweCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDE0ODM2O1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICYuZWRpdGluZyB7XG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmVtYWlscy1lZGl0b3Ige1xuICBib3JkZXI6IDFweCAjY2NjO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCA0cHggM3B4IDhweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5lbWFpbHMtZWRpdG9yIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5lbWFpbHMtZWRpdG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLmVtYWlsLXBpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTUyLCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDEwcHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lbWFpbC1waWxsLmVkaXRpbmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5lbWFpbC1waWxsLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTNweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4uZW1haWwtcGlsbC10ZXh0LmVkaXRpbmcge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZW1haWwtcGlsbC1kZWxldGUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmVtYWlsLXBpbGwtZGVsZXRlLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZW1haWwtcGlsbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZW1haWwtcGlsbC1pbnB1dC52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5lbWFpbC1waWxsLWVycm9yIHtcbiAgcGFkZGluZzogMCA3cHggMHB4IDEwcHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5lbWFpbC1waWxsLWVycm9yLWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtYWlsLXBpbGwtZXJyb3ItZGVsZXRlLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZW1haWwtcGlsbC1lcnJvci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkMTQ4MzY7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmVtYWlsLXBpbGwtZXJyb3ItdGV4dC5lZGl0aW5nIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditorComponent", function() { return EmailsEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailsEditorComponent = /** @class */ (function () {
    function EmailsEditorComponent() {
        this.lengthChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emails = [
            {
                email: 'sidorov@gmail.com',
                status: true
            }
        ];
        this.editing = undefined;
    }
    Object.defineProperty(EmailsEditorComponent.prototype, "newEmail", {
        set: function (newEmail) {
            this.parseEmails(newEmail);
        },
        enumerable: true,
        configurable: true
    });
    EmailsEditorComponent.prototype.validateEmail = function (email) {
        email = email.toLowerCase();
        var regEx = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return regEx.test(email);
    };
    EmailsEditorComponent.prototype.deleteClick = function (email) {
        this.emails = this.emails.filter(function (currentValue, index, arr) {
            if (currentValue !== email)
                return currentValue;
        });
        this.lengthChanged.emit(this.emails.length);
    };
    EmailsEditorComponent.prototype.parseEmails = function (text) {
        text = text.trim();
        if (text.length == 0) {
            return;
        }
        if (this.emails.filter(function (currentValue, index, arr) {
            if (currentValue.email == text)
                return currentValue;
        }).length === 0) {
            this.emails.push({
                email: text,
                status: this.validateEmail(text)
            });
        }
        this.lengthChanged.emit(this.emails.length);
    };
    EmailsEditorComponent.prototype.toggleEditing = function (event) {
        var _this = this;
        if (event.type == 'click' && event.currentTarget.classList.contains("visible")) {
            return;
        }
        if (event.type == 'blur' && !event.currentTarget.classList.contains("visible")) {
            return;
        }
        if (event.type == 'blur' || event.passedFromKeyUp) {
            var email = this.emails.find(function (x) { return x.email == _this.editing; });
            email.email = event.currentTarget.value;
            email.status = this.validateEmail(event.currentTarget.value);
        }
        this.editing = event.currentTarget.value;
        event.currentTarget.parentElement.classList.toggle('editing');
        event.currentTarget.classList.toggle('visible');
        event.currentTarget.previousSibling.classList.toggle('editing');
        event.currentTarget.nextSibling.classList.toggle('visible');
    };
    EmailsEditorComponent.prototype.enterPress = function (event) {
        if (event.keyCode == 13) {
            event['passedFromKeyUp'] = true;
            this.toggleEditing(event);
            return;
        }
        event.currentTarget.previousSibling.textContent = event.currentTarget.value;
    };
    EmailsEditorComponent.prototype.inputChange = function (event) {
        if (event.keyCode == 13 || event.key == ',' || event.type == "blur") {
            var text = event.currentTarget.value.trim();
            if (text === "") {
                return false;
            }
            event.currentTarget.value = "";
            this.parseEmails(text);
            return false;
        }
        if (event.keyCode == 8 && event.currentTarget.value.trim() == "") {
            this.emails.pop();
            return;
        }
    };
    EmailsEditorComponent.prototype.pasteFunction = function (event) {
        var _this = this;
        var text = event.clipboardData.getData('text');
        text = text.split(',');
        text.forEach(function (email) {
            _this.parseEmails(email);
        });
        // event.currentTarget.value = "";
        return false;
    };
    EmailsEditorComponent.prototype.ngOnInit = function () {
        this.lengthChanged.emit(this.emails.length);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], EmailsEditorComponent.prototype, "newEmail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailsEditorComponent.prototype, "lengthChanged", void 0);
    EmailsEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emails-editor',
            template: __webpack_require__(/*! ./emails-editor.component.html */ "./src/app/emails-editor/emails-editor.component.html"),
            styles: [__webpack_require__(/*! ./emails-editor.component.less */ "./src/app/emails-editor/emails-editor.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailsEditorComponent);
    return EmailsEditorComponent;
}());



/***/ }),

/***/ "./src/app/rtb-share/rtb-share.component.html":
/*!****************************************************!*\
  !*** ./src/app/rtb-share/rtb-share.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rtb-emails-editor\">\n    <div class=\"header\">\n        Share <b>Board name</b> with other\n    </div>\n<app-emails-editor [newEmail]=\"newEmail\" (lengthChanged)=\"emailsChanged($event)\"></app-emails-editor>\n</div>\n<div class=\"rtb-btns\">\n    <button class=\"rtb-btn\" (click)=\"addEmail()\">Add email</button>\n    <button class=\"rtb-btn\" (click)=\"getEmailsCount()\">Get email count</button>\n</div>\n"

/***/ }),

/***/ "./src/app/rtb-share/rtb-share.component.less":
/*!****************************************************!*\
  !*** ./src/app/rtb-share/rtb-share.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rtb-btns {\n  margin: 12px 0 0 30px;\n}\n.rtb-btn {\n  background-color: #6699ff;\n  border: none;\n  color: white;\n  padding: 8px 21px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  border-radius: 4px;\n  margin: 10px;\n  height: 35px;\n  padding: 0 16px 0 16px;\n}\n.header {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 20px;\n  padding-bottom: 35px;\n}\n.rtb-emails-editor {\n  padding: 29px 32px 20px 40px;\n  background-color: #F5F5F5;\n  width: 436px;\n  height: 180px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnRiLXNoYXJlL0M6L1VzZXJzL3Nhdm9sa292L0Rlc2t0b3AvcnRiLXRlc3QvcnRiL3NyYy9hcHAvcnRiLXNoYXJlL3J0Yi1zaGFyZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcnRiLXNoYXJlL3J0Yi1zaGFyZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0FDSko7QURPQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0xKO0FEUUE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ05KO0FEU0E7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3J0Yi1zaGFyZS9ydGItc2hhcmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWYXJpYWJsZXNcbkBidXR0b24tY29sb3I6ICM2Njk5ZmY7XG5AYmctY29sb3I6ICNGNUY1RjU7XG5AZm9udC1zaXplOiAyMHB4O1xuXG4ucnRiLWJ0bnMge1xuICAgIG1hcmdpbjogMTJweCAwIDAgMzBweDtcbn1cblxuLnJ0Yi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE2cHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG4ucnRiLWVtYWlscy1lZGl0b3Ige1xuICAgIHBhZGRpbmc6IDI5cHggMzJweCAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB3aWR0aDogNDM2cHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn0iLCIucnRiLWJ0bnMge1xuICBtYXJnaW46IDEycHggMCAwIDMwcHg7XG59XG4ucnRiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5ZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDE2cHg7XG59XG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuLnJ0Yi1lbWFpbHMtZWRpdG9yIHtcbiAgcGFkZGluZzogMjlweCAzMnB4IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgd2lkdGg6IDQzNnB4O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/rtb-share/rtb-share.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rtb-share/rtb-share.component.ts ***!
  \**************************************************/
/*! exports provided: RtbShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtbShareComponent", function() { return RtbShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RtbShareComponent = /** @class */ (function () {
    function RtbShareComponent() {
    }
    RtbShareComponent.prototype.ngOnInit = function () {
    };
    RtbShareComponent.prototype.generateString = function (len) {
        var str = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var index = 0; index < len; index++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };
    RtbShareComponent.prototype.addEmail = function () {
        this.newEmail = this.generateString(5) + "@" + this.generateString(4) + "." + this.generateString(2);
    };
    RtbShareComponent.prototype.emailsChanged = function (e) {
        this.emailsCount = e;
    };
    RtbShareComponent.prototype.getEmailsCount = function () {
        alert(this.emailsCount);
    };
    RtbShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rtb-share',
            template: __webpack_require__(/*! ./rtb-share.component.html */ "./src/app/rtb-share/rtb-share.component.html"),
            styles: [__webpack_require__(/*! ./rtb-share.component.less */ "./src/app/rtb-share/rtb-share.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RtbShareComponent);
    return RtbShareComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\savolkov\Desktop\rtb-test\rtb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map