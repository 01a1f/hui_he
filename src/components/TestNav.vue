<template>
    <div>
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
    </div>
  </template>
      
  <script>
    import HeaderShow from './HeaderShow.vue'
  export default {
    // 获取top值
    data() {
        return {
            top: "",
            navShow: true,
        };
    },
    comments: { HeaderShow },
    // 获取浏览器滚轮
    mounted() {
        window.addEventListener("scroll", () => {
            this.top =
                document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    window.pageYOffset;
        });
    },
    // 监听top值的变化
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
    components: { HeaderShow }
};
  </script>
  
  <style>
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
    background-image: url(../assets/英文潮流文字LOGO.png);
    cursor: pointer;
  }
  .SelectCard {
    position: absolute;
    left: 50%;
    margin-left: -400px;
  }
  </style>

  