(function () {
  var ZingFingerPlugin = {
    install: function (Vue, options) {
      options = options || {};
      var ZingFinger = window.ZingFinger || options.ZingFinger;
      var isVue2 = !!(Vue.version.substr(0, 1) == 2);

      if (!ZingFinger) {
        throw new Error("you need include the ZingFinger!");
      }

      var EVENTMAP = {
        'touch-start': 'touchStart',
        'touch-move': 'touchMove',
        'touch-end': 'touchEnd',
        'touch-cancel': 'touchCancel',
        'multipoint-start': 'multipointStart',
        'multipoint-end': 'multipointEnd',
        'tap': 'tap',
        'double-tap': 'doubleTap',
        'long-tap': 'longTap',
        'single-tap': 'singleTap',
        'rotate': 'rotate',
        'single-rotate': 'singleRotate',
        'pinch': 'pinch',
        'single-pinch': 'singlePinch',
        'press-move': 'pressMove',
        'swipe': 'swipe'
      };

      var CACHE = [];

      var directiveOpts = {};

      // get the index for elem in CACHE
      var getElemCacheIndex = function (elem) {
        for (var i = 0, len = CACHE.length; i < len; i++) {
          if (CACHE[i].elem === elem) {
            return i;
          }
        }

        return null;
      };

      // do on or off handler
      var doOnOrOff = function (cacheObj, options) {
        var eventName = options.eventName;
        var elem = options.elem;
        var func = options.func;
        var oldFunc = options.oldFunc;

        if (cacheObj && cacheObj.ZingFinger) {
          if (cacheObj.ZingFinger.off && oldFunc)
            cacheObj.ZingFinger.off(eventName, oldFunc);
          if (cacheObj.ZingFinger.on && func)
            cacheObj.ZingFinger.on(eventName, func);
        } else {
          options = {};
          options[eventName] = func;

          CACHE.push({
            elem: elem,
            ZingFinger: new ZingFinger(elem, options),
          });
        }
      };

      // for bind the event
      var doBindEvent = function (elem, binding) {
        var func = binding.value;
        var oldFunc = binding.oldValue;
        var eventName = binding.arg;

        eventName = EVENTMAP[eventName];

        var cacheObj = CACHE[getElemCacheIndex(elem)];

        doOnOrOff(cacheObj, {
          elem: elem,
          func: func,
          oldFunc: oldFunc,
          eventName: eventName,
        });
      };

      // for bind the event
      var doUnbindEvent = function (elem) {
        var index = getElemCacheIndex(elem);

        if (!isNaN(index)) {
          var delArr = CACHE.splice(index, 1);
          if (delArr.length && delArr[0] && delArr[0].ZingFinger.destroy) {
            delArr[0].ZingFinger.destroy();
          }
        }
      };

      if (isVue2) {
        directiveOpts = {
          bind: doBindEvent,
          update: doBindEvent,
          unbind: doUnbindEvent,
        };
      } else {
        // vue1.xx
        directiveOpts = {
          update: function (newValue, oldValue) {
            var binding = {
              value: newValue,
              oldValue: oldValue,
              arg: this.arg,
            };

            var elem = this.el;

            doBindEvent.call(this, elem, binding);
          },
          unbind: function () {
            var elem = this.el;

            doUnbindEvent.call(this, elem);
          },
        };
      }

      // definition
      Vue.directive("finger", directiveOpts);
    },
  };

  // export
  if (typeof module !== "undefined" && typeof exports === "object") {
    module.exports = ZingFingerPlugin;
  } else {
    window.ZingFingerVue = ZingFingerPlugin;
  }
})();
