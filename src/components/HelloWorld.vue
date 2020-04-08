<template>
  <div class="hello">
    <div id="sskwz">
      <table>
        <tr>
          <td>
            <router-link to="/initPage" target="_blank" ><i class="el-icon-s-home"></i></router-link>
          </td>
          <td>
            <div class="sskwz_div">
              <input id="srk" v-model="inputdata" placeholder="任何目的房源" style="width:300px" @blur="inputShow" class="srkk">
            </div>
          </td>
          <td style="padding-left:750px">
              <div>
                <Nav></Nav>
              </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="tags">
        <div style="margin-top:28px">
          <Select_common :large_Num=4 :changepeopleNunber=peopleNumber :getairbnbByPEOPLE=axiosBypeopleNum></Select_common>
        </div>
        <div >
          <div style="margin-top:-30px;margin-left:30px"><Type_airbnb :changecheck=changetypeairbnb></Type_airbnb></div>
        </div>
        <div >
            <div style="margin-top:-5px;margin-left:30px">
                <PriceControl :changePRICE=changeprice></PriceControl>
          </div>
        </div>
        <div style="margin-left:800px">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" change=""></el-switch>
        </div>
     </div>
    <div id="hello_div" v-if="this.$store.state.switch_selected_number||this.$store.state.switch_selected_typeairbnb||this.$store.state.switch_selected_price  "></div>
    <div class="head-body" v-if="value">
      <div id="head-body1">
            <showHomeStay :HomestayInformation='HomeStay' :switchParams="value" :inputData="input"></showHomeStay>
      </div>
      <div id="head-body2" ><baidu-map  class="bm-view" :zoom="zoom" :center="center">
         <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
         <bm-local-search :keyword="input" :auto-viewport="true" :location="location" :panel="false"></bm-local-search>
        </baidu-map>
      </div>
    </div>
    <div id="nonemap" v-if="!value">
      <showHomeStay :HomestayInformation='HomeStay' :switchParams="value" :inputData="input"></showHomeStay>
    </div>
  </div>
</template>

<script>
import showHomeStay from './showHomeStay';
import PriceControl from '../commonComponent/price_Control'
import sendAjax from '../assets/js/http'
import Type_airbnb from '../commonComponent/type_airbnb'
import $ from 'jquery';
import laggers from '../assets/js/laggers'
import Nav from '../commonComponent/nav'
import {
　　BaiduMap,
　　BmControl,
　　BmView,
　　BmAutoComplete,
　　BmLocalSearch,
　　BmMarker
} from "vue-baidu-map";
import Select_common from '../commonComponent/selected_common'
export default {
  name: 'HelloWorld',
  props:{
    inputdata:''
  },
  data() {
    let self = this;
    return {
      msg: 'Welcome to Your Vue.js App',
      keyword:'百度',
      lcoation:'北京',
      center:{lng: 0, lat: 0},  
      zoom:3,
      HomeStay:[],
      value:true,
      data:new Date(),
      value1: '',
      arr:[],
      switch_Number_notNumber:true,
      //三个减少搜索范围的组件变量
      adultNumber:0,//人数,
      childrenNumber:0,
      babyNumber:0,
      typeairbnb:'',
      minprice:0,
      maxprice:0
    }
  },
  computed:{
  },
  mounted(){
    var baiduObj = new BaiduMap('allmap')
    console.log("百度地图api实例:",baiduObj)
  },

 //页面被渲染，还未滑动时，显示图片
  updated(){
  //  console.log(this.inputdata)
    /**
     * @descript 写在这里的原因是：父组件和子组件渲染时是同一套html代码
     *   */
    if(this.value){
      var self =this;
      var scrolltop = $('#head-body1')[0].scrollTop;
      const str = '#head-body1>#head>ul>li>a>div>div>img'
      var item = $(str);
      if(scrolltop<=0&&item.length>0){
        var length = $(str).length;
        for(var i=0;i<length;i++){
     
          var offsetTop = item[i].offsetTop;
          var scrollTop = $('#head-body1')[0].scrollTop;
          var clientHeight = $('#head-body1')[0].clientHeight;
          if(offsetTop-scrollTop<clientHeight){
              self.arr.push(item[i]);
          }
      }
    }
    //绑定scroll事件
    $(document).ready(()=>{
          $('#head-body1').scroll(()=>{
              var length = $('#head-body1>#head>ul>li>a>div>div>img').length;
              var item = $('#head-body1>#head>ul>li>a>div>div>img');
              for(var i=0;i<length;i++){
                  if(item[i].src!=''){
                    continue;
                  }
                  var offsetTop = item[i].offsetTop;
                  var scrollTop = $('#head-body1')[0].scrollTop;
                  var clientHeight = $('#head-body1')[0].clientHeight;
                  if(offsetTop-scrollTop<clientHeight){
                    self.arr.push(item[i]);
                  }
              }
          })
      })
    }
    
  },
  //跟踪arr，值变化，说明有新的img标签可以被渲染图片
  watch:{
    arr(newValue,oldValue){
      this.arr.forEach((data)=>{
        data.src = data.getAttribute('data-url');
      })
    }
  },
  methods:{
    /**
     * 用户通过输入框输入信息，并发送axios请求
     */
    inputShow(){
      const url  = `api/index/home/1?input="${this.inputdata}"`
      sendAjax(url,(data)=>{
        console.log('放回的民宿',data)
        this.HomeStay = data
      })
    },
    handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
    },
    change_switch_State(){
      this.value = !this.value
    },
    peopleNumber(num,newValue){
      switch(num){
        case 1:this.adultNumber = newValue;console.log('改变了成人的数量');break;
        case 2:this.childrenNumber = newValue;console.log('改变了小孩的数量');break;
        case 3:this.babyNumber = newValue;console.log('改变了婴儿的数量');break;
      }
    },
    changetypeairbnb(value){
      this.typeairbnb = value
      console.log('typeairbnb',this.typeairbnb)
    },
    changeprice(one,two){
      this.minprice = one
      this.maxprice = two
      console.log('最低价格',this.minprice,'最高价格',this.maxprice)
    },
    axiosBypeopleNum(){
      var obj = {
        'adult':this.adultNumber,
        'children':this.childrenNumber,
        'baby':this.babyNumber,
        'airbnbtype':this.typeairbnb,
        'minprice':this.minprice,
        'maxprice':this.maxprice
      }
      const url = `api/api/index/home/1?input="${this.inputdata}&&obj=${obj}`
    }
  },

  components:{
    showHomeStay,
    Select_common,
    Type_airbnb,
    PriceControl,
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.srkk
  position fixed
  height 43px
  width 100%
  top 10px
  left 155px
.sskwz_div
  height 43px
  width 100%
#hello_div
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color:#FFFF;
    filter:(opacity=80);
    -moz-opacity:0.8;
    opacity:0.7;
    z-index 1
#adult_add
  border-color: rgb(0, 132, 137) !important;
#adult_up
  border-color: rgb(0, 132, 137) !important;
.el_button_numberPeople_div_button
    width 30px
    height 30px
    border-width: 1px !important;
    background: transparent !important;
    border-style: solid !important;
    border-radius: 50% !important;
.el_button_numberPeople
  position:fixed
  z-index 2
#head-body2{
  white-space: nowrap;
}
.bm-view {
  width: 100%;
  height: 620px;
}
#srk{
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
   border:0px
  height:40px; 
  width 300px
  border-radius 3px
  margin-left:90px
}
/* input:focus{outline:none;} */
#nonemap{
  overflow-y :auto;
    white-space: nowrap;
}
#hello{
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}
#sskwz{
  display: table;
  border-spacing: 0xp;
  width 100%
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tags{
  display: flex;
  width: 1423px;
  border-top: 2px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
  margin-top:20px;
  height: 50px;
  align-items: center;
}
.head-body{
  display: table;
  border-spacing: 20xp;
  width: 100%;
  position: relative;
  margin-top:30px;
}
#head-body1{
white-space: nowrap;/*文本不会换行，文本会在在同一行上继续*/
overflow-y:auto; 
position:absolute;
top: 0px;
left:0px;
border: 1px solid rgb(235, 235, 235);
height:600px;
margin: 0 px;
width: 920px;
display: flex;
justify-content: center;
padding-top:20px; 
}
#head-body2{
position: absolute;
top: 0px;
right: 5px;
height: 620px;
width: 473px;
margin-right: -10px;
}
#nonemap{
 width:100%;
 height:620px;
 border: #42b983 1px solid;
 margin-top:15px; 
}
</style>

