"use strict";
(self["webpackChunkaggregator"] = self["webpackChunkaggregator"] || []).push([["main"],{

/***/ 3738:
/*!*********************************************!*\
  !*** ./src/aggregator/app/app.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);









function AppComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["color", "primary", 1, "app-toolbar", "sticky-top"], ["fxFlex", ""], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "mat-toolbar", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Data Aggregators");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-yellow" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 2845:
/*!******************************************!*\
  !*** ./src/aggregator/app/app.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 3823);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 3738);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ 695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_core_expansion_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/core/expansion-card.component */ 1172);
/* harmony import */ var _components_swapi_aggregators_film_aggregator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/swapi/aggregators/film.aggregator */ 2713);
/* harmony import */ var _components_swapi_aggregators_people_aggregator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/swapi/aggregators/people.aggregator */ 7581);
/* harmony import */ var _components_swapi_aggregators_planet_aggregator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/swapi/aggregators/planet.aggregator */ 4305);
/* harmony import */ var _components_swapi_aggregators_species_aggregator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/swapi/aggregators/species.aggregator */ 2001);
/* harmony import */ var _components_swapi_aggregators_starship_aggregator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/swapi/aggregators/starship.aggregator */ 9093);
/* harmony import */ var _components_swapi_aggregators_vehicle_aggregator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/swapi/aggregators/vehicle.aggregator */ 2470);
/* harmony import */ var _components_swapi_swapi_aggregator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/swapi/swapi-aggregator.component */ 6295);
/* harmony import */ var _components_swapi_swapi_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/swapi/swapi-list.component */ 9947);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/home/home.route */ 266);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__.Routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_core_expansion_card_component__WEBPACK_IMPORTED_MODULE_3__.ExpansionCardComponent, _components_swapi_aggregators_film_aggregator__WEBPACK_IMPORTED_MODULE_4__.FilmAggregator, _components_swapi_aggregators_people_aggregator__WEBPACK_IMPORTED_MODULE_5__.PeopleAggregator, _components_swapi_aggregators_planet_aggregator__WEBPACK_IMPORTED_MODULE_6__.PlanetAggregator, _components_swapi_aggregators_species_aggregator__WEBPACK_IMPORTED_MODULE_7__.SpeciesAggregator, _components_swapi_aggregators_starship_aggregator__WEBPACK_IMPORTED_MODULE_8__.StarshipAggregator, _components_swapi_aggregators_vehicle_aggregator__WEBPACK_IMPORTED_MODULE_9__.VehicleAggregator, _components_swapi_swapi_aggregator_component__WEBPACK_IMPORTED_MODULE_10__.SwapiAggregatorComponent, _components_swapi_swapi_list_component__WEBPACK_IMPORTED_MODULE_11__.SwapiListComponent, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_12__.HomeRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 1172:
/*!************************************************************************!*\
  !*** ./src/aggregator/app/components/core/expansion-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionCardComponent": () => (/* binding */ ExpansionCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




function ExpansionCardComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ExpansionCardComponent {
    constructor() {
        this.heading = 'Heading';
        this.expanded = false;
        this.collapseIcon = 'keyboard_arrow_down';
        this.expandIcon = 'keyboard_arrow_up';
        this.cardStyle = 'm4 p2 rounded card-outline-accent';
        this.toggle = () => this.expanded = !this.expanded;
    }
}
ExpansionCardComponent.ɵfac = function ExpansionCardComponent_Factory(t) { return new (t || ExpansionCardComponent)(); };
ExpansionCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpansionCardComponent, selectors: [["expansion-card"]], inputs: { heading: "heading", expanded: "expanded", collapseIcon: "collapseIcon", expandIcon: "expandIcon", cardStyle: "cardStyle" }, ngContentSelectors: _c0, decls: 7, vars: 5, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "background-card", "p2", "cursor-pointer", 3, "click"], [1, "mat-title", "m4"], [1, "m4"], ["class", "p2", "fxLayout", "column", "fxLayoutAlign", "start stretch", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p2"]], template: function ExpansionCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionCardComponent_Template_section_click_1_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExpansionCardComponent_section_6_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expanded ? ctx.collapseIcon : ctx.expandIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 2713:
/*!****************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/film.aggregator.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmAggregator": () => (/* binding */ FilmAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function FilmAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function FilmAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function FilmAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function FilmAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function FilmAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class FilmAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'films');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = film => film.title;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

FilmAggregator.ɵfac = function FilmAggregator_Factory(t) {
  return new (t || FilmAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

FilmAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FilmAggregator,
  selectors: [["film-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "Films"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function FilmAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FilmAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FilmAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7581:
/*!******************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/people.aggregator.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleAggregator": () => (/* binding */ PeopleAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function PeopleAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function PeopleAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function PeopleAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function PeopleAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function PeopleAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class PeopleAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'people');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = person => person.name;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

PeopleAggregator.ɵfac = function PeopleAggregator_Factory(t) {
  return new (t || PeopleAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

PeopleAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PeopleAggregator,
  selectors: [["people-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "People"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function PeopleAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PeopleAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PeopleAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 4305:
/*!******************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/planet.aggregator.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanetAggregator": () => (/* binding */ PlanetAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function PlanetAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function PlanetAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function PlanetAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function PlanetAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function PlanetAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class PlanetAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'planets');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = planet => planet.name;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

PlanetAggregator.ɵfac = function PlanetAggregator_Factory(t) {
  return new (t || PlanetAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

PlanetAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PlanetAggregator,
  selectors: [["planet-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "Planets"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function PlanetAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PlanetAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PlanetAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2001:
/*!*******************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/species.aggregator.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeciesAggregator": () => (/* binding */ SpeciesAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function SpeciesAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function SpeciesAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function SpeciesAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function SpeciesAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function SpeciesAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class SpeciesAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'species');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = species => species.name;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

SpeciesAggregator.ɵfac = function SpeciesAggregator_Factory(t) {
  return new (t || SpeciesAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

SpeciesAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SpeciesAggregator,
  selectors: [["species-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "Species"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function SpeciesAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SpeciesAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SpeciesAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9093:
/*!********************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/starship.aggregator.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarshipAggregator": () => (/* binding */ StarshipAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function StarshipAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function StarshipAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function StarshipAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function StarshipAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function StarshipAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class StarshipAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'starships');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = starship => `${starship.name} - ${starship.model}`;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

StarshipAggregator.ɵfac = function StarshipAggregator_Factory(t) {
  return new (t || StarshipAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

StarshipAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StarshipAggregator,
  selectors: [["starship-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "Starships"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function StarshipAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StarshipAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, StarshipAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 4582:
/*!*****************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/swapi.aggregator.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiAggregator": () => (/* binding */ SwapiAggregator)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ 1631);

class SwapiAggregator {
    constructor(http, snacker, endpoint) {
        this.http = http;
        this.snacker = snacker;
        this.endpoint = endpoint;
        this.initSub = (search) => this.sub = search.subscribe({
            next: (term) => this.query.search = term?.length > 0
                ? term
                : null
        });
        this.setEndpoint = (url) => this.query.endpoint = url;
        this.query = new _models__WEBPACK_IMPORTED_MODULE_0__.SwapiQuery(http, snacker);
        this.query.endpoint = endpoint;
    }
}


/***/ }),

/***/ 2470:
/*!*******************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/aggregators/vehicle.aggregator.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleAggregator": () => (/* binding */ VehicleAggregator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.aggregator */ 4582);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/expansion-card.component */ 1172);
/* harmony import */ var _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swapi-list.component */ 9947);










function VehicleAggregator_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 3);
  }
}

function VehicleAggregator_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swapi-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("previous", function VehicleAggregator_ng_container_3_Template_swapi_list_previous_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEndpoint($event));
    })("next", function VehicleAggregator_ng_container_3_Template_swapi_list_next_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEndpoint($event));
    })("action", function VehicleAggregator_ng_container_3_Template_swapi_list_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.action.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", result_r3)("render", ctx_r2.render);
  }
}

class VehicleAggregator extends _swapi_aggregator__WEBPACK_IMPORTED_MODULE_0__.SwapiAggregator {
  constructor(http, snacker) {
    super(http, snacker, 'vehicles');
    this.http = http;
    this.snacker = snacker;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

    this.render = vehicle => `${vehicle.name} - ${vehicle.model}`;
  }

  ngOnInit() {
    this.initSub(this.search);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

VehicleAggregator.ɵfac = function VehicleAggregator_Factory(t) {
  return new (t || VehicleAggregator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SnackerService));
};

VehicleAggregator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VehicleAggregator,
  selectors: [["vehicle-aggregator"]],
  inputs: {
    search: "search"
  },
  outputs: {
    action: "action"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 4,
  consts: [["heading", "Vehicles"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], [3, "result", "render", "previous", "next", "action"]],
  template: function VehicleAggregator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "expansion-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VehicleAggregator_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VehicleAggregator_ng_container_3_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx.query.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar, _core_expansion_card_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionCardComponent, _swapi_list_component__WEBPACK_IMPORTED_MODULE_3__.SwapiListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6295:
/*!***************************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/swapi-aggregator.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiAggregatorComponent": () => (/* binding */ SwapiAggregatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);









function SwapiAggregatorComponent_section_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 8);
  }
}

function SwapiAggregatorComponent_section_7_ng_container_3_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pre", 12)(2, "code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, r_r7));
  }
}

function SwapiAggregatorComponent_section_7_ng_container_3_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SwapiAggregatorComponent_section_7_ng_container_3_section_1_ng_container_1_Template, 5, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r4.results);
  }
}

function SwapiAggregatorComponent_section_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SwapiAggregatorComponent_section_7_ng_container_3_section_1_Template, 2, 1, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r4.results == null ? null : data_r4.results.length) > 0);
  }
}

function SwapiAggregatorComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SwapiAggregatorComponent_section_7_ng_template_1_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SwapiAggregatorComponent_section_7_ng_container_3_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r0.result$))("ngIfElse", _r1);
  }
}

class SwapiAggregatorComponent {
  constructor(swapi) {
    this.swapi = swapi;
    this.expanded = false;
    this.name = 'Aggregator';
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();

    this.toggleExpanded = () => this.expanded = !this.expanded;
  }

  ngOnInit() {
    this.result$ = this.swapi.get(this.url);
    this.sub = this.search?.subscribe({
      next: term => this.result$ = term?.length > 0 ? this.swapi.search(this.url, term) : this.swapi.get(this.url)
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

SwapiAggregatorComponent.ɵfac = function SwapiAggregatorComponent_Factory(t) {
  return new (t || SwapiAggregatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.SwapiService));
};

SwapiAggregatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SwapiAggregatorComponent,
  selectors: [["swapi-aggregator"]],
  inputs: {
    name: "name",
    url: "url",
    search: "search"
  },
  outputs: {
    select: "select"
  },
  decls: 8,
  vars: 3,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "m4", "rounded", "card-outline-accent"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "background-card", "rounded", "p8"], [1, "mat-title", "m4"], ["mat-icon-button", "", 3, "click"], ["class", "p8 rounded", "fxLayout", "column", "fxLayoutAlign", "start stretch", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8", "rounded"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], [4, "ngFor", "ngForOf"], [1, "scroll-pre"], [1, "green"]],
  template: function SwapiAggregatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "section", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwapiAggregatorComponent_Template_button_click_4_listener() {
        return ctx.toggleExpanded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SwapiAggregatorComponent_section_7_Template, 5, 4, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expanded ? "keyboard_arrow_down" : "keyboard_arrow_up", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
  encapsulation: 2
});

/***/ }),

/***/ 9947:
/*!*********************************************************************!*\
  !*** ./src/aggregator/app/components/swapi/swapi-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiListComponent": () => (/* binding */ SwapiListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);





function SwapiListComponent_ng_container_0_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5)(1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwapiListComponent_ng_container_0_section_6_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.action.emit(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.render(item_r3));
} }
function SwapiListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwapiListComponent_ng_container_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.previous.emit(ctx_r6.result.previous)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwapiListComponent_ng_container_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.next.emit(ctx_r8.result.next)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SwapiListComponent_ng_container_0_section_6_Template, 5, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.result.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.result.next);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.result.results);
} }
function SwapiListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SwapiListComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
SwapiListComponent.ɵfac = function SwapiListComponent_Factory(t) { return new (t || SwapiListComponent)(); };
SwapiListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwapiListComponent, selectors: [["swapi-list"]], inputs: { result: "result", render: "render" }, outputs: { next: "next", previous: "previous", action: "action" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "mat-subheading-1 m4", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", 3, "disabled", "click"], ["class", "m4 p4 background-card rounded card-outline-accent", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "m4", "p4", "background-card", "rounded", "card-outline-accent"], [1, "mat-body-strong", "m4"], ["mat-button", "", "color", "primary", 3, "click"], [1, "mat-subheading-1", "m4"]], template: function SwapiListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SwapiListComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SwapiListComponent_p_1_Template, 2, 0, "p", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : ctx.result.count) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((ctx.result == null ? null : ctx.result.count) > 0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 3823:
/*!***********************************************!*\
  !*** ./src/aggregator/app/material.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 712);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.GridModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.GridModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule] }); })();


/***/ }),

/***/ 1631:
/*!********************************************!*\
  !*** ./src/aggregator/app/models/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiQuery": () => (/* reexport safe */ _swapi_query__WEBPACK_IMPORTED_MODULE_1__.SwapiQuery)
/* harmony export */ });
/* harmony import */ var _swapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi */ 5353);
/* harmony import */ var _swapi_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapi-query */ 749);




/***/ }),

/***/ 749:
/*!**************************************************!*\
  !*** ./src/aggregator/app/models/swapi-query.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiQuery": () => (/* binding */ SwapiQuery)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);


class SwapiQuery {
    constructor(http, snacker) {
        this.http = http;
        this.snacker = snacker;
        this.baseUrl = 'https://swapi.dev/api/';
        this.url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.initUrl = () => this.url
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(url => !!url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((url) => this.http.get(url.toString())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(er => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(er))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(r => !!r))
            .subscribe({
            next: result => this.result.next(result),
            error: err => this.snacker.sendErrorMessage(err)
        });
        this.result$ = this.result.asObservable();
        this.unsubscribe = () => this.sub?.unsubscribe();
        this._endpoint = null;
        this._search = null;
        this.refresh = (repage = false) => {
            this.clear();
            const url = new URL(this.endpoint, this.baseUrl);
            if (repage)
                url.searchParams.set('page', '1');
            if (this.search)
                url.searchParams.set('search', this.search);
            else
                url.searchParams.delete('search');
            this.url.next(url);
            this._endpoint = url.toString();
        };
        this.clear = () => this.result.next(null);
        this.sub = this.initUrl();
    }
    get endpoint() { return this._endpoint; }
    set endpoint(value) {
        const url = new URL(value, this.baseUrl);
        if (this.baseUrl.startsWith(url.origin)) {
            if (url.toString() !== this._endpoint) {
                this._endpoint = url.toString();
                this.refresh();
            }
        }
    }
    get search() {
        return this._search;
    }
    set search(value) {
        if (value !== this._search) {
            this._search = value;
            this.refresh(true);
        }
    }
}


/***/ }),

/***/ 2961:
/*!*************************************************!*\
  !*** ./src/aggregator/app/models/swapi/film.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5353:
/*!**************************************************!*\
  !*** ./src/aggregator/app/models/swapi/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film */ 2961);
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ 2590);
/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planet */ 3462);
/* harmony import */ var _species__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./species */ 580);
/* harmony import */ var _starship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starship */ 8453);
/* harmony import */ var _swapi_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swapi-result */ 9394);
/* harmony import */ var _swapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swapi */ 3370);
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle */ 2705);










/***/ }),

/***/ 2590:
/*!***************************************************!*\
  !*** ./src/aggregator/app/models/swapi/person.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3462:
/*!***************************************************!*\
  !*** ./src/aggregator/app/models/swapi/planet.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 580:
/*!****************************************************!*\
  !*** ./src/aggregator/app/models/swapi/species.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8453:
/*!*****************************************************!*\
  !*** ./src/aggregator/app/models/swapi/starship.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9394:
/*!*********************************************************!*\
  !*** ./src/aggregator/app/models/swapi/swapi-result.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3370:
/*!**************************************************!*\
  !*** ./src/aggregator/app/models/swapi/swapi.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2705:
/*!****************************************************!*\
  !*** ./src/aggregator/app/models/swapi/vehicle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 266:
/*!******************************************************!*\
  !*** ./src/aggregator/app/routes/home/home.route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 6978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _components_swapi_aggregators_film_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/swapi/aggregators/film.aggregator */ 2713);
/* harmony import */ var _components_swapi_aggregators_people_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/swapi/aggregators/people.aggregator */ 7581);
/* harmony import */ var _components_swapi_aggregators_planet_aggregator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/swapi/aggregators/planet.aggregator */ 4305);
/* harmony import */ var _components_swapi_aggregators_species_aggregator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/swapi/aggregators/species.aggregator */ 2001);
/* harmony import */ var _components_swapi_aggregators_starship_aggregator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/swapi/aggregators/starship.aggregator */ 9093);
/* harmony import */ var _components_swapi_aggregators_vehicle_aggregator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/swapi/aggregators/vehicle.aggregator */ 2470);














const _c0 = ["searchbar"];
function HomeRoute_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "film-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_film_aggregator_action_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "people-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_people_aggregator_action_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "planet-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_planet_aggregator_action_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "species-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_species_aggregator_action_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "starship-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_starship_aggregator_action_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "vehicle-aggregator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function HomeRoute_ng_container_12_Template_vehicle_aggregator_action_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.select($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("search", ctx_r1.search$);
} }
function HomeRoute_pre_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "pre", 11)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r2.selected));
} }
class HomeRoute {
    constructor(core) {
        this.core = core;
        this.selected = null;
        this.select = (item) => this.selected = item;
        this.clearSelection = () => this.selected = null;
    }
    ngAfterContentInit() {
        this.search$ = this.core.generateInputObservable(this.searchbar);
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.CoreService)); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], viewQuery: function HomeRoute_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchbar = _t.first);
    } }, decls: 15, vars: 3, consts: [["fxFlex", ""], ["mat-button", "", 3, "disabled", "click"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "start stretch"], [1, "m8"], ["matInput", ""], ["searchbar", ""], [4, "ngIf"], ["fxFlex", "70", 1, "p8"], ["class", "pre-wrap", 4, "ngIf"], [3, "search", "action"], [1, "pre-wrap"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Star Wars API");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_3_listener() { return ctx.clearSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Clear Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "section", 2)(6, "section", 3)(7, "mat-form-field", 4)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Search Aggregators");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, HomeRoute_ng_container_12_Template, 7, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, HomeRoute_pre_14_Template, 4, 3, "pre", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.search$);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selected);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _components_swapi_aggregators_film_aggregator__WEBPACK_IMPORTED_MODULE_1__.FilmAggregator, _components_swapi_aggregators_people_aggregator__WEBPACK_IMPORTED_MODULE_2__.PeopleAggregator, _components_swapi_aggregators_planet_aggregator__WEBPACK_IMPORTED_MODULE_3__.PlanetAggregator, _components_swapi_aggregators_species_aggregator__WEBPACK_IMPORTED_MODULE_4__.SpeciesAggregator, _components_swapi_aggregators_starship_aggregator__WEBPACK_IMPORTED_MODULE_5__.StarshipAggregator, _components_swapi_aggregators_vehicle_aggregator__WEBPACK_IMPORTED_MODULE_6__.VehicleAggregator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 704:
/*!*************************************************!*\
  !*** ./src/aggregator/app/routes/home/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 266);



/***/ }),

/***/ 695:
/*!********************************************!*\
  !*** ./src/aggregator/app/routes/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 704);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 4591:
/*!*****************************************************!*\
  !*** ./src/aggregator/app/services/core.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);




class CoreService {
    constructor() {
        this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;
        this.getUploadOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Accept', 'application/json');
            headers.delete('Content-Type');
            return headers;
        };
        this.getTextOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Content-Type', 'text/plain');
            headers.delete('Pragma');
            return headers;
        };
        this.urlEncode = (value) => {
            const regex = /[^a-zA-Z0-9-.]/gi;
            let newValue = value.replace(/\s/g, '-').toLowerCase();
            newValue = newValue.replace(regex, '');
            return newValue;
        };
        this.generateInputObservable = (input) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6978:
/*!**********************************************!*\
  !*** ./src/aggregator/app/services/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _snacker_service__WEBPACK_IMPORTED_MODULE_2__.SnackerService),
/* harmony export */   "SwapiService": () => (/* reexport safe */ _swapi__WEBPACK_IMPORTED_MODULE_0__.SwapiService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)
/* harmony export */ });
/* harmony import */ var _swapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi */ 8688);
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.service */ 4591);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snacker.service */ 7523);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.service */ 8486);






/***/ }),

/***/ 7523:
/*!********************************************************!*\
  !*** ./src/aggregator/app/services/snacker.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SnackerService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        this.sendMessage = (message) => this.snackbar.open(message, 'Close', this.config);
        this.setClasses = (classes) => {
            classes.push('snacker');
            this.config.panelClass = classes;
        };
        this.sendColorMessage = (message, colors) => {
            this.setClasses(colors);
            this.sendMessage(message);
        };
        this.sendErrorMessage = (message) => {
            this.setClasses(['snacker-red']);
            this.sendMessage(message);
        };
        this.sendWarningMessage = (message) => {
            this.setClasses(['snacker-orange']);
            this.sendMessage(message);
        };
        this.sendSuccessMessage = (message) => {
            this.setClasses(['snacker-green']);
            this.sendMessage(message);
        };
        this.config.duration = 5000;
        this.config.panelClass = [];
    }
    setDuration(duration) {
        this.config.duration = duration;
    }
}
SnackerService.ɵfac = function SnackerService_Factory(t) { return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
SnackerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackerService, factory: SnackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8688:
/*!****************************************************!*\
  !*** ./src/aggregator/app/services/swapi/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiService": () => (/* reexport safe */ _swapi_service__WEBPACK_IMPORTED_MODULE_0__.SwapiService)
/* harmony export */ });
/* harmony import */ var _swapi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.service */ 9032);



/***/ }),

/***/ 9032:
/*!************************************************************!*\
  !*** ./src/aggregator/app/services/swapi/swapi.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwapiService": () => (/* binding */ SwapiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class SwapiService {
    constructor(http) {
        this.http = http;
        this.api = 'https://swapi.dev/api/';
        this.get = (endpoint) => this.http.get(endpoint);
        this.search = (endpoint, term) => this.http.get(`${endpoint}?search=${term}`);
        this.retrieve = (url) => this.http.get(url);
        this.retrieveAsync = (url) => new Promise((resolve, reject) => this.retrieve(url)
            .subscribe({
            next: (data) => resolve(data),
            error: (err) => reject(err)
        }));
    }
}
SwapiService.ɵfac = function SwapiService_Factory(t) { return new (t || SwapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SwapiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SwapiService, factory: SwapiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8486:
/*!******************************************************!*\
  !*** ./src/aggregator/app/services/theme.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);


class ThemeService {
    constructor(overlay) {
        this.overlay = overlay;
        this.isLight = true;
        this.setOverlayContainerTheme = () => {
            if (this.isLight) {
                this.overlay.getContainerElement().classList.remove('app-dark');
                this.overlay.getContainerElement().classList.add('app-light');
            }
            else {
                this.overlay.getContainerElement().classList.remove('app-light');
                this.overlay.getContainerElement().classList.add('app-dark');
            }
        };
        this.toggleTheme = () => {
            this.isLight = !this.isLight;
            this.setOverlayContainerTheme();
        };
        this.isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        window.matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', (e) => this.isLight = e.matches);
        this.setOverlayContainerTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3463:
/*!****************************************************!*\
  !*** ./src/aggregator/environments/environment.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ 6209:
/*!********************************!*\
  !*** ./src/aggregator/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2845);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3463);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6209)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map