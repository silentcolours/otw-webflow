// plugin
const BackgroundSizePlugin = {
  name: "backgroundSize",
  getSize(target, config) {
    let o = {};
    BackgroundSizePlugin.init.call(o, gsap.utils.toArray(target)[0], config);
    return { width: o.sw + o.cw, height: o.sh + o.ch };
  },
  init(target, vars) {
    typeof vars !== "object" && (vars = { size: vars });
    let cs = window.getComputedStyle(target),
      imageUrl = cs.backgroundImage,
      { nativeWidth, nativeHeight, scale, size } = vars,
      parsedScale = scale || scale === 0 ? scale : 1,
      data = this,
      image,
      w,
      h,
      ew,
      eh,
      ratio,
      start,
      end,
      getSize = (size, scale) => {
        if (!/\d/g.test(size) || size.indexOf("%") > -1) {
          ratio = nativeWidth / nativeHeight;
          if (size === "cover" || size === "contain") {
            if ((size === "cover") === nativeWidth / ew > nativeHeight / eh) {
              h = eh;
              w = eh * ratio;
            } else {
              w = ew;
              h = ew / ratio;
            }
          } else {
            // "auto" or %
            size = size.split(" ");
            size.push("");
            w = ~size[0].indexOf("%")
              ? (ew * parseFloat(size[0])) / 100
              : nativeWidth;
            h = ~size[1].indexOf("%")
              ? (eh * parseFloat(size[1])) / 100
              : nativeHeight;
          }
        } else {
          size = size.split(" ");
          size.push(nativeHeight);
          w = parseFloat(size[0]) || nativeWidth;
          h = parseFloat(size[1]);
        }
        return { w: Math.ceil(w * scale), h: Math.ceil(h * scale) };
      };
    if (imageUrl) {
      if (!nativeWidth || !nativeHeight) {
        image = new Image();
        image.setAttribute(
          "src",
          imageUrl.replace(/(^url\("|^url\('|^url\(|"\)$|'\)$|\)$)/gi, "")
        );
        nativeWidth = image.naturalWidth;
        nativeHeight = image.naturalHeight;
      }
      ew = target.offsetWidth;
      eh = target.offsetHeight;
      if (!nativeWidth || !nativeHeight) {
        console.log("bgSize() failed;", imageUrl, "hasn't loaded yet.");
        nativeWidth = ew;
        nativeHeight = eh;
      }
      size || (size = cs.backgroundSize);
      start = getSize(cs.backgroundSize, 1);
      end = getSize(size, parsedScale);
      data.size = parsedScale === 1 ? size : end.w + "px " + end.h + "px";
      data.style = target.style;
      data.sw = start.w;
      data.cw = end.w - start.w;
      data.sh = start.h;
      data.ch = end.h - start.h;
    }
  },
  render(ratio, data) {
    data.style.backgroundSize =
      ratio === 1
        ? data.size
        : (data.sw + data.cw * ratio).toFixed(1) +
          "px " +
          (data.sh + data.ch * ratio).toFixed(1) +
          "px";
  }
};

gsap.registerPlugin(BackgroundSizePlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.from(".is--landing", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.2,
    nativeWidth: 3450,
    nativeHeight: 1536
  },
  scrollTrigger: {
    id: "Landing",
    trigger: ".is--landing",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});

gsap.from(".is--panoramic", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.1,
    nativeWidth: 2049,
    nativeHeight: 1152
  },
  scrollTrigger: {
    id: "Pano",
    trigger: ".is--panoramic",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});

gsap.from(".is--exterior-ground", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.1,
    nativeWidth: 2049,
    nativeHeight: 1152
  },
  scrollTrigger: {
    id: "Ground",
    trigger: ".is--exterior-ground",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});

gsap.from(".is--amenities", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.1,
    nativeWidth: 2049,
    nativeHeight: 1152
  },
  scrollTrigger: {
    id: "Amenities",
    trigger: ".is--amenities",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});

gsap.from(".is--apartments", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.1,
    nativeWidth: 2049,
    nativeHeight: 1152
  },
  scrollTrigger: {
    id: "Apartments",
    trigger: ".is--apartments",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});

gsap.from(".is--views", {
  duration: 10,
  backgroundSize: {
    size: "cover",
    scale: 1.1,
    nativeWidth: 2049,
    nativeHeight: 1152
  },
  scrollTrigger: {
    id: "Views",
    trigger: ".is--views",
    //markers: true,

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "restart complete reverse reset"
    //options: play, pause, resume, reset, restart, complete, reverse,none
  }
});
