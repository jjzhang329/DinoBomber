/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Dino = __webpack_require__(/*! ./scripts/dino.js */ \"./src/scripts/dino.js\");\n\nvar keys = [];\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\ncanvas.width = 800;\ncanvas.height = 500;\nctx.clearRect(0, 0, canvas.width, canvas.height);\nvar newDino = new Dino(ctx);\nwindow.addEventListener('keydown', function (e) {\n  keys[e.keycode] = true;\n});\nwindow.addEventListener('keyup', function (e) {\n  delete keys[e.keycode];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUdBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsR0FBZjtBQUNBTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQUgsR0FBRyxDQUFDSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlAsTUFBTSxDQUFDSyxLQUEzQixFQUFrQ0wsTUFBTSxDQUFDTSxNQUF6QztBQUNBLElBQU1FLE9BQU8sR0FBRyxJQUFJWCxJQUFKLENBQVNNLEdBQVQsQ0FBaEI7QUFHQU0sTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVQyxDQUFWLEVBQWE7QUFDNUNaLEVBQUFBLElBQUksQ0FBQ1ksQ0FBQyxDQUFDQyxPQUFILENBQUosR0FBa0IsSUFBbEI7QUFDSCxDQUZEO0FBR0FILE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzFDLFNBQU9aLElBQUksQ0FBQ1ksQ0FBQyxDQUFDQyxPQUFILENBQVg7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGlub0JvbWJlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERpbm8gPSByZXF1aXJlKCcuL3NjcmlwdHMvZGluby5qcycpXG5cblxuY29uc3Qga2V5cyA9IFtdO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5jb25zdCBuZXdEaW5vID0gbmV3IERpbm8oY3R4KVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBrZXlzW2Uua2V5Y29kZV0gPSB0cnVlO1xufSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZGVsZXRlIGtleXNbZS5rZXljb2RlXTtcbn0pXG4iXSwibmFtZXMiOlsiRGlubyIsInJlcXVpcmUiLCJrZXlzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyUmVjdCIsIm5ld0Rpbm8iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleWNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dino.js":
/*!*****************************!*\
  !*** ./src/scripts/dino.js ***!
  \*****************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Dino = /*#__PURE__*/function () {\n  function Dino(ctx) {\n    _classCallCheck(this, Dino);\n\n    this.x = 0;\n    this.y = 460;\n    this.width = 40;\n    this.height = 40;\n    this.move = 1;\n    this.draw(ctx);\n  }\n\n  _createClass(Dino, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'green';\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      //if up key is pressed\n      if (keys[38]) {\n        this.y -= this.move;\n      }\n    }\n  }]);\n\n  return Dino;\n}();\n\nmodule.exports = Dino;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaW5vQm9tYmVyLy4vc3JjL3NjcmlwdHMvZGluby5qcz9hMGIwIl0sIm5hbWVzIjpbIkRpbm8iLCJjdHgiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZSIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImtleXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSTtBQUNGLGdCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ1osU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLElBQUwsQ0FBVU4sR0FBVjtBQUVIOzs7O1dBRUQsY0FBS0EsR0FBTCxFQUFTO0FBQ0xBLE1BQUFBLEdBQUcsQ0FBQ08sU0FBSixHQUFnQixPQUFoQjtBQUNBUCxNQUFBQSxHQUFHLENBQUNRLFFBQUosQ0FBYSxLQUFLUCxDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLQyxLQUFsQyxFQUF5QyxLQUFLQyxNQUE5QztBQUNIOzs7V0FFRixnQkFBTTtBQUNGO0FBQ0EsVUFBR0ssSUFBSSxDQUFDLEVBQUQsQ0FBUCxFQUFZO0FBQ1IsYUFBS1AsQ0FBTCxJQUFVLEtBQUtHLElBQWY7QUFDSDtBQUNKOzs7Ozs7QUFNSkssTUFBTSxDQUFDQyxPQUFQLEdBQWdCWixJQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERpbm97XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gNDYwO1xuICAgICAgICB0aGlzLndpZHRoID0gNDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgICAgIHRoaXMubW92ZSA9IDFcbiAgICAgICAgdGhpcy5kcmF3KGN0eClcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxuXG4gICBtb3ZlKCl7XG4gICAgICAgLy9pZiB1cCBrZXkgaXMgcHJlc3NlZFxuICAgICAgIGlmKGtleXNbMzhdKXtcbiAgICAgICAgICAgdGhpcy55IC09IHRoaXMubW92ZTtcbiAgICAgICB9XG4gICB9XG5cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzPSBEaW5vOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kaW5vLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/dino.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaW5vQm9tYmVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;