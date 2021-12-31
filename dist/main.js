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

eval("var Dino = __webpack_require__(/*! ./scripts/dino.js */ \"./src/scripts/dino.js\");\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\ncanvas.width = 800;\ncanvas.height = 500;\nvar newDino = new Dino(ctx); //if this game clieckd, start game;\n//if this cliecked, restart game;\n//\n\nfunction animate() {}\n\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUdBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUlULElBQUosQ0FBU0ssR0FBVCxDQUFoQixDLENBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNLLE9BQVQsR0FBbUIsQ0FHbEI7O0FBQ0RBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaW5vQm9tYmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGlubyA9IHJlcXVpcmUoJy4vc2NyaXB0cy9kaW5vLmpzJylcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmNvbnN0IG5ld0Rpbm8gPSBuZXcgRGlubyhjdHgpXG5cbi8vaWYgdGhpcyBnYW1lIGNsaWVja2QsIHN0YXJ0IGdhbWU7XG4vL2lmIHRoaXMgY2xpZWNrZWQsIHJlc3RhcnQgZ2FtZTtcbi8vXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICBcbiAgXG59XG5hbmltYXRlKCk7XG4iXSwibmFtZXMiOlsiRGlubyIsInJlcXVpcmUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibmV3RGlubyIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dino.js":
/*!*****************************!*\
  !*** ./src/scripts/dino.js ***!
  \*****************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar dinoSprite = new Image();\ndinoSprite.src = \"src/assets/DinoSheet.png\";\ncanvas.width = 800;\ncanvas.height = 500;\n\nvar Dino = /*#__PURE__*/function () {\n  function Dino(ctx) {\n    _classCallCheck(this, Dino);\n\n    this.x = 0;\n    this.y = 460;\n    this.width = 64;\n    this.height = 64;\n    this.frameX = canvas.width - this.width;\n    this.frameY = canvas.height - this.height;\n    this.move = 10;\n    this.draw(ctx);\n  }\n\n  _createClass(Dino, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      var _this = this;\n\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n      dinoSprite.onload = function () {\n        ctx.drawImage(dinoSprite, 64, 0, 32, 32, _this.frameX, _this.frameY, _this.width, _this.height);\n      };\n    } //    move(){\n    //        //if up key is pressed\n    //        if(keys[38]){\n    //            this.y -= this.move;\n    //        }\n    //    }\n\n  }]);\n\n  return Dino;\n}();\n\nvar keys = [];\nwindow.addEventListener('keydown', function (e) {\n  keys[e.keycode] = true;\n  console.log(e.keycode);\n});\nwindow.addEventListener('keyup', function (e) {\n  delete keys[e.keycode];\n});\nmodule.exports = Dino;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaW5vQm9tYmVyLy4vc3JjL3NjcmlwdHMvZGluby5qcz9hMGIwIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGlub1Nwcml0ZSIsIkltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJEaW5vIiwieCIsInkiLCJmcmFtZVgiLCJmcmFtZVkiLCJtb3ZlIiwiZHJhdyIsImNsZWFyUmVjdCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImtleXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleWNvZGUiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSixFQUFuQjtBQUNBRCxVQUFVLENBQUNFLEdBQVgsR0FBaUIsMEJBQWpCO0FBQ0FQLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlLEdBQWY7QUFDQVIsTUFBTSxDQUFDUyxNQUFQLEdBQWdCLEdBQWhCOztJQUVNQyxJO0FBQ0YsZ0JBQVlQLEdBQVosRUFBZ0I7QUFBQTs7QUFDWixTQUFLUSxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsU0FBS0osS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtJLE1BQUwsR0FBY2IsTUFBTSxDQUFDUSxLQUFQLEdBQWUsS0FBS0EsS0FBbEM7QUFDQSxTQUFLTSxNQUFMLEdBQWNkLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixLQUFLQSxNQUFuQztBQUNBLFNBQUtNLElBQUwsR0FBWSxFQUFaO0FBQ0QsU0FBS0MsSUFBTCxDQUFVYixHQUFWO0FBRUY7Ozs7V0FFRCxjQUFLQSxHQUFMLEVBQVU7QUFBQTs7QUFFTkEsTUFBQUEsR0FBRyxDQUFDYyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQmpCLE1BQU0sQ0FBQ1EsS0FBM0IsRUFBa0NSLE1BQU0sQ0FBQ1MsTUFBekM7O0FBQ0FKLE1BQUFBLFVBQVUsQ0FBQ2EsTUFBWCxHQUFvQixZQUFNO0FBQ3RCZixRQUFBQSxHQUFHLENBQUNnQixTQUFKLENBQWNkLFVBQWQsRUFBMEIsRUFBMUIsRUFBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFDSSxFQURKLEVBQ1EsS0FBSSxDQUFDUSxNQURiLEVBQ3FCLEtBQUksQ0FBQ0MsTUFEMUIsRUFDa0MsS0FBSSxDQUFDTixLQUR2QyxFQUM4QyxLQUFJLENBQUNDLE1BRG5EO0FBRUgsT0FIRDtBQUtILEssQ0FRTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHQSxJQUFNVyxJQUFJLEdBQUcsRUFBYjtBQUNBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUM1Q0gsRUFBQUEsSUFBSSxDQUFDRyxDQUFDLENBQUNDLE9BQUgsQ0FBSixHQUFrQixJQUFsQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBQyxDQUFDQyxPQUFkO0FBQ0gsQ0FIRDtBQUlBSCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVVDLENBQVYsRUFBYTtBQUMxQyxTQUFPSCxJQUFJLENBQUNHLENBQUMsQ0FBQ0MsT0FBSCxDQUFYO0FBQ0gsQ0FGRDtBQU9BRyxNQUFNLENBQUNDLE9BQVAsR0FBZ0JsQixJQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZGlub1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuZGlub1Nwcml0ZS5zcmMgPSBcInNyYy9hc3NldHMvRGlub1NoZWV0LnBuZ1wiO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuY2xhc3MgRGlub3tcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSA0NjA7XG4gICAgICAgIHRoaXMud2lkdGggPSA2NDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2NDtcbiAgICAgICAgdGhpcy5mcmFtZVggPSBjYW52YXMud2lkdGggLSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5tb3ZlID0gMTA7XG4gICAgICAgdGhpcy5kcmF3KGN0eClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgZGlub1Nwcml0ZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRpbm9TcHJpdGUsIDY0LCAwLCAzMixcbiAgICAgICAgICAgICAgICAzMiwgdGhpcy5mcmFtZVgsIHRoaXMuZnJhbWVZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gIFxuXG4gICAgXG5cbiAgICBcblxuLy8gICAgbW92ZSgpe1xuLy8gICAgICAgIC8vaWYgdXAga2V5IGlzIHByZXNzZWRcbi8vICAgICAgICBpZihrZXlzWzM4XSl7XG4vLyAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLm1vdmU7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuXG59XG5jb25zdCBrZXlzID0gW107XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAga2V5c1tlLmtleWNvZGVdID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhlLmtleWNvZGUpXG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICBkZWxldGUga2V5c1tlLmtleWNvZGVdO1xufSlcblxuXG5cblxubW9kdWxlLmV4cG9ydHM9IERpbm87Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2Rpbm8uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/dino.js\n");

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