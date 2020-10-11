# `ZingFinger`

ZingFinger Super tiny size multi-touch gestures library for the web.

Enhanced Edition: add singlePinch singleRotate singleRotate

# Preview

You can touch this → [Demo example](https://ilgei.github.io/ZingFinger/example/)

# Usage

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
import ZingFingerPlugin from "zingfinger/vue/zingfinger";
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

# Consult

- [AlloyFinger](http://alloyteam.github.io/AlloyFinger/)
- [css3transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
