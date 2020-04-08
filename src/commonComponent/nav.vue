<template>
    <div id="nav_wrap">
        <div id="nav_main">
            <table id="nav_main_box">
                <tr class="nav_main_box_item">
                    <td class="nav_main_box_item_td" :style="{color:color}">简体中文</td>
                    <td class="nav_main_box_item_td" :style="{color:color}">手机端</td>
                    <td class="nav_main_box_item_td" :style="{color:colors}">出租房源</td>
                    <td class="nav_main_box_item_td" :style="{color:colors}">开展体验</td>
                    <td class="nav_main_box_item_td" :style="{color:colors}">故事</td>
                    <td class="nav_main_box_item_td" :style="{color:colors}">历史足迹</td>
                    <td class="nav_main_box_item_td" :style="{color:colors}">帮助</td>
                    <td class="nav_main_box_item_td" v-if="switch_registerButton" :style="{color:colors}"><button v-on:click="button_register_event">注册</button></td>
                    <!-- <td class="nav_main_box_item_td" v-if="switch_logginButton" :style="{color:colors}"><button v-on:click="button_loggin_event">登录</button></td> -->
                    <td class="nav_main_box_item_td" v-if="switch_logginButton" :style="{color:colors}"><router-link :to="{name:'Loggin',path:'/loggin'}" class="wihwnd">登录</router-link></td>
                    <td v-if="!switch_logginButton" class="nav_main_box_item_td" id="nav_loggin_head" v-on:click="div_switch_logginButton_event">
                       <div class="_sftyq0">
                            <img src="https://z1.muscache.cn/defaults/user_pic-50x50.png?v=3" alt="" class="imgposition">
                        </div>  
                    </td>
                </tr>
            </table>
        </div>
         <div v-if="switch_reregiste" class="register-component">
                <Register></Register>
        </div>
         <div v-if="switch_logginVue" class="logFather">
            <div id="log">
                <Login></Login>
            </div>
        </div>
         <div id="tmbjs" v-if="switch_logginVue||switch_reregiste"></div>
         <div class="showLogin-div" v-if="switch_showList">
            <div id="showLogin-div-child">
                <table style="width:100%">
                    <tr >
                        <td>
                            <div>
                                <a href="#">个人资料</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                账号
                            </div>
                        </td>
                    </tr>
                    <tr>
                         <td>
                             <div>
                                 我的旅游指南
                             </div>
                         </td>
                    </tr>
                    <tr>
                        <td>
                            <div >
                               <router-link :to="{path:`/orderDetail?_id=${user_info._id}`}" target="_blank">我的民宿订单</router-link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                简体中文
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div v-on:click="LoginoutEvent">
                                退出
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
           
        </div>
    </div>
</template>
<script>
import Login from '../mainPageComponent/loginDiv'
import Register from '../mainPageComponent/register'
import { mapState, mapMutations } from 'vuex'
export default {
    props:{
        colors:String
    },
    data(){
        return{
            switch_showList:false,
        }
    },
    mounted(){
        console.log(this.$store.state)
    },
    computed:mapState(['switch_logginVue','switch_reregiste','switch_logginButton','switch_registerButton','user_info']),
    methods:{
        button_loggin_event(){
           this.$store.commit('updateswitch_logginVue')
        },
        button_register_event(){
            this.$store.commit('updateswitch_reregiste')
        },
        div_switch_logginButton_event(){
            this.switch_showList = !this.switch_showList
        },
        LoginoutEvent(){
            this.$store.commit('updateswitch_logginButton')
            this.$store.commit('updateswitch_registerButton')
            this.switch_showList = !this.switch_showList
            this.$store.commit('deluser_info')
        }
    },
    components:{
        Login,
        Register
    }
}
</script>
<style lang="stylus" scoped>
.wihwnd
    text-decoration none 
    color black
#nav_wrap
    width 630px 
   height 50px
#nav_main
    width 100%
    height 100%
#nav_main_box
    width 100%
    height 100%
.nav_main_box_item
    width 100%
    height 100%
.nav_main_box_item_td
    font-size 14px
    font-weight bold
    padding-left 20px
.nav_main_box_item_td button
    border 0px
    background Transparent
    font-size 14px
    font-weight bold
._sftyq0
    width 30px
    height 30px
    border-radius 50%
    border-width 1px
    border-color red
    overflow: hidden
.imgposition
    width 30px
    height 30px
.showLogin-div{
    width: 260px;
    height: 320px;
    background-color: white;
    position: relative;
    top:10px;
    left: 350px;
}
#showLogin-div-child{
    width: 240px;
    height: 306px;
    margin-left: 9px;
}
#showLogin-div-child table tr{
    height: 51px; 
}
#showLogin-div-child table tr td{
    font-size: 13.5px;
    border-bottom: 1px gainsboro solid;
    text-align: left;
    font-weight:bold
}
#showLogin-div-child table tr td:hover{
    border-bottom: 1px black solid;
}
#showLogin-div-child table tr td div a{
   text-decoration: none ;
}
#tmbjs{
    position fixed
    top 0px
    left 0px
    width: 1423.33px;
    height: 813px;
    background-color:#000;
    filter:(opacity=50);
    -moz-opacity:0.5;
    opacity:0.5;
    z-index 1
}
.logFather
    width:500px;
    position: fixed;
    top:206px;
    left: 453px;
    z-index 2
.register-component
    width: 700px;
    position fixed
    top 163px
    left 384px
    z-index 2

</style>