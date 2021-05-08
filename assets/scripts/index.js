/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _blocks_popup_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */
        var _blocks_popup_popup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_blocks_popup_popup_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        /* harmony import */
        var _blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__);

        // Tabs

        $(function() {
            $('ul.tabs__caption').each(function(i) {
                var storage = localStorage.getItem('tab' + i);

                if (storage) {
                    $(this).find('li').removeClass('active').eq(storage).addClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
                }
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
                var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
                localStorage.removeItem('tab' + ulIndex);
                localStorage.setItem('tab' + ulIndex, $(this).index());
            });
        });

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {

        $(function() {
            $('.tabs__watch').on('click', function() {
                var input = $(this).prev();
                var type = input.attr('type');

                if (type === 'text') {
                    input.attr('type', 'password');
                    $(this).css('background-image', 'url(/assets/images/watch_off.png)');
                } else if (type === 'password') {
                    input.attr('type', 'text');
                    $(this).css('background-image', 'url(/assets/images/watch_on.png)');
                }
            });
            $('.features__btn').on('click', function() {
                $('.popup').show();
            });
            $('.popup__bg').on('click', function() {
                $('.popup').hide();
            });
        });

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        $(function() {
            var input = $('.dropdown__input');
            input.on('click', function() {
                $('.dropdown__list').toggle();
            });
            $('.popup').on('click', function() {
                $('.dropdown__list').hide();
            }).on('click', '.dropdown', function(e) {
                e.stopPropagation();
            });
            $('.dropdown__item').on('click', function() {
                $('.dropdown__item').removeClass('active');
                $(this).addClass('active');
                var code = $(this).text();
                var src = $(this).find('.dropdown__flag').attr('src'); // var bgi = 'url(../images/arrow.png), url(' + src + ')';

                input.val(code); // input.css('background-image', bgi);
            });
        });

        /***/
    })
    /******/
]);