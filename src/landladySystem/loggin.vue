<template>
    <div id="loggin">
         <div class="kkehhfn">
               <h2 style="text-align:left;padding-left:50px;line-height:30px">欢迎登录airbnb后台管理系统</h2>
        </div>
       <div class="iisddnn">
          
           <div class="jdagsbb">
               <div class="kfhabdn">
                   <table>
                       <tr>
                           <td style="width:200px;">
                               <span style="padding-left:48px;font-size:20px;font-weight:bold;">登录</span>
                           </td>
                           <td >
                               <router-link style="text-decoration:none;color:#666666" to="/register">注册airbnb账号</router-link> 
                           </td>
                        </tr>
                   </table>
               </div>
               <div class="euenda">
                   <el-input placeholder="请输入手机号" v-model="telphoneNumber" >
                        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
               </div>
                 <div class="euenda">
                   <el-input placeholder="请输入密码" v-model="password" show-password>
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
               </div>
               <div class="jsbdjoaos">
                   <table>
                       <tr>
                           <td style="width:130px">
                               <el-input v-model="verifycode" placeholder="验证码" ></el-input>
                           </td>
                           <td>
                                <div class="getImageCode"></div>    
                           </td>
                       </tr>
                   </table>
               </div>
               <div class="huenka">
                   <button class="nabvhsj" v-on:click="loggin_event">登录</button>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
import Axios from 'axios'
import $ from'jquery'
import router from '../router/index'
export default {
    data(){
        return{
            file:'',
            telphoneNumber:'',
            password:'',
            percentCompleted:0,
            verifycode:''
        }
    },
    mounted(){
          function getImageCode(){
            var _this = this;
            // $("#image_code").val("");
            $.ajax({
                type:"get",
                url: "api/get-img-verify",
                data: {　　    　  
                    size: 6,  //验证码长度
                    width: 110,
                    height: 40,
                    background: "#f4f3f2",//干扰线条数
                    noise: 2,
                    fontSize: 32,
                    ignoreChars: '0o1i',   //验证码字符中排除'0o1i'
                    color: true // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有           
                },
                dataType: 'json'
            }).done(function (data) {
                $(".getImageCode").html(data.img);
                //off("click")阻止发送多次事件
                $(".getImageCode").off("click").on("click", function () {
                    getImageCode();
                });
            });
          }
          getImageCode()
      },
    methods: {
        loggin_event(){
            var self = this
            this.$confirm('请问你是房东？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '是',
                cancelButtonText: '不是'
            }).then(()=>{
                //向后端发送请求，以房东的身份
                const url =`api/reviewee/login?dbname=admin&&
                collectionname=reviewee&&telphoneNumber=${this.telphoneNumber}&&
                password=${this.password}&&verifycode=${this.verifycode}`
                
                this.$http.get(url).then((data)=>{
                    if(data.data.code==200){
                       var newdata = data.data
                       this.$store.dispatch('SAVE',newdata.user_id)
                        self.$confirm(`'${data.data.message}'`,{
                            showClose:true,
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            router.push('/b')
                        })
                        self.$store.dispatch('CHANGELOGIN')
                    }
                    else if(data.data.code==404){
                         self.$message({
                            showClose:true,
                            message:`'${data.data.message}'`
                        })
                    }
                })
            }).catch(()=>{
                //以非房东的身份
                const url =`api/reviewee/login?dbname=admin&&collectionname=personalInformation&&telphoneNumber=${this.telphoneNumber}&&password=${this.password}&&verifycode=${this.verifycode}`
                console.log('开始发送axios请求，验证账号密码的正确性')
                this.$http.get(url).then((data)=>{
                    if(data.data.code==200){
                        var newdata = data.data
                        console.log('账号密码正确，放回的用户_id=',data.data.user_id)
                        this.$store.commit('updateswitch_logginButton')
                        this.$store.commit('changeisLogin')
                        this.$store.commit('updateswitch_registerButton')
                        this.$store.commit('changeState')
                        this.$store.commit('updateuser_info',data.data.user_id)
                        self.$confirm(`'${data.data.message}'`,{
                            showClose:true,
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            router.go(-1)
                        })
                        self.$store.dispatch('CHANGELOGIN')
                    }
                    else if(data.data.code==404){
                         self.$message({
                            showClose:true,
                            message:`'${data.data.message}'`
                        })
                    }
                })
            })
        }
    }
}

</script>
<style lang="stylus" scoped>
.kkehhfn
    width 100%
    height 30px
.nabvhsj
    width 250px
    height 35px
    border 0px
    border-radius 5px
    background  #20caa3
    font-size 18px
    color white
    font-weight bold 
.huenka
    width 250px
    height 40px
    margin 30px auto
.jsbdjoaos
    width 250px
    height 40px
    font-size 15px
    margin 15px auto
.ksakdshan
    padding-left 40px
.kfhabdn
    height 40px
    width 350px
    border-bottom: 1px solid #d7d7d7;
    line-height 40px
    text-align left 
.euenda
    width 250px
    height 50px
    margin 20px auto
.jdagsbb
    width 350px
    height 350px
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
    margin-left:900px
    transform translateY(30%)
    border-radius 10px
    border 0.3px black solid
.iisddnn
    width 100%
    height 600px
    background-repeat no-repeat
    background-size: 100% 100%
    background-image url(../assets/images/background.jpg)
    margin-top 20px
#loggin
    margin auto
    width 100%
    height 700px
</style>