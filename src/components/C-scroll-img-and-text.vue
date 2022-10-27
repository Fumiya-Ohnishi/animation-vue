<template>
  <transition appear @enter="backgroundAnimetion">
    <div class="scroll__bg">
      <span class="scroll__cover"></span>
      <scrollSubTtl></scrollSubTtl>
      <div class="fade__img">
        <transition appear @enter="scrollImgFeadIn">
          <img src="/assets/img-02.jpeg" alt="" />
        </transition>
      </div>
    </div>
  </transition>
</template>

<style>
.scroll__bg {
  position: relative;
  padding: 32px 0 48px;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
@media screen and (max-width: 760px) {
  .scroll__bg {
    display: block;
    padding: 15% 0;
  }
}
.scroll__bg .scroll__cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(133deg, #464646 0%, #131313 50%, black 100%);
  transform-origin: left;
  width: 100%;
  height: 100%;
}
.scroll__bg .fade__img {
  width: 50%;
  margin-right: 5%;
  margin-top: 10%;
}
@media screen and (max-width: 760px) {
  .scroll__bg .fade__img {
    margin-left: 5%;
    margin-right: 0;
    width: 90%;
  }
}
.scroll__bg .fade__img img {
  width: 100%;
  height: auto;
}

.text__up {
  display: flex;
  justify-content: center;
  margin: 15% auto 16px;
  overflow: hidden;
}
.text__up span {
  display: block;
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 0.04em;
}
.text__up__02 {
  margin: 0 auto 25%;
}
.text__up__02 span {
  font-size: 1.8rem;
}
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
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import scrollSubTtl from "@/components/C-scroll-subTtl.vue"

export default {
  name: "scrollImgAndText",
  components: {
    scrollSubTtl,
  },
  setup() {
    const backgroundAnimetion = (el) => {
      const subfactor = el.firstElementChild
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        subfactor,
        {
          x: "0",
          scaleX: 0,
          scaleY: 1,
        },
        {
          x: "0",
          scaleX: 1,
          scrollTrigger: {
            trigger: el,
            start: "top-=350 center+=100",
            end: "bottom-=400 center+=100",
            scrub: 0.5,
            once: true,
          },
        }
      )
    }
    const scrollImgFeadIn = (el) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "top top",
            // toggleActions: "play pause resume reverse",
          },
        }
      )
      ScrollTrigger.create({
        trigger: el,
        id: 1,
        start: "top center+=100",
        end: "top top",
        once: true,
        // toggleActions: "play pause resume reverse",
      })
    }
    return { backgroundAnimetion, scrollImgFeadIn }
  },
}
</script>
