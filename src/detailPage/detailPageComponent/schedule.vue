<template>
    <div id="schedule">
        <div id="schedule_one">
            <div class="schedule_one_div1">
                <span style="margin-left:-200px;line-height:60px;font-size:25px;font-weight:bold">180</span><span>每晚</span>
            </div>
            <div class="schedule_one_div2">
                <div style="width:100px;position:absolute;top0px;left:0px;margin-left:20px"> <Star :starWidth=20 :starHeight=20></Star></div>
               <div style="margin:0px 180px 0px 100px">119条</div>
            </div>
        </div>
        <div style="margin-top:5px">
            <div><span style="margin-left:-300px">日期</span> </div>
            <div>
                <table>
                    <tr>
                        <td style="padding-left:20px">  <el-date-picker v-model="toairbnb_time" type="date" placeholder="选择日期" style="width:160px"></el-date-picker></td>
                        <td style="padding-right:20px"> <el-date-picker v-model="goairbnb_time" type="date" placeholder="选择日期" style="width:160px"></el-date-picker></td>
                    </tr>
                </table>    
            </div>
            <div style="margin-top:20px">
                <div><span style="margin-left:-300px">人数</span> </div>
                <div style="margin-left:20px;margin-top:10px"><Selected :large_Num=4></Selected></div>
                <div style="margin-top:10px">
                  <el-button type="danger" v-on:click="button_add_shoppingCar_event">收藏</el-button>
                   <el-button type="danger" v-on:click="button_buy_airbnb_event">下单</el-button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import sendAjaxPost from '../../assets/js/httpPost' 
import Selected from '../../commonComponent/selected'
import {mapState} from 'vuex'
import Star from'../../commonComponent/star'
export default {
    props:{
        _id:'',
        id:''
    },
    data(){
        return {
            toairbnb_time:'',
            goairbnb_time:'',
            
        }
    },
    mounted(){
        console.log('进入收藏功能的组件的_id=>',this._id)
    },
    computed:mapState(['msxx_homestaydetailssy','switch_zdc']),
    methods:{
        button_add_shoppingCar_event(){
            //
            if(this.toairbnb_time ==""||this.goairbnb_time ==""){
                alert("请输入入住时间或者离开时间")
            }else{
                
                 if(this._id){
                        console.log("路由参数_id=>",this._id)
                        const url = `api/addshoppingcar`

                        const Post_order_data = {}
                        Post_order_data.user_id = this._id
                        Post_order_data.id = this.id
                        Post_order_data.picture_url = this.msxx_homestaydetailssy.picture_url
                        Post_order_data.price  =this.msxx_homestaydetailssy.pricing_quote.amount_formatted
                        Post_order_data.name=this.msxx_homestaydetailssy.name
                        Post_order_data.toairbnb_time = this.toairbnb_time
                        Post_order_data.goairbnb_time = this.goairbnb_time
                        console.log('Post_order_data=>',Post_order_data)

                        sendAjaxPost(url,Post_order_data,(data)=>{
                            console.log("发送到后端了")
                        })
                 }else{
                     //登录组件
                     console.log('执行else')
                     this.$store.commit('updateswitch_zdc')
                 }
          
            }
           
        },
        button_buy_airbnb_event(){
            const new_user_id = window.localStorage.getItem('user_id')
            if(this.toairbnb_time ==""||this.goairbnb_time ==""){
                alert("请输入入住时间或者离开时间")
            }else{
                if(new_user_id){
                    const url = `api/placeOrder/`

                    const Post_order_data = {}
                    Post_order_data.user_id = this._id
                    Post_order_data.id = this.id
                    Post_order_data.picture_url = this.msxx_homestaydetailssy.picture_url
                    Post_order_data.price  =this.msxx_homestaydetailssy.pricing_quote.amount_formatted
                    Post_order_data.name=this.msxx_homestaydetailssy.name
                    Post_order_data.toairbnb_time = this.toairbnb_time
                    Post_order_data.goairbnb_time = this.goairbnb_time
                    console.log('Post_order_data=>',Post_order_data)

                    sendAjaxPost(url,Post_order_data,(data)=>{
                        console.log("发送到后端了")
                    })
                }else{
                    this.$store.commit('updateswitch_zdc')
                }
              
            }
        }
    },
    components:{
        Selected,
        Star
    }
}
</script>
<style lang="stylus">
#schedule
    width 376px
    height 380px
    box-shadow:rgba(0,0,0,0.15) 0px 2px 6px
#schedule_one
    width 326px
    height 89px
.schedule_one_div1
    height 60px
    width 326px
.schedule_one_div2
    padding-left 23px
    width 326px
    height 29px

</style>