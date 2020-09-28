(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.itouch = factory());
}(this, (function () { 'use strict';

var itouch = {
  getLen: function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }
};

return itouch;

})));
//# sourceMappingURL=itouch.js.map
