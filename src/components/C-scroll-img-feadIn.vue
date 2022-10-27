<template>
  <div class="">
    <transition-group tag="div" class="flower" appear @enter="imgFeadIn">
      <div class="flower__img flower__img__01 js-fadeup" :key="1">
        <img src="/assets/img-09.jpg" alt="" />
      </div>
      <div class="flower__img flower__img__02 js-fadeup" :key="2">
        <img src="/assets/img-08.jpg" alt="" />
      </div>
      <div class="flower__img flower__img__03 js-fadeup" :key="3">
        <img src="/assets/img-01.jpg" alt="" />
      </div>
    </transition-group>

    <transition-group tag="div" class="grid__img" appear @enter="imgFeadIn2">
      <div class="grid__img__item grid__img__item__01" :key="1">
        <img src="/assets/img-04.jpeg" alt="" />
      </div>
      <div class="grid__img__item grid__img__item__02" :key="2">
        <img src="/assets/img-03.jpeg" alt="" />
      </div>
      <div class="grid__img__item grid__img__item__03" :key="3">
        <img src="/assets/img-07.jpeg" alt="" />
      </div>
      <div class="grid__img__item grid__img__item__04" :key="4">
        <img src="/assets/img-06.jpeg" alt="" />
      </div>
      <div class="grid__img__item grid__img__item__05" :key="5">
        <img src="/assets/img-05.jpeg" alt="" />
      </div>
    </transition-group>
  </div>
</template>

<style>
.flower {
  padding: 22% 0;
  background-color: #fff;
}
.flower__img {
  width: 58.04688%;
  position: relative;
}
.flower__img:nth-child(even) {
  margin: 15% 0 15% auto;
}
.flower__img__02 {
  width: 41.25%;
}
.flower__img__03 {
  width: 48.125%;
  margin-left: 8%;
}

.grid__img {
  position: relative;
  display: block;
  background-color: #fff;
  padding-top: 50%;
  padding-bottom: 20%;
}
.grid__img__item {
  position: absolute;
  display: block;
  overflow: hidden;
}
.grid__img__item::after {
  content: "";
  width: 100%;
  height: 102%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  transform: translate3d(0, 0%, 0);
}
.grid__img__item.js-after::after {
  transform: translate3d(0, -102%, 0);
}
.grid__img__item.js-after img {
  opacity: 1;
  transform: scale(1);
}
.grid__img__item img {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transform: scale(1.3);
  transition: transform 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1s,
    opacity 1.2s cubic-bezier(0.473, 0.427, 0, 0.993) 0.8s;
  object-fit: cover;
}
.grid__img__item__01 {
  top: 0;
  left: 8.28125%;
  width: 25.46875%;
}
.grid__img__item__02 {
  width: 42.8125%;
  left: -9.0625%;
  top: 26.25%;
  height: 35%;
}
.grid__img__item__03 {
  width: 27.5%;
  left: 35%;
  top: 0;
  height: 74%;
}
.grid__img__item__04 {
  width: 25.46875%;
  right: 10.78125%;
  top: 6.58824%;
}
.grid__img__item__05 {
  width: 36.4%;
  right: 0;
  top: 33.17647%;
}

.js-fadeup {
  position: relative;
  overflow: hidden;
}
.js-fadeup::after {
  content: "";
  width: 100%;
  height: 102%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  transform: translate3d(0, 0%, 0);
}
.js-fadeup.js-after::after {
  transform: translate3d(0, -102%, 0);
}
.js-fadeup.js-after img {
  opacity: 1;
  transform: scale(1);
}
.js-fadeup img {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transform: scale(1.3);
  transition: transform 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1s,
    opacity 1.2s cubic-bezier(0.473, 0.427, 0, 0.993) 0.8s;
}
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default {
  name: "scrollImgFeadIn",
  setup() {
    const imgFeadIn = () => {
      gsap.registerPlugin(ScrollTrigger)
      const jsFadeUps = document.querySelectorAll(".js-fadeup")

      jsFadeUps.forEach((jsFadeUp, index) => {
        gsap.to(jsFadeUp, {
          scrollTrigger: {
            trigger: jsFadeUp,
            start: "top-=200 bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        ScrollTrigger.create({
          trigger: jsFadeUp,
          start: "top-=200 bottom",
          end: "bottom top",
          id: index + 1,
          once: true,
          toggleClass: {
            targets: jsFadeUp,
            className: "js-after",
          },
        })
      })
    }
    const imgFeadIn2 = () => {
      const gridItems = document.querySelectorAll(".grid__img__item")
      gsap.registerPlugin(ScrollTrigger)

      gridItems.forEach((gridItems, index) => {
        gsap.to(gridItems, {
          scrollTrigger: {
            trigger: gridItems,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        ScrollTrigger.create({
          trigger: gridItems,
          start: "top bottom",
          end: "bottom top",
          id: index + 1,
          once: true,
          toggleClass: {
            targets: gridItems,
            className: "js-after",
          },
        })
      })
    }
    return { imgFeadIn ,imgFeadIn2}
  },
}
</script>
