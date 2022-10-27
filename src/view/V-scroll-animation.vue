<template>
  <div class="">
    <scrollTtl></scrollTtl>
    <scrollSubTtl></scrollSubTtl>
    <scrollTxt></scrollTxt>
    <scrollImgAndText></scrollImgAndText>
    <scrollTextFaedIn></scrollTextFaedIn>
    <scrollImgFeadIn></scrollImgFeadIn>
  </div>
</template>

<style></style>

<script>
import scrollTxt from "@/components/C-scroll-text.vue"
import scrollTtl from "@/components/C-scrollTtl.vue"
import scrollSubTtl from "@/components/C-scroll-subTtl.vue"
import scrollImgAndText from "@/components/C-scroll-img-and-text.vue"
import scrollTextFaedIn from "@/components/C-scroll-text-feadIn.vue"
import scrollImgFeadIn from "@/components/C-scroll-img-feadIn.vue"
export default {
  name: "scrollPage",
  components: {
    scrollTxt,
    scrollTtl,
    scrollSubTtl,
    scrollImgAndText,
    scrollTextFaedIn,
    scrollImgFeadIn,
  },
}
</script>
