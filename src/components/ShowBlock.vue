<template>
  <div class="outbox1">
    <button @click="func1">按钮</button>
    <transition name="fade" appear>
      <div class="outbox1_son" v-if="show"></div>
    </transition>
    <transition name="fade" appear>
      <div class="outbox1_son" v-if="show"></div>
    </transition>
    <transition name="fade" appear>
      <div class="outbox1_son" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ShowBlock",
  data() {
    return {
      show: true,
    };
  },
  props: ["sctop"],
  methods: {
    func1() {
      this.show = !this.show;
    },
  },
  beforeCreate(){
					this.$nextTick(()=>{
						if(this.$el.offsetTop>360)
                        {this.show = false}
					})
				},
  mounted(){

    window.addEventListener("scroll", () => {
            if(this.$el.offsetTop-this.sctop<400)
            {
                this.show = true
            }
            else {
                this.show = false
            }
        });
  }
};
</script>

<style>
.outbox1 {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 1200px;
  background-color: orange;
  border: 1px solid black;
}
.outbox1_son {
  height: 250px;
  width: 300px;
  background-color: aquamarine;
  animation: myfirst 2s ease-in-out;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 1s;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>