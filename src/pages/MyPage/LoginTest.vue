<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>慧河工作室</span>
      </div>
      <div>
        <el-tabs v-model="activeName"   stretch>
            <el-tab-pane label="登录" name="first" class="tabpane">
                <el-form :model="loginForm" status-icon :rules="rules1" ref="loginForm" label-width="60px">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="loginForm.pass"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                      <el-button @click="resetForm('loginForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second" class="tabpane">
                <el-form :model="registForm" status-icon :rules="rules2" ref="registForm" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="registForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="registForm.pass"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="confirmpass">
                        <el-input type="password" v-model="registForm.confirmpass"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('registForm')">注册</el-button>
                      <el-button @click="resetForm('registForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    
    data(){
        var validateUser = (rule, value, callback)=>{
        if(value === '')
        {
            callback(new Error('用户名不能为空'))
        }else{callback()}
        }
        var validatePass = (rule, value, callback)=>{
        if(value === '')
        {
            callback(new Error('密码不能为空'))
        }else{callback()}
        }
        var validateconfirmpass = (rule,value,callback)=>{
          if(value === '')
          {
            callback(new Error('确认密码不能为空'))
          }else if(value !== this.registForm.pass)
          {
            callback(new Error('两次密码不一致'))
          }else{
            callback()
          }
        }
        return {
            
            activeName:'first',
            loginForm:{
                username:'',
                pass:'',
            },
            registForm :{
              username:'',
              pass:'',
              confirmpass:''
            },
            rules1:{
                username:[
                    {
                        validator:validateUser,trigger:'blur'
                    }
                ],
                pass:[
                    {
                        validator:validatePass,trigger:'blur'
                    }
                ]
            },
            rules2:{
                username:[
                    {
                        validator:validateUser,trigger:'blur'
                    }
                ],
                pass:[
                    {
                        validator:validatePass,trigger:'blur'
                    }
                ],
                confirmpass:[
                  {
                    validator:validateconfirmpass,trigger:'blur'
                  }
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const token = '123'
            this.$store.commit('setToken',token)
            alert('submit!');
            this.$router.push('/IndexWu')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style scoped>
.login {
  width: 100%;
  margin: 0 auto;
  padding: 100px;
  height: 100%;
  background-color: aquamarine;
}
.box-card {
    
    width: 480px;
    margin: 0 auto ;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.tabpane {
    margin-top: 20px;
}
</style>