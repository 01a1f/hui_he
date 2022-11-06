<template>
  <div id="app" ref="app">
    <!-- <TestNav /> -->
    <div id="box" :class="navShow ? 'navOn' : 'navOff'">
        <div class="icon">
          <h1>
            <a href="www.baidu.com"></a>
          </h1>
        </div>
        <div class="SelectCard">
          <HeaderShow/>
        </div>
      </div>
    <router-view/>
  </div>
  
  
</template>

<script>
  import HeaderShow from './components/HeaderShow.vue';
export default {
  name: "App",
  data() {
        return {
            top: "",
            navShow: true,
        };
    },
  components: {
    // TestNav
    HeaderShow
  },
  mounted() {
        window.addEventListener("scroll", () => {
            this.top =
                document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    window.pageYOffset;
        });
    },
    watch: {
        top(newValue, oldValue) {
            // 等新值大于100的时候再做变化（优化一下）  
            //   if (newValue > 100) {
            if (newValue > 0) {
                if (newValue > oldValue) {
                    this.navShow = false;
                    // console.log("向下滚动"); //显示   
                }
                else {
                    this.navShow = true;
                    // console.log("向上滚动"); //隐藏
                }
            }
        },
    },
};
</script>
<style>
body {
  margin: 0;
}
html,body,#app {
    height:100%;
}
#app {
  width: 100%;
}
  #box {
    background-color: rgb(0,0,0,0.3 );
  }
  .navOn {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.2s ease-in-out;
    transform: translateZ(1);
    width: 100%;
    height: 60px;
    /* opacity: 1; */
  }
  .navOff {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.2s ease-in-out;
    transform: translate3d(0, -100%, 0);
    width: 100%;
    height: 60px;
    /* opacity: 0; */
  }
  
  .icon {
    width: 170px;
    height: 60px;
    margin-left: 20px;
    float: left;
    background-image: url(./assets/英文潮流文字LOGO.png);
    cursor: pointer;
  }
  .SelectCard {
    position: absolute;
    left: 50%;
    margin-left: -400px;
  }
</style>