(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-currency-converts-history-currency-converts-history-module"],{

/***/ "./src/app/features/currency-converts-history/currency-converts-history-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/features/currency-converts-history/currency-converts-history-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: CurrencyConvertsHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConvertsHistoryRoutingModule", function() { return CurrencyConvertsHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _currency_converts_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-converts-history.component */ "./src/app/features/currency-converts-history/currency-converts-history.component.ts");





var routes = [
    {
        path: '',
        component: _currency_converts_history_component__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertsHistoryComponent"]
    },
    { path: '**', redirectTo: '' }
];
var CurrencyConvertsHistoryRoutingModule = /** @class */ (function () {
    function CurrencyConvertsHistoryRoutingModule() {
    }
    CurrencyConvertsHistoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrencyConvertsHistoryRoutingModule });
    CurrencyConvertsHistoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrencyConvertsHistoryRoutingModule_Factory(t) { return new (t || CurrencyConvertsHistoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CurrencyConvertsHistoryRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrencyConvertsHistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConvertsHistoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/currency-converts-history/currency-converts-history.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/currency-converts-history/currency-converts-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CurrencyConvertsHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConvertsHistoryComponent", function() { return CurrencyConvertsHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/app.service */ "./src/app/core/app.service.ts");
/* harmony import */ var _views_currency_converts_history_table_currency_converts_history_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/currency-converts-history-table/currency-converts-history-table.component */ "./src/app/features/currency-converts-history/views/currency-converts-history-table/currency-converts-history-table.component.ts");




var CurrencyConvertsHistoryComponent = /** @class */ (function () {
    function CurrencyConvertsHistoryComponent(appService) {
        this.appService = appService;
    }
    CurrencyConvertsHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.appService.pageTitle = 'Currency converts history';
        }, 0);
    };
    CurrencyConvertsHistoryComponent.ɵfac = function CurrencyConvertsHistoryComponent_Factory(t) { return new (t || CurrencyConvertsHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
    CurrencyConvertsHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyConvertsHistoryComponent, selectors: [["app-currency-converts-history"]], decls: 2, vars: 0, consts: [[1, "currency-converts-history-wrapper"]], template: function CurrencyConvertsHistoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-currency-converts-history-table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_views_currency_converts_history_table_currency_converts_history_table_component__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertsHistoryTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1cnJlbmN5LWNvbnZlcnRzLWhpc3RvcnkvY3VycmVuY3ktY29udmVydHMtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return CurrencyConvertsHistoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConvertsHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-converts-history',
                templateUrl: './currency-converts-history.component.html',
                styleUrls: ['./currency-converts-history.component.scss']
            }]
    }], function () { return [{ type: _core_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/currency-converts-history/currency-converts-history.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/currency-converts-history/currency-converts-history.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CurrencyConvertsHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConvertsHistoryModule", function() { return CurrencyConvertsHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _currency_converts_history_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-converts-history-routing.module */ "./src/app/features/currency-converts-history/currency-converts-history-routing.module.ts");
/* harmony import */ var _currency_converts_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-converts-history.component */ "./src/app/features/currency-converts-history/currency-converts-history.component.ts");
/* harmony import */ var _views_currency_converts_history_table_currency_converts_history_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/currency-converts-history-table/currency-converts-history-table.component */ "./src/app/features/currency-converts-history/views/currency-converts-history-table/currency-converts-history-table.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







var CurrencyConvertsHistoryModule = /** @class */ (function () {
    function CurrencyConvertsHistoryModule() {
    }
    CurrencyConvertsHistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrencyConvertsHistoryModule });
    CurrencyConvertsHistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrencyConvertsHistoryModule_Factory(t) { return new (t || CurrencyConvertsHistoryModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _currency_converts_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertsHistoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]] });
    return CurrencyConvertsHistoryModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrencyConvertsHistoryModule, { declarations: [_currency_converts_history_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyConvertsHistoryComponent"], _views_currency_converts_history_table_currency_converts_history_table_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyConvertsHistoryTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _currency_converts_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertsHistoryRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConvertsHistoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_currency_converts_history_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyConvertsHistoryComponent"], _views_currency_converts_history_table_currency_converts_history_table_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyConvertsHistoryTableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _currency_converts_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertsHistoryRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/currency-converts-history/views/currency-converts-history-table/currency-converts-history-table.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/features/currency-converts-history/views/currency-converts-history-table/currency-converts-history-table.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CurrencyConvertsHistoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConvertsHistoryTableComponent", function() { return CurrencyConvertsHistoryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CurrencyConvertsHistoryTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There are no conversions yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurrencyConvertsHistoryTableComponent_ng_template_14_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var convert_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, convert_r4.timestamp, "dd/MM/yy, HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, convert_r4.from.amount, convert_r4.from.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 10, convert_r4.to.amount, convert_r4.to.name));
} }
function CurrencyConvertsHistoryTableComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrencyConvertsHistoryTableComponent_ng_template_14_tr_0_Template, 16, 13, "tr", 7);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.currencyConverts);
} }
var CurrencyConvertsHistoryTableComponent = /** @class */ (function () {
    function CurrencyConvertsHistoryTableComponent() {
    }
    CurrencyConvertsHistoryTableComponent.prototype.ngOnInit = function () {
        this.currencyConverts = this.fetchCurrencyConvertsHistory();
    };
    CurrencyConvertsHistoryTableComponent.prototype.fetchCurrencyConvertsHistory = function () {
        var currencyConvertsHistory = localStorage.getItem('currencyConvertsHistory');
        if (currencyConvertsHistory) {
            return JSON.parse(currencyConvertsHistory);
        }
        return [];
    };
    CurrencyConvertsHistoryTableComponent.ɵfac = function CurrencyConvertsHistoryTableComponent_Factory(t) { return new (t || CurrencyConvertsHistoryTableComponent)(); };
    CurrencyConvertsHistoryTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyConvertsHistoryTableComponent, selectors: [["app-currency-converts-history-table"]], decls: 16, vars: 2, consts: [[1, "currency-converts-history-table-wrapper", "table-responsive"], [1, "table", "table-hover"], [1, "table-primary"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["currencyConvertsTableTemplate", ""], ["colspan", "3"], [4, "ngFor", "ngForOf"]], template: function CurrencyConvertsHistoryTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "From");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "To");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurrencyConvertsHistoryTableComponent_tr_13_Template, 3, 0, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CurrencyConvertsHistoryTableComponent_ng_template_14_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currencyConverts && (ctx.currencyConverts == null ? null : ctx.currencyConverts.length) === 0)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1cnJlbmN5LWNvbnZlcnRzLWhpc3Rvcnkvdmlld3MvY3VycmVuY3ktY29udmVydHMtaGlzdG9yeS10YWJsZS9jdXJyZW5jeS1jb252ZXJ0cy1oaXN0b3J5LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CurrencyConvertsHistoryTableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConvertsHistoryTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-converts-history-table',
                templateUrl: './currency-converts-history-table.component.html',
                styleUrls: ['./currency-converts-history-table.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-currency-converts-history-currency-converts-history-module.js.map