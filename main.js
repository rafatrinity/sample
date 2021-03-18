(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/NTo":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "tZhi");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class NavbarModule {
}
NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rafael.trindade\Documents\GitHub\sample\src\main.ts */"zUnb");


/***/ }),

/***/ "2nIP":
/*!***************************************************!*\
  !*** ./src/app/puzzle/puzzle/puzzle.component.ts ***!
  \***************************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class PuzzleComponent {
    constructor() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].assets;
        this.ask = 'Is that number even?';
        this.even = 0;
        this.odd = 0;
        this.count = 0;
        this.position = [];
    }
    ngOnInit() {
        this.animation();
    }
    animation() {
        const container = document.querySelector('.wrapper');
        const card = document.querySelector('.clash-card');
        const img = document.querySelector('.img');
        const txt = document.querySelector('.clash-card__unit-description');
        container.addEventListener('mousemove', (e) => {
            let x = -1 * (window.innerWidth / 2 - e['pageX']) / 25;
            let y = (window.innerHeight / 2 - e['pageY']) / 25;
            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
        container.addEventListener('mouseleave', (e) => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            img.style.transform = 'translateZ(0px)';
            txt.style.transform = 'translateZ(0px)';
        });
        container.addEventListener('mouseenter', (e) => {
            card.style.transition = 'none';
            img.style.transform = 'translateZ(100px)';
            txt.style.transform = 'translateZ(75px)';
        });
    }
    begin() {
        this.ask = 'Is that number even?';
        document.getElementById('begin').setAttribute('class', 'begin d-none');
        document.getElementById('puzzle').setAttribute('class', 'puzzle d-none');
        document.getElementById('divide').setAttribute('class', 'divide d-none');
        document.getElementById('game').setAttribute('class', 'game d-block');
        document.getElementById('even').setAttribute('class', 'even d-block');
    }
    isEven(resp) {
        this.ask = 'Is the result of the division even?';
        document.getElementById('even').setAttribute('class', 'even d-none');
        if (resp == 'yes') {
            this.even++;
            this.divide = 'divide by 2.';
        }
        else {
            this.odd++;
            this.position[this.count] = 1;
            this.divide = 'subtract one and divide by 2.';
        }
        document.getElementById('divide').setAttribute('class', 'divide d-block');
        this.count++;
    }
    ok() {
        document.getElementById('divide').setAttribute('class', 'divide d-none');
        document.getElementById('one').setAttribute('class', 'one d-block');
    }
    isOne(resp) {
        document.getElementById('one').setAttribute('class', 'one d-none');
        if (resp == 'yes')
            this.magic();
        else
            document.getElementById('even').setAttribute('class', 'even d-block');
    }
    pot(a, b) {
        if (b == 0)
            return 1;
        if (b == 1)
            return a;
        let c = 0;
        for (let i = 1; i < b; i++)
            c += a * a;
        return c;
    }
    magic() {
        let a = 0;
        let b = 0;
        if (this.odd == 0)
            this.puzzle = this.pot(2, this.even);
        else {
            for (let i = 0; i < this.count; i++) {
                if (this.position[i] == 1)
                    b += this.pot(2, i); //impar
            }
            a = this.pot(2, this.even + this.odd);
            this.puzzle = a + b;
            console.log(this.puzzle);
        }
        document.getElementById('puzzle').setAttribute('class', 'puzzle d-block');
    }
    remake() {
        this.ask = 'Is that number even?';
        this.even = 0;
        this.odd = 0;
        this.count = 0;
        this.puzzle = 0;
        this.position = [];
        document.getElementById('one').setAttribute('class', 'one d-none');
        document.getElementById('game').setAttribute('class', 'game d-none');
        document.getElementById('begin').setAttribute('class', 'begin d-block');
    }
}
PuzzleComponent.ɵfac = function PuzzleComponent_Factory(t) { return new (t || PuzzleComponent)(); };
PuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PuzzleComponent, selectors: [["app-puzzle"]], decls: 40, vars: 4, consts: [[1, "slide-container"], [1, "wrapper"], [1, "clash-card", "barbarian"], [1, "clash-card__image", "clash-card__image--barbarian"], ["alt", "drstrange", 1, "img", 3, "src"], [1, "clash-card__unit-description"], ["id", "begin", 1, "begin"], ["mat-fab", "", "color", "a", 3, "click"], ["id", "game", 1, "game", "d-none"], ["id", "even", 1, "even"], ["mat-mini-fab", "", "color", "a", 3, "click"], ["id", "one", 1, "one", "d-none"], ["id", "divide", 1, "divide", "d-none"], ["id", "puzzle", 1, "puzzle", "d-none"], [1, "resp"]], template: function PuzzleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Let's play divination game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "think of a number greater than one.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_11_listener() { return ctx.begin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Let's Go!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_17_listener() { return ctx.isEven("yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_19_listener() { return ctx.isEven("no"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "the result of the division is one?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_24_listener() { return ctx.isOne("yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_26_listener() { return ctx.isOne("no"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_31_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "the number chosen was...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_Template_button_click_38_listener() { return ctx.remake(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "remake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "", ctx.env, "/images/drstrange.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.divide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.puzzle, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);\np[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n}\n.mat-mini-fab[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  font: 14px/20px \"Lato\", Arial, sans-serif;\n  color: #9E9E9E;\n  margin-top: 30px;\n}\n.slide-container[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  align-content: center;\n  height: 100vh;\n  perspective: 600px;\n}\n.img[_ngcontent-%COMP%] {\n  transition: all 0.75s ease-out;\n}\n.wrapper[_ngcontent-%COMP%] {\n  padding-top: 6%;\n  padding-bottom: 4%;\n  max-width: 450px;\n  margin: auto;\n}\n.wrapper[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.clash-card[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n  background: #2e2e2e;\n  width: 300px;\n  display: inline-block;\n  margin: auto;\n  border-radius: 19px;\n  position: relative;\n  text-align: center;\n  margin-top: 3.5em;\n  box-shadow: -1px 15px 30px -12px #74ffff;\n  z-index: 9999;\n}\n.clash-card__image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 230px;\n  margin-bottom: 30px;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n}\n.clash-card__image--barbarian[_ngcontent-%COMP%] {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg\");\n}\n.clash-card__image--barbarian[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: -95px;\n  left: 10px;\n}\n.resp[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #d6ffff;\n  font-weight: 900;\n  margin-bottom: 5px;\n}\n.clash-card__unit-description[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 10px;\n  transition: all 0.75s ease-out;\n}\n.clash-card__unit-stats--barbarian[_ngcontent-%COMP%] {\n  background: #EC9B3B;\n}\n.clash-card__unit-stats--barbarian[_ngcontent-%COMP%]   .one-third[_ngcontent-%COMP%] {\n  border-right: 1px solid #BD7C2F;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%]   .one-third[_ngcontent-%COMP%] {\n  width: 33%;\n  float: left;\n  padding: 20px 15px;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  font-size: 45%;\n  margin-left: 2px;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 12px;\n}\n.clash-card__unit-stats[_ngcontent-%COMP%]   .no-border[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.clearfix[_ngcontent-%COMP%]:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwdXp6bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVEscUVBQUE7QUFaUjtFQUNJLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQUVKO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFPQTtFQUNFLHNCQUFBO0FBSkY7QUFPQTtFQUNFLHVIQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUpGO0FBTUE7RUFDRSw4QkFBQTtBQUhGO0FBS0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUlFO0VBQ0UsVUFBQTtBQUZKO0FBTUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBdERtQjtFQXVEbkIsNkJBdkRtQjtBQW9EckI7QUFNQTtFQUNFLHVGQUFBO0FBSEY7QUFJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRko7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpGO0FBT0E7RUFDRSxtQkFsRlU7QUE4RVo7QUFNRTtFQUNHLCtCQUFBO0FBSkw7QUFRQTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQTlGbUI7RUErRm5CLGdDQS9GbUI7QUF5RnJCO0FBUUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVBKO0FBVUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVRKO0FBWUU7RUFDRSxrQkFBQTtBQVZKO0FBY0E7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWEQiLCJmaWxlIjoicHV6emxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5tYXQtbWluaS1mYWJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCw5MDApO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtc2l6ZTogMTRweDtcclxuJGJhcmJhcmlhbjogI0VDOUIzQjtcclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NTYxMi9jb2MtYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQ6IDE0cHgvMjBweCBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM5RTlFOUU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNsaWRlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XHJcbn1cclxuLmltZ3tcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZS1vdXQ7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA2JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNsYXNoLWNhcmQge1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ2LCA0NiwgNDYpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNpemUgKyA1O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMy41ZW07XHJcbiAgYm94LXNoYWRvdzogLTFweCAxNXB4IDMwcHggLTEycHggcmdiKDExNiwgMjU1LCAyNTUpO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5jbGFzaC1jYXJkX19pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zaXplO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zaXplO1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9faW1hZ2UtLWJhcmJhcmlhbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTU2MTIvYmFyYmFyaWFuLWJnLmpwZycpO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxyXG4gICAgdG9wOiAtOTVweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJlc3Age1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogcmdiKDIxNCwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYmFyYmFyaWFuIHtcclxuICBiYWNrZ3JvdW5kOiAkYmFyYmFyaWFuO1xyXG4gIFxyXG4gIC5vbmUtdGhpcmQge1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCRDdDMkY7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyB7XHJcbiAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMtc2l6ZTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXMtc2l6ZTtcclxuICBcclxuICAub25lLXRoaXJkIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgc3VwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNHB4OyBcclxuICAgIGZvbnQtc2l6ZTogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXQtdmFsdWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMDtcclxuXHRjb250ZW50OiBcIiBcIjtcclxuXHRjbGVhcjogYm90aDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5/dist/md5 */ "kScs");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _secrets_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secrets.key */ "JEhE");


var timestamp = Number(new Date());
var hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(`${timestamp}${_secrets_key__WEBPACK_IMPORTED_MODULE_1__["PRIVATE_KEY"]}${_secrets_key__WEBPACK_IMPORTED_MODULE_1__["PUBLIC_KEY"]}`);
const environment = {
    production: false,
    baseUrl: `https://gateway.marvel.com:443/v1/public/`,
    auth: `?ts=${timestamp}&apikey=${_secrets_key__WEBPACK_IMPORTED_MODULE_1__["PUBLIC_KEY"]}&hash=${hash}`,
    assets: '/assets/',
    settings: {
        appErrorPrefix: '[Sample Error] ',
        appTitle: 'Sample',
        version: '1.0.0',
    },
};


/***/ }),

/***/ "Fqzs":
/*!*******************************************************!*\
  !*** ./src/app/characters/catalog/catalog.service.ts ***!
  \*******************************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CatalogService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCharacters(params) {
        let query = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'characters' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth;
        if (params.orderBy)
            query = `${query}&orderBy=${params.orderBy}`;
        if (params.comics)
            query = `${query}&comics=${params.comics}`;
        if (params.events)
            query = `${query}&events=${params.events}`;
        if (params.limit)
            query = `${query}&limit=${params.limit}`;
        if (params.modifiedSince)
            query = `${query}&modifiedSince=${params.modifiedSince}`;
        if (params.name)
            query = `${query}&name=${params.name}`;
        if (params.offset)
            query = `${query}&offset=${params.offset}`;
        if (params.series)
            query = `${query}&series=${params.series}`;
        if (params.stories)
            query = `${query}&stories=${params.stories}`;
        if (params.nameStartsWith)
            query = `${query}&nameStartsWith=${params.nameStartsWith}`;
        return this.getCharactersPerPage(query);
    }
    getCharactersPerPage(query) {
        return this.httpClient
            .get(query)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.data.results), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    // Manipulação de erros
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage =
                `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}
CatalogService.ɵfac = function CatalogService_Factory(t) { return new (t || CatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CatalogService, factory: CatalogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JEhE":
/*!*****************************************!*\
  !*** ./src/environments/secrets.key.ts ***!
  \*****************************************/
/*! exports provided: PRIVATE_KEY, PUBLIC_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVATE_KEY", function() { return PRIVATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_KEY", function() { return PUBLIC_KEY; });
const PRIVATE_KEY = '49edd2b6b36131f85cd978fc4aca2da7ea186758';
const PUBLIC_KEY = '74980acd1fc05c9b9f9316de92dc33b7';


/***/ }),

/***/ "O0F0":
/*!*****************************************!*\
  !*** ./src/app/puzzle/puzzle.module.ts ***!
  \*****************************************/
/*! exports provided: PuzzleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleModule", function() { return PuzzleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle/puzzle.component */ "2nIP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PuzzleModule {
}
PuzzleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PuzzleModule });
PuzzleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PuzzleModule_Factory(t) { return new (t || PuzzleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PuzzleModule, { declarations: [_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_1__["PuzzleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_1__["PuzzleComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ "tZhi");
/* harmony import */ var _characters_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/catalog/catalog.component */ "n90K");
/* harmony import */ var _puzzle_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle/puzzle/puzzle.component */ "2nIP");




class AppComponent {
    constructor() {
        this.title = 'sample';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "d-none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-catalog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _characters_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"], _puzzle_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_3__["PuzzleComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    background-color: #101010;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "YVKM":
/*!*************************************************!*\
  !*** ./src/app/characters/characters.module.ts ***!
  \*************************************************/
/*! exports provided: CharactersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersModule", function() { return CharactersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog/catalog.component */ "n90K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CharactersModule {
}
CharactersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CharactersModule });
CharactersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function CharactersModule_Factory(t) { return new (t || CharactersModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CharactersModule, { declarations: [_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__["CatalogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]], exports: [_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__["CatalogComponent"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _characters_characters_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/characters.module */ "YVKM");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.module */ "/NTo");
/* harmony import */ var _puzzle_puzzle_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./puzzle/puzzle.module */ "O0F0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _characters_characters_module__WEBPACK_IMPORTED_MODULE_3__["CharactersModule"],
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            _puzzle_puzzle_module__WEBPACK_IMPORTED_MODULE_5__["PuzzleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _characters_characters_module__WEBPACK_IMPORTED_MODULE_3__["CharactersModule"],
        _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
        _puzzle_puzzle_module__WEBPACK_IMPORTED_MODULE_5__["PuzzleModule"]] }); })();


/***/ }),

/***/ "l4Ez":
/*!*****************************************************!*\
  !*** ./src/app/characters/catalog/models/params.ts ***!
  \*****************************************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
var OrderBy;
(function (OrderBy) {
    OrderBy["nameA_Z"] = "name";
    OrderBy["nameZ_A"] = "-name";
    OrderBy["currentFirst"] = "modified";
    OrderBy["oldFirst"] = "-modified";
})(OrderBy || (OrderBy = {}));


/***/ }),

/***/ "n90K":
/*!*********************************************************!*\
  !*** ./src/app/characters/catalog/catalog.component.ts ***!
  \*********************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _models_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/params */ "l4Ez");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog.service */ "Fqzs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






function CatalogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.env, "icon_ironman.png');");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](character_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](character_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", character_r1.thumbnail.path, ".", character_r1.thumbnail.extension, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", character_r1.modified);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", character_r1.description, " ");
} }
class CatalogComponent {
    constructor(service) {
        this.service = service;
        this.params = {
            name: '',
            nameStartsWith: '',
            modifiedSince: '',
            comics: '',
            series: '',
            events: '',
            stories: '',
            orderBy: _models_params__WEBPACK_IMPORTED_MODULE_0__["OrderBy"].oldFirst,
            limit: null,
            offset: null
        };
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].assets;
    }
    ngOnInit() {
        //this.getCharacters(this.params)
    }
    getCharacters(params) {
        this.service
            .getCharacters(params)
            .subscribe((characters) => {
            this.characters = characters;
            console.log(characters);
        });
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"])); };
CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "imagem"], ["mat-card-image", "", 3, "src", "alt"], [1, "descricao"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CatalogComponent_div_1_Template, 14, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.characters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"]], styles: [".descricao[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]:hover   .descricao[_ngcontent-%COMP%]{\r\n  display:block;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  text-align-last: center;\r\n  margin-top: -50%;\r\n  animation-duration: 1s;\r\n  animation-name: slidein;\r\n}\r\n\r\n@keyframes slidein {\r\n  from {\r\n    margin-left: 100%;\r\n    width: 0%\r\n  }\r\n\r\n  to {\r\n    margin-left: 0%;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    max-width: 420px;\r\n    min-width: 350px;\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    height: 450px;\r\n  }\r\n\r\n.mat-card-image[_ngcontent-%COMP%] {\r\n    height: 350px;\r\n    width: auto;\r\n    padding-left: 0.3em;\r\n    padding-right: 0.3em;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%]:hover   .mat-card-image[_ngcontent-%COMP%]{\r\n  z-index: -1;\r\n  filter: blur(1px) brightness(0.8) sepia(0.3);\r\n  width: -webkit-max-content;\r\n  width: max-content;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  transition: 500ms;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n  }\r\n\r\n.mat-card-image[_ngcontent-%COMP%]:first-child {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    max-width: -webkit-fill-available;\r\n    object-fit: cover;\r\n}\r\n\r\n.imagem[_ngcontent-%COMP%]{\r\n  text-align-last: center; \r\n  position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakI7RUFDRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLDBCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNhdGFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmljYW97XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZDpob3ZlciAuZGVzY3JpY2Fve1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTUwJTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xyXG59XHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwJVxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM2VtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4zZW07XHJcbn1cclxuLmV4YW1wbGUtY2FyZDpob3ZlciAubWF0LWNhcmQtaW1hZ2V7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZmlsdGVyOiBibHVyKDFweCkgYnJpZ2h0bmVzcygwLjgpIHNlcGlhKDAuMyk7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICB0cmFuc2l0aW9uOiA1MDBtcztcclxufVxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQtaW1hZ2U6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuICBcclxuLmltYWdlbXtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjsgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "tZhi":
/*!***************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class NavbarComponent {
    constructor() {
        this.faGamepad = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"];
        this.faChartPie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartPie"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].assets;
    }
    ngOnInit() { }
    turnOff() {
        let img;
        for (let i = 1; i < 9; i++) {
            img = document.getElementById(i.toString());
            i == 6 || i == 7
                ? img.setAttribute('class', 'mb-4 neon_img')
                : img.setAttribute('class', 'neon_img');
        }
    }
    turnOn(id) {
        this.turnOff();
        let img = document.getElementById(id);
        img.setAttribute('class', img.getAttribute('class').concat(' on'));
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 8, consts: [[1, "nav", "d-none", "d-lg-block"], ["id", "1", 1, "neon_img", 3, "icon", "click"], ["id", "2", 1, "neon_img", 3, "icon", "click"], ["id", "3", 1, "neon_img", 3, "icon", "click"], ["id", "4", 1, "neon_img", 3, "icon", "click"], [1, "mobnav", "d-block", "d-lg-none"], [1, "area_neon"], ["id", "5", 1, "neon_img", 3, "icon", "click"], ["id", "6", 1, "mb-4", "neon_img", 3, "icon", "click"], ["id", "7", 1, "mb-4", "neon_img", 3, "icon", "click"], ["id", "8", 1, "neon_img", 3, "icon", "click"], [1, "mobnav-view", "d-block", "d-lg-none"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_1_listener() { return ctx.turnOn("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_2_listener() { return ctx.turnOn("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_3_listener() { return ctx.turnOn("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_4_listener() { return ctx.turnOn("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_7_listener() { return ctx.turnOn("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_8_listener() { return ctx.turnOn("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_9_listener() { return ctx.turnOn("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_10_listener() { return ctx.turnOn("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "ola");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faGamepad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faChartPie);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faGamepad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faChartPie);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faUser);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"]], styles: [".mobnav[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 200%;\r\n    padding-left: 50%;\r\n    padding-right: 50%;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-left: -50%;\r\n    padding-bottom: 12em;\r\n    z-index: 1;\r\n    height: 15em; \r\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\r\n    border-top-left-radius: 100%;  \r\n    border-top-right-radius: 100%; \r\n    background-color: rgba(40, 40, 40, 0.8);\r\n    margin-bottom: -10em;\r\n    filter: drop-shadow(0 -6mm 4mm rgb(219, 0, 0));\r\n}\r\n.mobnav-view[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 200%;\r\n    margin-left: -50%;\r\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\r\n    z-index: 2;\r\n    height: 16em; \r\n    padding-top: 1em;\r\n    text-align: center;\r\n    border-top-left-radius: 100%;  \r\n    border-top-right-radius: 100%; \r\n    background-image: linear-gradient(gray, black, black, black);\r\n    margin-bottom: -12.6em;\r\n}\r\nmat-toolbar-row[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 100%;  \r\n    border-top-right-radius: 100%; \r\n    padding-top: 1em;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    align-items: center;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n.neon_img[_ngcontent-%COMP%]{\r\n    z-index: 2;\r\n    margin-left: 9%;\r\n    margin-right: 9%;\r\n    font-size: larger;\r\n    color: rgba(255,255,255,0.5);\r\n    fill: rgba(255,255,255,0.1);\r\n    stroke: rgba(255,255,255,0.1);\r\n    filter: blur(0) drop-shadow(-5px 5px 5px black);\r\n}\r\n.neon_img.on[_ngcontent-%COMP%]{\r\n    color: white;\r\n    fill: white;\r\n    stroke: rgb(78, 240, 255);\r\n    filter: drop-shadow(0 0 10px rgb(78, 240, 255))  drop-shadow(0 0 200px rgb(78, 240, 255));\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n    font-size: 18px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    filter: blur(0) drop-shadow(-5px 5px 5px black);\r\n}\r\n.nav.neon_img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    text-align: center;\r\n    align-content: center;\r\n    padding-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0lBQ1osOENBQThDO0lBQzlDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDREQUE0RDtJQUM1RCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QiwrQ0FBK0M7QUFDbkQ7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlGQUF5RjtBQUM3RjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JuYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMmVtO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTVlbTsgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTsgIFxyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNDAsIDQwLCAwLjgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgLTZtbSA0bW0gcmdiKDIxOSwgMCwgMCkpO1xyXG59XHJcbi5tb2JuYXYtdmlld3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDE2ZW07IFxyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7ICBcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChncmF5LCBibGFjaywgYmxhY2ssIGJsYWNrKTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMi42ZW07XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvd3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7ICBcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlOyBcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuLm5lb25faW1ne1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi1sZWZ0OiA5JTtcclxuICAgIG1hcmdpbi1yaWdodDogOSU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBmaWxsOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICBzdHJva2U6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIGZpbHRlcjogYmx1cigwKSBkcm9wLXNoYWRvdygtNXB4IDVweCA1cHggYmxhY2spO1xyXG59XHJcblxyXG4ubmVvbl9pbWcub257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxuICAgIHN0cm9rZTogcmdiKDc4LCAyNDAsIDI1NSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYig3OCwgMjQwLCAyNTUpKSAgZHJvcC1zaGFkb3coMCAwIDIwMHB4IHJnYig3OCwgMjQwLCAyNTUpKTtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZpbHRlcjogYmx1cigwKSBkcm9wLXNoYWRvdygtNXB4IDVweCA1cHggYmxhY2spO1xyXG59XHJcbi5uYXYubmVvbl9pbWd7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLm5hdntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map