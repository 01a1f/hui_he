<template>
  <div>
    <div class="register_form">
        <h2>注册账号</h2>
        <span>用户名</span><input type="text" v-model="username" placeholder="输入用户名"><br/>
        <span>密码</span><input type="text" v-model="password" placeholder="输入密码"><br/>
        <span>确认密码</span><input type="text" v-model="confirmPassword" placeholder="确认密码"><br/>
    </div>
    <div>
        <button @click="confirm">提交注册</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'RegisterPage',
    data(){
        return {
            username:'',
            password:'',
            confirmPassword:'',
        }
    },
    methods:{
        confirm(){
            if(this.password !== this.confirmPassword)
            alert('前后两次输入的密码不一致')
        }
    }
}
</script>

<style>

</style>