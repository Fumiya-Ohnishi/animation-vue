<template>
  <transition-group appear tag="div" @enter="text_up">
    <div class="text__up" :key="1">
      <span class="text__up__js">S</span>
      <span class="text__up__js">c</span>
      <span class="text__up__js">r</span>
      <span class="text__up__js">o</span>
      <span class="text__up__js">l</span>
      <span class="text__up__js">l</span>
      <span class="text__up__js">T</span>
      <span class="text__up__js">r</span>
      <span class="text__up__js">i</span>
      <span class="text__up__js">g</span>
      <span class="text__up__js">g</span>
      <span class="text__up__js">e</span>
      <span class="text__up__js">r</span>
    </div>
    <div class="text__up text__up__02" :key="2">
      <span class="text__up__js">S</span>
      <span class="text__up__js">c</span>
      <span class="text__up__js">r</span>
      <span class="text__up__js">o</span>
      <span class="text__up__js">l</span>
      <span class="text__up__js">l</span>
      <span class="text__up__js">T</span>
      <span class="text__up__js">r</span>
      <span class="text__up__js">i</span>
      <span class="text__up__js">g</span>
      <span class="text__up__js">g</span>
      <span class="text__up__js">e</span>
      <span class="text__up__js">r</span>
    </div>
  </transition-group>
</template>

<style>
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
</style>

<script>
import gsap from 'gsap'
export default {
  name: "scrollTextFaedIn",
  setup() {
    const text_up = () => {
      const text__ups = document.querySelectorAll(".text__up__js")

      text__ups.forEach((text__up, i) => {
        gsap.fromTo(
          text__up,
          {
            opacity: 0.1,
            y: "110%",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.03,
            scrollTrigger: {
              trigger: ".text__up",
              start: "top center+=300",
              end: "top center+=300",
              once: true,
            },
          }
        )
      })
    }
    return { text_up }
  },
}
</script>
