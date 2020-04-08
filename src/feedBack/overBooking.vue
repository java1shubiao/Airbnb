<template>
    <div id="overBookding">
        
        <div id="over">
             <div class="booking_show">
            <div class="booking_show_img">
                <img src="https://z1.muscache.cn/im/pictures/c7d7de80-cc89-4392-8e29-355b72512ed0.jpg?aki_policy=large" alt="">
            </div>
            <div class="booking_show_details">
                <div class="booking_name">
                    豪华别墅总统套房
                </div>
                <div class="booking_price">
                    <div class="jg">价格</div>
                    <div class="je">233</div>
                </div>
            </div>
        </div>
       <div class="textareas">
           <div class="textareas_title">
               亲，请你说说你的住宿感受
           </div>
           <div class="textareas_comments">
               <table>
                   <tr>
                       <td style="width:62px;height:120px;border:1px red solid;background-color: #EFEFEF;">服务体验</td>
                       <td style="width:440px;height:120px;border:1px red solid">
                           <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="fuwutiyan" style="width:444px;"></el-input>
                       </td>
                   </tr>
                   <tr>
                       <td style="width:62px;height:120px;border:1px red solid;background-color: #EFEFEF;">住宿体验</td>
                       <td style="width:440px;height:120px;border:1px red solid">
                            <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="zhusutiyan" style="width:444px;" id="zhusutiyan"></el-input>
                       </td>
                   </tr>
               </table>
           </div>
           
            
       </div>
       <div class="submit_comment">
           <div class="submit_comment_button">
               <el-button type="danger" style="height:25px;line-height:0px" v-on:click="submit_comments">提交评论</el-button>
           </div>
              
        </div>
        <div style="height:400px;width:200px">
           
        </div>
        </div>
       
    </div>
</template>

<script >
import { mapState, mapMutations } from 'vuex';
import sendAjaxPost from '../assets/js/httpPost'
export default {
    props:{
        id:Number
    },
    data(){
        return {
            arrays:'',
            zhusutiyan:'',
            fuwutiyan:''
        }
    },
   
    
    computed:mapState(['test']),
    methods:{
        submit_comments(){
            console.log(`"民宿id=>${this.id}"`)
            const textarea = document.getElementById('zhusutiyan').value
            const textareaValue = JSON.stringify(textarea);
            sendAjaxPost(`api/saveComments/${this.id}`,textareaValue)
           
        }
    },
    components:{
        
    }
}
</script>
<style lang="stylus">
.submit_comment_button
    margin-top:5px
.submit_comment
    width 1000px
    height 40px
    border 1px red solid 
.textareas_comments table tr td
    font-size 14px
.textareas_title
    font-size 16px
    font-weight bold
    height 40px
    width 600px
    line-height 40px
    text-align left 
    margin-left 20px
.textareas
    width 998px
    height 300px
    border 1px red solid 
#overBookding
    display inline-block
    text-align center
.je
    margin-left 20px
    width 200px
    line-height 42px
.jg
    float left
    width 100px
    line-height 42px
    color: rgb(145, 70, 105)
    font-size 20px
    font-weight bold
.booking_name
    width 100%
    height 40px
    border 1px black solid
    font-weight bold
    font-size 20px 
    text-align center
    line-height 40px
.booking_price
    width 400px
    height 40px
    border 1px green solid 
    clear both
.booking_show
    width 1000px
    height 450px
    position relative
.booking_show_img
    width 600px
    height 450px
    position absolute
    border-radius 20px  
    top 0px
    left 0px
    overflow hidden
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
.booking_show_img img 
    width 100%
    height 100%
    
.booking_show_details
    height 450px
    margin 0px 0px 0px 598px
    border 1px green solid 
</style>