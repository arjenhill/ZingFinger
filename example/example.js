var singlePinchImg = document.getElementById("singlePinchImg");
Transform(singlePinchImg);
var initScale = 1;
new AlloyFinger(singlePinchImg, {
  singlePinch: function (evt) {
   console.log(evt);
  },
});


// var pinchImg = document.getElementById("pinchImg");
// Transform(pinchImg);
// new AlloyFinger(pinchImg, {
//   multipointStart: function () {
//     initScale = pinchImg.scaleX;
//   },
//   pinch: function (evt) {
//     pinchImg.scaleX = pinchImg.scaleY = initScale * evt.zoom;
//   },
// });

// var rotateImg = document.getElementById("rotateImg");
// Transform(rotateImg);
// new AlloyFinger(rotateImg, {
//   rotate: function (evt) {
//     rotateImg.rotateZ += evt.angle;
//   },
// });

// var pinchRotateImg = document.getElementById("pinchRotateImg");
// Transform(pinchRotateImg);
// new AlloyFinger(pinchRotateImg, {
//   rotate: function (evt) {
//     pinchRotateImg.rotateZ += evt.angle;
//   },
//   multipointStart: function () {
//     initScale = pinchRotateImg.scaleX;
//   },
//   pinch: function (evt) {
//     pinchRotateImg.scaleX = pinchRotateImg.scaleY = initScale * evt.zoom;
//   },
// });

// var pressMoveImg = document.getElementById("pressMoveImg");
// Transform(pressMoveImg);
// new AlloyFinger(pressMoveImg, {
//   pressMove: function (evt) {
//     pressMoveImg.translateX += evt.deltaX;
//     pressMoveImg.translateY += evt.deltaY;
//     evt.preventDefault();
//   },
// });

// function ease(x) {
//   return Math.sqrt(1 - Math.pow(x - 1, 2));
// }
// var doubleTapImg = document.getElementById("doubleTapImg");
// Transform(doubleTapImg);
// new AlloyFinger(doubleTapImg, {
//   doubleTap: function () {
//     if (doubleTapImg.scaleX === 1) {
//       new To(doubleTapImg, "scaleX", 2, 500, ease);
//       new To(doubleTapImg, "scaleY", 2, 500, ease);
//     } else if (doubleTapImg.scaleX === 2) {
//       new To(doubleTapImg, "scaleX", 1, 500, ease);
//       new To(doubleTapImg, "scaleY", 1, 500, ease);
//     }
//   },
// });

// var swipeScroll = document.getElementById("swipeScroll"),
//   currentIndex = 0;
// Transform(swipeScroll);
// function activeNav(index) {
//   var items = document.querySelectorAll(".nuclear-nav a"),
//     i = 0,
//     len = items.length;
//   for (; i < len; i++) {
//     if (i === index) {
//       items[i].classList.add("active");
//     } else {
//       items[i].classList.remove("active");
//     }
//   }
// }
// new AlloyFinger(swipeScroll, {
//   touchMove: function (evt) {
//     if (Math.abs(evt.deltaX) >= Math.abs(evt.deltaY)) {
//       evt.preventDefault();
//     }
//   },
//   swipe: function (evt) {
//     if (evt.direction === "Left") {
//       if (currentIndex < 2) {
//         currentIndex++;
//         new To(
//           swipeScroll,
//           "translateX",
//           -160 * currentIndex,
//           500,
//           ease,
//           function () {
//             activeNav(currentIndex);
//           }
//         );
//       }
//     } else if (evt.direction === "Right") {
//       if (currentIndex > 0) {
//         currentIndex--;
//         new To(
//           swipeScroll,
//           "translateX",
//           -160 * currentIndex,
//           500,
//           ease,
//           function () {
//             activeNav(currentIndex);
//           }
//         );
//       }
//     }
//   },
// });

// var longTapBox = document.getElementById("longTapBox");
// Transform(longTapBox);
// var overlay = document.getElementById("overlay");
// new AlloyFinger(longTapBox, {
//   longTap: function (evt) {
//     evt.preventDefault();
//     toggleDom(overlay);
//   },
// });

// var tapBox = document.getElementById("tapBox");
// Transform(tapBox);
// var overlay2 = document.getElementById("overlay2");
// new AlloyFinger(tapBox, {
//   tap: function () {
//     toggleDom(overlay2);
//   },
//   singleTap: function () {
//     console.log("singleTap");
//   },
//   doubleTap: function () {
//     console.log("doubleTap");
//   },
//   pointStart: function () {
//     console.log("pointStart");
//   },
// });

// function toggleDom(dom) {
//   var displayValue = window.getComputedStyle(dom, null)["display"];
//   if (displayValue === "none") {
//     dom.style.display = "block";
//   } else {
//     dom.style.display = "none";
//   }
// }
