"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vinyl_vinyl_module_ts"],{

/***/ 1894:
/*!***********************************************!*\
  !*** ./src/app/vinyl/vinyl-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinylPageRoutingModule": () => (/* binding */ VinylPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _vinyl_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinyl.page */ 2185);




const routes = [
    {
        path: '',
        component: _vinyl_page__WEBPACK_IMPORTED_MODULE_0__.VinylPage
    }
];
let VinylPageRoutingModule = class VinylPageRoutingModule {
};
VinylPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VinylPageRoutingModule);



/***/ }),

/***/ 4904:
/*!***************************************!*\
  !*** ./src/app/vinyl/vinyl.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinylPageModule": () => (/* binding */ VinylPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vinyl_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinyl-routing.module */ 1894);
/* harmony import */ var _vinyl_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vinyl.page */ 2185);







let VinylPageModule = class VinylPageModule {
};
VinylPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vinyl_routing_module__WEBPACK_IMPORTED_MODULE_0__.VinylPageRoutingModule
        ],
        declarations: [_vinyl_page__WEBPACK_IMPORTED_MODULE_1__.VinylPage]
    })
], VinylPageModule);



/***/ }),

/***/ 2185:
/*!*************************************!*\
  !*** ./src/app/vinyl/vinyl.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinylPage": () => (/* binding */ VinylPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vinyl_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinyl.page.html?ngResource */ 744);
/* harmony import */ var _vinyl_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vinyl.page.scss?ngResource */ 5228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ 254);
/* harmony import */ var _ngrx_vinyl_vinyl_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ngrx/vinyl/vinyl.actions */ 4478);







let VinylPage = class VinylPage {
    constructor(store, backend) {
        this.store = store;
        this.backend = backend;
        this.viewModel$ = this.store.select((state) => state.Vinyl);
    }
    ngOnInit() {
        this.backend.getVinyls().subscribe((res) => {
            // console.log(res.data);
            const records = res.data.map((record) => {
                const vinylRecord = {
                    artist: record.attributes.artist,
                    releaseId: record.attributes.release_id,
                    thumbnail: record.attributes.thumbnail_image_url,
                    title: record.attributes.title,
                    vinylId: record.id,
                    year: record.attributes.year
                };
                return vinylRecord;
            });
            console.log(records);
            return this.store.dispatch(new _ngrx_vinyl_vinyl_actions__WEBPACK_IMPORTED_MODULE_3__.GetVinylRecordsResponse(records));
        });
    }
};
VinylPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService }
];
VinylPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vinyl',
        template: _vinyl_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vinyl_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VinylPage);



/***/ }),

/***/ 5228:
/*!**************************************************!*\
  !*** ./src/app/vinyl/vinyl.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aW55bC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 744:
/*!**************************************************!*\
  !*** ./src/app/vinyl/vinyl.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Vinyl Collection</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewModel$ | async as vm\">\n  <ion-list>\n    <ion-item *ngFor=\"let record of vm.records\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"record.thumbnail\" />\n      </ion-thumbnail>\n      <ion-label slot=\"start\">\n        <h3>{{record.title}}</h3>\n        <p>{{record.artist}}</p>\n        <p>{{record.year}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vinyl_vinyl_module_ts.js.map