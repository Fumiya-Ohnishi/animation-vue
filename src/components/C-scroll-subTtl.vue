<template>
  <div class="ttl">
    <transition appear @enter="scrollttl">
      <h2 class="ttl__clip">ScrollTrigger</h2>
    </transition>
    <transition appear @enter="scrollBacArea">
      <span class="ttl__clip__line"></span>
    </transition>
  </div>
</template>

<style>
.ttl {
  display: table;
  margin-left: 5%;
  position: relative;
}
.ttl__clip {
  position: relative;
  display: inline-block;
  font-size: clamp(3rem, 4vw, 7rem);
  transition: clip-path 0.6s cubic-bezier(0.18, 0.06, 0.23, 1) 0.2s;
  clip-path: inset(0 100% 0 0);
  padding: 0 12px 8px 0;
}
.ttl__clip__line {
  height: 2px;
  background-color: #000;
  width: 0;
  display: block;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
}
.ttl__clip__line.slid__open {
  width: 100%;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.18, 0.06, 0.23, 1) 0s;
}
.ttl__clip.slid__open {
  clip-path: inset(0);
}
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
export default {
  name: "scrollSubTtl",
  setup() {
    const scrollttl = (el) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top-=300 center+=100",
          end: "top top-=100",
        },
      })

      ScrollTrigger.create({
        trigger: el,
        id: 1,
        start: "top center+=300",
        end: "top top-=100",
        once: true,
        toggleClass: {
          targets: el,
          className: "slid__open",
        },
      })
    }
    const scrollBacArea = (el) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center+=300",
          end: "top top",
        },
      })

      ScrollTrigger.create({
        trigger: el,
        id: 1,
        start: "top center+=300",
        end: "top top",
        once: true,
        toggleClass: {
          targets: el,
          className: "slid__open",
        },
      })
    }
    return { scrollttl, scrollBacArea }
  },
}
</script>
