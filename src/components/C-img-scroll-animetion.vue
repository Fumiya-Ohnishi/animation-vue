<template>
  <transition-group tag="div" appear @enter="anime">
    <div class="first-view" :key="0"></div>

    <div class="animetion-area" :key="1">
      <div class="animetion-area__left">
        <div class="animetion-area__img">
          <img class="js-anime" src="/assets/img-anime01.jpg" alt="" />
        </div>
      </div>
      <div class="animetion-area__right"></div>
    </div>
    <div class="animetion-area" :key="2">
      <div class="animetion-area__left"></div>
      <div class="animetion-area__right">
        <div class="animetion-area__img">
          <img class="js-anime" src="/assets/img-anime01.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="animetion-area" :key="3">
      <div class="animetion-area__left">
        <div class="animetion-area__img">
          <img class="js-anime" src="/assets/img-anime01.jpg" alt="" />
        </div>
      </div>
      <div class="animetion-area__right"></div>
    </div>
  </transition-group>
</template>

<style>
.first-view {
  width: 100vw;
  height: 100vh;
}

.animetion-area {
  display: flex;
  align-items: center;
}
.animetion-area:last-child {
  margin-bottom: 100vh;
}

.animetion-area__left {
  width: 50%;
}
.animetion-area__right {
  width: 50%;
}

.animetion-area__img {
  margin: auto;
  width: 475px;
  height: 656px;
  overflow: hidden;
}

.animetion-area__left img {
  width: 100%;
  height: auto;
}
.animetion-area__right img {
  width: 100%;
  height: auto;
}
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default {
  name: "scroll-anime",
  setup() {
    const anime = () => {
      gsap.registerPlugin(ScrollTrigger)

      const el = document.getElementsByClassName("js-anime")

      for (let i = 0; i < el.length; i++) {
        gsap.fromTo(
          el[i],
          {
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            duration: 1,
            scale: 1,
            scrollTrigger: {
              trigger: el[i],
              start: "center center+=100",
              end: "center center-=100",
              markers: true,
            },
          }
        )
      }
    }
    return { anime }
  },
}
</script>
