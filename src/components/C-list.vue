<template>
  <div class="panels">
    <!--ここからtransitionコードを開始-->
    <transition-group
      tag="div"
      class="panels-grid"
      appear
      @before-enter="panelsBeforeEnter"
      @enter="panelsEnter"
    >
      <div
        v-for="(panel, index) in panels"
        :key="panel.name"
        class="panel"
        :data-index="index"
      >
        <div>{{ panel.name }}</div>
      </div>
    </transition-group>
    <!--ここでtransitionをクローズ-->
  </div>
</template>

<style>
.panels-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
}
.panel {
  width: calc(25% - 16px);
  height: 300px;
  margin-right: 16px;
  border: solid 2px #000;
  font-size: 1.6rem;
}
</style>

<script>
import { ref } from "vue"
import gsap from "gsap"

export default {
  name: "list",
  setup() {
    // 表示するパネルの設定
    const panels = ref([
      { name: "Panel 1" },
      { name: "Panel 2" },
      { name: "Panel 3" },
      { name: "Panel 4" },
    ])
    // パネルのスタート設定
    const panelsBeforeEnter = (el) => {
      gsap.set(el, {
        y: 100,
        opacity: 0,
      })
    }
    // パネルのアニメーション設定
    const panelsEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1 + el.dataset.index * 0.2,
        onComplete: done,
      })
    }
    return { panels, panelsBeforeEnter, panelsEnter }
  },
}
</script>
