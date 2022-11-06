<template>
  <div id="login" ref="login">
    <SlideShow />
    <ShowBlock :sctop="sctop" />
    <ShowBlock :sctop="sctop" />
    <TestBox/>
    <ShowBlock :sctop="sctop" />
    <ShowBlock :sctop="sctop" />
    <SlideBGi />
  </div>
</template>

<script>
import ShowBlock from "../components/ShowBlock.vue";
import SlideShow from "../components/SlideShow.vue";
import SlideBGi from "../components/SlideBGi.vue";
import TestBox from "../components/testbox.vue"

export default {
  name: "IndexWu",
  data() {
    return {
      sctop: 0,
    };
  },
  components: {
    // TestNav,
    ShowBlock,
    SlideShow,
    SlideBGi,
    TestBox,
},
  mounted() {
    window.addEventListener("scroll", () => {
      this.sctop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
.box1 {
  height: 50px;
  width: 100%;
  background-color: red;
}
</style>