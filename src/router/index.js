// 该文件专门创建整个应用的路由器
import VueRouter from "vue-router";
import IndexWu from '../pages/IndexWu'
// import LoginWu from '../pages/LoginWu'
import LoginTest from '../pages/MyPage/LoginTest'
import Register from '../pages/Register'
import MyPage from '../pages/MyPage'
import PersonalInfo from '../pages/MyPage/PersonalInfo'
import StdFile from '../pages/MyPage/StdFile'
import MyMessage from '../pages/MyPage/MyMessage'
import SignIn from '../pages/MyPage/SignIn'
import HomeWork from '../pages/MyPage/HomeWork'

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/IndexWu',
            meta:{
                isAuth:true
              }
        },
        {
            path:'/IndexWu',
            component:IndexWu,
            // redirect:'/IndexWu',
            meta:{
                isAuth:true
              }
        },
        {
            path:'/LoginTest',
            component:LoginTest,
        },
        {
            path:'/Register',
            component:Register,
        },
        {
            path:'/MyPage',
            component:MyPage,
            meta:{
                isAuth:true,
                title:'测试'
              },
              //独享路由守卫（注意：没有独享后置路由守卫，他可以配合全局后置路由守卫）
              // beforeEnter: (to, from, next) => {
              //   if(to.meta.isAuth){  //判断是否需要鉴权
              //     if(localStorage.getItem('token')){  //权限控制的具体规则
              //       next()
              //     }else{
              //       alert('无权查看')
              //     }
              //   }else{
              //     next()
              //   }
              // },
            children:[
                {
                    path:'PersonalInfo',
                    component:PersonalInfo
                },
                {
                    path:'StdFile',
                    component:StdFile
                },
                {
                    path:'MyMessage',
                    component:MyMessage
                },
                {
                    path:'SignIn',
                    component:SignIn
                },
                {
                    path:'HomeWork',
                    component:HomeWork
                }
            ]
        }
    ]
})

export default router