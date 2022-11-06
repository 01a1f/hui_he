<template>
  <div class="mypage">
    <div class="mynav">
        <ul>
            <li><router-link to="/Mypage/PersonalInfo">个人信息</router-link></li>
            <li><router-link to="/MyPage/StdFile">站内文件</router-link></li>
            <li><router-link to="/MyPage/MyMessage">站内信</router-link></li>
            <li><router-link to="/MyPage/SignIn">签到</router-link></li>
            <li><router-link to="/MyPage/HomeWork">作业</router-link></li>
            <a href="./"></a>
        </ul>
    </div>
    <div class="myshow">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyPage',
    mounted() {
        console.log(this)
    },
    beforeRouteEnter(to,from,next){
      if(to.meta.isAuth){  //判断是否需要鉴权，就不用to.path === '/home/news' || to.path === '/home/msg'
          if(localStorage.getItem('token')){  //权限控制的具体规则
            next()
          }else{
            alert('登录后查看')
            next('/LoginTest')
          }
        }else{
          next()
        }
    }
}
</script>

<style>
.mypage {
    margin-top: 60px;
}
</style>