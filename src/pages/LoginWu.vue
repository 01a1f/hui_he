<template>
  <div class="bgclog">
    <div class="login">
      <h2>登陆\注册</h2>
      <div class="login_form">
        <span>账号：</span>
        <input type="text" v-model="name" placeholder="请输入账号" />
        <br />
        <span>密码：</span>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="btn">
        <button class="login_btn" @click="sendQuest">
          登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
        </button>
      </div>
      <router-link to="/Register">没有账号？立即注册</router-link>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "LoginWu",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    sendQuest() {
      if(this.name&&this.password)
      {
        const token = '123'
      this.$store.commit('setToken',token)
      }
      
      // var data = JSON.stringify({
      //   username: this.name,
      //   password: this.password,
      // });
      // console.log(data)
      // var config = {
      //   method: "post",
      //   url: "http://127.0.0.1:4523/m2/1678753-0-default/41676645",
      //   data: data,
      // };
      // axios(config)
      //   .then(function (response) {
      //     const info = JSON.parse(response)
      //     if(info.code === 200)
      //     {
      //       alert(info.message)
      //     }
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
  },
};
</script>
<style>
.bgclog {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  background-image: url(../assets/image/bgclog.jpg);
}
.login {
  text-align: center;
  width: 600px;
  height: 520px;
  margin: 0 auto;
  background-color: rgba(87, 86, 86, 0.8);
  border-radius: 25px;
  box-shadow: 5px 2px 35px -7px #ff9a9e;
}
.login h2 {
  margin-top: 40px;
  color: aliceblue;
  font-weight: 100;
}
.login_form {
  padding: 20px;
}
.login_form span {
  color: rgb(131, 220, 255);
  font-size: 18px;
  font-weight: 100;
}
.login_form input {
  background-color: transparent;
  width: 320px;
  padding: 2px;
  text-indent: 2px;
  color: white;
  font-size: 20px;
  height: 45px;
  margin: 30px 30px 30px 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(131, 220, 255);
}
input::placeholder {
  color: #fbc2eb;
  font-weight: 100;
  font-size: 18px;
  font-style: italic;
}
.login_btn {
  background-color: rgba(255, 255, 255, 0.582);
  border: 1px solid rgb(190, 225, 255);
  padding: 10px;
  width: 240px;
  height: 60px;
  border-radius: 30px;
  font-size: 30px;
  color: rgb(100, 183, 255);
  font-weight: 100;
  margin-top: 15px;
}
.login_btn:hover {
  box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
  background-color: transparent;
  color: white;
  /* 选择动画 */
  animation: login_mation 0.5s;
}

/* 定义动画 */
@keyframes login_mation {
  from {
    background-color: rgba(255, 255, 255, 0.582);
    box-shadow: 0px 0px 15px 2px rgb(190, 225, 255);
  }
  to {
    background-color: transparent;
    color: white;
    box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
  }
}
</style>