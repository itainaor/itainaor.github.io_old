(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-currency-converter-currency-converter-module"],{

/***/ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
  \********************************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return REQUIRED_VALIDATOR; });
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








/**
 * @license Angular v10.0.14
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */


var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxControlValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var CheckboxControlValueAccessor = /*#__PURE__*/function () {
  function CheckboxControlValueAccessor(_renderer, _elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * @description
     * The registered callback function called when a change event occurs on the input element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "checked" property on the input element.
   *
   * @param value The checked value
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxControlValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return CheckboxControlValueAccessor;
}();

CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
  return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
});

CheckboxControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
      host: {
        '(change)': 'onChange($event.target.checked)',
        '(blur)': 'onTouched()'
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return DefaultValueAccessor;
  }),
  multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */

function _isAndroid() {
  var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵgetDOM"])().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */


var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('CompositionEventMode');
/**
 * @description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var DefaultValueAccessor = /*#__PURE__*/function () {
  function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, DefaultValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._compositionMode = _compositionMode;
    /**
     * @description
     * The registered callback function called when an input event occurs on the input element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};
    /** Whether the user is creating a composition string (IME events). */


    this._composing = false;

    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   *
   * @param value The checked value
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DefaultValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_handleInput",
    value: function _handleInput(value) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(value);
      }
    }
    /** @internal */

  }, {
    key: "_compositionStart",
    value: function _compositionStart() {
      this._composing = true;
    }
    /** @internal */

  }, {
    key: "_compositionEnd",
    value: function _compositionEnd(value) {
      this._composing = false;
      this._compositionMode && this.onChange(value);
    }
  }]);

  return DefaultValueAccessor;
}();

DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
  return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
};

DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
});

DefaultValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: Boolean,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](DefaultValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        '(input)': '$any(this)._handleInput($event.target.value)',
        '(blur)': 'onTouched()',
        '(compositionstart)': '$any(this)._compositionStart()',
        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: Boolean,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [COMPOSITION_BUFFER_MODE]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */


var AbstractControlDirective = /*#__PURE__*/function () {
  function AbstractControlDirective() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlDirective);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlDirective, [{
    key: "value",
    get:
    /**
     * @description
     * Reports the value of the control if it is present, otherwise null.
     */
    function get() {
      return this.control ? this.control.value : null;
    }
    /**
     * @description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.control ? this.control.valid : null;
    }
    /**
     * @description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.control ? this.control.invalid : null;
    }
    /**
     * @description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.control ? this.control.pending : null;
    }
    /**
     * @description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.control ? this.control.disabled : null;
    }
    /**
     * @description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.control ? this.control.enabled : null;
    }
    /**
     * @description
     * Reports the control's validation errors. If the control is not present, null is returned.
     */

  }, {
    key: "errors",
    get: function get() {
      return this.control ? this.control.errors : null;
    }
    /**
     * @description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "pristine",
    get: function get() {
      return this.control ? this.control.pristine : null;
    }
    /**
     * @description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     */

  }, {
    key: "dirty",
    get: function get() {
      return this.control ? this.control.dirty : null;
    }
    /**
     * @description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "touched",
    get: function get() {
      return this.control ? this.control.touched : null;
    }
    /**
     * @description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     */

  }, {
    key: "status",
    get: function get() {
      return this.control ? this.control.status : null;
    }
    /**
     * @description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */

  }, {
    key: "untouched",
    get: function get() {
      return this.control ? this.control.untouched : null;
    }
    /**
     * @description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     */

  }, {
    key: "statusChanges",
    get: function get() {
      return this.control ? this.control.statusChanges : null;
    }
    /**
     * @description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     */

  }, {
    key: "valueChanges",
    get: function get() {
      return this.control ? this.control.valueChanges : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (this.control) this.control.reset(value);
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      return this.control ? this.control.getError(errorCode, path) : null;
    }
  }]);

  return AbstractControlDirective;
}();

AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
  return new (t || AbstractControlDirective)();
};

AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractControlDirective
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */

var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlContainer, _AbstractControlDirec);

  var _super = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ControlContainer);

  function ControlContainer() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ControlContainer);

    return _super.apply(this, arguments);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ControlContainer, [{
    key: "formDirective",
    get:
    /**
     * @description
     * The top-level form directive for the control.
     */
    function get() {
      return null;
    }
    /**
     * @description
     * The path to this group.
     */

  }, {
    key: "path",
    get: function get() {
      return null;
    }
  }]);

  return ControlContainer;
}(AbstractControlDirective);

ControlContainer.ɵfac = function ControlContainer_Factory(t) {
  return ɵControlContainer_BaseFactory(t || ControlContainer);
};

ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ControlContainer,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ControlContainer);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function unimplemented() {
  throw new Error('unimplemented');
}
/**
 * @description
 * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */


var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControl, _AbstractControlDirec2);

  var _super2 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControl);

  function NgControl() {
    var _this;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControl);

    _this = _super2.apply(this, arguments);
    /**
     * @description
     * The parent form for the control.
     *
     * @internal
     */

    _this._parent = null;
    /**
     * @description
     * The name for the control
     */

    _this.name = null;
    /**
     * @description
     * The value accessor for the control
     */

    _this.valueAccessor = null;
    /**
     * @description
     * The uncomposed array of synchronous validators for the control
     *
     * @internal
     */

    _this._rawValidators = [];
    /**
     * @description
     * The uncomposed array of async validators for the control
     *
     * @internal
     */

    _this._rawAsyncValidators = [];
    return _this;
  }
  /**
   * @description
   * The registered synchronous validator function for the control
   *
   * @throws An exception that this method is not implemented
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgControl, [{
    key: "validator",
    get: function get() {
      return unimplemented();
    }
    /**
     * @description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return unimplemented();
    }
  }]);

  return NgControl;
}(AbstractControlDirective);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var AbstractControlStatus = /*#__PURE__*/function () {
  function AbstractControlStatus(cd) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControlStatus);

    this._cd = cd;
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControlStatus, [{
    key: "ngClassUntouched",
    get: function get() {
      return this._cd.control ? this._cd.control.untouched : false;
    }
  }, {
    key: "ngClassTouched",
    get: function get() {
      return this._cd.control ? this._cd.control.touched : false;
    }
  }, {
    key: "ngClassPristine",
    get: function get() {
      return this._cd.control ? this._cd.control.pristine : false;
    }
  }, {
    key: "ngClassDirty",
    get: function get() {
      return this._cd.control ? this._cd.control.dirty : false;
    }
  }, {
    key: "ngClassValid",
    get: function get() {
      return this._cd.control ? this._cd.control.valid : false;
    }
  }, {
    key: "ngClassInvalid",
    get: function get() {
      return this._cd.control ? this._cd.control.invalid : false;
    }
  }, {
    key: "ngClassPending",
    get: function get() {
      return this._cd.control ? this._cd.control.pending : false;
    }
  }]);

  return AbstractControlStatus;
}();

var ngControlStatusHost = {
  '[class.ng-untouched]': 'ngClassUntouched',
  '[class.ng-touched]': 'ngClassTouched',
  '[class.ng-pristine]': 'ngClassPristine',
  '[class.ng-dirty]': 'ngClassDirty',
  '[class.ng-valid]': 'ngClassValid',
  '[class.ng-invalid]': 'ngClassInvalid',
  '[class.ng-pending]': 'ngClassPending'
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatus, _AbstractControlStatu);

  var _super3 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatus);

  function NgControlStatus(cd) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatus);

    return _super3.call(this, cd);
  }

  return NgControlStatus;
}(AbstractControlStatus);

NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
  return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NgControl, 2));
};

NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatus.ctorParameters = function () {
  return [{
    type: NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName],[ngModel],[formControl]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgControlStatusGroup, _AbstractControlStatu2);

  var _super4 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgControlStatusGroup);

  function NgControlStatusGroup(cd) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgControlStatusGroup);

    return _super4.call(this, cd);
  }

  return NgControlStatusGroup;
}(AbstractControlStatus);

NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
  return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 2));
};

NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgControlStatusGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgControlStatusGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
      host: ngControlStatusHost
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function hasValidLength(value) {
  // non-strict comparison is intentional, to check for both `null` and `undefined` values
  return value != null && typeof value.length === 'number';
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */


var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */

var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgAsyncValidators');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */

var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */

var Validators = /*#__PURE__*/function () {
  function Validators() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Validators);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Validators, null, [{
    key: "min",
    value:
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    function min(_min) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

        return !isNaN(value) && value < _min ? {
          'min': {
            'min': _min,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "max",
    value: function max(_max) {
      return function (control) {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

        return !isNaN(value) && value > _max ? {
          'max': {
            'max': _max,
            'actual': control.value
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "required",
    value: function required(control) {
      return isEmptyInputValue(control.value) ? {
        'required': true
      } : null;
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "requiredTrue",
    value: function requiredTrue(control) {
      return control.value === true ? null : {
        'required': true
      };
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular
     * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common usecases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML
     * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "email",
    value: function email(control) {
      if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
      }

      return EMAIL_REGEXP.test(control.value) ? null : {
        'email': true
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "minLength",
    value: function minLength(_minLength) {
      return function (control) {
        if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
          // don't validate empty values to allow optional controls
          // don't validate values without `length` property
          return null;
        }

        return control.value.length < _minLength ? {
          'minlength': {
            'requiredLength': _minLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "maxLength",
    value: function maxLength(_maxLength) {
      return function (control) {
        return hasValidLength(control.value) && control.value.length > _maxLength ? {
          'maxlength': {
            'requiredLength': _maxLength,
            'actualLength': control.value.length
          }
        } : null;
      };
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "pattern",
    value: function pattern(_pattern) {
      if (!_pattern) return Validators.nullValidator;
      var regex;
      var regexStr;

      if (typeof _pattern === 'string') {
        regexStr = '';
        if (_pattern.charAt(0) !== '^') regexStr += '^';
        regexStr += _pattern;
        if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
        regex = new RegExp(regexStr);
      } else {
        regexStr = _pattern.toString();
        regex = _pattern;
      }

      return function (control) {
        if (isEmptyInputValue(control.value)) {
          return null; // don't validate empty values to allow optional controls
        }

        var value = control.value;
        return regex.test(value) ? null : {
          'pattern': {
            'requiredPattern': regexStr,
            'actualValue': value
          }
        };
      };
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "nullValidator",
    value: function nullValidator(control) {
      return null;
    }
  }, {
    key: "compose",
    value: function compose(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        return mergeErrors(executeValidators(control, presentValidators));
      };
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */

  }, {
    key: "composeAsync",
    value: function composeAsync(validators) {
      if (!validators) return null;
      var presentValidators = validators.filter(isPresent);
      if (presentValidators.length == 0) return null;
      return function (control) {
        var observables = executeValidators(control, presentValidators).map(toObservable);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(mergeErrors));
      };
    }
  }]);

  return Validators;
}();

function isPresent(o) {
  return o != null;
}

function toObservable(r) {
  var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(r) : r;

  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵisObservable"])(obs)) {
    throw new Error("Expected validator to return Promise or Observable.");
  }

  return obs;
}

function mergeErrors(arrayOfErrors) {
  var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  arrayOfErrors.forEach(function (errors) {
    res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}

function executeValidators(control, validators) {
  return validators.map(function (validator) {
    return validator(control);
  });
}

function isValidatorFn(validator) {
  return !validator.validate;
}
/**
 * Given the list of validators that may contain both functions as well as classes, return the list
 * of validator functions (convert validator classes into validator functions). This is needed to
 * have consistent structure in validators list before composing them.
 *
 * @param validators The set of validators that may contain validators both in plain function form
 *     as well as represented as a validator class.
 */


function normalizeValidators(validators) {
  return validators.map(function (validator) {
    return isValidatorFn(validator) ? validator : function (c) {
      return validator.validate(c);
    };
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NumberValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var NumberValueAccessor = /*#__PURE__*/function () {
  function NumberValueAccessor(_renderer, _elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NumberValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * @description
     * The registered callback function called when a change or input event occurs on the input
     * element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   *
   * @param value The checked value
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NumberValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
      var normalizedValue = value == null ? '' : value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return NumberValueAccessor;
}();

NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
  return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
});

NumberValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NumberValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
      host: {
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RadioControlValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */

var RadioControlRegistry = /*#__PURE__*/function () {
  function RadioControlRegistry() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlRegistry);

    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlRegistry, [{
    key: "add",
    value: function add(control, accessor) {
      this._accessors.push([control, accessor]);
    }
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */

  }, {
    key: "remove",
    value: function remove(accessor) {
      for (var i = this._accessors.length - 1; i >= 0; --i) {
        if (this._accessors[i][1] === accessor) {
          this._accessors.splice(i, 1);

          return;
        }
      }
    }
    /**
     * @description
     * Selects a radio button. For internal use only.
     */

  }, {
    key: "select",
    value: function select(accessor) {
      var _this2 = this;

      this._accessors.forEach(function (c) {
        if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
          c[1].fireUncheck(accessor.value);
        }
      });
    }
  }, {
    key: "_isSameGroup",
    value: function _isSameGroup(controlPair, accessor) {
      if (!controlPair[0].control) return false;
      return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
    }
  }]);

  return RadioControlRegistry;
}();

RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
  return new (t || RadioControlRegistry)();
};

RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: RadioControlRegistry,
  factory: RadioControlRegistry.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var RadioControlValueAccessor = /*#__PURE__*/function () {
  function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RadioControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._registry = _registry;
    this._injector = _injector;
    /**
     * @description
     * The registered callback function called when a change event occurs on the input element.
     */

    this.onChange = function () {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};
  }
  /**
   * @description
   * A lifecycle method called when the directive is initialized. For internal use only.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RadioControlValueAccessor, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._control = this._injector.get(NgControl);

      this._checkName();

      this._registry.add(this._control, this);
    }
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._registry.remove(this);
    }
    /**
     * @description
     * Sets the "checked" property value on the radio input element.
     *
     * @param value The checked value
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._state = value === this.value;

      this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this3 = this;

      this._fn = fn;

      this.onChange = function () {
        fn(_this3.value);

        _this3._registry.select(_this3);
      };
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */

  }, {
    key: "fireUncheck",
    value: function fireUncheck(value) {
      this.writeValue(value);
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.name && this.formControlName && this.name !== this.formControlName) {
        this._throwNameError();
      }

      if (!this.name && this.formControlName) this.name = this.formControlName;
    }
  }, {
    key: "_throwNameError",
    value: function _throwNameError() {
      throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    }
  }]);

  return RadioControlValueAccessor;
}();

RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
  return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]));
};

RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
});

RadioControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: RadioControlRegistry
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
  }];
};

RadioControlValueAccessor.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  formControlName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
      host: {
        '(change)': 'onChange()',
        '(blur)': 'onTouched()'
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: RadioControlRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RangeValueAccessor;
  }),
  multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var RangeValueAccessor = /*#__PURE__*/function () {
  function RangeValueAccessor(_renderer, _elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RangeValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /**
     * @description
     * The registered callback function called when a change or input event occurs on the input
     * element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};
  }
  /**
   * Sets the "value" property on the input element.
   *
   * @param value The checked value
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RangeValueAccessor, [{
    key: "writeValue",
    value: function writeValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (value) {
        fn(value == '' ? null : parseFloat(value));
      };
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
  }]);

  return RangeValueAccessor;
}();

RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
  return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
});

RangeValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RangeValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var FormErrorExamples = {
  formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
  formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
  formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
  ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
  ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ReactiveErrors = /*#__PURE__*/function () {
  function ReactiveErrors() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveErrors);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveErrors, null, [{
    key: "controlParentException",
    value: function controlParentException() {
      throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "ngModelGroupException",
    value: function ngModelGroupException() {
      throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingFormException",
    value: function missingFormException() {
      throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
    }
  }, {
    key: "groupParentException",
    value: function groupParentException() {
      throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
    }
  }, {
    key: "arrayParentException",
    value: function arrayParentException() {
      throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
    }
  }, {
    key: "disabledAttrWarning",
    value: function disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    }
  }, {
    key: "ngModelWarning",
    value: function ngModelWarning(directiveName) {
      console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
    }
  }]);

  return ReactiveErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectControlValueAccessor;
  }),
  multi: true
};

function _buildValueString(id, value) {
  if (id == null) return "".concat(value);
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId(valueString) {
  return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectControlValueAccessor = /*#__PURE__*/function () {
  function SelectControlValueAccessor(_renderer, _elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * @description
     * The registered callback function called when a change event occurs on the input element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectControlValueAccessor, [{
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function') {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param value The checked value
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;

      var id = this._getOptionId(value);

      if (id == null) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
      }

      var valueString = _buildValueString(id, value);

      this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    /**
     * @description
     * Registers a function called when the control value changes.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this4 = this;

      this.onChange = function (valueString) {
        _this4.value = _this4._getOptionValue(valueString);
        fn(_this4.value);
      };
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption() {
      return (this._idCounter++).toString();
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
        var id = _Array$from[_i];
        if (this._compareWith(this._optionMap.get(id), value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
  }]);

  return SelectControlValueAccessor;
}();

SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
  return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
});

SelectControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var NgSelectOption = /*#__PURE__*/function () {
  function NgSelectOption(_element, _renderer, _select) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgSelectOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgSelectOption, [{
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;

      this._select._optionMap.set(this.id, value);

      this._setElementValue(_buildValueString(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      this._setElementValue(value);

      if (this._select) this._select.writeValue(this._select.value);
    }
    /** @internal */

  }, {
    key: "_setElementValue",
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }]);

  return NgSelectOption;
}();

NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
  return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
};

NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

NgSelectOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

NgSelectOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgSelectOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return SelectMultipleControlValueAccessor;
  }),
  multi: true
};

function _buildValueString$1(id, value) {
  if (id == null) return "".concat(value);
  if (typeof value === 'string') value = "'".concat(value, "'");
  if (value && typeof value === 'object') value = 'Object';
  return "".concat(id, ": ").concat(value).slice(0, 50);
}

function _extractId$1(valueString) {
  return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */


var HTMLCollection = function HTMLCollection() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HTMLCollection);
};
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
 * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
  function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SelectMultipleControlValueAccessor);

    this._renderer = _renderer;
    this._elementRef = _elementRef;
    /** @internal */

    this._optionMap = new Map();
    /** @internal */

    this._idCounter = 0;
    /**
     * @description
     * The registered callback function called when a change event occurs on the input element.
     */

    this.onChange = function (_) {};
    /**
     * @description
     * The registered callback function called when a blur event occurs on the input element.
     */


    this.onTouched = function () {};

    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectMultipleControlValueAccessor, [{
    key: "compareWith",
    set: function set(fn) {
      if (typeof fn !== 'function') {
        throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
      }

      this._compareWith = fn;
    }
    /**
     * @description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param value The value
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this5 = this;

      this.value = value;
      var optionSelectedStateSetter;

      if (Array.isArray(value)) {
        // convert values to ids
        var ids = value.map(function (v) {
          return _this5._getOptionId(v);
        });

        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(ids.indexOf(o.toString()) > -1);
        };
      } else {
        optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
          opt._setSelected(false);
        };
      }

      this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * @description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      var _this6 = this;

      this.onChange = function (_) {
        var selected = [];

        if (_.selectedOptions !== undefined) {
          var options = _.selectedOptions;

          for (var i = 0; i < options.length; i++) {
            var opt = options.item(i);

            var val = _this6._getOptionValue(opt.value);

            selected.push(val);
          }
        } // Degrade on IE
        else {
          var _options = _.options;

          for (var _i2 = 0; _i2 < _options.length; _i2++) {
            var _opt = _options.item(_i2);

            if (_opt.selected) {
              var _val = _this6._getOptionValue(_opt.value);

              selected.push(_val);
            }
          }
        }

        _this6.value = selected;
        fn(selected);
      };
    }
    /**
     * @description
     * Registers a function called when the control is touched.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param isDisabled The disabled value
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /** @internal */

  }, {
    key: "_registerOption",
    value: function _registerOption(value) {
      var id = (this._idCounter++).toString();

      this._optionMap.set(id, value);

      return id;
    }
    /** @internal */

  }, {
    key: "_getOptionId",
    value: function _getOptionId(value) {
      for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
        var id = _Array$from2[_i3];
        if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
      }

      return null;
    }
    /** @internal */

  }, {
    key: "_getOptionValue",
    value: function _getOptionValue(valueString) {
      var id = _extractId$1(valueString);

      return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
  }]);

  return SelectMultipleControlValueAccessor;
}();

SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
  return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
});

SelectMultipleControlValueAccessor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};

SelectMultipleControlValueAccessor.propDecorators = {
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
      host: {
        '(change)': 'onChange($event.target)',
        '(blur)': 'onTouched()'
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, {
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */


var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
  function ɵNgSelectMultipleOption(_element, _renderer, _select) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgSelectMultipleOption);

    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;

    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ɵNgSelectMultipleOption, [{
    key: "ngValue",
    set: function set(value) {
      if (this._select == null) return;
      this._value = value;

      this._setElementValue(_buildValueString$1(this.id, value));

      this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */

  }, {
    key: "value",
    set: function set(value) {
      if (this._select) {
        this._value = value;

        this._setElementValue(_buildValueString$1(this.id, value));

        this._select.writeValue(this._select.value);
      } else {
        this._setElementValue(value);
      }
    }
    /** @internal */

  }, {
    key: "_setElementValue",
    value: function _setElementValue(value) {
      this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @internal */

  }, {
    key: "_setSelected",
    value: function _setSelected(selected) {
      this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._select) {
        this._select._optionMap.delete(this.id);

        this._select.writeValue(this._select.value);
      }
    }
  }]);

  return ɵNgSelectMultipleOption;
}();

ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
  return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
};

ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});

ɵNgSelectMultipleOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }];
};

ɵNgSelectMultipleOption.propDecorators = {
  ngValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngValue']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['value']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'option'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: SelectMultipleControlValueAccessor,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }];
  }, {
    ngValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngValue']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['value']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function controlPath(name, parent) {
  return [].concat(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(parent.path), [name]);
}

function setUpControl(control, dir) {
  if (!control) _throwError(dir, 'Cannot find control with');
  if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
  dir.valueAccessor.writeValue(control.value);
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);

  if (dir.valueAccessor.setDisabledState) {
    control.registerOnDisabledChange(function (isDisabled) {
      dir.valueAccessor.setDisabledState(isDisabled);
    });
  } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
      return control.updateValueAndValidity();
    });
  });
}

function cleanUpControl(control, dir) {
  dir.valueAccessor.registerOnChange(function () {
    return _noControlError(dir);
  });
  dir.valueAccessor.registerOnTouched(function () {
    return _noControlError(dir);
  });

  dir._rawValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  dir._rawAsyncValidators.forEach(function (validator) {
    if (validator.registerOnValidatorChange) {
      validator.registerOnValidatorChange(null);
    }
  });

  if (control) control._clearChangeFns();
}

function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange(function (newValue) {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === 'change') updateControl(control, dir);
  });
}

function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(function () {
    control._pendingTouched = true;
    if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== 'submit') control.markAsTouched();
  });
}

function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}

function setUpModelChangePipeline(control, dir) {
  control.registerOnChange(function (newValue, emitModelEvent) {
    // control -> view
    dir.valueAccessor.writeValue(newValue); // control -> ngModel

    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  });
}

function setUpFormContainer(control, dir) {
  if (control == null) _throwError(dir, 'Cannot find control with');
  control.validator = Validators.compose([control.validator, dir.validator]);
  control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}

function _noControlError(dir) {
  return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}

function _throwError(dir, message) {
  var messageEnd;

  if (dir.path.length > 1) {
    messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
  } else if (dir.path[0]) {
    messageEnd = "name: '".concat(dir.path, "'");
  } else {
    messageEnd = 'unspecified name attribute';
  }

  throw new Error("".concat(message, " ").concat(messageEnd));
}

function composeValidators(validators) {
  return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
}

function composeAsyncValidators(validators) {
  return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
}

function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty('model')) return false;
  var change = changes['model'];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}

var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

function isBuiltInAccessor(valueAccessor) {
  return BUILTIN_ACCESSORS.some(function (a) {
    return valueAccessor.constructor === a;
  });
}

function syncPendingControls(form, directives) {
  form._syncPendingControls();

  directives.forEach(function (dir) {
    var control = dir.control;

    if (control.updateOn === 'submit' && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
} // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
  var defaultAccessor = undefined;
  var builtinAccessor = undefined;
  var customAccessor = undefined;
  valueAccessors.forEach(function (v) {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
      builtinAccessor = v;
    } else {
      if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;

  _throwError(dir, 'No valid value accessor for form control with');

  return null;
}

function removeDir(list, el) {
  var index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
} // TODO(kara): remove after deprecation period


function _ngModelWarning(name, type, instance, warningConfig) {
  if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() || warningConfig === 'never') return;

  if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
    ReactiveErrors.ngModelWarning(name);
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */


var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */

var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */

var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */

var DISABLED = 'DISABLED';

function _find(control, path, delimiter) {
  if (path == null) return null;

  if (!Array.isArray(path)) {
    path = path.split(delimiter);
  }

  if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var controlToFind = control;
  path.forEach(function (name) {
    if (controlToFind instanceof FormGroup) {
      controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
    } else if (controlToFind instanceof FormArray) {
      controlToFind = controlToFind.at(name) || null;
    } else {
      controlToFind = null;
    }
  });
  return controlToFind;
}

function coerceToValidator(validatorOrOpts) {
  var validator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts;
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}

function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
  var origAsyncValidator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator;
  return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
}

function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */


var AbstractControl = /*#__PURE__*/function () {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validator The function that determines the synchronous validity of this control.
   * @param asyncValidator The function that determines the asynchronous validity of this
   * control.
   */
  function AbstractControl(validator, asyncValidator) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractControl);

    this.validator = validator;
    this.asyncValidator = asyncValidator;
    /** @internal */

    this._onCollectionChange = function () {};
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
     * Programmatic changes to a control's value do not mark it dirty.
     */


    this.pristine = true;
    /**
     * True if the control is marked as `touched`.
     *
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     */

    this.touched = false;
    /** @internal */

    this._onDisabledChange = [];
  }
  /**
   * The parent control.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractControl, [{
    key: "parent",
    get: function get() {
      return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control has passed all of its validation tests,
     * false otherwise.
     */

  }, {
    key: "valid",
    get: function get() {
      return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control has failed one or more of its validation checks,
     * false otherwise.
     */

  }, {
    key: "invalid",
    get: function get() {
      return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control is in the process of conducting a validation check,
     * false otherwise.
     */

  }, {
    key: "pending",
    get: function get() {
      return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control is disabled, false otherwise.
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @returns True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     * @see {@link AbstractControl.status}
     *
     */

  }, {
    key: "enabled",
    get: function get() {
      return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */

  }, {
    key: "dirty",
    get: function get() {
      return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */

  }, {
    key: "untouched",
    get: function get() {
      return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     */

  }, {
    key: "updateOn",
    get: function get() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
    }
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "setValidators",
    value: function setValidators(newValidator) {
      this.validator = coerceToValidator(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "setAsyncValidators",
    value: function setAsyncValidators(newValidator) {
      this.asyncValidator = coerceToAsyncValidator(newValidator);
    }
    /**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearValidators",
    value: function clearValidators() {
      this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */

  }, {
    key: "clearAsyncValidators",
    value: function clearAsyncValidators() {
      this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsTouched",
    value: function markAsTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = true;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsTouched(opts);
      }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     */

  }, {
    key: "markAllAsTouched",
    value: function markAllAsTouched() {
      this.markAsTouched({
        onlySelf: true
      });

      this._forEachChild(function (control) {
        return control.markAllAsTouched();
      });
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsUntouched",
    value: function markAsUntouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = false;
      this._pendingTouched = false;

      this._forEachChild(function (control) {
        control.markAsUntouched({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsDirty",
    value: function markAsDirty() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = false;

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsDirty(opts);
      }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     *
     * @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */

  }, {
    key: "markAsPristine",
    value: function markAsPristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = true;
      this._pendingDirty = false;

      this._forEachChild(function (control) {
        control.markAsPristine({
          onlySelf: true
        });
      });

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "markAsPending",
    value: function markAsPending() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.status = PENDING;

      if (opts.emitEvent !== false) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.markAsPending(opts);
      }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */

  }, {
    key: "disable",
    value: function disable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = DISABLED;
      this.errors = null;

      this._forEachChild(function (control) {
        control.disable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this._updateValue();

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(true);
      });
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */

  }, {
    key: "enable",
    value: function enable() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // If parent has been marked artificially dirty we don't want to re-calculate the
      // parent's dirtiness based on the children.
      var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

      this.status = VALID;

      this._forEachChild(function (control) {
        control.enable(Object.assign(Object.assign({}, opts), {
          onlySelf: true
        }));
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });

      this._updateAncestors(Object.assign(Object.assign({}, opts), {
        skipPristineCheck: skipPristineCheck
      }));

      this._onDisabledChange.forEach(function (changeFn) {
        return changeFn(false);
      });
    }
  }, {
    key: "_updateAncestors",
    value: function _updateAncestors(opts) {
      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);

        if (!opts.skipPristineCheck) {
          this._parent._updatePristine();
        }

        this._parent._updateTouched();
      }
    }
    /**
     * @param parent Sets the parent of the control
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this._parent = parent;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "updateValueAndValidity",
    value: function updateValueAndValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._setInitialStatus();

      this._updateValue();

      if (this.enabled) {
        this._cancelExistingSubscription();

        this.errors = this._runValidator();
        this.status = this._calculateStatus();

        if (this.status === VALID || this.status === PENDING) {
          this._runAsyncValidator(opts.emitEvent);
        }
      }

      if (opts.emitEvent !== false) {
        this.valueChanges.emit(this.value);
        this.statusChanges.emit(this.status);
      }

      if (this._parent && !opts.onlySelf) {
        this._parent.updateValueAndValidity(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTreeValidity",
    value: function _updateTreeValidity() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        emitEvent: true
      };

      this._forEachChild(function (ctrl) {
        return ctrl._updateTreeValidity(opts);
      });

      this.updateValueAndValidity({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    }
  }, {
    key: "_setInitialStatus",
    value: function _setInitialStatus() {
      this.status = this._allControlsDisabled() ? DISABLED : VALID;
    }
  }, {
    key: "_runValidator",
    value: function _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
  }, {
    key: "_runAsyncValidator",
    value: function _runAsyncValidator(emitEvent) {
      var _this7 = this;

      if (this.asyncValidator) {
        this.status = PENDING;
        var obs = toObservable(this.asyncValidator(this));
        this._asyncValidationSubscription = obs.subscribe(function (errors) {
          return _this7.setErrors(errors, {
            emitEvent: emitEvent
          });
        });
      }
    }
  }, {
    key: "_cancelExistingSubscription",
    value: function _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
      }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */

  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.errors = errors;

      this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */

  }, {
    key: "get",
    value: function get(path) {
      return _find(this, path, '.');
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */

  }, {
    key: "getError",
    value: function getError(errorCode, path) {
      var control = path ? this.get(path) : this;
      return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */

  }, {
    key: "hasError",
    value: function hasError(errorCode, path) {
      return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     */

  }, {
    key: "root",
    get: function get() {
      var x = this;

      while (x._parent) {
        x = x._parent;
      }

      return x;
    }
    /** @internal */

  }, {
    key: "_updateControlsErrors",
    value: function _updateControlsErrors(emitEvent) {
      this.status = this._calculateStatus();

      if (emitEvent) {
        this.statusChanges.emit(this.status);
      }

      if (this._parent) {
        this._parent._updateControlsErrors(emitEvent);
      }
    }
    /** @internal */

  }, {
    key: "_initObservables",
    value: function _initObservables() {
      this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
      this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    }
  }, {
    key: "_calculateStatus",
    value: function _calculateStatus() {
      if (this._allControlsDisabled()) return DISABLED;
      if (this.errors) return INVALID;
      if (this._anyControlsHaveStatus(PENDING)) return PENDING;
      if (this._anyControlsHaveStatus(INVALID)) return INVALID;
      return VALID;
    }
    /** @internal */

  }, {
    key: "_anyControlsHaveStatus",
    value: function _anyControlsHaveStatus(status) {
      return this._anyControls(function (control) {
        return control.status === status;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsDirty",
    value: function _anyControlsDirty() {
      return this._anyControls(function (control) {
        return control.dirty;
      });
    }
    /** @internal */

  }, {
    key: "_anyControlsTouched",
    value: function _anyControlsTouched() {
      return this._anyControls(function (control) {
        return control.touched;
      });
    }
    /** @internal */

  }, {
    key: "_updatePristine",
    value: function _updatePristine() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.pristine = !this._anyControlsDirty();

      if (this._parent && !opts.onlySelf) {
        this._parent._updatePristine(opts);
      }
    }
    /** @internal */

  }, {
    key: "_updateTouched",
    value: function _updateTouched() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.touched = this._anyControlsTouched();

      if (this._parent && !opts.onlySelf) {
        this._parent._updateTouched(opts);
      }
    }
    /** @internal */

  }, {
    key: "_isBoxedValue",
    value: function _isBoxedValue(formState) {
      return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /** @internal */

  }, {
    key: "_registerOnCollectionChange",
    value: function _registerOnCollectionChange(fn) {
      this._onCollectionChange = fn;
    }
    /** @internal */

  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy(opts) {
      if (isOptionsObj(opts) && opts.updateOn != null) {
        this._updateOn = opts.updateOn;
      }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * @internal
     */

  }, {
    key: "_parentMarkedDirty",
    value: function _parentMarkedDirty(onlySelf) {
      var parentDirty = this._parent && this._parent.dirty;
      return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
  }]);

  return AbstractControl;
}();
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events. See [usage examples below](#usage-notes).
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */


var FormControl = /*#__PURE__*/function (_AbstractControl) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControl, _AbstractControl);

  var _super5 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControl);

  /**
   * Creates a new `FormControl` instance.
   *
   * @param formState Initializes the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormControl() {
    var _this8;

    var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
    var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControl);

    _this8 = _super5.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
    /** @internal */

    _this8._onChange = [];

    _this8._applyFormState(formState);

    _this8._setUpdateStrategy(validatorOrOpts);

    _this8.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    _this8._initObservables();

    return _this8;
  }
  /**
   * Sets a new value for the form control.
   *
   * @param value The new value for the control.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
   * `onChange` event to
   * update the view.
   * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
   * `ngModelChange`
   * event to update the model.
   *
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControl, [{
    key: "setValue",
    value: function setValue(value) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.value = this._pendingValue = value;

      if (this._onChange.length && options.emitModelToViewChange !== false) {
        this._onChange.forEach(function (changeFn) {
          return changeFn(_this9.value, options.emitViewToModelChange !== false);
        });
      }

      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */

  }, {
    key: "reset",
    value: function reset() {
      var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._applyFormState(formState);

      this.markAsPristine(options);
      this.markAsUntouched(options);
      this.setValue(this.value, options);
      this._pendingChange = false;
    }
    /**
     * @internal
     */

  }, {
    key: "_updateValue",
    value: function _updateValue() {}
    /**
     * @internal
     */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return false;
    }
    /**
     * @internal
     */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      return this.disabled;
    }
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_clearChangeFns",
    value: function _clearChangeFns() {
      this._onChange = [];
      this._onDisabledChange = [];

      this._onCollectionChange = function () {};
    }
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */

  }, {
    key: "registerOnDisabledChange",
    value: function registerOnDisabledChange(fn) {
      this._onDisabledChange.push(fn);
    }
    /**
     * @internal
     */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {}
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      if (this.updateOn === 'submit') {
        if (this._pendingDirty) this.markAsDirty();
        if (this._pendingTouched) this.markAsTouched();

        if (this._pendingChange) {
          this.setValue(this._pendingValue, {
            onlySelf: true,
            emitModelToViewChange: false
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_applyFormState",
    value: function _applyFormState(formState) {
      if (this._isBoxedValue(formState)) {
        this.value = this._pendingValue = formState.value;
        formState.disabled ? this.disable({
          onlySelf: true,
          emitEvent: false
        }) : this.enable({
          onlySelf: true,
          emitEvent: false
        });
      } else {
        this.value = this._pendingValue = formState;
      }
    }
  }]);

  return FormControl;
}(AbstractControl);
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */


var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroup, _AbstractControl2);

  var _super6 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroup);

  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormGroup(controls, validatorOrOpts, asyncValidator) {
    var _this10;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroup);

    _this10 = _super6.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
    _this10.controls = controls;

    _this10._initObservables();

    _this10._setUpdateStrategy(validatorOrOpts);

    _this10._setUpControls();

    _this10.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this10;
  }
  /**
   * Registers a control with the group's list of controls.
   *
   * This method does not update the value or validity of the control.
   * Use {@link FormGroup#addControl addControl} instead.
   *
   * @param name The control name to register in the collection
   * @param control Provides the control for the given name
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroup, [{
    key: "registerControl",
    value: function registerControl(name, control) {
      if (this.controls[name]) return this.controls[name];
      this.controls[name] = control;
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);

      return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "addControl",
    value: function addControl(name, control) {
      this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */

  }, {
    key: "removeControl",
    value: function removeControl(name) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */

  }, {
    key: "setControl",
    value: function setControl(name, control) {
      if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
      delete this.controls[name];
      if (control) this.registerControl(name, control);
      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param controlName The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */

  }, {
    key: "contains",
    value: function contains(controlName) {
      return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this11 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      Object.keys(value).forEach(function (name) {
        _this11._throwIfControlMissing(name);

        _this11.controls[name].setValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this12 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(value).forEach(function (name) {
        if (_this12.controls[name]) {
          _this12.controls[name].patchValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, name) {
        control.reset(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this._reduceChildren({}, function (acc, control, name) {
        acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      });

      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(name) {
      if (!Object.keys(this.controls).length) {
        throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.controls[name]) {
        throw new Error("Cannot find form control with name: ".concat(name, "."));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      var _this13 = this;

      Object.keys(this.controls).forEach(function (k) {
        return cb(_this13.controls[k], k);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this14 = this;

      this._forEachChild(function (control) {
        control.setParent(_this14);

        control._registerOnCollectionChange(_this14._onCollectionChange);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      this.value = this._reduceValue();
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
        var controlName = _Object$keys[_i4];
        var control = this.controls[controlName];

        if (this.contains(controlName) && condition(control)) {
          return true;
        }
      }

      return false;
    }
    /** @internal */

  }, {
    key: "_reduceValue",
    value: function _reduceValue() {
      var _this15 = this;

      return this._reduceChildren({}, function (acc, control, name) {
        if (control.enabled || _this15.disabled) {
          acc[name] = control.value;
        }

        return acc;
      });
    }
    /** @internal */

  }, {
    key: "_reduceChildren",
    value: function _reduceChildren(initValue, fn) {
      var res = initValue;

      this._forEachChild(function (control, name) {
        res = fn(res, control, name);
      });

      return res;
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      for (var _i5 = 0, _Object$keys2 = Object.keys(this.controls); _i5 < _Object$keys2.length; _i5++) {
        var controlName = _Object$keys2[_i5];

        if (this.controls[controlName].enabled) {
          return false;
        }
      }

      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, name) {
        if (value[name] === undefined) {
          throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
        }
      });
    }
  }]);

  return FormGroup;
}(AbstractControl);
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */


var FormArray = /*#__PURE__*/function (_AbstractControl3) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArray, _AbstractControl3);

  var _super7 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArray);

  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  function FormArray(controls, validatorOrOpts, asyncValidator) {
    var _this16;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArray);

    _this16 = _super7.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
    _this16.controls = controls;

    _this16._initObservables();

    _this16._setUpdateStrategy(validatorOrOpts);

    _this16._setUpControls();

    _this16.updateValueAndValidity({
      onlySelf: true,
      emitEvent: false
    });

    return _this16;
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArray, [{
    key: "at",
    value: function at(index) {
      return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */

  }, {
    key: "push",
    value: function push(control) {
      this.controls.push(control);

      this._registerControl(control);

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */

  }, {
    key: "insert",
    value: function insert(index, control) {
      this.controls.splice(index, 0, control);

      this._registerControl(control);

      this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);
      this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */

  }, {
    key: "setControl",
    value: function setControl(index, control) {
      if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
      this.controls.splice(index, 1);

      if (control) {
        this.controls.splice(index, 0, control);

        this._registerControl(control);
      }

      this.updateValueAndValidity();

      this._onCollectionChange();
    }
    /**
     * Length of the control array.
     */

  }, {
    key: "length",
    get: function get() {
      return this.controls.length;
    }
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this17 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._checkAllValuesPresent(value);

      value.forEach(function (newValue, index) {
        _this17._throwIfControlMissing(index);

        _this17.at(index).setValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "patchValue",
    value: function patchValue(value) {
      var _this18 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      value.forEach(function (newValue, index) {
        if (_this18.at(index)) {
          _this18.at(index).patchValue(newValue, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        }
      });
      this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */

  }, {
    key: "reset",
    value: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._forEachChild(function (control, index) {
        control.reset(value[index], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      });

      this._updatePristine(options);

      this._updateTouched(options);

      this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */

  }, {
    key: "getRawValue",
    value: function getRawValue() {
      return this.controls.map(function (control) {
        return control instanceof FormControl ? control.value : control.getRawValue();
      });
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * @usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this.controls.length < 1) return;

      this._forEachChild(function (control) {
        return control._registerOnCollectionChange(function () {});
      });

      this.controls.splice(0);
      this.updateValueAndValidity();
    }
    /** @internal */

  }, {
    key: "_syncPendingControls",
    value: function _syncPendingControls() {
      var subtreeUpdated = this.controls.reduce(function (updated, child) {
        return child._syncPendingControls() ? true : updated;
      }, false);
      if (subtreeUpdated) this.updateValueAndValidity({
        onlySelf: true
      });
      return subtreeUpdated;
    }
    /** @internal */

  }, {
    key: "_throwIfControlMissing",
    value: function _throwIfControlMissing(index) {
      if (!this.controls.length) {
        throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      }

      if (!this.at(index)) {
        throw new Error("Cannot find form control at index ".concat(index));
      }
    }
    /** @internal */

  }, {
    key: "_forEachChild",
    value: function _forEachChild(cb) {
      this.controls.forEach(function (control, index) {
        cb(control, index);
      });
    }
    /** @internal */

  }, {
    key: "_updateValue",
    value: function _updateValue() {
      var _this19 = this;

      this.value = this.controls.filter(function (control) {
        return control.enabled || _this19.disabled;
      }).map(function (control) {
        return control.value;
      });
    }
    /** @internal */

  }, {
    key: "_anyControls",
    value: function _anyControls(condition) {
      return this.controls.some(function (control) {
        return control.enabled && condition(control);
      });
    }
    /** @internal */

  }, {
    key: "_setUpControls",
    value: function _setUpControls() {
      var _this20 = this;

      this._forEachChild(function (control) {
        return _this20._registerControl(control);
      });
    }
    /** @internal */

  }, {
    key: "_checkAllValuesPresent",
    value: function _checkAllValuesPresent(value) {
      this._forEachChild(function (control, i) {
        if (value[i] === undefined) {
          throw new Error("Must supply a value for form control at index: ".concat(i, "."));
        }
      });
    }
    /** @internal */

  }, {
    key: "_allControlsDisabled",
    value: function _allControlsDisabled() {
      var _iterator = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.controls),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var control = _step.value;
          if (control.enabled) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.controls.length > 0 || this.disabled;
    }
  }, {
    key: "_registerControl",
    value: function _registerControl(control) {
      control.setParent(this);

      control._registerOnCollectionChange(this._onCollectionChange);
    }
  }]);

  return FormArray;
}(AbstractControl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgForm;
  })
};

var ɵ0 = function ɵ0() {
  return Promise.resolve(null);
};

var resolvedPromise = ɵ0();
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgForm = /*#__PURE__*/function (_ControlContainer) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgForm, _ControlContainer);

  var _super8 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgForm);

  function NgForm(validators, asyncValidators) {
    var _this21;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgForm);

    _this21 = _super8.call(this);
    /**
     * @description
     * Returns whether the form submission has been triggered.
     */

    _this21.submitted = false;
    _this21._directives = [];
    /**
     * @description
     * Event emitter for the "ngSubmit" event
     */

    _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    return _this21;
  }
  /**
   * @description
   * Lifecycle method called after the view is initialized. For internal use only.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgForm, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._setUpdateStrategy();
    }
    /**
     * @description
     * The directive instance.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * The internal `FormGroup` instance.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Returns a map of the controls in this group.
     */

  }, {
    key: "controls",
    get: function get() {
      return this.form.controls;
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "addControl",
    value: function addControl(dir) {
      var _this22 = this;

      resolvedPromise.then(function () {
        var container = _this22._findContainer(dir.path);

        dir.control = container.registerControl(dir.name, dir.control);
        setUpControl(dir.control, dir);
        dir.control.updateValueAndValidity({
          emitEvent: false
        });

        _this22._directives.push(dir);
      });
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      var _this23 = this;

      resolvedPromise.then(function () {
        var container = _this23._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }

        removeDir(_this23._directives, dir);
      });
    }
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var _this24 = this;

      resolvedPromise.then(function () {
        var container = _this24._findContainer(dir.path);

        var group = new FormGroup({});
        setUpFormContainer(group, dir);
        container.registerControl(dir.name, group);
        group.updateValueAndValidity({
          emitEvent: false
        });
      });
    }
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {
      var _this25 = this;

      resolvedPromise.then(function () {
        var container = _this25._findContainer(dir.path);

        if (container) {
          container.removeControl(dir.name);
        }
      });
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var _this26 = this;

      resolvedPromise.then(function () {
        var ctrl = _this26.form.get(dir.path);

        ctrl.setValue(value);
      });
    }
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.control.setValue(value);
    }
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this._directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.form._updateOn = this.options.updateOn;
      }
    }
    /** @internal */

  }, {
    key: "_findContainer",
    value: function _findContainer(path) {
      path.pop();
      return path.length ? this.form.get(path) : this.form;
    }
  }]);

  return NgForm;
}(ControlContainer);

NgForm.ɵfac = function NgForm_Factory(t) {
  return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgForm.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgForm.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngFormOptions']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
      providers: [formDirectiveProvider],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      outputs: ['ngSubmit'],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngFormOptions']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */


var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AbstractFormGroupDirective, _ControlContainer2);

  var _super9 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AbstractFormGroupDirective);

  function AbstractFormGroupDirective() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AbstractFormGroupDirective);

    return _super9.apply(this, arguments);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AbstractFormGroupDirective, [{
    key: "ngOnInit",
    value:
    /**
     * @description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     */
    function ngOnInit() {
      this._checkParentType();

      this.formDirective.addFormGroup(this);
    }
    /**
     * @description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormGroup(this);
      }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * The synchronous validators registered with this group.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * The async validators registered with this group.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
    /** @internal */

  }, {
    key: "_checkParentType",
    value: function _checkParentType() {}
  }]);

  return AbstractFormGroupDirective;
}(ControlContainer);

AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
  return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
};

AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: AbstractFormGroupDirective,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var TemplateDrivenErrors = /*#__PURE__*/function () {
  function TemplateDrivenErrors() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TemplateDrivenErrors);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TemplateDrivenErrors, null, [{
    key: "modelParentException",
    value: function modelParentException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
    }
  }, {
    key: "formGroupNameException",
    value: function formGroupNameException() {
      throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }, {
    key: "missingNameException",
    value: function missingNameException() {
      throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    }
  }, {
    key: "modelGroupParentException",
    value: function modelGroupParentException() {
      throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
    }
  }]);

  return TemplateDrivenErrors;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModelGroup;
  })
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModelGroup, _AbstractFormGroupDir);

  var _super10 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModelGroup);

  function NgModelGroup(parent, validators, asyncValidators) {
    var _this27;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModelGroup);

    _this27 = _super10.call(this);
    _this27._parent = parent;
    _this27._validators = validators;
    _this27._asyncValidators = asyncValidators;
    return _this27;
  }
  /** @internal */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModelGroup, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        TemplateDrivenErrors.modelGroupParentException();
      }
    }
  }]);

  return NgModelGroup;
}(AbstractFormGroupDirective);

NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
  return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

NgModelGroup.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

NgModelGroup.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelGroup']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModelGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModelGroup]',
      providers: [modelGroupProvider],
      exportAs: 'ngModelGroup'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelGroup']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formControlBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return NgModel;
  })
};

var ɵ0$1 = function ɵ0$1() {
  return Promise.resolve(null);
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */


var resolvedPromise$1 = ɵ0$1();
/**
 * @description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex:
 * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
 * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
 * access. See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is
 * used within a custom form component, and the name `@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */

var NgModel = /*#__PURE__*/function (_NgControl) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NgModel, _NgControl);

  var _super11 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NgModel);

  function NgModel(parent, validators, asyncValidators, valueAccessors) {
    var _this28;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgModel);

    _this28 = _super11.call(this);
    _this28.control = new FormControl();
    /** @internal */

    _this28._registered = false;
    /**
     * @description
     * Event emitter for producing the `ngModelChange` event after
     * the view model updates.
     */

    _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    _this28._parent = parent;
    _this28._rawValidators = validators || [];
    _this28._rawAsyncValidators = asyncValidators || [];
    _this28.valueAccessor = selectValueAccessor(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this28), valueAccessors);
    return _this28;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgModel, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkForErrors();

      if (!this._registered) this._setUpControl();

      if ('isDisabled' in changes) {
        this._updateDisabled(changes);
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        this._updateValue(this.model);

        this.viewModel = this.model;
      }
    }
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal
     * use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */

  }, {
    key: "viewToModelUpdate",
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._setUpdateStrategy();

      this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
      this._registered = true;
    }
  }, {
    key: "_setUpdateStrategy",
    value: function _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.control._updateOn = this.options.updateOn;
      }
    }
  }, {
    key: "_isStandalone",
    value: function _isStandalone() {
      return !this._parent || !!(this.options && this.options.standalone);
    }
  }, {
    key: "_setUpStandalone",
    value: function _setUpStandalone() {
      setUpControl(this.control, this);
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_checkForErrors",
    value: function _checkForErrors() {
      if (!this._isStandalone()) {
        this._checkParentType();
      }

      this._checkName();
    }
  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        TemplateDrivenErrors.formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        TemplateDrivenErrors.modelParentException();
      }
    }
  }, {
    key: "_checkName",
    value: function _checkName() {
      if (this.options && this.options.name) this.name = this.options.name;

      if (!this._isStandalone() && !this.name) {
        TemplateDrivenErrors.missingNameException();
      }
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      var _this29 = this;

      resolvedPromise$1.then(function () {
        _this29.control.setValue(value, {
          emitViewToModelChange: false
        });
      });
    }
  }, {
    key: "_updateDisabled",
    value: function _updateDisabled(changes) {
      var _this30 = this;

      var disabledValue = changes['isDisabled'].currentValue;
      var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
      resolvedPromise$1.then(function () {
        if (isDisabled && !_this30.control.disabled) {
          _this30.control.disable();
        } else if (!isDisabled && _this30.control.disabled) {
          _this30.control.enable();
        }
      });
    }
  }]);

  return NgModel;
}(NgControl);

NgModel.ɵfac = function NgModel_Factory(t) {
  return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
};

NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

NgModel.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }];
};

NgModel.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModelOptions']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[ngModel]:not([formControlName]):not([formControl])',
      providers: [formControlBinding],
      exportAs: 'ngModel'
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModelOptions']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */


var ɵNgNoValidate = function ɵNgNoValidate() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵNgNoValidate);
};

ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
  return new (t || ɵNgNoValidate)();
};

ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: ɵNgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵNgNoValidate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
      host: {
        'novalidate': ''
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */


var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlDirective;
  })
};
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlDirective, _NgControl2);

  var _super12 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlDirective);

  function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this31;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlDirective);

    _this31 = _super12.call(this);
    _this31._ngModelWarningConfig = _ngModelWarningConfig;
    /** @deprecated as of v6 */

    _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular `FormControlDirective` instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this31._ngModelWarningSent = false;
    _this31._rawValidators = validators || [];
    _this31._rawAsyncValidators = asyncValidators || [];
    _this31.valueAccessor = selectValueAccessor(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this31), valueAccessors);
    return _this31;
  }
  /**
   * @description
   * Triggers a warning that this input should not be used with reactive forms.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlDirective, [{
    key: "isDisabled",
    set: function set(isDisabled) {
      ReactiveErrors.disabledAttrWarning();
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this._isControlChanged(changes)) {
        setUpControl(this.form, this);

        if (this.control.disabled && this.valueAccessor.setDisabledState) {
          this.valueAccessor.setDisabledState(true);
        }

        this.form.updateValueAndValidity({
          emitEvent: false
        });
      }

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

        this.form.setValue(this.model);
        this.viewModel = this.model;
      }
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * The `FormControl` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */

  }, {
    key: "viewToModelUpdate",
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
  }, {
    key: "_isControlChanged",
    value: function _isControlChanged(changes) {
      return changes.hasOwnProperty('form');
    }
  }]);

  return FormControlDirective;
}(NgControl);

FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    form: ["formControl", "form"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * @internal
 */

FormControlDirective._ngModelWarningSentOnce = false;

FormControlDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControl']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControl]',
      providers: [formControlBinding$1],
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControl']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupDirective;
  })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupDirective, _ControlContainer3);

  var _super13 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupDirective);

  function FormGroupDirective(_validators, _asyncValidators) {
    var _this32;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupDirective);

    _this32 = _super13.call(this);
    _this32._validators = _validators;
    _this32._asyncValidators = _asyncValidators;
    /**
     * @description
     * Reports whether the form submission has been triggered.
     */

    _this32.submitted = false;
    /**
     * @description
     * Tracks the list of added `FormControlName` instances
     */

    _this32.directives = [];
    /**
     * @description
     * Tracks the `FormGroup` bound to this directive.
     */

    _this32.form = null;
    /**
     * @description
     * Emits an event when the form submission has been triggered.
     */

    _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    return _this32;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._checkFormPresent();

      if (changes.hasOwnProperty('form')) {
        this._updateValidators();

        this._updateDomValue();

        this._updateRegistrations();
      }
    }
    /**
     * @description
     * Returns this directive's instance.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */

  }, {
    key: "path",
    get: function get() {
      return [];
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "addControl",
    value: function addControl(dir) {
      var ctrl = this.form.get(dir.path);
      setUpControl(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
      this.directives.push(dir);
      return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "getControl",
    value: function getControl(dir) {
      return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */

  }, {
    key: "removeControl",
    value: function removeControl(dir) {
      removeDir(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "addFormGroup",
    value: function addFormGroup(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form group.
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "removeFormGroup",
    value: function removeFormGroup(dir) {}
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */

  }, {
    key: "getFormGroup",
    value: function getFormGroup(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "addFormArray",
    value: function addFormArray(dir) {
      var ctrl = this.form.get(dir.path);
      setUpFormContainer(ctrl, dir);
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
    }
    /**
     * No-op method to remove the form array.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "removeFormArray",
    value: function removeFormArray(dir) {}
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */

  }, {
    key: "getFormArray",
    value: function getFormArray(dir) {
      return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */

  }, {
    key: "updateModel",
    value: function updateModel(dir, value) {
      var ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */

  }, {
    key: "onSubmit",
    value: function onSubmit($event) {
      this.submitted = true;
      syncPendingControls(this.form, this.directives);
      this.ngSubmit.emit($event);
      return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */

  }, {
    key: "onReset",
    value: function onReset() {
      this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */

  }, {
    key: "resetForm",
    value: function resetForm() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.form.reset(value);
      this.submitted = false;
    }
    /** @internal */

  }, {
    key: "_updateDomValue",
    value: function _updateDomValue() {
      var _this33 = this;

      this.directives.forEach(function (dir) {
        var newCtrl = _this33.form.get(dir.path);

        if (dir.control !== newCtrl) {
          cleanUpControl(dir.control, dir);
          if (newCtrl) setUpControl(newCtrl, dir);
          dir.control = newCtrl;
        }
      });

      this.form._updateTreeValidity({
        emitEvent: false
      });
    }
  }, {
    key: "_updateRegistrations",
    value: function _updateRegistrations() {
      var _this34 = this;

      this.form._registerOnCollectionChange(function () {
        return _this34._updateDomValue();
      });

      if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
      this._oldForm = this.form;
    }
  }, {
    key: "_updateValidators",
    value: function _updateValidators() {
      var sync = composeValidators(this._validators);
      this.form.validator = Validators.compose([this.form.validator, sync]);
      var async = composeAsyncValidators(this._asyncValidators);
      this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    }
  }, {
    key: "_checkFormPresent",
    value: function _checkFormPresent() {
      if (!this.form) {
        ReactiveErrors.missingFormException();
      }
    }
  }]);

  return FormGroupDirective;
}(ControlContainer);

FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
  return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

FormGroupDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupDirective.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroup']
  }],
  ngSubmit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroup]',
      providers: [formDirectiveProvider$1],
      host: {
        '(submit)': 'onSubmit($event)',
        '(reset)': 'onReset()'
      },
      exportAs: 'ngForm'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroup']
    }],
    ngSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormGroupName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormGroupName, _AbstractFormGroupDir2);

  var _super14 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormGroupName);

  function FormGroupName(parent, validators, asyncValidators) {
    var _this35;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormGroupName);

    _this35 = _super14.call(this);
    _this35._parent = parent;
    _this35._validators = validators;
    _this35._asyncValidators = asyncValidators;
    return _this35;
  }
  /** @internal */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroupName, [{
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent)) {
        ReactiveErrors.groupParentException();
      }
    }
  }]);

  return FormGroupName;
}(AbstractFormGroupDirective);

FormGroupName.ɵfac = function FormGroupName_Factory(t) {
  return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormGroupName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormGroupName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formGroupName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormGroupName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formGroupName]',
      providers: [formGroupNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formGroupName']
    }]
  });
})();

var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormArrayName;
  })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormArrayName, _ControlContainer4);

  var _super15 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormArrayName);

  function FormArrayName(parent, validators, asyncValidators) {
    var _this36;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormArrayName);

    _this36 = _super15.call(this);
    _this36._parent = parent;
    _this36._validators = validators;
    _this36._asyncValidators = asyncValidators;
    return _this36;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   *
   * @throws If the directive does not have a valid parent.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormArrayName, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._checkParentType();

      this.formDirective.addFormArray(this);
    }
    /**
     * @description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeFormArray(this);
      }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */

  }, {
    key: "control",
    get: function get() {
      return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._validators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._asyncValidators);
    }
  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (_hasInvalidParent(this._parent)) {
        ReactiveErrors.arrayParentException();
      }
    }
  }]);

  return FormArrayName;
}(ControlContainer);

FormArrayName.ɵfac = function FormArrayName_Factory(t) {
  return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
};

FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

FormArrayName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }];
};

FormArrayName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formArrayName']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormArrayName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formArrayName]',
      providers: [formArrayNameProvider]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formArrayName']
    }]
  });
})();

function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var controlNameBinding = {
  provide: NgControl,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return FormControlName;
  })
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel is deprecated
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var FormControlName = /*#__PURE__*/function (_NgControl3) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormControlName, _NgControl3);

  var _super16 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FormControlName);

  function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    var _this37;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormControlName);

    _this37 = _super16.call(this);
    _this37._ngModelWarningConfig = _ngModelWarningConfig;
    _this37._added = false;
    /** @deprecated as of v6 */

    _this37.update = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * @description
     * Instance property used to track whether an ngModel warning has been sent out for this
     * particular FormControlName instance. Used to support warning config of "always".
     *
     * @internal
     */

    _this37._ngModelWarningSent = false;
    _this37._parent = parent;
    _this37._rawValidators = validators || [];
    _this37._rawAsyncValidators = asyncValidators || [];
    _this37.valueAccessor = selectValueAccessor(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this37), valueAccessors);
    return _this37;
  }
  /**
   * @description
   * Triggers a warning that this input should not be used with reactive forms.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormControlName, [{
    key: "isDisabled",
    set: function set(isDisabled) {
      ReactiveErrors.disabledAttrWarning();
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param changes A object of key/value pairs for the set of changed inputs.
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this._added) this._setUpControl();

      if (isPropertyUpdated(changes, this.viewModel)) {
        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

        this.viewModel = this.model;
        this.formDirective.updateModel(this, this.model);
      }
    }
    /**
     * @description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formDirective) {
        this.formDirective.removeControl(this);
      }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */

  }, {
    key: "viewToModelUpdate",
    value: function viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */

  }, {
    key: "path",
    get: function get() {
      return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */

  }, {
    key: "formDirective",
    get: function get() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     */

  }, {
    key: "validator",
    get: function get() {
      return composeValidators(this._rawValidators);
    }
    /**
     * @description
     * Async validator function composed of all the async validators registered with this
     * directive.
     */

  }, {
    key: "asyncValidator",
    get: function get() {
      return composeAsyncValidators(this._rawAsyncValidators);
    }
  }, {
    key: "_checkParentType",
    value: function _checkParentType() {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        ReactiveErrors.ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        ReactiveErrors.controlParentException();
      }
    }
  }, {
    key: "_setUpControl",
    value: function _setUpControl() {
      this._checkParentType();

      this.control = this.formDirective.addControl(this);

      if (this.control.disabled && this.valueAccessor.setDisabledState) {
        this.valueAccessor.setDisabledState(true);
      }

      this._added = true;
    }
  }]);

  return FormControlName;
}(NgControl);

FormControlName.ɵfac = function FormControlName_Factory(t) {
  return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};

FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    isDisabled: ["disabled", "isDisabled"],
    name: ["formControlName", "name"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * @internal
 */

FormControlName._ngModelWarningSentOnce = false;

FormControlName.ctorParameters = function () {
  return [{
    type: ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }];
};

FormControlName.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['formControlName']
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['disabled']
  }],
  model: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['ngModel']
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['ngModelChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormControlName, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[formControlName]',
      providers: [controlNameBinding]
    }]
  }], function () {
    return [{
      type: ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["SkipSelf"]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_ASYNC_VALIDATORS]
      }]
    }, {
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_VALUE_ACCESSOR]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
      }]
    }];
  }, {
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['ngModelChange']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['disabled']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['formControlName']
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['ngModel']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return RequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */

var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return CheckboxRequiredValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */

var RequiredValidator = /*#__PURE__*/function () {
  function RequiredValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RequiredValidator);

    this._required = false;
  }
  /**
   * @description
   * Tracks changes to the required attribute bound to this directive.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RequiredValidator, [{
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = value != null && value !== false && "".concat(value) !== 'false';
      if (this._onChange) this._onChange();
    }
    /**
     * @description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.required ? Validators.required(control) : null;
    }
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }]);

  return RequiredValidator;
}();

RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
  return new (t || RequiredValidator)();
};

RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
});
RequiredValidator.propDecorators = {
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](RequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
      providers: [REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], function () {
    return [];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an
 * ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */


var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckboxRequiredValidator, _RequiredValidator);

  var _super17 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckboxRequiredValidator);

  function CheckboxRequiredValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CheckboxRequiredValidator);

    return _super17.apply(this, arguments);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckboxRequiredValidator, [{
    key: "validate",
    value:
    /**
     * @description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     */
    function validate(control) {
      return this.required ? Validators.requiredTrue(control) : null;
    }
  }]);

  return CheckboxRequiredValidator;
}(RequiredValidator);

CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
  return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
};

CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], null, null);
})();
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return EmailValidator;
  }),
  multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel
 * binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */

var EmailValidator = /*#__PURE__*/function () {
  function EmailValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, EmailValidator);

    this._enabled = false;
  }
  /**
   * @description
   * Tracks changes to the email attribute bound to this directive.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(EmailValidator, [{
    key: "email",
    set: function set(value) {
      this._enabled = value === '' || value === true || value === 'true';
      if (this._onChange) this._onChange();
    }
    /**
     * @description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this._enabled ? Validators.email(control) : null;
    }
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }]);

  return EmailValidator;
}();

EmailValidator.ɵfac = function EmailValidator_Factory(t) {
  return new (t || EmailValidator)();
};

EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
});
EmailValidator.propDecorators = {
  email: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](EmailValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[email][formControlName],[email][formControl],[email][ngModel]',
      providers: [EMAIL_VALIDATOR]
    }]
  }], function () {
    return [];
  }, {
    email: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MinLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MinLengthValidator = /*#__PURE__*/function () {
  function MinLengthValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MinLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MinLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('minlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * @description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.minlength == null ? null : this._validator(control);
    }
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
    }
  }]);

  return MinLengthValidator;
}();

MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
  return new (t || MinLengthValidator)();
};

MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MinLengthValidator.propDecorators = {
  minlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MinLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        '[attr.minlength]': 'minlength ? minlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    minlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MaxLengthValidator;
  }),
  multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var MaxLengthValidator = /*#__PURE__*/function () {
  function MaxLengthValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaxLengthValidator);

    this._validator = Validators.nullValidator;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaxLengthValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('maxlength' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * @description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this.maxlength != null ? this._validator(control) : null;
    }
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
    }
  }]);

  return MaxLengthValidator;
}();

MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
  return new (t || MaxLengthValidator)();
};

MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
MaxLengthValidator.propDecorators = {
  maxlength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaxLengthValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        '[attr.maxlength]': 'maxlength ? maxlength : null'
      }
    }]
  }], function () {
    return [];
  }, {
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */


var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return PatternValidator;
  }),
  multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */

var PatternValidator = /*#__PURE__*/function () {
  function PatternValidator() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PatternValidator);

    this._validator = Validators.nullValidator;
  }
  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PatternValidator, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('pattern' in changes) {
        this._createValidator();

        if (this._onChange) this._onChange();
      }
    }
    /**
     * @description
     * Method that validates whether the value matches the
     * the pattern requirement.
     */

  }, {
    key: "validate",
    value: function validate(control) {
      return this._validator(control);
    }
    /**
     * @description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param fn The callback function
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "_createValidator",
    value: function _createValidator() {
      this._validator = Validators.pattern(this.pattern);
    }
  }]);

  return PatternValidator;
}();

PatternValidator.ɵfac = function PatternValidator_Factory(t) {
  return new (t || PatternValidator)();
};

PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});
PatternValidator.propDecorators = {
  pattern: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PatternValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
      providers: [PATTERN_VALIDATOR],
      host: {
        '[attr.pattern]': 'pattern ? pattern : null'
      }
    }]
  }], function () {
    return [];
  }, {
    pattern: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */

var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ɵInternalFormsSharedModule);
};

ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ɵInternalFormsSharedModule
});
ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ɵInternalFormsSharedModule_Factory(t) {
    return new (t || ɵInternalFormsSharedModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
    declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
    exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function isAbstractControlOptions(options) {
  return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
}
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */


var FormBuilder = /*#__PURE__*/function () {
  function FormBuilder() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormBuilder);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(FormBuilder, [{
    key: "group",
    value:
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    function group(controlsConfig) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var controls = this._reduceControls(controlsConfig);

      var validators = null;
      var asyncValidators = null;
      var updateOn = undefined;

      if (options != null) {
        if (isAbstractControlOptions(options)) {
          // `options` are `AbstractControlOptions`
          validators = options.validators != null ? options.validators : null;
          asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
          updateOn = options.updateOn != null ? options.updateOn : undefined;
        } else {
          // `options` are legacy form group options
          validators = options['validator'] != null ? options['validator'] : null;
          asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
        }
      }

      return new FormGroup(controls, {
        asyncValidators: asyncValidators,
        updateOn: updateOn,
        validators: validators
      });
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */

  }, {
    key: "control",
    value: function control(formState, validatorOrOpts, asyncValidator) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */

  }, {
    key: "array",
    value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
      var _this38 = this;

      var controls = controlsConfig.map(function (c) {
        return _this38._createControl(c);
      });
      return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /** @internal */

  }, {
    key: "_reduceControls",
    value: function _reduceControls(controlsConfig) {
      var _this39 = this;

      var controls = {};
      Object.keys(controlsConfig).forEach(function (controlName) {
        controls[controlName] = _this39._createControl(controlsConfig[controlName]);
      });
      return controls;
    }
    /** @internal */

  }, {
    key: "_createControl",
    value: function _createControl(controlConfig) {
      if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
        return controlConfig;
      } else if (Array.isArray(controlConfig)) {
        var value = controlConfig[0];
        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
        return this.control(value, validator, asyncValidator);
      } else {
        return this.control(controlConfig);
      }
    }
  }]);

  return FormBuilder;
}();

FormBuilder.ɵfac = function FormBuilder_Factory(t) {
  return new (t || FormBuilder)();
};

FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FormBuilder,
  factory: FormBuilder.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["Version"]('10.0.14');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */

var FormsModule = function FormsModule() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, FormsModule);
};

FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: FormsModule
});
FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function FormsModule_Factory(t) {
    return new (t || FormsModule)();
  },
  providers: [RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormsModule, {
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      providers: [RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */


var ReactiveFormsModule = /*#__PURE__*/function () {
  function ReactiveFormsModule() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ReactiveFormsModule);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactiveFormsModule, null, [{
    key: "withConfig",
    value:
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    function withConfig(opts) {
      return {
        ngModule: ReactiveFormsModule,
        providers: [{
          provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          useValue: opts.warnOnNgModelWithFormControl
        }]
      };
    }
  }]);

  return ReactiveFormsModule;
}();

ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ReactiveFormsModule
});
ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function ReactiveFormsModule_Factory(t) {
    return new (t || ReactiveFormsModule)();
  },
  providers: [FormBuilder, RadioControlRegistry],
  imports: [ɵInternalFormsSharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
    declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ReactiveFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      providers: [FormBuilder, RadioControlRegistry],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgDropdownPanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgItemLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











/**
 * @fileoverview added by tsickle
 * Generated from: lib/value-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */



var _c0 = ["content"];
var _c1 = ["scroll"];
var _c2 = ["padding"];

var _c3 = function _c3(a0) {
  return {
    searchTerm: a0
  };
};

function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
  }
}

function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
  }
}

var _c4 = ["*"];
var _c5 = ["searchInput"];

function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r11.unselect(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 16);
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
  }
}

function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

var _c6 = function _c6(a0, a1, a2) {
  return {
    item: a0,
    clear: a1,
    label: a2
  };
};

function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
  }
}

function NgSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
  }
}

function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

var _c7 = function _c7(a0, a1) {
  return {
    items: a0,
    clear: a1
  };
};

function NgSelectComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}

function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 19);
  }
}

function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
  }
}

function NgSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 27);
  }

  if (rf & 2) {
    var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

var _c8 = function _c8(a0, a1, a2, a3) {
  return {
    item: a0,
    item$: a1,
    index: a2,
    searchTerm: a3
  };
};

function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      var item_r24 = ctx.$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r29.toggleItem(item_r24);
    })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      var item_r24 = ctx.$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r31.onItemHover(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r24 = ctx.$implicit;

    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r35.itemsList.unmarkItem();
    })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r37.selectTag();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r45.loadingText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r47.viewPortItems = $event;
    })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r49.scroll.emit($event);
    })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r50.scrollToEnd.emit($event);
    })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r51.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
  }
}

var unescapedHTMLExp = /[&<>"']/g;
/** @type {?} */

var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
/** @type {?} */

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};
/**
 * @param {?} string
 * @return {?}
 */

function escapeHTML(string) {
  return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp,
  /**
  * @param {?} chr
  * @return {?}
  */
  function (chr) {
    return htmlEscapes[chr];
  }) : string;
}
/**
 * @param {?} value
 * @return {?}
 */


function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */


function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */


function isPromise(value) {
  return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */


function isFunction(value) {
  return value instanceof Function;
}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-templates.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var NgItemLabelDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function NgItemLabelDirective(element) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgItemLabelDirective);

    this.element = element;
    this.escape = true;
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgItemLabelDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
    }
  }]);

  return NgItemLabelDirective;
}();

NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
  return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]));
};

NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    escape: "escape",
    ngItemLabel: "ngItemLabel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

NgItemLabelDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }];
};

NgItemLabelDirective.propDecorators = {
  ngItemLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  escape: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ngItemLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }];
  }, {
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();

if (false) {}

var NgOptionTemplateDirective =
/**
 * @param {?} template
 */
function NgOptionTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptionTemplateDirective);

  this.template = template;
};

NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
  return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});
/** @nocollapse */

NgOptionTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-option-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgOptgroupTemplateDirective =
/**
 * @param {?} template
 */
function NgOptgroupTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptgroupTemplateDirective);

  this.template = template;
};

NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
  return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
/** @nocollapse */

NgOptgroupTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-optgroup-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgLabelTemplateDirective =
/**
 * @param {?} template
 */
function NgLabelTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLabelTemplateDirective);

  this.template = template;
};

NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
  return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});
/** @nocollapse */

NgLabelTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgMultiLabelTemplateDirective =
/**
 * @param {?} template
 */
function NgMultiLabelTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgMultiLabelTemplateDirective);

  this.template = template;
};

NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
  return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
/** @nocollapse */

NgMultiLabelTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-multi-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgHeaderTemplateDirective =
/**
 * @param {?} template
 */
function NgHeaderTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgHeaderTemplateDirective);

  this.template = template;
};

NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
  return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});
/** @nocollapse */

NgHeaderTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-header-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgFooterTemplateDirective =
/**
 * @param {?} template
 */
function NgFooterTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgFooterTemplateDirective);

  this.template = template;
};

NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
  return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});
/** @nocollapse */

NgFooterTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-footer-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgNotFoundTemplateDirective =
/**
 * @param {?} template
 */
function NgNotFoundTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgNotFoundTemplateDirective);

  this.template = template;
};

NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
  return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});
/** @nocollapse */

NgNotFoundTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-notfound-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgTypeToSearchTemplateDirective =
/**
 * @param {?} template
 */
function NgTypeToSearchTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgTypeToSearchTemplateDirective);

  this.template = template;
};

NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
  return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
/** @nocollapse */

NgTypeToSearchTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-typetosearch-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgLoadingTextTemplateDirective =
/**
 * @param {?} template
 */
function NgLoadingTextTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLoadingTextTemplateDirective);

  this.template = template;
};

NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
  return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
/** @nocollapse */

NgLoadingTextTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-loadingtext-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgTagTemplateDirective =
/**
 * @param {?} template
 */
function NgTagTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgTagTemplateDirective);

  this.template = template;
};

NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
  return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});
/** @nocollapse */

NgTagTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-tag-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}

var NgLoadingSpinnerTemplateDirective =
/**
 * @param {?} template
 */
function NgLoadingSpinnerTemplateDirective(template) {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLoadingSpinnerTemplateDirective);

  this.template = template;
};

NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
  return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]));
};

NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
/** @nocollapse */

NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[ng-loadingspinner-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/console.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ConsoleService = /*#__PURE__*/function () {
  function ConsoleService() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ConsoleService);
  }

  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ConsoleService, [{
    key: "warn",
    value:
    /**
     * @param {?} message
     * @return {?}
     */
    function warn(message) {
      console.warn(message);
    }
  }]);

  return ConsoleService;
}();

ConsoleService.ɵfac = function ConsoleService_Factory(t) {
  return new (t || ConsoleService)();
};
/** @nocollapse */


ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function ConsoleService_Factory() {
    return new ConsoleService();
  },
  token: ConsoleService,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: lib/id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g,
  /**
  * @param {?} _
  * @return {?}
  */
  function (_) {
    // tslint:disable-next-line:no-bitwise

    /** @type {?} */
    var val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var diacritics = {
  "\u24B6": 'A',
  "\uFF21": 'A',
  "\xC0": 'A',
  "\xC1": 'A',
  "\xC2": 'A',
  "\u1EA6": 'A',
  "\u1EA4": 'A',
  "\u1EAA": 'A',
  "\u1EA8": 'A',
  "\xC3": 'A',
  "\u0100": 'A',
  "\u0102": 'A',
  "\u1EB0": 'A',
  "\u1EAE": 'A',
  "\u1EB4": 'A',
  "\u1EB2": 'A',
  "\u0226": 'A',
  "\u01E0": 'A',
  "\xC4": 'A',
  "\u01DE": 'A',
  "\u1EA2": 'A',
  "\xC5": 'A',
  "\u01FA": 'A',
  "\u01CD": 'A',
  "\u0200": 'A',
  "\u0202": 'A',
  "\u1EA0": 'A',
  "\u1EAC": 'A',
  "\u1EB6": 'A',
  "\u1E00": 'A',
  "\u0104": 'A',
  "\u023A": 'A',
  "\u2C6F": 'A',
  "\uA732": 'AA',
  "\xC6": 'AE',
  "\u01FC": 'AE',
  "\u01E2": 'AE',
  "\uA734": 'AO',
  "\uA736": 'AU',
  "\uA738": 'AV',
  "\uA73A": 'AV',
  "\uA73C": 'AY',
  "\u24B7": 'B',
  "\uFF22": 'B',
  "\u1E02": 'B',
  "\u1E04": 'B',
  "\u1E06": 'B',
  "\u0243": 'B',
  "\u0182": 'B',
  "\u0181": 'B',
  "\u24B8": 'C',
  "\uFF23": 'C',
  "\u0106": 'C',
  "\u0108": 'C',
  "\u010A": 'C',
  "\u010C": 'C',
  "\xC7": 'C',
  "\u1E08": 'C',
  "\u0187": 'C',
  "\u023B": 'C',
  "\uA73E": 'C',
  "\u24B9": 'D',
  "\uFF24": 'D',
  "\u1E0A": 'D',
  "\u010E": 'D',
  "\u1E0C": 'D',
  "\u1E10": 'D',
  "\u1E12": 'D',
  "\u1E0E": 'D',
  "\u0110": 'D',
  "\u018B": 'D',
  "\u018A": 'D',
  "\u0189": 'D',
  "\uA779": 'D',
  "\u01F1": 'DZ',
  "\u01C4": 'DZ',
  "\u01F2": 'Dz',
  "\u01C5": 'Dz',
  "\u24BA": 'E',
  "\uFF25": 'E',
  "\xC8": 'E',
  "\xC9": 'E',
  "\xCA": 'E',
  "\u1EC0": 'E',
  "\u1EBE": 'E',
  "\u1EC4": 'E',
  "\u1EC2": 'E',
  "\u1EBC": 'E',
  "\u0112": 'E',
  "\u1E14": 'E',
  "\u1E16": 'E',
  "\u0114": 'E',
  "\u0116": 'E',
  "\xCB": 'E',
  "\u1EBA": 'E',
  "\u011A": 'E',
  "\u0204": 'E',
  "\u0206": 'E',
  "\u1EB8": 'E',
  "\u1EC6": 'E',
  "\u0228": 'E',
  "\u1E1C": 'E',
  "\u0118": 'E',
  "\u1E18": 'E',
  "\u1E1A": 'E',
  "\u0190": 'E',
  "\u018E": 'E',
  "\u24BB": 'F',
  "\uFF26": 'F',
  "\u1E1E": 'F',
  "\u0191": 'F',
  "\uA77B": 'F',
  "\u24BC": 'G',
  "\uFF27": 'G',
  "\u01F4": 'G',
  "\u011C": 'G',
  "\u1E20": 'G',
  "\u011E": 'G',
  "\u0120": 'G',
  "\u01E6": 'G',
  "\u0122": 'G',
  "\u01E4": 'G',
  "\u0193": 'G',
  "\uA7A0": 'G',
  "\uA77D": 'G',
  "\uA77E": 'G',
  "\u24BD": 'H',
  "\uFF28": 'H',
  "\u0124": 'H',
  "\u1E22": 'H',
  "\u1E26": 'H',
  "\u021E": 'H',
  "\u1E24": 'H',
  "\u1E28": 'H',
  "\u1E2A": 'H',
  "\u0126": 'H',
  "\u2C67": 'H',
  "\u2C75": 'H',
  "\uA78D": 'H',
  "\u24BE": 'I',
  "\uFF29": 'I',
  "\xCC": 'I',
  "\xCD": 'I',
  "\xCE": 'I',
  "\u0128": 'I',
  "\u012A": 'I',
  "\u012C": 'I',
  "\u0130": 'I',
  "\xCF": 'I',
  "\u1E2E": 'I',
  "\u1EC8": 'I',
  "\u01CF": 'I',
  "\u0208": 'I',
  "\u020A": 'I',
  "\u1ECA": 'I',
  "\u012E": 'I',
  "\u1E2C": 'I',
  "\u0197": 'I',
  "\u24BF": 'J',
  "\uFF2A": 'J',
  "\u0134": 'J',
  "\u0248": 'J',
  "\u24C0": 'K',
  "\uFF2B": 'K',
  "\u1E30": 'K',
  "\u01E8": 'K',
  "\u1E32": 'K',
  "\u0136": 'K',
  "\u1E34": 'K',
  "\u0198": 'K',
  "\u2C69": 'K',
  "\uA740": 'K',
  "\uA742": 'K',
  "\uA744": 'K',
  "\uA7A2": 'K',
  "\u24C1": 'L',
  "\uFF2C": 'L',
  "\u013F": 'L',
  "\u0139": 'L',
  "\u013D": 'L',
  "\u1E36": 'L',
  "\u1E38": 'L',
  "\u013B": 'L',
  "\u1E3C": 'L',
  "\u1E3A": 'L',
  "\u0141": 'L',
  "\u023D": 'L',
  "\u2C62": 'L',
  "\u2C60": 'L',
  "\uA748": 'L',
  "\uA746": 'L',
  "\uA780": 'L',
  "\u01C7": 'LJ',
  "\u01C8": 'Lj',
  "\u24C2": 'M',
  "\uFF2D": 'M',
  "\u1E3E": 'M',
  "\u1E40": 'M',
  "\u1E42": 'M',
  "\u2C6E": 'M',
  "\u019C": 'M',
  "\u24C3": 'N',
  "\uFF2E": 'N',
  "\u01F8": 'N',
  "\u0143": 'N',
  "\xD1": 'N',
  "\u1E44": 'N',
  "\u0147": 'N',
  "\u1E46": 'N',
  "\u0145": 'N',
  "\u1E4A": 'N',
  "\u1E48": 'N',
  "\u0220": 'N',
  "\u019D": 'N',
  "\uA790": 'N',
  "\uA7A4": 'N',
  "\u01CA": 'NJ',
  "\u01CB": 'Nj',
  "\u24C4": 'O',
  "\uFF2F": 'O',
  "\xD2": 'O',
  "\xD3": 'O',
  "\xD4": 'O',
  "\u1ED2": 'O',
  "\u1ED0": 'O',
  "\u1ED6": 'O',
  "\u1ED4": 'O',
  "\xD5": 'O',
  "\u1E4C": 'O',
  "\u022C": 'O',
  "\u1E4E": 'O',
  "\u014C": 'O',
  "\u1E50": 'O',
  "\u1E52": 'O',
  "\u014E": 'O',
  "\u022E": 'O',
  "\u0230": 'O',
  "\xD6": 'O',
  "\u022A": 'O',
  "\u1ECE": 'O',
  "\u0150": 'O',
  "\u01D1": 'O',
  "\u020C": 'O',
  "\u020E": 'O',
  "\u01A0": 'O',
  "\u1EDC": 'O',
  "\u1EDA": 'O',
  "\u1EE0": 'O',
  "\u1EDE": 'O',
  "\u1EE2": 'O',
  "\u1ECC": 'O',
  "\u1ED8": 'O',
  "\u01EA": 'O',
  "\u01EC": 'O',
  "\xD8": 'O',
  "\u01FE": 'O',
  "\u0186": 'O',
  "\u019F": 'O',
  "\uA74A": 'O',
  "\uA74C": 'O',
  "\u01A2": 'OI',
  "\uA74E": 'OO',
  "\u0222": 'OU',
  "\u24C5": 'P',
  "\uFF30": 'P',
  "\u1E54": 'P',
  "\u1E56": 'P',
  "\u01A4": 'P',
  "\u2C63": 'P',
  "\uA750": 'P',
  "\uA752": 'P',
  "\uA754": 'P',
  "\u24C6": 'Q',
  "\uFF31": 'Q',
  "\uA756": 'Q',
  "\uA758": 'Q',
  "\u024A": 'Q',
  "\u24C7": 'R',
  "\uFF32": 'R',
  "\u0154": 'R',
  "\u1E58": 'R',
  "\u0158": 'R',
  "\u0210": 'R',
  "\u0212": 'R',
  "\u1E5A": 'R',
  "\u1E5C": 'R',
  "\u0156": 'R',
  "\u1E5E": 'R',
  "\u024C": 'R',
  "\u2C64": 'R',
  "\uA75A": 'R',
  "\uA7A6": 'R',
  "\uA782": 'R',
  "\u24C8": 'S',
  "\uFF33": 'S',
  "\u1E9E": 'S',
  "\u015A": 'S',
  "\u1E64": 'S',
  "\u015C": 'S',
  "\u1E60": 'S',
  "\u0160": 'S',
  "\u1E66": 'S',
  "\u1E62": 'S',
  "\u1E68": 'S',
  "\u0218": 'S',
  "\u015E": 'S',
  "\u2C7E": 'S',
  "\uA7A8": 'S',
  "\uA784": 'S',
  "\u24C9": 'T',
  "\uFF34": 'T',
  "\u1E6A": 'T',
  "\u0164": 'T',
  "\u1E6C": 'T',
  "\u021A": 'T',
  "\u0162": 'T',
  "\u1E70": 'T',
  "\u1E6E": 'T',
  "\u0166": 'T',
  "\u01AC": 'T',
  "\u01AE": 'T',
  "\u023E": 'T',
  "\uA786": 'T',
  "\uA728": 'TZ',
  "\u24CA": 'U',
  "\uFF35": 'U',
  "\xD9": 'U',
  "\xDA": 'U',
  "\xDB": 'U',
  "\u0168": 'U',
  "\u1E78": 'U',
  "\u016A": 'U',
  "\u1E7A": 'U',
  "\u016C": 'U',
  "\xDC": 'U',
  "\u01DB": 'U',
  "\u01D7": 'U',
  "\u01D5": 'U',
  "\u01D9": 'U',
  "\u1EE6": 'U',
  "\u016E": 'U',
  "\u0170": 'U',
  "\u01D3": 'U',
  "\u0214": 'U',
  "\u0216": 'U',
  "\u01AF": 'U',
  "\u1EEA": 'U',
  "\u1EE8": 'U',
  "\u1EEE": 'U',
  "\u1EEC": 'U',
  "\u1EF0": 'U',
  "\u1EE4": 'U',
  "\u1E72": 'U',
  "\u0172": 'U',
  "\u1E76": 'U',
  "\u1E74": 'U',
  "\u0244": 'U',
  "\u24CB": 'V',
  "\uFF36": 'V',
  "\u1E7C": 'V',
  "\u1E7E": 'V',
  "\u01B2": 'V',
  "\uA75E": 'V',
  "\u0245": 'V',
  "\uA760": 'VY',
  "\u24CC": 'W',
  "\uFF37": 'W',
  "\u1E80": 'W',
  "\u1E82": 'W',
  "\u0174": 'W',
  "\u1E86": 'W',
  "\u1E84": 'W',
  "\u1E88": 'W',
  "\u2C72": 'W',
  "\u24CD": 'X',
  "\uFF38": 'X',
  "\u1E8A": 'X',
  "\u1E8C": 'X',
  "\u24CE": 'Y',
  "\uFF39": 'Y',
  "\u1EF2": 'Y',
  "\xDD": 'Y',
  "\u0176": 'Y',
  "\u1EF8": 'Y',
  "\u0232": 'Y',
  "\u1E8E": 'Y',
  "\u0178": 'Y',
  "\u1EF6": 'Y',
  "\u1EF4": 'Y',
  "\u01B3": 'Y',
  "\u024E": 'Y',
  "\u1EFE": 'Y',
  "\u24CF": 'Z',
  "\uFF3A": 'Z',
  "\u0179": 'Z',
  "\u1E90": 'Z',
  "\u017B": 'Z',
  "\u017D": 'Z',
  "\u1E92": 'Z',
  "\u1E94": 'Z',
  "\u01B5": 'Z',
  "\u0224": 'Z',
  "\u2C7F": 'Z',
  "\u2C6B": 'Z',
  "\uA762": 'Z',
  "\u24D0": 'a',
  "\uFF41": 'a',
  "\u1E9A": 'a',
  "\xE0": 'a',
  "\xE1": 'a',
  "\xE2": 'a',
  "\u1EA7": 'a',
  "\u1EA5": 'a',
  "\u1EAB": 'a',
  "\u1EA9": 'a',
  "\xE3": 'a',
  "\u0101": 'a',
  "\u0103": 'a',
  "\u1EB1": 'a',
  "\u1EAF": 'a',
  "\u1EB5": 'a',
  "\u1EB3": 'a',
  "\u0227": 'a',
  "\u01E1": 'a',
  "\xE4": 'a',
  "\u01DF": 'a',
  "\u1EA3": 'a',
  "\xE5": 'a',
  "\u01FB": 'a',
  "\u01CE": 'a',
  "\u0201": 'a',
  "\u0203": 'a',
  "\u1EA1": 'a',
  "\u1EAD": 'a',
  "\u1EB7": 'a',
  "\u1E01": 'a',
  "\u0105": 'a',
  "\u2C65": 'a',
  "\u0250": 'a',
  "\uA733": 'aa',
  "\xE6": 'ae',
  "\u01FD": 'ae',
  "\u01E3": 'ae',
  "\uA735": 'ao',
  "\uA737": 'au',
  "\uA739": 'av',
  "\uA73B": 'av',
  "\uA73D": 'ay',
  "\u24D1": 'b',
  "\uFF42": 'b',
  "\u1E03": 'b',
  "\u1E05": 'b',
  "\u1E07": 'b',
  "\u0180": 'b',
  "\u0183": 'b',
  "\u0253": 'b',
  "\u24D2": 'c',
  "\uFF43": 'c',
  "\u0107": 'c',
  "\u0109": 'c',
  "\u010B": 'c',
  "\u010D": 'c',
  "\xE7": 'c',
  "\u1E09": 'c',
  "\u0188": 'c',
  "\u023C": 'c',
  "\uA73F": 'c',
  "\u2184": 'c',
  "\u24D3": 'd',
  "\uFF44": 'd',
  "\u1E0B": 'd',
  "\u010F": 'd',
  "\u1E0D": 'd',
  "\u1E11": 'd',
  "\u1E13": 'd',
  "\u1E0F": 'd',
  "\u0111": 'd',
  "\u018C": 'd',
  "\u0256": 'd',
  "\u0257": 'd',
  "\uA77A": 'd',
  "\u01F3": 'dz',
  "\u01C6": 'dz',
  "\u24D4": 'e',
  "\uFF45": 'e',
  "\xE8": 'e',
  "\xE9": 'e',
  "\xEA": 'e',
  "\u1EC1": 'e',
  "\u1EBF": 'e',
  "\u1EC5": 'e',
  "\u1EC3": 'e',
  "\u1EBD": 'e',
  "\u0113": 'e',
  "\u1E15": 'e',
  "\u1E17": 'e',
  "\u0115": 'e',
  "\u0117": 'e',
  "\xEB": 'e',
  "\u1EBB": 'e',
  "\u011B": 'e',
  "\u0205": 'e',
  "\u0207": 'e',
  "\u1EB9": 'e',
  "\u1EC7": 'e',
  "\u0229": 'e',
  "\u1E1D": 'e',
  "\u0119": 'e',
  "\u1E19": 'e',
  "\u1E1B": 'e',
  "\u0247": 'e',
  "\u025B": 'e',
  "\u01DD": 'e',
  "\u24D5": 'f',
  "\uFF46": 'f',
  "\u1E1F": 'f',
  "\u0192": 'f',
  "\uA77C": 'f',
  "\u24D6": 'g',
  "\uFF47": 'g',
  "\u01F5": 'g',
  "\u011D": 'g',
  "\u1E21": 'g',
  "\u011F": 'g',
  "\u0121": 'g',
  "\u01E7": 'g',
  "\u0123": 'g',
  "\u01E5": 'g',
  "\u0260": 'g',
  "\uA7A1": 'g',
  "\u1D79": 'g',
  "\uA77F": 'g',
  "\u24D7": 'h',
  "\uFF48": 'h',
  "\u0125": 'h',
  "\u1E23": 'h',
  "\u1E27": 'h',
  "\u021F": 'h',
  "\u1E25": 'h',
  "\u1E29": 'h',
  "\u1E2B": 'h',
  "\u1E96": 'h',
  "\u0127": 'h',
  "\u2C68": 'h',
  "\u2C76": 'h',
  "\u0265": 'h',
  "\u0195": 'hv',
  "\u24D8": 'i',
  "\uFF49": 'i',
  "\xEC": 'i',
  "\xED": 'i',
  "\xEE": 'i',
  "\u0129": 'i',
  "\u012B": 'i',
  "\u012D": 'i',
  "\xEF": 'i',
  "\u1E2F": 'i',
  "\u1EC9": 'i',
  "\u01D0": 'i',
  "\u0209": 'i',
  "\u020B": 'i',
  "\u1ECB": 'i',
  "\u012F": 'i',
  "\u1E2D": 'i',
  "\u0268": 'i',
  "\u0131": 'i',
  "\u24D9": 'j',
  "\uFF4A": 'j',
  "\u0135": 'j',
  "\u01F0": 'j',
  "\u0249": 'j',
  "\u24DA": 'k',
  "\uFF4B": 'k',
  "\u1E31": 'k',
  "\u01E9": 'k',
  "\u1E33": 'k',
  "\u0137": 'k',
  "\u1E35": 'k',
  "\u0199": 'k',
  "\u2C6A": 'k',
  "\uA741": 'k',
  "\uA743": 'k',
  "\uA745": 'k',
  "\uA7A3": 'k',
  "\u24DB": 'l',
  "\uFF4C": 'l',
  "\u0140": 'l',
  "\u013A": 'l',
  "\u013E": 'l',
  "\u1E37": 'l',
  "\u1E39": 'l',
  "\u013C": 'l',
  "\u1E3D": 'l',
  "\u1E3B": 'l',
  "\u017F": 'l',
  "\u0142": 'l',
  "\u019A": 'l',
  "\u026B": 'l',
  "\u2C61": 'l',
  "\uA749": 'l',
  "\uA781": 'l',
  "\uA747": 'l',
  "\u01C9": 'lj',
  "\u24DC": 'm',
  "\uFF4D": 'm',
  "\u1E3F": 'm',
  "\u1E41": 'm',
  "\u1E43": 'm',
  "\u0271": 'm',
  "\u026F": 'm',
  "\u24DD": 'n',
  "\uFF4E": 'n',
  "\u01F9": 'n',
  "\u0144": 'n',
  "\xF1": 'n',
  "\u1E45": 'n',
  "\u0148": 'n',
  "\u1E47": 'n',
  "\u0146": 'n',
  "\u1E4B": 'n',
  "\u1E49": 'n',
  "\u019E": 'n',
  "\u0272": 'n',
  "\u0149": 'n',
  "\uA791": 'n',
  "\uA7A5": 'n',
  "\u01CC": 'nj',
  "\u24DE": 'o',
  "\uFF4F": 'o',
  "\xF2": 'o',
  "\xF3": 'o',
  "\xF4": 'o',
  "\u1ED3": 'o',
  "\u1ED1": 'o',
  "\u1ED7": 'o',
  "\u1ED5": 'o',
  "\xF5": 'o',
  "\u1E4D": 'o',
  "\u022D": 'o',
  "\u1E4F": 'o',
  "\u014D": 'o',
  "\u1E51": 'o',
  "\u1E53": 'o',
  "\u014F": 'o',
  "\u022F": 'o',
  "\u0231": 'o',
  "\xF6": 'o',
  "\u022B": 'o',
  "\u1ECF": 'o',
  "\u0151": 'o',
  "\u01D2": 'o',
  "\u020D": 'o',
  "\u020F": 'o',
  "\u01A1": 'o',
  "\u1EDD": 'o',
  "\u1EDB": 'o',
  "\u1EE1": 'o',
  "\u1EDF": 'o',
  "\u1EE3": 'o',
  "\u1ECD": 'o',
  "\u1ED9": 'o',
  "\u01EB": 'o',
  "\u01ED": 'o',
  "\xF8": 'o',
  "\u01FF": 'o',
  "\u0254": 'o',
  "\uA74B": 'o',
  "\uA74D": 'o',
  "\u0275": 'o',
  "\u01A3": 'oi',
  "\u0223": 'ou',
  "\uA74F": 'oo',
  "\u24DF": 'p',
  "\uFF50": 'p',
  "\u1E55": 'p',
  "\u1E57": 'p',
  "\u01A5": 'p',
  "\u1D7D": 'p',
  "\uA751": 'p',
  "\uA753": 'p',
  "\uA755": 'p',
  "\u24E0": 'q',
  "\uFF51": 'q',
  "\u024B": 'q',
  "\uA757": 'q',
  "\uA759": 'q',
  "\u24E1": 'r',
  "\uFF52": 'r',
  "\u0155": 'r',
  "\u1E59": 'r',
  "\u0159": 'r',
  "\u0211": 'r',
  "\u0213": 'r',
  "\u1E5B": 'r',
  "\u1E5D": 'r',
  "\u0157": 'r',
  "\u1E5F": 'r',
  "\u024D": 'r',
  "\u027D": 'r',
  "\uA75B": 'r',
  "\uA7A7": 'r',
  "\uA783": 'r',
  "\u24E2": 's',
  "\uFF53": 's',
  "\xDF": 's',
  "\u015B": 's',
  "\u1E65": 's',
  "\u015D": 's',
  "\u1E61": 's',
  "\u0161": 's',
  "\u1E67": 's',
  "\u1E63": 's',
  "\u1E69": 's',
  "\u0219": 's',
  "\u015F": 's',
  "\u023F": 's',
  "\uA7A9": 's',
  "\uA785": 's',
  "\u1E9B": 's',
  "\u24E3": 't',
  "\uFF54": 't',
  "\u1E6B": 't',
  "\u1E97": 't',
  "\u0165": 't',
  "\u1E6D": 't',
  "\u021B": 't',
  "\u0163": 't',
  "\u1E71": 't',
  "\u1E6F": 't',
  "\u0167": 't',
  "\u01AD": 't',
  "\u0288": 't',
  "\u2C66": 't',
  "\uA787": 't',
  "\uA729": 'tz',
  "\u24E4": 'u',
  "\uFF55": 'u',
  "\xF9": 'u',
  "\xFA": 'u',
  "\xFB": 'u',
  "\u0169": 'u',
  "\u1E79": 'u',
  "\u016B": 'u',
  "\u1E7B": 'u',
  "\u016D": 'u',
  "\xFC": 'u',
  "\u01DC": 'u',
  "\u01D8": 'u',
  "\u01D6": 'u',
  "\u01DA": 'u',
  "\u1EE7": 'u',
  "\u016F": 'u',
  "\u0171": 'u',
  "\u01D4": 'u',
  "\u0215": 'u',
  "\u0217": 'u',
  "\u01B0": 'u',
  "\u1EEB": 'u',
  "\u1EE9": 'u',
  "\u1EEF": 'u',
  "\u1EED": 'u',
  "\u1EF1": 'u',
  "\u1EE5": 'u',
  "\u1E73": 'u',
  "\u0173": 'u',
  "\u1E77": 'u',
  "\u1E75": 'u',
  "\u0289": 'u',
  "\u24E5": 'v',
  "\uFF56": 'v',
  "\u1E7D": 'v',
  "\u1E7F": 'v',
  "\u028B": 'v',
  "\uA75F": 'v',
  "\u028C": 'v',
  "\uA761": 'vy',
  "\u24E6": 'w',
  "\uFF57": 'w',
  "\u1E81": 'w',
  "\u1E83": 'w',
  "\u0175": 'w',
  "\u1E87": 'w',
  "\u1E85": 'w',
  "\u1E98": 'w',
  "\u1E89": 'w',
  "\u2C73": 'w',
  "\u24E7": 'x',
  "\uFF58": 'x',
  "\u1E8B": 'x',
  "\u1E8D": 'x',
  "\u24E8": 'y',
  "\uFF59": 'y',
  "\u1EF3": 'y',
  "\xFD": 'y',
  "\u0177": 'y',
  "\u1EF9": 'y',
  "\u0233": 'y',
  "\u1E8F": 'y',
  "\xFF": 'y',
  "\u1EF7": 'y',
  "\u1E99": 'y',
  "\u1EF5": 'y',
  "\u01B4": 'y',
  "\u024F": 'y',
  "\u1EFF": 'y',
  "\u24E9": 'z',
  "\uFF5A": 'z',
  "\u017A": 'z',
  "\u1E91": 'z',
  "\u017C": 'z',
  "\u017E": 'z',
  "\u1E93": 'z',
  "\u1E95": 'z',
  "\u01B6": 'z',
  "\u0225": 'z',
  "\u0240": 'z',
  "\u2C6C": 'z',
  "\uA763": 'z',
  "\u0386": "\u0391",
  "\u0388": "\u0395",
  "\u0389": "\u0397",
  "\u038A": "\u0399",
  "\u03AA": "\u0399",
  "\u038C": "\u039F",
  "\u038E": "\u03A5",
  "\u03AB": "\u03A5",
  "\u038F": "\u03A9",
  "\u03AC": "\u03B1",
  "\u03AD": "\u03B5",
  "\u03AE": "\u03B7",
  "\u03AF": "\u03B9",
  "\u03CA": "\u03B9",
  "\u0390": "\u03B9",
  "\u03CC": "\u03BF",
  "\u03CD": "\u03C5",
  "\u03CB": "\u03C5",
  "\u03B0": "\u03C5",
  "\u03C9": "\u03C9",
  "\u03C2": "\u03C3"
};
/**
 * @param {?} text
 * @return {?}
 */

function stripSpecialChars(text) {
  /** @type {?} */
  var match =
  /**
  * @param {?} a
  * @return {?}
  */
  function match(a) {
    return diacritics[a] || a;
  };

  return text.replace(/[^\u0000-\u007E]/g, match);
}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/items-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ItemsList = /*#__PURE__*/function () {
  /**
   * @param {?} _ngSelect
   * @param {?} _selectionModel
   */
  function ItemsList(_ngSelect, _selectionModel) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ItemsList);

    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ItemsList, [{
    key: "items",
    get: function get() {
      return this._items;
    }
    /**
     * @return {?}
     */

  }, {
    key: "filteredItems",
    get: function get() {
      return this._filteredItems;
    }
    /**
     * @return {?}
     */

  }, {
    key: "markedIndex",
    get: function get() {
      return this._markedIndex;
    }
    /**
     * @return {?}
     */

  }, {
    key: "selectedItems",
    get: function get() {
      return this._selectionModel.value;
    }
    /**
     * @return {?}
     */

  }, {
    key: "markedItem",
    get: function get() {
      return this._filteredItems[this._markedIndex];
    }
    /**
     * @return {?}
     */

  }, {
    key: "noItemsToSelect",
    get: function get() {
      return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */

  }, {
    key: "maxItemsSelected",
    get: function get() {
      return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    /**
     * @return {?}
     */

  }, {
    key: "lastSelectedItem",
    get: function get() {
      /** @type {?} */
      var i = this.selectedItems.length - 1;

      for (; i >= 0; i--) {
        /** @type {?} */
        var item = this.selectedItems[i];

        if (!item.disabled) {
          return item;
        }
      }

      return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */

  }, {
    key: "setItems",
    value: function setItems(items) {
      var _this = this;

      this._items = items.map(
      /**
      * @param {?} item
      * @param {?} index
      * @return {?}
      */
      function (item, index) {
        return _this.mapItem(item, index);
      });

      if (this._ngSelect.groupBy) {
        this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
        this._items = this._flatten(this._groups);
      } else {
        this._groups = new Map();

        this._groups.set(undefined, this._items);
      }

      this._filteredItems = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._items);
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(item) {
      if (item.selected || this.maxItemsSelected) {
        return;
      }
      /** @type {?} */


      var multiple = this._ngSelect.multiple;

      if (!multiple) {
        this.clearSelected();
      }

      this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

      if (this._ngSelect.hideSelected) {
        this._hideSelected(item);
      }
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "unselect",
    value: function unselect(item) {
      if (!item.selected) {
        return;
      }

      this._selectionModel.unselect(item, this._ngSelect.multiple);

      if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
        this._showSelected(item);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "findItem",
    value: function findItem(value) {
      var _this2 = this;

      /** @type {?} */
      var findBy;

      if (this._ngSelect.compareWith) {
        findBy =
        /**
        * @param {?} item
        * @return {?}
        */
        function findBy(item) {
          return _this2._ngSelect.compareWith(item.value, value);
        };
      } else if (this._ngSelect.bindValue) {
        findBy =
        /**
        * @param {?} item
        * @return {?}
        */
        function findBy(item) {
          return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
        };
      } else {
        findBy =
        /**
        * @param {?} item
        * @return {?}
        */
        function findBy(item) {
          return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
        };
      }

      return this._items.find(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return findBy(item);
      });
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "addItem",
    value: function addItem(item) {
      /** @type {?} */
      var option = this.mapItem(item, this._items.length);

      this._items.push(option);

      this._filteredItems.push(option);

      return option;
    }
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */

  }, {
    key: "clearSelected",
    value: function clearSelected() {
      var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._selectionModel.clear(keepDisabled);

      this._items.forEach(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        item.selected = keepDisabled && item.selected && item.disabled;
        item.marked = false;
      });

      if (this._ngSelect.hideSelected) {
        this.resetFilteredItems();
      }
    }
    /**
     * @param {?} term
     * @return {?}
     */

  }, {
    key: "findByLabel",
    value: function findByLabel(term) {
      term = stripSpecialChars(term).toLocaleLowerCase();
      return this.filteredItems.find(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        /** @type {?} */
        var label = stripSpecialChars(item.label).toLocaleLowerCase();
        return label.substr(0, term.length) === term;
      });
    }
    /**
     * @param {?} term
     * @return {?}
     */

  }, {
    key: "filter",
    value: function filter(term) {
      var _this3 = this;

      if (!term) {
        this.resetFilteredItems();
        return;
      }

      this._filteredItems = [];
      term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
      /** @type {?} */

      var match = this._ngSelect.searchFn || this._defaultSearchFn;
      /** @type {?} */

      var hideSelected = this._ngSelect.hideSelected;

      for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
        var key = _Array$from[_i];

        /** @type {?} */
        var matchedItems = [];

        var _iterator = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(this._groups.get(key)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
              continue;
            }
            /** @type {?} */


            var searchItem = this._ngSelect.searchFn ? item.value : item;

            if (match(term, searchItem)) {
              matchedItems.push(item);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (matchedItems.length > 0) {
          (function () {
            var _this3$_filteredItems;

            var _matchedItems$slice = matchedItems.slice(-1),
                _matchedItems$slice2 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_matchedItems$slice, 1),
                last = _matchedItems$slice2[0];

            if (last.parent) {
              /** @type {?} */
              var head = _this3._items.find(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x === last.parent;
              });

              _this3._filteredItems.push(head);
            }

            (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
          })();
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "resetFilteredItems",
    value: function resetFilteredItems() {
      if (this._filteredItems.length === this._items.length) {
        return;
      }

      if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
        this._filteredItems = this._items.filter(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return !x.selected;
        });
      } else {
        this._filteredItems = this._items;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "unmarkItem",
    value: function unmarkItem() {
      this._markedIndex = -1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "markNextItem",
    value: function markNextItem() {
      this._stepToItem(+1);
    }
    /**
     * @return {?}
     */

  }, {
    key: "markPreviousItem",
    value: function markPreviousItem() {
      this._stepToItem(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "markItem",
    value: function markItem(item) {
      this._markedIndex = this._filteredItems.indexOf(item);
    }
    /**
     * @param {?=} markDefault
     * @return {?}
     */

  }, {
    key: "markSelectedOrDefault",
    value: function markSelectedOrDefault(markDefault) {
      if (this._filteredItems.length === 0) {
        return;
      }
      /** @type {?} */


      var lastMarkedIndex = this._getLastMarkedIndex();

      if (lastMarkedIndex > -1) {
        this._markedIndex = lastMarkedIndex;
      } else {
        this._markedIndex = markDefault ? this.filteredItems.findIndex(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return !x.disabled;
        }) : -1;
      }
    }
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */

  }, {
    key: "resolveNested",
    value: function resolveNested(option, key) {
      if (!isObject(option)) {
        return option;
      }

      if (key.indexOf('.') === -1) {
        return option[key];
      } else {
        /** @type {?} */
        var keys = key.split('.');
        /** @type {?} */

        var value = option;

        for (var i = 0, len = keys.length; i < len; ++i) {
          if (value == null) {
            return null;
          }

          value = value[keys[i]];
        }

        return value;
      }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "mapItem",
    value: function mapItem(item, index) {
      /** @type {?} */
      var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
      /** @type {?} */

      var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
      return {
        index: index,
        label: isDefined(label) ? label.toString() : '',
        value: value,
        disabled: item.disabled,
        htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "mapSelectedItems",
    value: function mapSelectedItems() {
      var _this4 = this;

      /** @type {?} */
      var multiple = this._ngSelect.multiple;

      var _iterator2 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(this.selectedItems),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var selected = _step2.value;

          /** @type {?} */
          var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
          /** @type {?} */

          var item = isDefined(value) ? this.findItem(value) : null;

          this._selectionModel.unselect(selected, multiple);

          this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this._ngSelect.hideSelected) {
        this._filteredItems = this.filteredItems.filter(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return _this4.selectedItems.indexOf(x) === -1;
        });
      }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_showSelected",
    value: function _showSelected(item) {
      this._filteredItems.push(item);

      if (item.parent) {
        /** @type {?} */
        var parent = item.parent;
        /** @type {?} */

        var parentExists = this._filteredItems.find(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === parent;
        });

        if (!parentExists) {
          this._filteredItems.push(parent);
        }
      } else if (item.children) {
        var _iterator3 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(item.children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;
            child.selected = false;

            this._filteredItems.push(child);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      this._filteredItems = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._filteredItems.sort(
      /**
      * @param {?} a
      * @param {?} b
      * @return {?}
      */
      function (a, b) {
        return a.index - b.index;
      }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_hideSelected",
    value: function _hideSelected(item) {
      this._filteredItems = this._filteredItems.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x !== item;
      });

      if (item.parent) {
        /** @type {?} */
        var children = item.parent.children;

        if (children.every(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x.selected;
        })) {
          this._filteredItems = this._filteredItems.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item.parent;
          });
        }
      } else if (item.children) {
        this._filteredItems = this.filteredItems.filter(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x.parent !== item;
        });
      }
    }
    /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */

  }, {
    key: "_defaultSearchFn",
    value: function _defaultSearchFn(search, opt) {
      /** @type {?} */
      var label = stripSpecialChars(opt.label).toLocaleLowerCase();
      return label.indexOf(search) > -1;
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */

  }, {
    key: "_getNextItemIndex",
    value: function _getNextItemIndex(steps) {
      if (steps > 0) {
        return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
      }

      return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */

  }, {
    key: "_stepToItem",
    value: function _stepToItem(steps) {
      if (this._filteredItems.length === 0 || this._filteredItems.every(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.disabled;
      })) {
        return;
      }

      this._markedIndex = this._getNextItemIndex(steps);

      if (this.markedItem.disabled) {
        this._stepToItem(steps);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_getLastMarkedIndex",
    value: function _getLastMarkedIndex() {
      if (this._ngSelect.hideSelected) {
        return -1;
      }

      if (this._markedIndex > -1 && this.markedItem === undefined) {
        return -1;
      }
      /** @type {?} */


      var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

      if (this.lastSelectedItem && selectedIndex < 0) {
        return -1;
      }

      return Math.max(this.markedIndex, selectedIndex);
    }
    /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */

  }, {
    key: "_groupBy",
    value: function _groupBy(items, prop) {
      var _this5 = this;

      /** @type {?} */
      var groups = new Map();

      if (items.length === 0) {
        return groups;
      } // Check if items are already grouped by given key.


      if (Array.isArray(items[0].value[
      /** @type {?} */
      prop])) {
        var _iterator4 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(items),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var item = _step4.value;

            /** @type {?} */
            var children = (item.value[
            /** @type {?} */
            prop] || []).map(
            /**
            * @param {?} x
            * @param {?} index
            * @return {?}
            */
            function (x, index) {
              return _this5.mapItem(x, index);
            });
            groups.set(item, children);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return groups;
      }
      /** @type {?} */


      var isFnKey = isFunction(this._ngSelect.groupBy);
      /** @type {?} */

      var keyFn =
      /**
      * @param {?} item
      * @return {?}
      */
      function keyFn(item) {
        /** @type {?} */
        var key = isFnKey ?
        /** @type {?} */
        prop(item.value) : item.value[
        /** @type {?} */
        prop];
        return isDefined(key) ? key : undefined;
      }; // Group items by key.


      var _iterator5 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(items),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _item = _step5.value;

          /** @type {?} */
          var key = keyFn(_item);
          /** @type {?} */

          var group = groups.get(key);

          if (group) {
            group.push(_item);
          } else {
            groups.set(key, [_item]);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return groups;
    }
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */

  }, {
    key: "_flatten",
    value: function _flatten(groups) {
      var _this6 = this;

      /** @type {?} */
      var isGroupByFn = isFunction(this._ngSelect.groupBy);
      /** @type {?} */

      var items = [];

      var _loop = function _loop() {
        var key = _Array$from2[_i2];

        /** @type {?} */
        var i = items.length;

        if (key === undefined) {
          /** @type {?} */
          var withoutGroup = groups.get(undefined) || [];
          items.push.apply(items, Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(withoutGroup.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            x.index = i++;
            return x;
          })));
          return "continue";
        }
        /** @type {?} */


        var isObjectKey = isObject(key);
        /** @type {?} */

        var parent = {
          label: isObjectKey ? '' : String(key),
          children: undefined,
          parent: null,
          index: i++,
          disabled: !_this6._ngSelect.selectableGroup,
          htmlId: newId()
        };
        /** @type {?} */

        var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel :
        /** @type {?} */
        _this6._ngSelect.groupBy;
        /** @type {?} */

        var groupValue = _this6._ngSelect.groupValue ||
        /**
        * @return {?}
        */
        function () {
          if (isObjectKey) {
            return (
              /** @type {?} */
              key.value
            );
          }

          return Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, groupKey, key);
        };
        /** @type {?} */


        var children = groups.get(key).map(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          x.parent = parent;
          x.children = undefined;
          x.index = i++;
          return x;
        });
        parent.children = children;
        parent.value = groupValue(key, children.map(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x.value;
        }));
        items.push(parent);
        items.push.apply(items, Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children));
      };

      for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }

      return items;
    }
  }]);

  return ItemsList;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function NgOption() {}

if (false) {}
/** @enum {number} */


var KeyCode = {
  Tab: 9,
  Enter: 13,
  Esc: 27,
  Space: 32,
  ArrowUp: 38,
  ArrowDown: 40,
  Backspace: 8
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */

function ItemsRangeResult() {}

if (false) {}
/**
 * @record
 */


function PanelDimensions() {}

if (false) {}

var NgDropdownPanelService = /*#__PURE__*/function () {
  function NgDropdownPanelService() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgDropdownPanelService);

    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgDropdownPanelService, [{
    key: "dimensions",
    get: function get() {
      return this._dimensions;
    }
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */

  }, {
    key: "calculateItems",
    value: function calculateItems(scrollPos, itemsLength, buffer) {
      /** @type {?} */
      var d = this._dimensions;
      /** @type {?} */

      var scrollHeight = d.itemHeight * itemsLength;
      /** @type {?} */

      var scrollTop = Math.max(0, scrollPos);
      /** @type {?} */

      var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
      /** @type {?} */

      var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
      /** @type {?} */

      var maxStartEnd = end;
      /** @type {?} */

      var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
      /** @type {?} */

      var start = Math.min(maxStart, Math.floor(indexByScrollTop));
      /** @type {?} */

      var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
      topPadding = !isNaN(topPadding) ? topPadding : 0;
      start = !isNaN(start) ? start : -1;
      end = !isNaN(end) ? end : -1;
      start -= buffer;
      start = Math.max(0, start);
      end += buffer;
      end = Math.min(itemsLength, end);
      return {
        topPadding: topPadding,
        scrollHeight: scrollHeight,
        start: start,
        end: end
      };
    }
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */

  }, {
    key: "setDimensions",
    value: function setDimensions(itemHeight, panelHeight) {
      /** @type {?} */
      var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
      this._dimensions = {
        itemHeight: itemHeight,
        panelHeight: panelHeight,
        itemsPerViewport: itemsPerViewport
      };
    }
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */

  }, {
    key: "getScrollTo",
    value: function getScrollTo(itemTop, itemHeight, lastScroll) {
      var panelHeight = this.dimensions.panelHeight;
      /** @type {?} */

      var itemBottom = itemTop + itemHeight;
      /** @type {?} */

      var top = lastScroll;
      /** @type {?} */

      var bottom = top + panelHeight;

      if (panelHeight >= itemBottom && lastScroll === itemTop) {
        return null;
      }

      if (itemBottom > bottom) {
        return top + itemBottom - bottom;
      } else if (itemTop <= top) {
        return itemTop;
      }

      return null;
    }
  }]);

  return NgDropdownPanelService;
}();

NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
  return new (t || NgDropdownPanelService)();
};

NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgDropdownPanelService,
  factory: NgDropdownPanelService.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */

var BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */

var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_9__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_9__["asapScheduler"];

var NgDropdownPanelComponent = /*#__PURE__*/function () {
  /**
   * @param {?} _renderer
   * @param {?} _zone
   * @param {?} _panelService
   * @param {?} _elementRef
   * @param {?} _document
   */
  function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgDropdownPanelComponent);

    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgDropdownPanelComponent, [{
    key: "currentPosition",
    get: function get() {
      return this._currentPosition;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "itemsLength",
    get: function get() {
      return this._itemsLength;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (value !== this._itemsLength) {
        this._itemsLength = value;

        this._onItemsLengthChanged();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_startOffset",
    get: function get() {
      if (this.markedItem) {
        var _this$_panelService$d = this._panelService.dimensions,
            itemHeight = _this$_panelService$d.itemHeight,
            panelHeight = _this$_panelService$d.panelHeight;
        /** @type {?} */

        var offset = this.markedItem.index * itemHeight;
        return panelHeight > offset ? 0 : offset;
      }

      return 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "handleMousedown",
    value: function handleMousedown($event) {
      /** @type {?} */
      var target =
      /** @type {?} */
      $event.target;

      if (target.tagName === 'INPUT') {
        return;
      }

      $event.preventDefault();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._select = this._dropdown.parentElement;
      this._virtualPadding = this.paddingElementRef.nativeElement;
      this._scrollablePanel = this.scrollElementRef.nativeElement;
      this._contentPanel = this.contentElementRef.nativeElement;

      this._handleScroll();

      this._handleOutsideClick();

      this._appendDropdown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.items) {
        /** @type {?} */
        var change = changes.items;

        this._onItemsChange(change.currentValue, change.firstChange);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy$.next();

      this._destroy$.complete();

      this._destroy$.unsubscribe();

      if (this.appendTo) {
        this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
      }
    }
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(option) {
      var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!option) {
        return;
      }
      /** @type {?} */


      var index = this.items.indexOf(option);

      if (index < 0 || index >= this.itemsLength) {
        return;
      }
      /** @type {?} */


      var scrollTo;

      if (this.virtualScroll) {
        /** @type {?} */
        var itemHeight = this._panelService.dimensions.itemHeight;
        scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
      } else {
        /** @type {?} */
        var item = this._dropdown.querySelector("#".concat(option.htmlId));
        /** @type {?} */


        var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
        scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
      }

      if (isDefined(scrollTo)) {
        this._scrollablePanel.scrollTop = scrollTo;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "scrollToTag",
    value: function scrollToTag() {
      /** @type {?} */
      var panel = this._scrollablePanel;
      panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    /**
     * @return {?}
     */

  }, {
    key: "adjustPosition",
    value: function adjustPosition() {
      this._updateYPosition();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_handleDropdownPosition",
    value: function _handleDropdownPosition() {
      this._currentPosition = this._calculateCurrentPosition(this._dropdown);

      if (this._currentPosition === 'top') {
        this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

        this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

        this._renderer.addClass(this._select, TOP_CSS_CLASS);

        this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
      } else {
        this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

        this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

        this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

        this._renderer.removeClass(this._select, TOP_CSS_CLASS);
      }

      if (this.appendTo) {
        this._updateYPosition();
      }

      this._dropdown.style.opacity = '1';
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_handleScroll",
    value: function _handleScroll() {
      var _this7 = this;

      this._zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this7.scrollElementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this7._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
        /**
        * @param {?} e
        * @return {?}
        */
        function (e) {
          /** @type {?} */
          var path = e.path || e.composedPath && e.composedPath();
          /** @type {?} */

          var scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;

          _this7._onContentScrolled(scrollTop);
        });
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_handleOutsideClick",
    value: function _handleOutsideClick() {
      var _this8 = this;

      if (!this._document) {
        return;
      }

      this._zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this8._document, 'touchstart', {
          capture: true
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this8._document, 'mousedown', {
          capture: true
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this8._destroy$)).subscribe(
        /**
        * @param {?} $event
        * @return {?}
        */
        function ($event) {
          return _this8._checkToClose($event);
        });
      });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_checkToClose",
    value: function _checkToClose($event) {
      var _this9 = this;

      if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
        return;
      }
      /** @type {?} */


      var path = $event.path || $event.composedPath && $event.composedPath();

      if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
        return;
      }

      this._zone.run(
      /**
      * @return {?}
      */
      function () {
        return _this9.outsideClick.emit();
      });
    }
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */

  }, {
    key: "_onItemsChange",
    value: function _onItemsChange(items, firstChange) {
      this.items = items || [];
      this._scrollToEndFired = false;
      this.itemsLength = items.length;

      if (this.virtualScroll) {
        this._updateItemsRange(firstChange);
      } else {
        this._setVirtualHeight();

        this._updateItems(firstChange);
      }
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */

  }, {
    key: "_updateItems",
    value: function _updateItems(firstChange) {
      var _this10 = this;

      this.update.emit(this.items);

      if (firstChange === false) {
        return;
      }

      this._zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        Promise.resolve().then(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var panelHeight = _this10._scrollablePanel.clientHeight;

          _this10._panelService.setDimensions(0, panelHeight);

          _this10._handleDropdownPosition();

          _this10.scrollTo(_this10.markedItem, firstChange);
        });
      });
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */

  }, {
    key: "_updateItemsRange",
    value: function _updateItemsRange(firstChange) {
      var _this11 = this;

      this._zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this11._measureDimensions().then(
        /**
        * @return {?}
        */
        function () {
          if (firstChange) {
            _this11._renderItemsRange(_this11._startOffset);

            _this11._handleDropdownPosition();
          } else {
            _this11._renderItemsRange();
          }
        });
      });
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */

  }, {
    key: "_onContentScrolled",
    value: function _onContentScrolled(scrollTop) {
      if (this.virtualScroll) {
        this._renderItemsRange(scrollTop);
      }

      this._lastScrollPosition = scrollTop;

      this._fireScrollToEnd(scrollTop);
    }
    /**
     * @private
     * @param {?} height
     * @return {?}
     */

  }, {
    key: "_updateVirtualHeight",
    value: function _updateVirtualHeight(height) {
      if (this._updateScrollHeight) {
        this._virtualPadding.style.height = "".concat(height, "px");
        this._updateScrollHeight = false;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_setVirtualHeight",
    value: function _setVirtualHeight() {
      if (!this._virtualPadding) {
        return;
      }

      this._virtualPadding.style.height = "0px";
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_onItemsLengthChanged",
    value: function _onItemsLengthChanged() {
      this._updateScrollHeight = true;
    }
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */

  }, {
    key: "_renderItemsRange",
    value: function _renderItemsRange() {
      var _this12 = this;

      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (scrollTop && this._lastScrollPosition === scrollTop) {
        return;
      }

      scrollTop = scrollTop || this._scrollablePanel.scrollTop;
      /** @type {?} */

      var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

      this._updateVirtualHeight(range.scrollHeight);

      this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

      this._zone.run(
      /**
      * @return {?}
      */
      function () {
        _this12.update.emit(_this12.items.slice(range.start, range.end));

        _this12.scroll.emit({
          start: range.start,
          end: range.end
        });
      });

      if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
        this._scrollablePanel.scrollTop = scrollTop;
        this._lastScrollPosition = scrollTop;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_measureDimensions",
    value: function _measureDimensions() {
      var _this13 = this;

      if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
        return Promise.resolve(this._panelService.dimensions);
      }

      var _this$items = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.items, 1),
          first = _this$items[0];

      this.update.emit([first]);
      return Promise.resolve().then(
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var option = _this13._dropdown.querySelector("#".concat(first.htmlId));
        /** @type {?} */


        var optionHeight = option.clientHeight;
        _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
        /** @type {?} */

        var panelHeight = _this13._scrollablePanel.clientHeight;

        _this13._panelService.setDimensions(optionHeight, panelHeight);

        return _this13._panelService.dimensions;
      });
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */

  }, {
    key: "_fireScrollToEnd",
    value: function _fireScrollToEnd(scrollTop) {
      var _this14 = this;

      if (this._scrollToEndFired || scrollTop === 0) {
        return;
      }
      /** @type {?} */


      var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

      if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
        this._zone.run(
        /**
        * @return {?}
        */
        function () {
          return _this14.scrollToEnd.emit();
        });

        this._scrollToEndFired = true;
      }
    }
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */

  }, {
    key: "_calculateCurrentPosition",
    value: function _calculateCurrentPosition(dropdownEl) {
      if (this.position !== 'auto') {
        return this.position;
      }
      /** @type {?} */


      var selectRect = this._select.getBoundingClientRect();
      /** @type {?} */


      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      /** @type {?} */

      var offsetTop = selectRect.top + window.pageYOffset;
      /** @type {?} */

      var height = selectRect.height;
      /** @type {?} */

      var dropdownHeight = dropdownEl.getBoundingClientRect().height;

      if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
        return 'top';
      } else {
        return 'bottom';
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_appendDropdown",
    value: function _appendDropdown() {
      if (!this.appendTo) {
        return;
      }

      this._parent = document.querySelector(this.appendTo);

      if (!this._parent) {
        throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
      }

      this._updateXPosition();

      this._parent.appendChild(this._dropdown);
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_updateXPosition",
    value: function _updateXPosition() {
      /** @type {?} */
      var select = this._select.getBoundingClientRect();
      /** @type {?} */


      var parent = this._parent.getBoundingClientRect();
      /** @type {?} */


      var offsetLeft = select.left - parent.left;
      this._dropdown.style.left = offsetLeft + 'px';
      this._dropdown.style.width = select.width + 'px';
      this._dropdown.style.minWidth = select.width + 'px';
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_updateYPosition",
    value: function _updateYPosition() {
      /** @type {?} */
      var select = this._select.getBoundingClientRect();
      /** @type {?} */


      var parent = this._parent.getBoundingClientRect();
      /** @type {?} */


      var delta = select.height;

      if (this._currentPosition === 'top') {
        /** @type {?} */
        var offsetBottom = parent.bottom - select.bottom;
        this._dropdown.style.bottom = offsetBottom + delta + 'px';
        this._dropdown.style.top = 'auto';
      } else if (this._currentPosition === 'bottom') {
        /** @type {?} */
        var offsetTop = select.top - parent.top;
        this._dropdown.style.top = offsetTop + delta + 'px';
        this._dropdown.style.bottom = 'auto';
      }
    }
  }]);

  return NgDropdownPanelComponent;
}();

NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
  return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], 8));
};

NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    }
  },
  hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) {
        return ctx.handleMousedown($event);
      });
    }
  },
  inputs: {
    items: "items",
    position: "position",
    virtualScroll: "virtualScroll",
    filterValue: "filterValue",
    markedItem: "markedItem",
    appendTo: "appendTo",
    bufferAmount: "bufferAmount",
    headerTemplate: "headerTemplate",
    footerTemplate: "footerTemplate"
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 6,
  consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgDropdownPanelComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: NgDropdownPanelService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }];
};

NgDropdownPanelComponent.propDecorators = {
  items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  markedItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  bufferAmount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  headerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  filterValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  scrollToEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  outsideClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
  }],
  contentElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['content', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
      static: true
    }]
  }],
  scrollElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['scroll', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
      static: true
    }]
  }],
  paddingElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['padding', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
      static: true
    }]
  }],
  handleMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
    args: ['mousedown', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      selector: 'ng-dropdown-panel',
      template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: NgDropdownPanelService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
    }],

    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
      args: ['mousedown', ['$event']]
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"],
        static: true
      }]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var NgOptionComponent = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   */
  function NgOptionComponent(elementRef) {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptionComponent);

    this.elementRef = elementRef;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    this._disabled = false;
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgOptionComponent, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._disabled = this._isDisabled(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "label",
    get: function get() {
      return (this.elementRef.nativeElement.textContent || '').trim();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.disabled) {
        this.stateChange$.next({
          value: this.value,
          disabled: this._disabled
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.label !== this._previousLabel) {
        this._previousLabel = this.label;
        this.stateChange$.next({
          value: this.value,
          disabled: this._disabled,
          label: this.elementRef.nativeElement.innerHTML
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChange$.complete();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_isDisabled",
    value: function _isDisabled(value) {
      return value != null && "".concat(value) !== 'false';
    }
  }]);

  return NgOptionComponent;
}();

NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
  return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]));
};

NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    disabled: "disabled",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgOptionComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }];
};

NgOptionComponent.propDecorators = {
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'ng-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      template: "<ng-content></ng-content>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var NgSelectConfig = function NgSelectConfig() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectConfig);

  this.notFoundText = 'No items found';
  this.typeToSearchText = 'Type to search';
  this.addTagText = 'Add item';
  this.loadingText = 'Loading...';
  this.clearAllText = 'Clear all';
  this.disableVirtualScroll = true;
  this.openOnEnter = true;
  this.appearance = 'underline';
};

NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
  return new (t || NgSelectConfig)();
};
/** @nocollapse */


NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function NgSelectConfig_Factory() {
    return new NgSelectConfig();
  },
  token: NgSelectConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('ng-select-selection-model');

var NgSelectComponent = /*#__PURE__*/function () {
  /**
   * @param {?} classes
   * @param {?} autoFocus
   * @param {?} config
   * @param {?} newSelectionModel
   * @param {?} _elementRef
   * @param {?} _cd
   * @param {?} _console
   */
  function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    var _this15 = this;

    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectComponent);

    this.classes = classes;
    this.autoFocus = autoFocus;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;

    this.keyDownFn =
    /**
    * @param {?} _
    * @return {?}
    */
    function (_) {
      return true;
    };

    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false; // output events

    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this.useDefaultClass = true;
    this._items = [];
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

    this._onChange =
    /**
    * @param {?} _
    * @return {?}
    */
    function (_) {};

    this._onTouched =
    /**
    * @return {?}
    */
    function () {};

    this.clearItem =
    /**
    * @param {?} item
    * @return {?}
    */
    function (item) {
      /** @type {?} */
      var option = _this15.selectedItems.find(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.value === item;
      });

      _this15.unselect(option);
    };

    this.trackByOption =
    /**
    * @param {?} _
    * @param {?} item
    * @return {?}
    */
    function (_, item) {
      if (_this15.trackByFn) {
        return _this15.trackByFn(item.value);
      }

      return item;
    };

    this._mergeGlobalConfig(config);

    this.itemsList = new ItemsList(this, newSelectionModel());
    this.element = _elementRef.nativeElement;
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgSelectComponent, [{
    key: "items",
    get: function get() {
      return this._items;
    },
    set:
    /**
     * @param {?} value
     * @return {?}
     */
    function set(value) {
      this._itemsAreUsed = true;
      this._items = value;
    }
  }, {
    key: "compareWith",
    get:
    /**
     * @return {?}
     */
    function get() {
      return this._compareWith;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    ,
    set: function set(fn) {
      if (!isFunction(fn)) {
        throw Error('`compareWith` must be a function.');
      }

      this._compareWith = fn;
    }
    /**
     * @return {?}
     */

  }, {
    key: "clearSearchOnAdd",
    get: function get() {
      return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
    },
    set:
    /**
     * @param {?} value
     * @return {?}
     */
    function set(value) {
      this._clearSearchOnAdd = value;
    }
  }, {
    key: "disabled",
    get:
    /**
     * @return {?}
     */
    function get() {
      return this.readonly || this._disabled;
    }
  }, {
    key: "filtered",
    get:
    /**
     * @return {?}
     */
    function get() {
      return !!this.searchTerm && this.searchable || this._isComposing;
    }
  }, {
    key: "_editableSearchTerm",
    get:
    /**
     * @private
     * @return {?}
     */
    function get() {
      return this.editableSearchTerm && !this.multiple;
    }
    /**
     * @return {?}
     */

  }, {
    key: "selectedItems",
    get: function get() {
      return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */

  }, {
    key: "selectedValues",
    get: function get() {
      return this.selectedItems.map(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.value;
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "hasValue",
    get: function get() {
      return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */

  }, {
    key: "currentPanelPosition",
    get: function get() {
      if (this.dropdownPanel) {
        return this.dropdownPanel.currentPosition;
      }

      return undefined;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._handleKeyPresses();

      this._setInputAttributes();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.multiple) {
        this.itemsList.clearSelected();
      }

      if (changes.items) {
        this._setItems(changes.items.currentValue || []);
      }

      if (changes.isOpen) {
        this._manualOpen = isDefined(changes.isOpen.currentValue);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (!this._itemsAreUsed) {
        this.escapeHTML = false;

        this._setItemsFromNgOptions();
      }

      if (isDefined(this.autoFocus)) {
        this.focus();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy$.next();

      this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown($event) {
      /** @type {?} */
      var keyCode = KeyCode[$event.which];

      if (keyCode) {
        if (this.keyDownFn($event) === false) {
          return;
        }

        this.handleKeyCode($event);
      } else if ($event.key && $event.key.length === 1) {
        this._keyPress$.next($event.key.toLocaleLowerCase());
      }
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "handleKeyCode",
    value: function handleKeyCode($event) {
      switch ($event.which) {
        case KeyCode.ArrowDown:
          this._handleArrowDown($event);

          break;

        case KeyCode.ArrowUp:
          this._handleArrowUp($event);

          break;

        case KeyCode.Space:
          this._handleSpace($event);

          break;

        case KeyCode.Enter:
          this._handleEnter($event);

          break;

        case KeyCode.Tab:
          this._handleTab($event);

          break;

        case KeyCode.Esc:
          this.close();
          $event.preventDefault();
          break;

        case KeyCode.Backspace:
          this._handleBackspace();

          break;
      }
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "handleMousedown",
    value: function handleMousedown($event) {
      /** @type {?} */
      var target =
      /** @type {?} */
      $event.target;

      if (target.tagName !== 'INPUT') {
        $event.preventDefault();
      }

      if (target.classList.contains('ng-clear-wrapper')) {
        this.handleClearClick();
        return;
      }

      if (target.classList.contains('ng-arrow-wrapper')) {
        this.handleArrowClick();
        return;
      }

      if (target.classList.contains('ng-value-icon')) {
        return;
      }

      if (!this.focused) {
        this.focus();
      }

      if (this.searchable) {
        this.open();
      } else {
        this.toggle();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleArrowClick",
    value: function handleArrowClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleClearClick",
    value: function handleClearClick() {
      if (this.hasValue) {
        this.itemsList.clearSelected(true);

        this._updateNgModel();
      }

      this._clearSearch();

      this.focus();
      this.clearEvent.emit();

      this._onSelectionChanged();
    }
    /**
     * @return {?}
     */

  }, {
    key: "clearModel",
    value: function clearModel() {
      if (!this.clearable) {
        return;
      }

      this.itemsList.clearSelected();

      this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.itemsList.clearSelected();

      this._handleWriteValue(value);

      this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(state) {
      this._disabled = state;

      this._cd.markForCheck();
    }
    /**
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "open",
    value: function open() {
      if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
        return;
      }

      if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
        return;
      }

      this.isOpen = true;
      this.itemsList.markSelectedOrDefault(this.markFirst);
      this.openEvent.emit();

      if (!this.searchTerm) {
        this.focus();
      }

      this.detectChanges();
    }
    /**
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen || this._manualOpen) {
        return;
      }

      this.isOpen = false;
      this._isComposing = false;

      if (!this._editableSearchTerm) {
        this._clearSearch();
      } else {
        this.itemsList.resetFilteredItems();
      }

      this.itemsList.unmarkItem();

      this._onTouched();

      this.closeEvent.emit();

      this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "toggleItem",
    value: function toggleItem(item) {
      if (!item || item.disabled || this.disabled) {
        return;
      }

      if (this.multiple && item.selected) {
        this.unselect(item);
      } else {
        this.select(item);
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this._onSelectionChanged();
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(item) {
      if (!item.selected) {
        this.itemsList.select(item);

        if (this.clearSearchOnAdd && !this._editableSearchTerm) {
          this._clearSearch();
        }

        this._updateNgModel();

        if (this.multiple) {
          this.addEvent.emit(item.value);
        }
      }

      if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
        this.close();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "focus",
    value: function focus() {
      this.searchInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */

  }, {
    key: "blur",
    value: function blur() {
      this.searchInput.nativeElement.blur();
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "unselect",
    value: function unselect(item) {
      if (!item) {
        return;
      }

      this.itemsList.unselect(item);
      this.focus();

      this._updateNgModel();

      this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */

  }, {
    key: "selectTag",
    value: function selectTag() {
      var _this16 = this;

      /** @type {?} */
      var tag;

      if (isFunction(this.addTag)) {
        tag =
        /** @type {?} */
        this.addTag(this.searchTerm);
      } else {
        tag = this._primitive ? this.searchTerm : Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.bindLabel, this.searchTerm);
      }
      /** @type {?} */


      var handleTag =
      /**
      * @param {?} item
      * @return {?}
      */
      function handleTag(item) {
        return _this16._isTypeahead || !_this16.isOpen ? _this16.itemsList.mapItem(item, null) : _this16.itemsList.addItem(item);
      };

      if (isPromise(tag)) {
        tag.then(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return _this16.select(handleTag(item));
        }).catch(
        /**
        * @return {?}
        */
        function () {});
      } else if (tag) {
        this.select(handleTag(tag));
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "showClear",
    value: function showClear() {
      return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    /**
     * @return {?}
     */

  }, {
    key: "showAddTag",
    get: function get() {
      if (!this._validTerm) {
        return false;
      }
      /** @type {?} */


      var term = this.searchTerm.toLowerCase().trim();
      return this.addTag && !this.itemsList.filteredItems.some(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.label.toLowerCase() === term;
      }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.label.toLowerCase() === term;
      })) && !this.loading;
    }
    /**
     * @return {?}
     */

  }, {
    key: "showNoItemsFound",
    value: function showNoItemsFound() {
      /** @type {?} */
      var empty = this.itemsList.filteredItems.length === 0;
      return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
    }
    /**
     * @return {?}
     */

  }, {
    key: "showTypeToSearch",
    value: function showTypeToSearch() {
      /** @type {?} */
      var empty = this.itemsList.filteredItems.length === 0;
      return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onCompositionStart",
    value: function onCompositionStart() {
      this._isComposing = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */

  }, {
    key: "onCompositionEnd",
    value: function onCompositionEnd(term) {
      this._isComposing = false;

      if (this.searchWhileComposing) {
        return;
      }

      this.filter(term);
    }
    /**
     * @param {?} term
     * @return {?}
     */

  }, {
    key: "filter",
    value: function filter(term) {
      if (this._isComposing && !this.searchWhileComposing) {
        return;
      }

      this.searchTerm = term;

      if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
        this.typeahead.next(term);
      }

      if (!this._isTypeahead) {
        this.itemsList.filter(this.searchTerm);

        if (this.isOpen) {
          this.itemsList.markSelectedOrDefault(this.markFirst);
        }
      }

      this.searchEvent.emit({
        term: term,
        items: this.itemsList.filteredItems.map(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x.value;
        })
      });
      this.open();
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "onInputFocus",
    value: function onInputFocus($event) {
      if (this.focused) {
        return;
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this.element.classList.add('ng-select-focused');
      this.focusEvent.emit($event);
      this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "onInputBlur",
    value: function onInputBlur($event) {
      this.element.classList.remove('ng-select-focused');
      this.blurEvent.emit($event);

      if (!this.isOpen && !this.disabled) {
        this._onTouched();
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "onItemHover",
    value: function onItemHover(item) {
      if (item.disabled) {
        return;
      }

      this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */

  }, {
    key: "detectChanges",
    value: function detectChanges() {
      if (!
      /** @type {?} */
      this._cd.destroyed) {
        this._cd.detectChanges();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_setSearchTermFromItems",
    value: function _setSearchTermFromItems() {
      /** @type {?} */
      var selected = this.selectedItems && this.selectedItems[0];
      this.searchTerm = selected && selected.label || null;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */

  }, {
    key: "_setItems",
    value: function _setItems(items) {
      /** @type {?} */
      var firstItem = items[0];
      this.bindLabel = this.bindLabel || this._defaultLabel;
      this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
      this.itemsList.setItems(items);

      if (items.length > 0 && this.hasValue) {
        this.itemsList.mapSelectedItems();
      }

      if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
        this.itemsList.filter(this.searchTerm);
      }

      if (this._isTypeahead || this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_setItemsFromNgOptions",
    value: function _setItemsFromNgOptions() {
      var _this17 = this;

      /** @type {?} */
      var mapNgOptions =
      /**
      * @param {?} options
      * @return {?}
      */
      function mapNgOptions(options) {
        _this17.items = options.map(
        /**
        * @param {?} option
        * @return {?}
        */
        function (option) {
          return {
            $ngOptionValue: option.value,
            $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
            disabled: option.disabled
          };
        });

        _this17.itemsList.setItems(_this17.items);

        if (_this17.hasValue) {
          _this17.itemsList.mapSelectedItems();
        }

        _this17.detectChanges();
      };
      /** @type {?} */


      var handleOptionChange =
      /**
      * @return {?}
      */
      function handleOptionChange() {
        /** @type {?} */
        var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_this17.ngOptions.changes, _this17._destroy$);
        rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"].apply(void 0, Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_this17.ngOptions.map(
        /**
        * @param {?} option
        * @return {?}
        */
        function (option) {
          return option.stateChange$;
        }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(changedOrDestroyed)).subscribe(
        /**
        * @param {?} option
        * @return {?}
        */
        function (option) {
          /** @type {?} */
          var item = _this17.itemsList.findItem(option.value);

          item.disabled = option.disabled;
          item.label = option.label || item.label;

          _this17._cd.detectChanges();
        });
      };

      this.ngOptions.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$)).subscribe(
      /**
      * @param {?} options
      * @return {?}
      */
      function (options) {
        _this17.bindLabel = _this17._defaultLabel;
        mapNgOptions(options);
        handleOptionChange();
      });
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_isValidWriteValue",
    value: function _isValidWriteValue(value) {
      var _this18 = this;

      if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
        return false;
      }
      /** @type {?} */


      var validateBinding =
      /**
      * @param {?} item
      * @return {?}
      */
      function validateBinding(item) {
        if (!isDefined(_this18.compareWith) && isObject(item) && _this18.bindValue) {
          _this18._console.warn("Setting object(".concat(JSON.stringify(item), ") as your model with bindValue is not allowed unless [compareWith] is used."));

          return false;
        }

        return true;
      };

      if (this.multiple) {
        if (!Array.isArray(value)) {
          this._console.warn('Multiple select ngModel should be array.');

          return false;
        }

        return value.every(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return validateBinding(item);
        });
      } else {
        return validateBinding(value);
      }
    }
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */

  }, {
    key: "_handleWriteValue",
    value: function _handleWriteValue(ngModel) {
      var _this19 = this;

      if (!this._isValidWriteValue(ngModel)) {
        return;
      }
      /** @type {?} */


      var select =
      /**
      * @param {?} val
      * @return {?}
      */
      function select(val) {
        /** @type {?} */
        var item = _this19.itemsList.findItem(val);

        if (item) {
          _this19.itemsList.select(item);
        } else {
          /** @type {?} */
          var isValObject = isObject(val);
          /** @type {?} */

          var isPrimitive = !isValObject && !_this19.bindValue;

          if (isValObject || isPrimitive) {
            _this19.itemsList.select(_this19.itemsList.mapItem(val, null));
          } else if (_this19.bindValue) {
            var _item2;

            item = (_item2 = {}, Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item2, _this19.bindLabel, null), Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item2, _this19.bindValue, val), _item2);

            _this19.itemsList.select(_this19.itemsList.mapItem(item, null));
          }
        }
      };

      if (this.multiple) {
        /** @type {?} */
        ngModel.forEach(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return select(item);
        });
      } else {
        select(ngModel);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_handleKeyPresses",
    value: function _handleKeyPresses() {
      var _this20 = this;

      if (this.searchable) {
        return;
      }

      this._keyPress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(
      /**
      * @param {?} letter
      * @return {?}
      */
      function (letter) {
        return _this20._pressedKeys.push(letter);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
      /**
      * @return {?}
      */
      function () {
        return _this20._pressedKeys.length > 0;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(
      /**
      * @return {?}
      */
      function () {
        return _this20._pressedKeys.join('');
      })).subscribe(
      /**
      * @param {?} term
      * @return {?}
      */
      function (term) {
        /** @type {?} */
        var item = _this20.itemsList.findByLabel(term);

        if (item) {
          if (_this20.isOpen) {
            _this20.itemsList.markItem(item);

            _this20._scrollToMarked();

            _this20._cd.markForCheck();
          } else {
            _this20.select(item);
          }
        }

        _this20._pressedKeys = [];
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_setInputAttributes",
    value: function _setInputAttributes() {
      /** @type {?} */
      var input = this.searchInput.nativeElement;
      /** @type {?} */

      var attributes = Object.assign({
        type: 'text',
        autocorrect: 'off',
        autocapitalize: 'off',
        autocomplete: this.labelForId ? 'off' : this.dropdownId
      }, this.inputAttrs);

      for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        input.setAttribute(key, attributes[key]);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_updateNgModel",
    value: function _updateNgModel() {
      /** @type {?} */
      var model = [];

      var _iterator6 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(this.selectedItems),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;

          if (this.bindValue) {
            /** @type {?} */
            var value = null;

            if (item.children) {
              /** @type {?} */
              var groupKey = this.groupValue ? this.bindValue :
              /** @type {?} */
              this.groupBy;
              value = item.value[groupKey ||
              /** @type {?} */
              this.groupBy];
            } else {
              value = this.itemsList.resolveNested(item.value, this.bindValue);
            }

            model.push(value);
          } else {
            model.push(item.value);
          }
        }
        /** @type {?} */

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var selected = this.selectedItems.map(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.value;
      });

      if (this.multiple) {
        this._onChange(model);

        this.changeEvent.emit(selected);
      } else {
        this._onChange(isDefined(model[0]) ? model[0] : null);

        this.changeEvent.emit(selected[0]);
      }

      this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_clearSearch",
    value: function _clearSearch() {
      if (!this.searchTerm) {
        return;
      }

      this._changeSearch(null);

      this.itemsList.resetFilteredItems();
    }
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */

  }, {
    key: "_changeSearch",
    value: function _changeSearch(searchTerm) {
      this.searchTerm = searchTerm;

      if (this._isTypeahead) {
        this.typeahead.next(searchTerm);
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_scrollToMarked",
    value: function _scrollToMarked() {
      if (!this.isOpen || !this.dropdownPanel) {
        return;
      }

      this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_scrollToTag",
    value: function _scrollToTag() {
      if (!this.isOpen || !this.dropdownPanel) {
        return;
      }

      this.dropdownPanel.scrollToTag();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_onSelectionChanged",
    value: function _onSelectionChanged() {
      if (this.isOpen && this.multiple && this.appendTo) {
        // Make sure items are rendered.
        this._cd.detectChanges();

        this.dropdownPanel.adjustPosition();
      }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_handleTab",
    value: function _handleTab($event) {
      if (this.isOpen === false && !this.addTag) {
        return;
      }

      if (this.selectOnTab) {
        if (this.itemsList.markedItem) {
          this.toggleItem(this.itemsList.markedItem);
          $event.preventDefault();
        } else if (this.showAddTag) {
          this.selectTag();
          $event.preventDefault();
        } else {
          this.close();
        }
      } else {
        this.close();
      }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_handleEnter",
    value: function _handleEnter($event) {
      if (this.isOpen || this._manualOpen) {
        if (this.itemsList.markedItem) {
          this.toggleItem(this.itemsList.markedItem);
        } else if (this.showAddTag) {
          this.selectTag();
        }
      } else if (this.openOnEnter) {
        this.open();
      } else {
        return;
      }

      $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_handleSpace",
    value: function _handleSpace($event) {
      if (this.isOpen || this._manualOpen) {
        return;
      }

      this.open();
      $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_handleArrowDown",
    value: function _handleArrowDown($event) {
      if (this._nextItemIsTag(+1)) {
        this.itemsList.unmarkItem();

        this._scrollToTag();
      } else {
        this.itemsList.markNextItem();

        this._scrollToMarked();
      }

      this.open();
      $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "_handleArrowUp",
    value: function _handleArrowUp($event) {
      if (!this.isOpen) {
        return;
      }

      if (this._nextItemIsTag(-1)) {
        this.itemsList.unmarkItem();

        this._scrollToTag();
      } else {
        this.itemsList.markPreviousItem();

        this._scrollToMarked();
      }

      $event.preventDefault();
    }
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */

  }, {
    key: "_nextItemIsTag",
    value: function _nextItemIsTag(nextStep) {
      /** @type {?} */
      var nextIndex = this.itemsList.markedIndex + nextStep;
      return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_handleBackspace",
    value: function _handleBackspace() {
      if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
        return;
      }

      if (this.multiple) {
        this.unselect(this.itemsList.lastSelectedItem);
      } else {
        this.clearModel();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_isTypeahead",
    get: function get() {
      return this.typeahead && this.typeahead.observers.length > 0;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_validTerm",
    get: function get() {
      /** @type {?} */
      var term = this.searchTerm && this.searchTerm.trim();
      return term && term.length >= this.minTermLength;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */

  }, {
    key: "_mergeGlobalConfig",
    value: function _mergeGlobalConfig(config) {
      this.placeholder = this.placeholder || config.placeholder;
      this.notFoundText = this.notFoundText || config.notFoundText;
      this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
      this.addTagText = this.addTagText || config.addTagText;
      this.loadingText = this.loadingText || config.loadingText;
      this.clearAllText = this.clearAllText || config.clearAllText;
      this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
      this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
      this.appendTo = this.appendTo || config.appendTo;
      this.bindValue = this.bindValue || config.bindValue;
      this.bindLabel = this.bindLabel || config.bindLabel;
      this.appearance = this.appearance || config.appearance;
    }
  }]);

  return NgSelectComponent;
}();

NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
  return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ConsoleService));
};

NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](NgDropdownPanelComponent, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c5, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    }
  },
  inputs: {
    markFirst: "markFirst",
    dropdownPosition: "dropdownPosition",
    loading: "loading",
    closeOnSelect: "closeOnSelect",
    hideSelected: "hideSelected",
    selectOnTab: "selectOnTab",
    bufferAmount: "bufferAmount",
    selectableGroup: "selectableGroup",
    selectableGroupAsModel: "selectableGroupAsModel",
    searchFn: "searchFn",
    trackByFn: "trackByFn",
    clearOnBackspace: "clearOnBackspace",
    labelForId: "labelForId",
    inputAttrs: "inputAttrs",
    readonly: "readonly",
    searchWhileComposing: "searchWhileComposing",
    minTermLength: "minTermLength",
    editableSearchTerm: "editableSearchTerm",
    keyDownFn: "keyDownFn",
    multiple: "multiple",
    addTag: "addTag",
    searchable: "searchable",
    clearable: "clearable",
    isOpen: "isOpen",
    items: "items",
    compareWith: "compareWith",
    clearSearchOnAdd: "clearSearchOnAdd",
    bindLabel: "bindLabel",
    placeholder: "placeholder",
    notFoundText: "notFoundText",
    typeToSearchText: "typeToSearchText",
    addTagText: "addTagText",
    loadingText: "loadingText",
    clearAllText: "clearAllText",
    virtualScroll: "virtualScroll",
    openOnEnter: "openOnEnter",
    appendTo: "appendTo",
    bindValue: "bindValue",
    appearance: "appearance",
    maxSelectedItems: "maxSelectedItems",
    groupBy: "groupBy",
    groupValue: "groupValue",
    tabIndex: "tabIndex",
    typeahead: "typeahead"
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return NgSelectComponent;
    }),
    multi: true
  }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 14,
  vars: 19,
  consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        return ctx.handleMousedown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

        return ctx.filter(_r2.value);
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
        return ctx.onCompositionStart();
      })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

        return ctx.onCompositionEnd(_r2.value);
      })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
        return ctx.onInputBlur($event);
      })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showClear());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]],
  styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgSelectComponent.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
      args: ['class']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
      args: ['autofocus']
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [SELECTION_MODEL_FACTORY]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: ConsoleService
  }];
};

NgSelectComponent.propDecorators = {
  bindLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  bindValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  markFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  notFoundText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  typeToSearchText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  addTagText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  loadingText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  clearAllText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  appearance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  dropdownPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  loading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  closeOnSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  hideSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  selectOnTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  openOnEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  maxSelectedItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  groupBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  groupValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  bufferAmount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  selectableGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  selectableGroupAsModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  searchFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  trackByFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  clearOnBackspace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  labelForId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  inputAttrs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  searchWhileComposing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  minTermLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  editableSearchTerm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  keyDownFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  typeahead: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-typeahead']
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-multiple']
  }],
  addTag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-taggable']
  }],
  searchable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-searchable']
  }],
  clearable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-clearable']
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-opened']
  }],
  items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  clearSearchOnAdd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  blurEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['blur']
  }],
  focusEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['focus']
  }],
  changeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['change']
  }],
  openEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['open']
  }],
  closeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['close']
  }],
  searchEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['search']
  }],
  clearEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['clear']
  }],
  addEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['add']
  }],
  removeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['remove']
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['scroll']
  }],
  scrollToEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
    args: ['scrollToEnd']
  }],
  optionTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgOptionTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  optgroupTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgOptgroupTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  labelTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgLabelTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  multiLabelTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgMultiLabelTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  headerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgHeaderTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgFooterTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  notFoundTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgNotFoundTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  typeToSearchTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgTypeToSearchTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  loadingTextTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgLoadingTextTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  tagTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgTagTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  loadingSpinnerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [NgLoadingSpinnerTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
    }]
  }],
  dropdownPanel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return NgDropdownPanelComponent;
    })]
  }],
  searchInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['searchInput', {
      static: true
    }]
  }],
  ngOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
    args: [NgOptionComponent, {
      descendants: true
    }]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-disabled']
  }],
  filtered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
    args: ['class.ng-select-filtered']
  }],
  handleKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
    args: ['keydown', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'ng-select',
      template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgSelectComponent;
        }),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      host: {
        '[class.ng-select]': 'useDefaultClass',
        '[class.ng-select-single]': '!multiple'
      },
      styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"]
    }]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
        args: ['class']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"],
        args: ['autofocus']
      }]
    }, {
      type: NgSelectConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [SELECTION_MODEL_FACTORY]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: ConsoleService
    }];
  }, {
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-opened']
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"],
      args: ['scrollToEnd']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-disabled']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-filtered']
    }],

    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
      args: ['keydown', ['$event']]
    }],
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"],
      args: ['class.ng-select-typeahead']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgDropdownPanelComponent;
      })]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['searchInput', {
        static: true
      }]
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
      args: [NgOptionComponent, {
        descendants: true
      }]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
/**
 * @record
 */


function SelectionModel() {}

if (false) {}

var DefaultSelectionModel = /*#__PURE__*/function () {
  function DefaultSelectionModel() {
    Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DefaultSelectionModel);

    this._selected = [];
  }
  /**
   * @return {?}
   */


  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultSelectionModel, [{
    key: "value",
    get: function get() {
      return this._selected;
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(item, multiple, groupAsModel) {
      item.selected = true;

      if (!item.children || !multiple && groupAsModel) {
        this._selected.push(item);
      }

      if (multiple) {
        if (item.parent) {
          /** @type {?} */
          var childrenCount = item.parent.children.length;
          /** @type {?} */

          var selectedCount = item.parent.children.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.selected;
          }).length;
          item.parent.selected = childrenCount === selectedCount;
        } else if (item.children) {
          this._setChildrenSelectedState(item.children, true);

          this._removeChildren(item);

          if (groupAsModel && this._activeChildren(item)) {
            this._selected = [].concat(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent !== item;
            })), [item]);
          } else {
            this._selected = [].concat(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected), Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(item.children.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.disabled;
            })));
          }
        }
      }
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */

  }, {
    key: "unselect",
    value: function unselect(item, multiple) {
      this._selected = this._selected.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x !== item;
      });
      item.selected = false;

      if (multiple) {
        if (item.parent && item.parent.selected) {
          var _this$_selected;

          /** @type {?} */
          var children = item.parent.children;

          this._removeParent(item.parent);

          this._removeChildren(item.parent);

          (_this$_selected = this._selected).push.apply(_this$_selected, Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item && !x.disabled;
          })));

          item.parent.selected = false;
        } else if (item.children) {
          this._setChildrenSelectedState(item.children, false);

          this._removeChildren(item);
        }
      }
    }
    /**
     * @param {?} keepDisabled
     * @return {?}
     */

  }, {
    key: "clear",
    value: function clear(keepDisabled) {
      this._selected = keepDisabled ? this._selected.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.disabled;
      }) : [];
    }
    /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */

  }, {
    key: "_setChildrenSelectedState",
    value: function _setChildrenSelectedState(children, selected) {
      var _iterator7 = Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(children),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var child = _step7.value;

          if (child.disabled) {
            continue;
          }

          child.selected = selected;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      ;
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */

  }, {
    key: "_removeChildren",
    value: function _removeChildren(parent) {
      this._selected = [].concat(Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.parent !== parent;
      })), Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(parent.children.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.parent === parent && x.disabled && x.selected;
      })));
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */

  }, {
    key: "_removeParent",
    value: function _removeParent(parent) {
      this._selected = this._selected.filter(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x !== parent;
      });
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_activeChildren",
    value: function _activeChildren(item) {
      return item.children.every(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return !x.disabled || x.selected;
      });
    }
  }]);

  return DefaultSelectionModel;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ɵ0 = DefaultSelectionModelFactory;

var NgSelectModule = function NgSelectModule() {
  Object(C_Users_itaina_Documents_Projects_currency_converter_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectModule);
};

NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: NgSelectModule
});
NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function NgSelectModule_Factory(t) {
    return new (t || NgSelectModule)();
  },
  providers: [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: ɵ0
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NgSelectModule, {
    declarations: function declarations() {
      return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: ɵ0
      }]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-select-ng-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./src/app/core/reducer/app.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/core/reducer/app.actions.ts ***!
  \*********************************************/
/*! exports provided: ACTION_INIT_CURRENCIES, ACTION_SET_FROM_CURRENCY, ACTION_SET_TO_CURRENCY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INIT_CURRENCIES", function() { return ACTION_INIT_CURRENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_SET_FROM_CURRENCY", function() { return ACTION_SET_FROM_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_SET_TO_CURRENCY", function() { return ACTION_SET_TO_CURRENCY; });
var ACTION_INIT_CURRENCIES = 'INIT_CURRENCIES';
var ACTION_SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
var ACTION_SET_TO_CURRENCY = 'SET_TO_CURRENCY';


/***/ }),

/***/ "./src/app/core/reducer/app.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/core/reducer/app.reducer.ts ***!
  \*********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/core/reducer/app.actions.ts");


var initialState = {
    currencies: [],
    fromCurrency: null,
    toCurrency: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_INIT_CURRENCIES"]:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { currencies: action.payload });
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_SET_FROM_CURRENCY"]:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { fromCurrency: action.payload });
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_SET_TO_CURRENCY"]:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { toCurrency: action.payload });
        default:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
    }
}


/***/ }),

/***/ "./src/app/core/reducer/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/reducer/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");



var UserService = /** @class */ (function () {
    function UserService(store) {
        this.store = store;
    }
    UserService.prototype.getAllStates = function () {
        return this.store.select('userReducer');
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/currency-converter/currency-converter-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/currency-converter/currency-converter-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CurrencyConverterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterRoutingModule", function() { return CurrencyConverterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _currency_converter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-converter.component */ "./src/app/features/currency-converter/currency-converter.component.ts");





var routes = [
    {
        path: '',
        component: _currency_converter_component__WEBPACK_IMPORTED_MODULE_2__["CurrencyConverterComponent"]
    },
    { path: '**', redirectTo: '' }
];
var CurrencyConverterRoutingModule = /** @class */ (function () {
    function CurrencyConverterRoutingModule() {
    }
    CurrencyConverterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrencyConverterRoutingModule });
    CurrencyConverterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrencyConverterRoutingModule_Factory(t) { return new (t || CurrencyConverterRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ]] });
    return CurrencyConverterRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrencyConverterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/currency-converter/currency-converter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/currency-converter/currency-converter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CurrencyConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterComponent", function() { return CurrencyConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_reducer_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/reducer/app.actions */ "./src/app/core/reducer/app.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/request.service */ "./src/app/core/request.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _core_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/app.service */ "./src/app/core/app.service.ts");
/* harmony import */ var _views_curreny_converter_search_currency_converter_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/curreny-converter-search/currency-converter-search.component */ "./src/app/features/currency-converter/views/curreny-converter-search/currency-converter-search.component.ts");










var CurrencyConverterComponent = /** @class */ (function () {
    function CurrencyConverterComponent(requestService, store, toastr, appService) {
        this.requestService = requestService;
        this.store = store;
        this.toastr = toastr;
        this.appService = appService;
    }
    CurrencyConverterComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.appService.pageTitle = 'Currency converter';
        }, 0);
        this.fetchExchangeRates();
    };
    CurrencyConverterComponent.prototype.fetchExchangeRates = function () {
        var _this = this;
        this.requestService.getExchangeRates().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            var currencies = Object.keys(result === null || result === void 0 ? void 0 : result.rates).map(function (key) {
                return {
                    name: key,
                    rate: result === null || result === void 0 ? void 0 : result.rates[key]
                };
            });
            if ((result === null || result === void 0 ? void 0 : result.base) && (result === null || result === void 0 ? void 0 : result.amount)) {
                currencies.unshift({
                    name: result === null || result === void 0 ? void 0 : result.base,
                    rate: result === null || result === void 0 ? void 0 : result.amount,
                    isBase: true
                });
            }
            _this.store.dispatch({ type: _core_reducer_app_actions__WEBPACK_IMPORTED_MODULE_2__["ACTION_INIT_CURRENCIES"], payload: currencies });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.toastr.error('Failed to fetch currencies.', 'Error!');
            throw Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        })).subscribe();
    };
    CurrencyConverterComponent.ɵfac = function CurrencyConverterComponent_Factory(t) { return new (t || CurrencyConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"])); };
    CurrencyConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyConverterComponent, selectors: [["app-currency-converter"]], decls: 2, vars: 0, consts: [[1, "currency-converter-wrapper"]], template: function CurrencyConverterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-currency-converter-search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_views_curreny_converter_search_currency_converter_search_component__WEBPACK_IMPORTED_MODULE_8__["CurrencyConverterSearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1cnJlbmN5LWNvbnZlcnRlci9jdXJyZW5jeS1jb252ZXJ0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return CurrencyConverterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-converter',
                templateUrl: './currency-converter.component.html',
                styleUrls: ['./currency-converter.component.scss']
            }]
    }], function () { return [{ type: _core_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _core_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/currency-converter/currency-converter.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/currency-converter/currency-converter.module.ts ***!
  \**************************************************************************/
/*! exports provided: CurrencyConverterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterModule", function() { return CurrencyConverterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _currency_converter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-converter-routing.module */ "./src/app/features/currency-converter/currency-converter-routing.module.ts");
/* harmony import */ var _currency_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-converter.component */ "./src/app/features/currency-converter/currency-converter.component.ts");
/* harmony import */ var _views_curreny_converter_search_currency_converter_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/curreny-converter-search/currency-converter-search.component */ "./src/app/features/currency-converter/views/curreny-converter-search/currency-converter-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _core_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/reducer/app.reducer */ "./src/app/core/reducer/app.reducer.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













var CurrencyConverterModule = /** @class */ (function () {
    function CurrencyConverterModule() {
    }
    CurrencyConverterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrencyConverterModule });
    CurrencyConverterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrencyConverterModule_Factory(t) { return new (t || CurrencyConverterModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _currency_converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConverterRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('userReducer', _core_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ]] });
    return CurrencyConverterModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrencyConverterModule, { declarations: [_currency_converter_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyConverterComponent"],
        _views_curreny_converter_search_currency_converter_search_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyConverterSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _currency_converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConverterRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _currency_converter_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyConverterComponent"],
                    _views_curreny_converter_search_currency_converter_search_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyConverterSearchComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _currency_converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["CurrencyConverterRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('userReducer', _core_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/currency-converter/views/curreny-converter-search/currency-converter-search.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/currency-converter/views/curreny-converter-search/currency-converter-search.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CurrencyConverterSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverterSearchComponent", function() { return CurrencyConverterSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants.ts");
/* harmony import */ var _shared_pipes_currency_exchange_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/currency-exchange.pipe */ "./src/app/shared/pipes/currency-exchange.pipe.ts");
/* harmony import */ var _core_reducer_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/reducer/app.actions */ "./src/app/core/reducer/app.actions.ts");
/* harmony import */ var _core_reducer_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/reducer/user.service */ "./src/app/core/reducer/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");















function CurrencyConverterSearchComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    var item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", item_r6.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function CurrencyConverterSearchComponent_div_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    var item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", item_r7.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function CurrencyConverterSearchComponent_div_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    var item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", item_r8.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function CurrencyConverterSearchComponent_div_0_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    var item_r9 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", item_r9.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
var _c0 = function (a0, a1) { return [a0, a1]; };
function CurrencyConverterSearchComponent_div_0_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currencyExchange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r5.amountFormControl.value, ctx_r5.currencyConverterFormGroup.get("from").value == null ? null : ctx_r5.currencyConverterFormGroup.get("from").value.name), " =");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, ctx_r5.amountFormControl.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx_r5.currencyConverterFormGroup.get("from").value == null ? null : ctx_r5.currencyConverterFormGroup.get("from").value.rate, ctx_r5.currencyConverterFormGroup.get("to").value == null ? null : ctx_r5.currencyConverterFormGroup.get("to").value.rate)), ctx_r5.currencyConverterFormGroup.get("to").value == null ? null : ctx_r5.currencyConverterFormGroup.get("to").value.name));
} }
function CurrencyConverterSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ng-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurrencyConverterSearchComponent_div_0_ng_template_13_Template, 2, 4, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CurrencyConverterSearchComponent_div_0_ng_template_14_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrencyConverterSearchComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.switchFromTo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CurrencyConverterSearchComponent_div_0_ng_template_24_Template, 2, 4, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CurrencyConverterSearchComponent_div_0_ng_template_25_Template, 2, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CurrencyConverterSearchComponent_div_0_ng_container_27_Template, 9, 14, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.currencyConverterFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.amountFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "from")("clearable", false)("items", ctx_r0.currencies)("bindLabel", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "to")("clearable", false)("items", ctx_r0.currencies)("bindLabel", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.amountFormControl.value);
} }
var CurrencyConverterSearchComponent = /** @class */ (function () {
    function CurrencyConverterSearchComponent(formBuilder, userService, toastr, store) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastr = toastr;
        this.store = store;
        this.amountFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.currencyExchangePipe = new _shared_pipes_currency_exchange_pipe__WEBPACK_IMPORTED_MODULE_5__["CurrencyExchangePipe"]();
    }
    CurrencyConverterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateSubscription = this.userService.getAllStates().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
            _this.currencies = state.currencies;
            _this.initialFromCurrency = state.fromCurrency;
            _this.initialToCurrency = state.toCurrency;
            _this.initForm();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Oops...something went wrong.', 'Error!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        })).subscribe();
    };
    CurrencyConverterSearchComponent.prototype.switchFromTo = function () {
        this.currencyConverterFormGroup.patchValue({
            from: this.currencyConverterFormGroup.get('to').value,
            to: this.currencyConverterFormGroup.get('from').value
        });
    };
    CurrencyConverterSearchComponent.prototype.addHistory = function () {
        var _a, _b, _c, _d;
        if (this.amountFormControl.value) {
            var currencyConvertsHistory = JSON.parse(localStorage.getItem('currencyConvertsHistory'));
            if (!currencyConvertsHistory) {
                currencyConvertsHistory = [];
            }
            currencyConvertsHistory.unshift({
                timestamp: Date.now(),
                from: {
                    name: (_a = this.currencyConverterFormGroup.get('from').value) === null || _a === void 0 ? void 0 : _a.name,
                    amount: this.amountFormControl.value
                },
                to: {
                    name: (_b = this.currencyConverterFormGroup.get('to').value) === null || _b === void 0 ? void 0 : _b.name,
                    amount: this.currencyExchangePipe.transform(this.amountFormControl.value, [
                        (_c = this.currencyConverterFormGroup.get('from').value) === null || _c === void 0 ? void 0 : _c.rate,
                        (_d = this.currencyConverterFormGroup.get('to').value) === null || _d === void 0 ? void 0 : _d.rate
                    ])
                }
            });
            localStorage.setItem('currencyConvertsHistory', JSON.stringify(currencyConvertsHistory));
        }
    };
    CurrencyConverterSearchComponent.prototype.initForm = function () {
        var _this = this;
        this.currencyConverterFormGroup = this.formBuilder.group({
            from: [null],
            to: [null]
        });
        if (this.initialFromCurrency) {
            this.currencyConverterFormGroup.get('from').setValue(this.initialFromCurrency);
        }
        else {
            var fromFiltered = this.currencies.filter(function (currency) { return currency.name.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].CURRENCY_CONVERTER.DEFAULT_FROM; });
            if (fromFiltered.length) {
                this.currencyConverterFormGroup.get('from').setValue(fromFiltered[0]);
            }
        }
        if (this.initialToCurrency) {
            this.currencyConverterFormGroup.get('to').setValue(this.initialToCurrency);
        }
        else {
            var toFiltered = this.currencies.filter(function (currency) { return currency.name.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].CURRENCY_CONVERTER.DEFAULT_TO; });
            if (toFiltered.length) {
                this.currencyConverterFormGroup.get('to').setValue(toFiltered[0]);
            }
        }
        this.currencyConverterFormGroup.valueChanges.subscribe(function (val) {
            _this.addHistory();
        });
        this.currencyConverterFormGroup.get('from').valueChanges.subscribe(function (val) {
            _this.store.dispatch({ type: _core_reducer_app_actions__WEBPACK_IMPORTED_MODULE_6__["ACTION_SET_FROM_CURRENCY"], payload: val });
        });
        this.currencyConverterFormGroup.get('to').valueChanges.subscribe(function (val) {
            _this.store.dispatch({ type: _core_reducer_app_actions__WEBPACK_IMPORTED_MODULE_6__["ACTION_SET_TO_CURRENCY"], payload: val });
        });
    };
    CurrencyConverterSearchComponent.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
    };
    CurrencyConverterSearchComponent.ɵfac = function CurrencyConverterSearchComponent_Factory(t) { return new (t || CurrencyConverterSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_reducer_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
    CurrencyConverterSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyConverterSearchComponent, selectors: [["app-currency-converter-search"]], decls: 1, vars: 1, consts: [["class", "currency-converter-search-wrapper", 4, "ngIf"], [1, "currency-converter-search-wrapper"], [3, "formGroup"], [1, "row"], [1, "col-lg"], [1, "form-group"], ["for", "amount"], ["type", "number", "id", "amount", "placeholder", "Enter amount", "onKeyPress", "if(this.value.length===10) return false;", 1, "form-control", 3, "formControl"], [1, "form-group", "currency-dropdown"], [3, "formControlName", "clearable", "items", "bindLabel"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "col-lg-1", "replace-currencies-button-wrapper"], ["type", "button", 1, "btn", "btn-primary", "replace-currencies-button", 3, "click"], [1, "bi", "bi-arrow-left-right"], [1, "convert-data-outer-wrapper"], [4, "ngIf"], [1, "convert-data-wrapper"], [1, "result"]], template: function CurrencyConverterSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrencyConverterSearchComponent_div_0_Template, 28, 11, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currencies && ctx.currencies.length);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], _shared_pipes_currency_exchange_pipe__WEBPACK_IMPORTED_MODULE_5__["CurrencyExchangePipe"]], styles: [".currency-converter-search-wrapper[_ngcontent-%COMP%]     .ng-value {\n  margin-left: 3px;\n}\n.currency-converter-search-wrapper[_ngcontent-%COMP%]   .currency-flag[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n}\n.currency-converter-search-wrapper[_ngcontent-%COMP%]   .replace-currencies-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.currency-converter-search-wrapper[_ngcontent-%COMP%]   .replace-currencies-button-wrapper[_ngcontent-%COMP%]   .replace-currencies-button[_ngcontent-%COMP%] {\n  position: initial;\n}\n.currency-converter-search-wrapper[_ngcontent-%COMP%]   .convert-data-outer-wrapper[_ngcontent-%COMP%] {\n  height: 72px;\n}\n.currency-converter-search-wrapper[_ngcontent-%COMP%]   .convert-data-outer-wrapper[_ngcontent-%COMP%]   .convert-data-wrapper[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n@media (min-width: 992px) {\n  .currency-converter-search-wrapper[_ngcontent-%COMP%]   .replace-currencies-button-wrapper[_ngcontent-%COMP%]   .replace-currencies-button[_ngcontent-%COMP%] {\n    position: relative;\n    top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9jdXJyZW5jeS1jb252ZXJ0ZXIvdmlld3MvY3VycmVueS1jb252ZXJ0ZXItc2VhcmNoL2N1cnJlbmN5LWNvbnZlcnRlci1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0JBQUE7QUNFRTtFQUVFLGdCQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBS0k7RUFDRSxpQkFBQTtBQUhOO0FBT0U7RUFDRSxZQUFBO0FBTEo7QUFPTTtFQUNFLGVBQUE7QUFMUjtBQWFBO0VBR007SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY3VycmVuY3ktY29udmVydGVyL3ZpZXdzL2N1cnJlbnktY29udmVydGVyLXNlYXJjaC9jdXJyZW5jeS1jb252ZXJ0ZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqIFZBUklBQkxFUyAqKioqL1xyXG4kbGFyZ2VfbW9iaWxlX3ZpZXc6IDk5MnB4O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmN1cnJlbmN5LWNvbnZlcnRlci1zZWFyY2gtd3JhcHBlciB7XHJcbiAgOjpuZy1kZWVwXHJcbiAgLm5nLXZhbHVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICB9XHJcblxyXG4gIC5yZXBsYWNlLWN1cnJlbmNpZXMtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5yZXBsYWNlLWN1cnJlbmNpZXMtYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udmVydC1kYXRhLW91dGVyLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgLmNvbnZlcnQtZGF0YS13cmFwcGVyIHtcclxuICAgICAgLnJlc3VsdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGFyZ2VfbW9iaWxlX3ZpZXcpIHtcclxuICAuY3VycmVuY3ktY29udmVydGVyLXNlYXJjaC13cmFwcGVyIHtcclxuICAgIC5yZXBsYWNlLWN1cnJlbmNpZXMtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAucmVwbGFjZS1jdXJyZW5jaWVzLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return CurrencyConverterSearchComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-converter-search',
                templateUrl: './currency-converter-search.component.html',
                styleUrls: ['./currency-converter-search.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_reducer_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-currency-converter-currency-converter-module.js.map