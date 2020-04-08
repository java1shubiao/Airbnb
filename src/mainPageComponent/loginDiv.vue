<template>
    <div id="dlym">
        <div id="dl">
            <div id="dlym-child">
            <div>
                <div id="biaoti">
                    <h1>登录mini民宿</h1>
                </div>
                <div id="shutdown" v-on:click="handlechange">
                    <Shut></Shut>
                </div>
            </div>
            <div id="dlym-child-child" >
                <span>未注册的手机号或微信号验证后将自动创建新账号</span>
            </div>
        </div>
        <div id="shuru">
            <div id="zhanghao">
                <input type="text" id="zhanghaoshuru" placeholder="请输入你的账号：手机号或者邮箱">
            </div>
            <div id="mima">
                <input type="password" id="zhanghaoshuru" placeholder="请输入你的密码" class="mimashuru">
            </div>
            <div id="Login-Button-div">
                <button id="Login-Button-Style" v-on:click='logined'>登录</button>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import Shut from '../commonComponent/shut'
import sendAjax from '../assets/js/http'
export default {
    data(){
        return{
            sendDataSign:false
        }
    },
  /*   model:{
        event:'click'
    }, */
    methods:{
        logined(){
            const username = document.getElementById('zhanghaoshuru').value
            const password = document.getElementsByClassName('mimashuru')[0].value
            const url = `api/logining?username=${username}&&password=${password}`
            sendAjax(url,(data,headers)=>{
                if(data.ok){
                    this.$store.commit('updateswitch_logginVue')
                    this.$store.commit('updateswitch_logginButton')
                    this.$store.commit('changeisLogin')
                    this.$store.commit('updateswitch_registerButton')
                    this.$store.commit('changeState')
                    console.log("cookies",headers)
                    console.log('user_id=>',data.user_id)
                    console.log('开始执行updateuser_info')
                    this.$store.commit('updateuser_info',data.user_id)
                   
                    // window.localStorage.setItem('user_id',data.user_id)
                    // console.log('存入Localstorage的变量user_id:',window.localStorage.getItem('user_id'))
                    alert(data.message)
                }else{
                    alert(data.message)
                    console.log('接受数据错误')
                }
            })
        },
        handlechange(){
            this.$store.commit('changeState')
            this.$store.commit('updateswitch_zdc')
            this.$store.commit('updateswitch_logginVue')
            
        }
    },
    components:{
        Shut
    }
}
</script>

<style lang="stylus">
#Login-Button-div
    margin-top 20px;
#Login-Button-Style
    width 234px
    height 48px
    border-radius:3px

#dl
    display inline-block
    text-align center
#dlym-child-child
    text-align left 
    font-size 13px;
    clear: both
#dlym-child
    clear: both
#biaoti
    float left
#shuru
    margin-top :20px;
#mima
    margin-top:20px;
#zhanghaoshuru
    font-size: var(--font-form-element-font-size, 16px) !important;
    line-height: var(--font-form-element-line-height, 24px) !important;
    letter-spacing: var(--font-form-element-letter-spacing, normal) !important;
    font-family: var(--font-form-element-font-family, Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC") !important;
    text-transform: var(--font-form-element-text-transform, undefined) !important;
    color: #484848 !important;
    padding-top: var(--spacing-form-element-vertical, 15px) !important;
    padding-bottom: var(--spacing-form-element-vertical, 15px) !important;
    font-weight: var(--font-light-font-weight, normal) !important;
    background-color: transparent !important;
    padding-left: var(--spacing-form-element-horizontal, 30px) !important;
    padding-right: var(--spacing-form-element-horizontal, 30px) !important;
    border-width: 10px !important;
    border-style: initial !important;
    border-color: initial !important;
    border-image: initial !important;
    margin: 0px !important;
#dlym
    background-color :white
    border-radius:4px;
    height 360px;
    width 500px
#shutdown
    cursor: pointer !important;
    background-color: transparent !important;
    color: buttontext !important;
    display: block !important;
    border-width: 0px !important;
    border-style: initial !important;
    border-color: initial !important;
    border-image: initial !important;
    float :right
    margin-top:35px;
</style>