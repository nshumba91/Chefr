webpackJsonp([1],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddiPageModule", function() { return AddiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addi__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddiPageModule = (function () {
    function AddiPageModule() {
    }
    return AddiPageModule;
}());
AddiPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addi__["a" /* AddiPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addi__["a" /* AddiPage */]),
        ],
    })
], AddiPageModule);

//# sourceMappingURL=addi.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddiPage; });
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
 * Generated class for the AddiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddiPage = (function () {
    function AddiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddiPage');
    };
    return AddiPage;
}());
AddiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addi',template:/*ion-inline-start:"C:\Users\Chi Chi\Chefr2\src\pages\addi\addi.html"*/'<!--\n  Generated template for the AddiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Ingredient</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-view title=”Add Ingredients”>\n    <ion-content padding=”true” class=”has-header”>\n    <ion-nav-buttons side=”left” class=”has header”>\n    <button class=”button button-icon icon ion-ios-arrow-back”></button>\n    </ion-nav-buttons>\n    \n      <!—Calculation grid/table-- >\n    <!—body ng-controller=”Javafunctionname”> \n    <!—html ng-app=”Chefr” **directive to create angular app/ html load module when the document loads ** -->\n    \n    <div id=”pleaseWork”>\n        <div id=”IngredientBox”>\n        <label for=”ingredientName”> Enter ingredient: </label>\n    <input id=”ingredientName” type=”text” name=”ingredient”>\n    </div>\n    \n    <div id=”gramBox”>\n    <label for=”gramAmount”> Enter grams:</label>\n    <input id=”gramAmount” type =”text” name=”grams”>\n    </div>\n    \n    <!--calculate button-->\n    \n    <button class=”button button-energized button-block”>Total Calories</button>\n    \n    <! – calculation results **link controller to display results on page**\n    -->\n    <!—div ng-controller=”controller name”\n    <h1> Calorie count</h1>\n    </div>\n      <div id=”answer”></div> \n    </div>\n    </div>\n    </div>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Chi Chi\Chefr2\src\pages\addi\addi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AddiPage);

//# sourceMappingURL=addi.js.map

/***/ })

});
//# sourceMappingURL=1.js.map