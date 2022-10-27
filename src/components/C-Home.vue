<template>
  <transition appear @before-enter="backgroundColor">
    <div class="background-color">
      <div class="text-area">
        <transition appear @before-enter="headerBeforeEnter" >
          <h1 class="text">	株式会社プライサー</h1>
        </transition>
        <transition appear @before-enter="headerBeforeEnter" >
          <p class="text">常識という壁を、 乗り越え挑め。</p>
        </transition>
        <transition appear @before-enter="ttlanimetion" >
          <p class="title">アニメーション勉強会</p>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap"
export default {
  name: "home",
  setup() {
    // console.log("ok")
    const backgroundColor = (el) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
      })
    }

    //.textを1.5秒かけ出現させ1.5秒かけ逆再生させ初期状態に戻す
    const headerBeforeEnter = (el) => {
      gsap.to(el, {
        delay: 1,
        duration: 1,
        opacity: 1,
        y: "0px",
        yoyo: true,
        repeat: 1,
        //同じclass名のバリデーションの設定
        stagger: {
          each: 0.5,
        },
      })
    }
    const ttlanimetion = (el) => {
      console.log(el)
      //初期遅延3.5秒かけてから.titleを表示
      gsap.to(el, {
        delay: 3.5,
        duration: 1.5,
        opacity: 1,
        //同じclass名のバリデーションの設定
      })
    }
    const ttlanimetionEnd = (el) => {
      console.log(el)
      //初期遅延3.5秒かけてから.titleを表示
      gsap.to(el, {
        stagger: {
          each: 0.2,
          from: "start",
        },
      })
    }
    return { headerBeforeEnter, backgroundColor, ttlanimetion, ttlanimetionEnd }
  },
}
</script>

<style>
.text-area {
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 50px;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 16px;
  margin: 0;
  text-align: center;
}

.background-color {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  opacity: 0;
  position: relative;
}

.text {
  opacity: 0;
  transform: translateY(20px);
  color: #000;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 4.8rem;
  font-weight: 700;
  opacity: 0;
  color: #000;
}

</style>
