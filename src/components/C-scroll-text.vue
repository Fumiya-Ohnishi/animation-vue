<template>
  <transition appear @enter="scrollTxt">
    <section class="scroll">
      <div class="scroll__wrap">
        <p class="scroll__x">
          GSAPSCROLLGSAPSCROLLGSAPSCROLLGSAPSCROLLGSAPSCROLL
        </p>
      </div>
    </section>
  </transition>
</template>

<style>
.scroll {
  overflow: hidden;
  padding-top: 20%;
  padding-bottom: 20%;
}
.scroll__wrap p {
  font-size: clamp(8rem, 15vw, 16rem);
  font-weight: 900;
  color: #ebe9e9;
  opacity: 0.1;
  -webkit-text-stroke: 2px #000;
}
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default {
  name: "scrollText",
  setup() {
    const scrollTxt = (el) => {
      const subfactor = el.firstElementChild.firstElementChild
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        subfactor,
        {
          x: "-15.1797px",
        },
        {
          x: "-1603.18px",
          scrollTrigger: {
            trigger: el,
            start: "top center+=300",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      )
    }
    return { scrollTxt }
  },
}
</script>
