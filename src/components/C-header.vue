<template>
  <div class="header">
    <!--ここからtransitionコードを開始-->
    <!--ヘッダーのアニメーション-->
    <transition appear @before-enter="headerBeforeEnter" @enter="headerEnter">
      <div class="header-container">
        <div class="header-title">
          <span class="header-title-text">Vue x GSAP</span>
        </div>
        <!--リンクのアニメーション-->
        <transition appear @before-enter="linksBeforeEnter" @enter="linksEnter">
          <div class="links-container">
            <div class="links">
              <router-link to="/">Home</router-link>
              <router-link to="list">List</router-link>
              <router-link to="scroll">Scroll</router-link>
              <router-link to="scrollView">ScrollView</router-link>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <!--ここでtransitionをクローズ-->
  </div>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;
}
.header-container {
  display: flex;
  align-items: flex-end;
  background: #000;
  padding: 24px;
  color: #fff;
}
.header-title {
  margin-right: 36px;
  font-size: 2.4rem;
}
.links a {
  margin-right: 24px;
  font-size: 1.6rem;
  text-decoration: none;
  color: #fff;
}
</style>

<script>
import gsap from "gsap"

export default {
  name: "headerNav",
  setup() {
    // ヘッダーが上から下がってくるアニメーション
    const headerBeforeEnter = (el) => {
      gsap.set(el, {
        y: "-100%",
        opacity: 0,
      })
    }

    const headerEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1,
        y: "0",
        ease: "Power0.easeOut",
        onComplete: done,
      })
    }

    // リンクがフェイドインするアニメーション
    const linksBeforeEnter = (el) => {
      el.style.opacity = 0
    }

    const linksEnter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        delay: 1,
        onComplete: done,
      })
    }
    return { headerBeforeEnter, linksBeforeEnter, headerEnter, linksEnter }
  },
}
</script>
