<template>
  <div class="perinf">
    <div class="introduction">
        个人信息介绍
    </div>
    <div class="config">
        <div class="password">
            <span>旧密码</span><input type="text" placeholder="输入旧密码"><br>
            <span>新密码</span><input type="text" placeholder="输入新密码"><br>
            <span>确认密码</span><input type="text" placeholder="确认新密码"><br>
            <button>确认修改</button>
        </div>
        <div class="logset">
            <button>退出登录</button>
            <button>注销账号</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.introduction {
    width: 100%;
    height: 200px;
    background-color: lightblue;
}
</style>