# `ZingFinger`

[![npm version](https://img.shields.io/npm/v/zingfinger.svg)](https://www.npmjs.com/package/zingfinger)
[![gzip size](https://img.shields.io/bundlephobia/minzip/zingfinger.svg?label=gzip%20size)](https://www.npmjs.com/package/zingfinger)
[![monthly npm installs](https://img.shields.io/npm/dm/zingfinger.svg?label=npm%20downloads)](https://www.npmjs.com/package/zingfinger)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

ZingFinger Super tiny size multi-touch gestures library for the web.

Enhanced Edition: add singlePinch singleRotate singleRotate

# Preview

You can touch this → [Demo example](https://ilgei.github.io/ZingFinger/example/)

# Usage

## NPM

[![zingfinger](https://nodei.co/npm/zingfinger.png)](https://npmjs.org/package/zingfinger)

Install the library with npm into your local modules directory:

```js
npm install zingfinger --save
```

## CDN

[![](https://img.shields.io/badge/jsDelivr-CDN-red.svg)](https://www.jsdelivr.com/package/npm/zingfinger)
[![](https://img.shields.io/badge/UNPKG-CDN-red.svg)](https://unpkg.com/zingfinger/)

## JavaScript

```js
var af = new AlloyFinger(element, {
  touchStart: function () {},
  touchMove: function () {},
  touchEnd: function () {},
  touchCancel: function () {},
  multipointStart: function () {},
  multipointEnd: function () {},
  tap: function () {},
  doubleTap: function () {},
  longTap: function () {},
  singleTap: function () {},
  rotate: function (evt) {
    console.log(evt.angle);
  },
  pinch: function (evt) {
    console.log(evt.zoom);
  },
  pressMove: function (evt) {
    console.log(evt.deltaX);
    console.log(evt.deltaY);
  },
  swipe: function (evt) {
    console.log("swipe" + evt.direction);
  },
  singlePinch: function (evt) {
    console.log(evt.zoom);
  },
  singleRotate: function (evt) {
    console.log(evt.angle);
  },
});
```

## Vue

```js
// JavaScript
Vue.use(ZingFingerVue); // use ZingFingerVue's plugin
var h = new Vue({
    el: '#el',
    methods: {
        tap: function() { console.log('onTap'); }
        ...
    }
});

// import
import Vue from "vue";
import ZingFinger from "zingfinger";
import ZingFingerPlugin from "zingfinger/plugin/vue/zingfinger";
Vue.use(ZingFingerPlugin, {
  ZingFinger,
});
```

```html
<div id="cnt">
  <div v-finger:tap="tap" v-finger:long-tap="longTap" ...>
    <div>the element that you want to bind event</div>
  </div>
</div>
```

## React

Expect to contribute

# Reference

- [AlloyFinger](http://alloyteam.github.io/AlloyFinger/)
- [css3transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
