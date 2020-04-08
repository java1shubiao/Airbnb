<template>
    <div id="registerBoot">
        <div id="register-div">
            <!-- <input type="text" placeholder="请填写你的姓名" id="register-name">
            <input type="text" placeholder="请填写你的账号" id="register-username">
            <input type="password" placeholder="请填写你的密码" id="register-password">
            <input type="tel" placeholder="请填写你的手机号码" id="register-tel">
            <input type="text" placeholder="请填写你的身份证" id="register-sfz"> -->
            <ul id="register-ul">
                <li>
                    <input type="text" placeholder="请填写你的姓名" id="register-name">
                </li>
                <li><input type="text" placeholder="请填写你的账号" id="register-username"></li>
                <li><input type="password" placeholder="请填写你的密码" id="register-password"></li>
                <li><input type="tel" placeholder="请填写你的手机号码" id="register-tel"></li>
                <li><input type="text" placeholder="请填写你的身份证" id="register-sfz"> </li>
            </ul>
            <div id="register-shut-component-div" v-on:click='registerShutDown'>
                <Shut></Shut>
            </div>
        </div>
        <div>
            <button id="register-button" v-on:click="registerEvent">注册</button>
        </div>
    </div>
</template>
<script>
import sendAjaxPost from '../assets/js/httpPost'
import Shut from '../commonComponent/shut'
export default {
    data(){
        return{

        }
    },
    methods:{
        registerEvent(){

            function getID(str){
                return document.getElementById(str).value
            }
            const registerName = getID("register-name")
            const registerUsername = getID("register-username")
            const registerPassword = getID("register-password")
            const registerTel = getID("register-tel")
            const registerSfz = getID("register-sfz")
            console.log(registerSfz)
            const url = 'api/register'
            const obj ={registerPassword:registerPassword,registerName:registerName,registerUsername:registerUsername,registerTel:registerTel,registerSfz:registerSfz}
            sendAjaxPost(url,obj,(data)=>{
                console.log(data)
            })
            this.$store.commit('changeStateRegister')
        },
        registerShutDown(){
            this.$store.commit('changeStateRegister')
            this.$store.commit('updateswitch_reregiste')
        }
    },
    components:{
        Shut
    }
}
</script>
<style lang="stylus">
#register-shut-component-div
    float:right
    position absolute
    top 30px
    left 440px
#registerBoot
    background-color white
    border-radius 6px;
    height 500px
#register-button
    width 234px
    height 48px
    border-radius:3px
#register-div input 
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
#register-ul li
    list-style-type none 
    margin-top 20px
#register-div
    display inline-block
    line-height 40px
    position relative
</style>