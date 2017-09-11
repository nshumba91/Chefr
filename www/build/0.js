webpackJsonp([0],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrPageModule", function() { return AddrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addr__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddrPageModule = (function () {
    function AddrPageModule() {
    }
    return AddrPageModule;
}());
AddrPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addr__["a" /* AddrPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addr__["a" /* AddrPage */]),
        ],
    })
], AddrPageModule);

//# sourceMappingURL=addr.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddrPage = (function () {
    function AddrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddrPage');
    };
    return AddrPage;
}());
AddrPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addr',template:/*ion-inline-start:"C:\Users\Chi Chi\Chefr2\src\pages\addr\addr.html"*/'<!--\n  Generated template for the AddrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title color="navbarColor">Add Recipe</ion-title>\n    <button class="button button-icon icon ion-ios-arrow-back"></button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="color:#f9e8c6">\n   <!--spacer-->\n    <div class="spacer" style="height: 50px;"></div>\n    <!--Recipe Inputs-->\n    <ion-list>\n          <ion-item>\n            <ion-label style="font-family:helvetica" stacked>Recipe Name</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label style="font-family:helvetica" stacked>No. of Servings</ion-label>\n            <ion-input type="number"></ion-input>\n          </ion-item>\n        </ion-list>\n        <label class="item item-select">\n            <span style="font-family:helvetica" class="input-label">Category</span>\n        <br>\n        <!--spacer-->\n        <div class="spacer" style="height: 10px;"></div>\n        <!--categories for selection-->\n            <select style="font-family:helvetica">\n              <option>Breakfast</option>\n              <option>Lunch</option>\n              <option>Dinner</option>\n            </select>\n          </label>\n          <!--spacer-->\n        <div class="spacer" style="height: 10px;"></div>\n          <!--save as ingredient toggle-->\n          <ion-item>\n              <ion-label font-size="5px" style="font-family:helvetica"> Save as ingredient</ion-label>\n              <ion-toggle toggle-class="toggle-light"></ion-toggle>\n            </ion-item>\n               <!--spacer-->\n            <div class="spacer" style="height: 50px;"></div>\n            <!--Confirmation-->\n            <button class="RecipeConfirm">\n            <a href="#/addi" style="font-family: Helvetica" align="center">Confirm</a> \n          </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chi Chi\Chefr2\src\pages\addr\addr.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AddrPage);

//# sourceMappingURL=addr.js.map

/***/ })

});
//# sourceMappingURL=0.js.map