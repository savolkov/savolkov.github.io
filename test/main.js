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

module.exports = ".emails-editor {\n  border: 1px #ccc;\n  height: 100px;\n  box-sizing: border-box;\n  width: 420px;\n  background-color: #fff;\n  padding: 7px 4px 3px 8px;\n  color: #4d4d4d;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n.emails-editor input {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  line-height: 24px;\n  border: none;\n  background: transparent;\n  resize: none;\n  outline: none;\n  height: 24px;\n  padding: 0 0 0 7px;\n  overflow: hidden;\n}\n.emails-editor input::-webkit-input-placeholder {\n  color: #999999;\n}\n.emails-editor input::-ms-input-placeholder {\n  color: #999999;\n}\n.emails-editor input::placeholder {\n  color: #999999;\n}\n.email-pill {\n  background-color: rgba(102, 152, 255, 0.2);\n  border-radius: 12px;\n  padding: 0px 8px 0px 10px;\n  margin: 0 4px 3px 0px;\n  height: 24px;\n  line-height: 24px;\n  display: inline-flex;\n  position: relative;\n}\n.email-pill.editing {\n  background: transparent;\n}\n.email-pill-text {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  max-width: calc(100% - 13px);\n  display: inline-block;\n  margin-right: 7px;\n}\n.email-pill-text.editing {\n  color: transparent;\n}\n.email-pill-delete {\n  font-size: 21px;\n  cursor: pointer;\n  display: inline-block;\n}\n.email-pill-delete.visible {\n  visibility: hidden;\n}\n.email-pill-input {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  line-height: 24px;\n  border: none;\n  background: transparent;\n  opacity: 0;\n  width: calc(100% - 35px);\n  outline: none;\n  display: inline-block;\n  position: absolute;\n}\n.email-pill-input.visible {\n  opacity: 1;\n}\n.email-pill-error {\n  padding: 0 7px 0px 10px;\n  margin: 0 4px 3px 0px;\n  height: 24px;\n  display: inline-flex;\n  position: relative;\n  line-height: 24px;\n}\n.email-pill-error-delete {\n  font-size: 24px;\n  cursor: pointer;\n}\n.email-pill-error-delete.visible {\n  visibility: hidden;\n}\n.email-pill-error-text {\n  font-size: 14px;\n  line-height: 24px;\n  max-width: calc(100% - 13px);\n  display: inline-block;\n  border-bottom: 1px dashed #d14836;\n  font-family: 'Open Sans', sans-serif;\n  color: #4d4d4d;\n  margin-right: 6px;\n}\n.email-pill-error-text.editing {\n  color: transparent;\n  border-bottom: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxzLWVkaXRvci9DOi9Vc2Vycy9zYXZvbGtvdi9EZXNrdG9wL3J0Yi10ZXN0L3J0Yi9zcmMvYXBwL2VtYWlscy1lZGl0b3IvZW1haWxzLWVkaXRvci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZW1haWxzLWVkaXRvci9lbWFpbHMtZWRpdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRFBBO0VBV1EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RSO0FEcEJBO0VBd0JRLGNBQUE7QUNEUjtBRHZCQTtFQXdCUSxjQUFBO0FDRFI7QUR2QkE7RUF3QlEsY0FBQTtBQ0RSO0FES0E7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0ksdUJBQUE7QUNIUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0pSO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FETUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSlI7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURNSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURLUTtFQUNJLFVBQUE7QUNIWjtBRFFBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRE9JO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNMUjtBRE1RO0VBQ0ksa0JBQUE7QUNKWjtBRE9JO0VBQ0ksZUFBQTtFQUdBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNQUjtBRFFRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvZW1haWxzLWVkaXRvci9lbWFpbHMtZWRpdG9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtY29sb3I6ICM0ZDRkNGQ7XG5AZm9udC1zaXplOiAxNHB4O1xuXG4uZW1haWxzLWVkaXRvciB7XG4gICAgYm9yZGVyOiAxcHggICNjY2M7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA0MjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweCA0cHggM3B4IDhweDtcbiAgICBjb2xvcjogQGZvbnQtY29sb3I7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IEBmb250LWNvbG9yO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDdweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgfVxufVxuXG4uZW1haWwtcGlsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsMTUyLDI1NSwuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbjogMCA0cHggM3B4IDBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi5lZGl0aW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiBAZm9udC1jb2xvcjtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6N3B4O1xuICAgICAgICAmLmVkaXRpbmcge1xuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICYtZGVsZXRle1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuICAgICYtaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IEBmb250LWNvbG9yO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lbWFpbC1waWxsLWVycm9yIHtcbiAgICBwYWRkaW5nOiAwIDdweCAwcHggMTBweDtcbiAgICBtYXJnaW46IDAgNHB4IDNweCAwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMjRweDsgICAgXG4gICAgJi1kZWxldGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuICAgICYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTsgICAgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IEBmb250LWNvbG9yO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkMTQ4MzY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IEBmb250LWNvbG9yO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgJi5lZGl0aW5nIHtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuZW1haWxzLWVkaXRvciB7XG4gIGJvcmRlcjogMXB4ICNjY2M7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0MjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDRweCAzcHggOHB4O1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmVtYWlscy1lZGl0b3IgaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVtYWlscy1lZGl0b3IgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4uZW1haWwtcGlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxNTIsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggMTBweDtcbiAgbWFyZ2luOiAwIDRweCAzcHggMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVtYWlsLXBpbGwuZWRpdGluZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmVtYWlsLXBpbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5lbWFpbC1waWxsLXRleHQuZWRpdGluZyB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5lbWFpbC1waWxsLWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZW1haWwtcGlsbC1kZWxldGUudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5lbWFpbC1waWxsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5lbWFpbC1waWxsLWlucHV0LnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuLmVtYWlsLXBpbGwtZXJyb3Ige1xuICBwYWRkaW5nOiAwIDdweCAwcHggMTBweDtcbiAgbWFyZ2luOiAwIDRweCAzcHggMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLmVtYWlsLXBpbGwtZXJyb3ItZGVsZXRlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1haWwtcGlsbC1lcnJvci1kZWxldGUudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5lbWFpbC1waWxsLWVycm9yLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEzcHgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2QxNDgzNjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uZW1haWwtcGlsbC1lcnJvci10ZXh0LmVkaXRpbmcge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4iXX0= */"

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

module.exports = ".rtb-btns {\n  margin: 12px 0 0 30px;\n}\n.rtb-btn {\n  background-color: #6699ff;\n  border: none;\n  color: white;\n  padding: 8px 21px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  border-radius: 4px;\n  margin: 10px;\n  height: 35px;\n  padding: 0 18px 0 18px;\n}\n.header {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 20px;\n  padding-bottom: 35px;\n}\n.rtb-emails-editor {\n  padding: 29px 32px 20px 40px;\n  background-color: #F5F5F5;\n  width: 436px;\n  height: 180px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnRiLXNoYXJlL0M6L1VzZXJzL3Nhdm9sa292L0Rlc2t0b3AvcnRiLXRlc3QvcnRiL3NyYy9hcHAvcnRiLXNoYXJlL3J0Yi1zaGFyZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcnRiLXNoYXJlL3J0Yi1zaGFyZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0FDSko7QURPQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNMSjtBRFFBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNOSjtBRFNBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9ydGItc2hhcmUvcnRiLXNoYXJlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzXG5AYnV0dG9uLWNvbG9yOiAjNjY5OWZmO1xuQGJnLWNvbG9yOiAjRjVGNUY1O1xuQGZvbnQtc2l6ZTogMjBweDtcblxuLnJ0Yi1idG5zIHtcbiAgICBtYXJnaW46IDEycHggMCAwIDMwcHg7XG59XG5cbi5ydGItYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOHB4IDIxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDAgMThweCAwIDE4cHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuXG4ucnRiLWVtYWlscy1lZGl0b3Ige1xuICAgIHBhZGRpbmc6IDI5cHggMzJweCAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB3aWR0aDogNDM2cHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn0iLCIucnRiLWJ0bnMge1xuICBtYXJnaW46IDEycHggMCAwIDMwcHg7XG59XG4ucnRiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5ZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDE4cHggMCAxOHB4O1xufVxuLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cbi5ydGItZW1haWxzLWVkaXRvciB7XG4gIHBhZGRpbmc6IDI5cHggMzJweCAyMHB4IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIHdpZHRoOiA0MzZweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbiJdfQ== */"

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