# `AlloyFinger (Enhanced Edition)`

AlloyFinger Super tiny size multi-touch gestures library for the web.

Enhanced Edition: add singlePinch singleRotate singleRotate

# Preview

You can touch this → [https://ilgei.github.io/AlloyFinger/example/](https://ilgei.github.io/AlloyFinger/example/)

# Usage

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
  singlePinch: function () {},
  singleRotate: function () {},
  singleRotate: function () {},
});
```

- [AlloyFinger](http://alloyteam.github.io/AlloyFinger/)
- [css3transform](https://github.com/Tencent/omi/tree/master/packages/omi-transform)

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
