<template>
    <div id="register">
        <div class="dadajnj">
            民宿管理好帮手
        </div>
        <div class="isjdanj">
            <div class="ifejrnn">
                <div class="asiinnda">
                    <h2>airbnb注册中心</h2>
                </div>
                <div class="jsdnanaj">
                    <table class="sdiadnan">
                        <tr >
                            <td>姓名</td>
                            <td style="padding-left:30px"><el-input v-model="name" placeholder="请输入内容"></el-input></td>
                        </tr>
                         <tr>
                            <td>城市</td>
                            <td style="padding-left:30px"><el-input v-model="city" placeholder="请输入内容"></el-input></td>
                        </tr>
                         <tr>
                            <td>手机号</td>
                            <td style="padding-left:30px"><el-input v-model="telphoneNumber" placeholder="请输入内容"></el-input></td>
                        </tr>
                        <tr>
                            <td>图形验证码</td>
                            <td style="padding-left:30px;width:300px" >
                                <el-input v-model="imgverify" placeholder="请输入内容" style="width:120px;float:left"></el-input>
                                <div class="getImageCode"></div>    
                            </td>
                        </tr>
                        <tr >
                             <td>
                                 <span>短信验证码</span>
                             </td>
                            <td style="width:300px">
                                <el-input v-model="newsverify" placeholder="请输入内容" style="width:120px;margin-left:-5px"></el-input>
                               <button class="idandad" v-on:click="switch_timeout_event" v-if="!switch_timeout"> 发送验证码</button>
                               <button class="jdasdb" v-if="switch_timeout">{{timeout}}s</button>
                            </td>
                        </tr>
                         <tr >
                            <td colspan='2'>
                                <button class="ijaadnshdh" v-on:click="register_event">立即注册</button>
                            </td>
                        </tr>
                         
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from '../../node_modules/jquery'
import router from '../router/index'
export default {
      data(){
          return{
              imgverify:'',
              newsverify:'',
              name:'',
              city:'',
              telphoneNumber:'',
              timeout:60,
              switch_timeout:false
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
                    width: 120,
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
      methods:{
          register_event(){
              var self = this
              
            if(this.imgverify&&this.newsverify&&this.name&&this.city&&this.telphoneNumber){
                       self.$confirm('请问你是房东？', '确认信息', {
                            distinguishCancelAndClose: true,
                            confirmButtonText: '是',
                            cancelButtonText: '不是'
                        }).then(()=>{
                               var url = `api/register?randomverify=${this.newsverify}&&dbname=admin&&collectionname=reviewee`
                               var registerData = {
                                        "telphoneNumber":`"${this.telphoneNumber}"`,
                                        "city":`"${this.city}"`,
                                        "name":`"${this.name}"`,
                                        "imgverify":`"${this.imgverify}"`
                                }
                                this.$http.post(url,registerData).then((data)=>{
                                    if(data.data.code==200){
                                            console.log('放回到data:',data)
                                            console.log('放回到的data.data:',data.data)
                                            self.$message({
                                                showClose: true,
                                                dangerouslyUseHTMLString: true,
                                                message:`'<div><strong>恭喜你注册成功<strong><br/><strong>密码为${data.data.password}</strong></div>'`
                                            })
                                            // alert('恭喜你注册成功，你的密码为'+data.data.password)
                                            router.push('/loggin')
                                    }
                                    
                                })
                        }).catch(()=>{
                             var url = `api/register?randomverify=${this.newsverify}&&dbname=admin&&collectionname=personalInformation`
                               var registerData = {
                                        "telphoneNumber":`"${this.telphoneNumber}"`,
                                        "city":`"${this.city}"`,
                                        "name":`"${this.name}"`,
                                        "imgverify":`"${this.imgverify}"`
                                }
                                this.$http.post(url,registerData).then((data)=>{
                                    if(data.data.code==200){
                                            console.log('放回到data:',data)
                                            console.log('放回到的data.data:',data.data)
                                            self.$confirm(`'<div><strong>恭喜你注册成功<strong><br/><strong>密码为${data.data.password}</strong></div>'`,{
                                               confirmButtonText: '确定',
                                               type: 'warning',
                                               dangerouslyUseHTMLString: true
                                            }).then(()=>{
                                                router.push('/loggin')
                                            })
                                    }
                                })
                        })
            }
            else if(this.name==''){
                   this.$message({
                        showClose: true,
                        message: '请输入你的名字',
                        type: 'warning'
                   })
              }
            else if(this.city==''){
                    this.$message({
                        showClose: true,
                        message: '请输入你的城市',
                        type: 'warning'
                   })
            }
            else if(this.telphoneNumber==''){
                     this.$message({
                        showClose: true,
                        message: '请输入你的手机号码',
                        type: 'warning'
                   })
            }
            else if(this.imgverify==''){
                   this.$message({
                        showClose: true,
                        message: '请输入验证码',
                        type: 'warning'
                   })
            }
            else if(this.newsverify==''){
                   this.$message({
                        showClose: true,
                        message: '请输入短信验证码',
                        type: 'warning'
                   })
            }

          },
          switch_timeout_event(){
              this.switch_timeout = !this.switch_timeout
              var self = this
              var timer = setInterval(() => {
                  if(this.timeout!=0){
                       this.timeout--
                  }
                  else{
                      self.switch_timeout = !self.switch_timeout
                      clearInterval(timer)
                  }
                   }, 1000);
                   //发送请求获取验证码
              this.$http.get('api/getverifycode').then((data)=>{
                  self.$message({
                       showClose: true, 
                      dangerouslyUseHTMLString: true,
                      message:`"<div><h1>短信验证码为${data.data.code}</h1><div>"`
                  })
              })
             
          }
      }
}
</script>
<style lang="stylus" scoped>
.jdasdb
    height 30px
    width 120px
    border 1px #179f7c solid 
    margin-left 23px
    line-height 30px
    background white
.idandad:hover
    background #179f7c
.ijaadnshdh
    border 0px
    background #179f7c
    width 200px
    height 35px
    font-weight bold
    color white
.idandad
    border 1px #179f7c solid 
    background white
    height 30px
    width 120px
    margin-left 23px
.sdiadnan
     margin auto
     font-size 13px
     height 400px
.jsdnanaj
    margin 20px auto 
    width 90%
.asiinnda
    border-bottom 1px black dotted
    width 90%
    height 15%
    margin  auto
    line-height 80px
.dadajnj
    width 100%
    height 80px
    background: #179f7c;
    font-size 20px
    color white
    line-height 80px
.isjdanj
    width 100%
    height 600px
    margin-top 80px
    transform translateX(32%)
.ifejrnn
    width 500px
    height 540px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
    border-radius 10px
</style>