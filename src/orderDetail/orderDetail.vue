<template>
    <div class="orderDetails">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title" ><i class="el-icon-message"></i>我的订单 </template>
                    <el-menu-item index="2-1" v-on:click="methodsClass('switch_wddd_event')">我的全部订单</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>个人中心</template>
                    <el-menu-item-group>
                    <template slot="title"></template>

                    <el-menu-item index="2-1" v-on:click="methodsClass('switch_wdsc_event')">我的收藏</el-menu-item>
                    <el-menu-item index="2-2">我的点评</el-menu-item>
                    <el-menu-item index="2-2">我的信息</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </el-aside>
        
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                    </el-dropdown>
                </el-header>
                <!-- 我的订单 -->
                <div v-if="switch_wddd_wdsc">
                        <div class="el-container-div1">
                            <ul>
                                <li v-on:click="methodsClass('switch_wdqbdd_event')"><button class="wddd_button">我的全部订单</button></li>
                                <li class="el-container-div-ul-li2" v-on:click="methodsClass('switch_ddp_event')"><button class="ddp_button">待点评</button></li>
                            </ul>
                        </div>
                        <div class="el-container-div2">
                            <!-- 我的全部订单 -->
                            <table v-if="switch_wddd_ddp"> 
                                <tr style="height:38px;" class="tr1">
                                    <td class="el-container-div2-td1">产品信息</td>
                                    <td class="el-container-div2-td2">订单金额</td>
                                    <td class="el-container-div2-td3">订单编号</td>
                                    <td class="el-container-div2-td4">订单状态</td>
                                    <td class="el-container-div2-td5">订单操作</td>
                                </tr>
                                <tr rowspan="3" v-for="(orderItem,index) in orderDetailVueData" v-bind:key = "index">
                                    <!-- <tr rowspan="3"> -->
                                    <td>
                                        <div class="el-container-div2-tr2-div">
                                            <div class="el-container-div2-tr2-div-div">
                                                <img :src="orderItem.Picture_url" alt="">
                                            </div>
                                            <div style="width:255px;height:22px;margin-left:40px;">
                                                <div><span>{{orderItem.Name}}</span></div>
                                                <div>入住时间：{{orderItem.totime}}</div>
                                                <div>离店时间：{{orderItem.gotime}}}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {{orderItem.Price}}
                                    </td>
                                    <td>
                                        {{orderItem.OrderNumber}}
                                    </td>
                                    <td>
                                        待点评
                                    </td>
                                    <td>
                                        <router-link :to="{path:`/Overbookings?ID=${orderItem.Ms_id}`}"><button>我要点评</button></router-link>
                                        <div>查看订单</div>
                                    </td>
                                </tr>
                            </table>
                            <!-- 待点评 -->
                            <table v-if="!switch_wddd_ddp">
                                <tr style="height:38px;" class="tr1">
                                    <td class="el-container-div2-td1">产品信息</td>
                                    <td class="el-container-div2-td2">订单金额</td>
                                    <td class="el-container-div2-td3">订单编号</td>
                                    <td class="el-container-div2-td4">订单状态</td>
                                    <td class="el-container-div2-td5">订单操作</td>
                                </tr>
                                <tr rowspan="3" v-for="(orderItem,index) in orderNotAppraiseData" v-bind:key = "index">
                                    <!-- <tr rowspan="3"> -->
                                       <td>
                                        <div class="el-container-div2-tr2-div">
                                            <div class="el-container-div2-tr2-div-div">
                                                <img :src="orderItem.Picture_url" alt="">
                                            </div>
                                            <div style="width:255px;height:22px;margin-left:40px;">
                                                <div><span>{{orderItem.Name}}</span></div>
                                                <div>入住时间：{{orderItem.totime}}</div>
                                                <div>离店时间：{{orderItem.gotime}}}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {{orderItem.Price}}
                                    </td>
                                    <td>
                                        {{orderItem.OrderNumber}}
                                    </td>
                                    <td>
                                        待点评
                                    </td>
                                    <td>
                                        <button>我要点评</button>
                                        <div>查看订单</div>
                                    </td>
                                </tr>
                            
                            </table>
                        </div>
                </div>
                <!-- 我的收藏 -->
                <div v-if="!switch_wddd_wdsc" class="ieionenk">
                    <div v-if="true">
                     <table>
                                <tr style="height:38px;" class="tr1">
                                    <td class="el-container-div2-td1">产品信息</td>
                                    <td class="el-container-div2-td2">订单金额</td>
                                    <td class="el-container-div2-td3">订单编号</td>
                                    <td class="el-container-div2-td4">订单状态</td>
                                    <td class="el-container-div2-td5">订单操作</td>
                                </tr>
                                <tr rowspan="3" v-for="(orderItem,index) in collect_data" v-bind:key = "index" class="fuiafhodna">
                                        <td>
                                            <div class="el-container-div2-tr2-div">
                                                <div class="el-container-div2-tr2-div-div">
                                                    <img :src="orderItem.Picture_url" alt="">
                                                </div>
                                                <div style="width:255px;height:22px;margin-left:40px;">
                                                    <div><span>{{orderItem.Name}}</span></div>
                                                    <div>入住时间：{{orderItem.totime}}</div>
                                                    <div>离店时间：{{orderItem.gotime}}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {{orderItem.Price}}
                                        </td>
                                        <td>
                                            {{orderItem.user_id}}
                                        </td>
                                        <td>
                                            待下单
                                        </td>
                                        <td>
                                            <button>我要下单</button>
                                            <div>查看收藏</div>
                                        </td>
                                </tr>
                            
                            </table>
                    </div>
                </div>
            </el-container>
        </el-container> 
    </div>
</template>
<script>
import sendAjax from'../assets/js/http'
import {mapState} from'vuex'
import Api_class from '../assets/js/api_class'
export default {
    props:{
        _id:'' //用户表的id
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        switch_wddd_ddp:true,
        switch_wddd_wdsc:true,
        collect_data:[]
      }
    },
    mounted(){
        const url = `api/getorderdetail?_id=${this._id}`
        console.log('开始发送接口，this._id=>',this._id)
       sendAjax(url,(data)=>{
           const temporary_arr = []
           this.$store.commit("updateorderDetailVueData",data)
           console.log('1. orderDetailVueData赋值')
           this.$store.commit('computedorderNotAppraiseData')
           console.log('2. 待评价orderNotAppraiseData赋值')
           this.$store.commit('accordingIDmergenews')
           console.log('3. 根据ID整合信息mergenews赋值')
       });
       const temporary_div_class = 'el-submenu__title'
       document.getElementsByClassName(temporary_div_class)[0].addEventListener('click',this.switch_wddd_event)
    },
    computed:mapState(['orderDetailVueData','orderNotAppraiseData','user_info']),
    methods:{
        methodsClass(methods_name){
            const self = this
            
            class Main_methods extends Api_class{
                switch_ddp_event(){
                    self.switch_wddd_ddp = false
                }
                switch_wdqbdd_event(){
                        self.switch_wddd_ddp = true
                }
                switch_wdsc_event(){
                    //获取收藏数据的url
                     self.switch_wddd_wdsc = false
                     //设置只发送一次请求
                     /* 
                     发送的情况
                     1.数组this.collect_data等于空数组
                     */
                    if(self.collect_data.length==0){
                            const url = `api/getshoppingcar/${self._id}`
                            super.api_sendajax(url,(data)=>{
                                console.log('后端放回到的收藏夹数据',data.message)
                                self.collect_data = data.message.shoppingCar_list
                                console.log('收藏夹的数据collect_data:',self.collect_data)
                            })
                    }
                }
                switch_wddd_event(){
                    self.switch_wddd_wdsc = true
                }
            }

            var _main = new Main_methods()
           
            console.log('实例_main',_main)
            
            switch(methods_name){
                //待点评
                case 'switch_ddp_event' :_main.switch_ddp_event();break;
                //我的全部订单
                case 'switch_wdqbdd_event' :_main.switch_wdqbdd_event();break;
                //显示我的收藏
                case 'switch_wdsc_event' : _main.switch_wdsc_event();break;
                //显示我的订单
                case 'switch_wddd_event' :_main.switch_wddd_event();break;
            }
        },  
    }
}
</script>
<style lang="stylus" >
.ieionenk div table .fuiafhodna td
    padding-top:20px
._fafjak
    font-weight:bold
.ddp_button
    border 0px
    background white
    font-weight bold
.wddd_button
    border 0px
    background white
    font-weight bold
.el-container-div2-tr2-div
    margin-left 30px
.el-container-div2-tr2-div-div
    float left 
    width 115px
    height 86px
.el-container-div2-tr2-div-div img 
    width 100%
    height 100%
.el-container-div2 table tr td
    font-size 13px
    text-align center
.el-container-div2-td1
    width 385px
    height 38px
.el-container-div2-td2
    width 260px
    height 38px
.el-container-div2-td3
    width 250px
    height 38px
.el-container-div2-td4
    width 162px
    height 38px
.el-container-div2-td5
    width 180px
    height 38px
.el-container-div1
    width 1222px
    height 50px
    border-bottom  1px red solid 
.el-container-div1 ul li
    list-style-type none 
    float left
    font-weight bold
.el-container-div-ul-li2
    margin-left 50px
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
.orderDetails
    margin-top:100px
</style>