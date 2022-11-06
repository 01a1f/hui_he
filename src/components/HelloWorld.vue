<template>
  <div>
    <button @click="SendQuest">请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      person: {
        userName: "崔艳",
        password: "123456",
      },
    };
  },
  methods: {
    SendQuest() {
      axios.post('http://127.0.0.1:4523/m1/1678753-0-defaultapi/postData',JSON.stringify(this.person))
        .then((res) => {
          //请求成功，触发then中的函数
          console.log(res);
        })
        .catch((error) =>
          //请求失败，触发catch中的函数 可省略
          console.log(error)
        );
    },
  },
};
</script>

<style>
</style>
