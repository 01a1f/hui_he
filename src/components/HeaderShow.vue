<template>
  <ul class="nav">
    <li><router-link to="/IndexWu" class="routerLink">首页</router-link></li>
    <li><router-link to="/LoginTest" class="routerLink">登录</router-link></li>
    <li><router-link to="/MyPage" class="routerLink">个人信息</router-link></li>
    <li>联系我们</li>
    <li>慧河学姐</li>
  </ul>
</template>

<script>
export default {
    name:'HeaderShow',

}
</script>

<style>
    * {
        box-sizing: border-box;
    }
    .nav {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .nav li {
        list-style: none;
        width: 160px;
        height: 60px;
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        line-height: 60px;
        border-right: solid 2px rgb(255, 153, 18);
    }
    .nav li:last-child {
        border-right: none;
    }
    .nav li:hover{
        background-color:  rgb(255, 153, 18, 0.3);
        cursor: pointer;
        animation: fontBig 0.3s;
        font-size: 18px;
    }
    .routerLink {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
    }
    @keyframes fontBig {
        from{
            font-size: 16px;
        }
        to{
            font-size: 18px;
        }
    }
</style>