<template>
  <div class="">
    <h1 class="hero">Please Scroll Down</h1>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="1">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span
            ><span class="label">Google Material Design</span>
          </div>
        </div>

        <p class="slideX">
          Material is a design system created by Google to help teams build
          high-quality digital experiences for Android, iOS, Flutter, and the
          web.
          <br />
          Produced by Google.
        </p>
        <div class="buttonGroup">
          <a href="#" class="button slideX">Website</a>
        </div>
      </section>
    </transition-group>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="2">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span
            ><span class="label">Human Interface Guidelines</span>
          </div>
        </div>

        <p class="slideX">
          People expect macOS apps to be intuitive, while simultaneously
          adaptable to their workflow through customization and flexibility.
          Many apps offer configurable preferences, customizable interfaces, and
          alternate ways of completing tasks. Windows can often be resized and
          interface elements hidden or repositioned. Tasks can be initiated from
          toolbars, menus, controls, keyboard shortcuts, the Touch Bar,
          accessibility features, and more. A flexible app facilitates learning
          through discoverability.
        </p>

        <div class="buttonGroup">
          <a href="#" class="button slideX">iOS</a>
          <a href="#" class="button slideX">macOS</a>
        </div>
      </section>
    </transition-group>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="3">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span><span class="label">Spectrum</span>
          </div>
        </div>

        <p class="slideX">
          We believe that people should have a high quality experience that
          effortlessly scales across platforms.<br />
          Spectrum considers all platforms — for both desktop and mobile — from
          the ground up. We recognize that people work across many different
          products and often need to context switch, so our scale system
          accounts for better legibility and easier UI interactions to set a
          foundation for consistent experiences across devices.
        </p>
        <div class="buttonGroup">
          <a href="#" class="button slideX">Principles</a>
          <a href="#" class="button slideX">What's new</a>
          <a href="#" class="button slideX">Color</a>
        </div>
      </section>
    </transition-group>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="4">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span
            ><span class="label">Google Material Design</span>
          </div>
        </div>

        <p class="slideX">
          Material is a design system created by Google to help teams build
          high-quality digital experiences for Android, iOS, Flutter, and the
          web.
          <br />
          Produced by Google.
        </p>
        <div class="buttonGroup">
          <a href="#" class="button slideX">Website</a>
        </div>
      </section>
    </transition-group>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="5">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span
            ><span class="label">Human Interface Guidelines</span>
          </div>
        </div>

        <p class="slideX">
          People expect macOS apps to be intuitive, while simultaneously
          adaptable to their workflow through customization and flexibility.
          Many apps offer configurable preferences, customizable interfaces, and
          alternate ways of completing tasks. Windows can often be resized and
          interface elements hidden or repositioned. Tasks can be initiated from
          toolbars, menus, controls, keyboard shortcuts, the Touch Bar,
          accessibility features, and more. A flexible app facilitates learning
          through discoverability.
        </p>

        <div class="buttonGroup">
          <a href="#" class="button slideX">iOS</a>
          <a href="#" class="button slideX">macOS</a>
        </div>
      </section>
    </transition-group>
    <transition-group tag="div" appear @enter="scroll">
      <section :key="6">
        <div class="ttl">
          <div class="headline">
            <span class="rect"></span><span class="label">Spectrum</span>
          </div>
        </div>

        <p class="slideX">
          We believe that people should have a high quality experience that
          effortlessly scales across platforms.<br />
          Spectrum considers all platforms — for both desktop and mobile — from
          the ground up. We recognize that people work across many different
          products and often need to context switch, so our scale system
          accounts for better legibility and easier UI interactions to set a
          foundation for consistent experiences across devices.
        </p>
        <div class="buttonGroup">
          <a href="#" class="button slideX">Principles</a>
          <a href="#" class="button slideX">What's new</a>
          <a href="#" class="button slideX">Color</a>
        </div>
      </section>
    </transition-group>
  </div>
</template>
<style>
.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
}

.ttl{
  font-size: 3.6rem;
  text-align: left;
}
section{
  margin-bottom: 130px;
  text-align: left;
}
.headline {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.headline .rect {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: block;
  background: white;
  width: 100%;
  height: 100%;
  transform: translateX(-101%);
}
.slideX{
  text-align: left;
}
</style>

<script>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default {
  name: "scroll",
  setup() {
    const scroll = (el) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from(el, {
        x: 128,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        // スクロールトリガーの設定
        scrollTrigger: {
          trigger: el, // 対象物
        },
      })
    }
    return {
      scroll,
    }
  },
}
</script>
