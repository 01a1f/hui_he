<template>
  <div class="bcgi">
    <div :class="change"></div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "SlideBGi",
  data() {
    return {
      index: 0,
      change: "slidebgi",
      pictures: ["slidebgi", "slidebgi2", "slidebgi3"],
    };
  },
  mounted() {
    this.currentUrl();
  },
  methods: {
    currentUrl() {
      //每三秒更换一次背景图地址
      setInterval(() => {
        if (this.pictures.length > 0) {
          let i = this.pictures.length;
          if (this.index >= i) {
            this.index = 0;
          }
          this.change = this.pictures[this.index];
          this.index = this.index + 1;
        }
      }, 5000);
      //
    },
    // comparison() {
    //   //index、backgroundUrl 都是在return里设置的默认值index默认0，backgroundUrl 默认''
    //   if (this.pictures.length > 0) {
    //     let i = this.pictures.length;
    //     if (this.index >= i) {
    //       this.index = 0;
    //     }
    //     this.change = this.pictures[this.index]
    //     this.index = this.index + 1;
    //     console.log(this.index);
    //   }
    // },
  },
};
</script>

<style>
/* .mask {
	position: relative;
	width: 100%;
	height: 100%;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: black;
	opacity: .8;
    filter: alpha(opacity=10);
    z-index: 100;} */
.bcgi {
  position: relative;
}
.mask {
  position: absolute;
  height: 100%;
  width: 80%;
  background-color: black;
  opacity: 0.2;
  filter: alpha(opacity=10);
  top: 0;
}
.slidebgi {
  height: 500px;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(../assets/image/banner01.png);
}
.slidebgi2 {
  height: 500px;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(../assets/image/banner02.png);
}
.slidebgi3 {
  height: 500px;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(../assets/image/banner03.png);
}
</style>