<template>
<div id="head">
    <ul id="firstUl" v-if="switchParams">

        <li v-for="(item,index) in HomestayInformation" v-bind:key="index">
            <router-link :to="{path:`detailPage?q=${item.ID}&&user_id=${user_info._id}`}" target="_blank">
            <div id="merge" >
                    <div style="width :300px; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;">
                        <img :data-url="item.homestayDetail.picture_url" :src='blank' alt="qing" style="width:100%;height:100%">
                    </div> 
            <div id="head-body2">
                <div class="head-body2_item1">
                    <span>{{item.homestayDetail.kicker_content.messages}}</span>
                </div>
                <div class="head-body2_item2">
                    <span class="span_name">{{item.homestayDetail.name}}</span>
                </div>
                <div class="head-body2_item3">
                     <div  class="sub1_head-body2_item3">
                         <span>4.9分</span>
                         <span>333条评论</span>
                     </div>
                     <div  class="sub2_head-body2_item3">
                         <span>超赞房东</span>
                     </div>
                     <div  class="sub3_head-body2_item3">
                         <span>可以做饭</span>
                     </div>
                </div>
            </div>
            </div>
            </router-link>
        </li>
        
    </ul>
    <div v-if="switchParams"><el-pagination background layout="prev, pager, next" :total="170" @size-change="sizeChange" @current-change="currentChange" @prev-click="precClick" @next-click="nextClick"></el-pagination></div>
    <div id="tableheader">
        <table id="nonemapcontain" v-if="!switchParams">
            
        <tr style="height:50px;">
        </tr>
        <tr>
            <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><router-link to="/detailPage"><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[0].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[0].homestayDetail.name}}</div></router-link><!--</div>--></div>
            </td>
             <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[1].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[1].homestayDetail.name}}</div><!--</div>--></div>
            </td>
             <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[2].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[2].homestayDetail.name}}</div><!--</div>--></div>
            </td>
             <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[3].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[3].homestayDetail.name}}</div><!--</div>--></div>
            </td>
             <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[4].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[4].homestayDetail.name}}</div><!--</div>--></div>
            </td>
        </tr>
        <tr>
           <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[5].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[5].homestayDetail.name}}</div><!--</div>--></div>
            </td>
            <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[6].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[6].homestayDetail.name}}</div><!--</div>--></div>
            </td>
           <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[7].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[7].homestayDetail.name}}</div><!--</div>--></div>
            </td>
          <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[8].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[8].homestayDetail.name}}</div><!--</div>--></div>
            </td>
            <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[9].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[9].homestayDetail.name}}</div><!--</div>--></div>
            </td>
        </tr>
        <tr>

        </tr>
        <tr>
           <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[10].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[10].homestayDetail.name}}</div><!--</div>--></div>
            </td>
            <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[11].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[11].homestayDetail.name}}</div><!--</div>--></div>
            </td>
           <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[12].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[12].homestayDetail.name}}</div><!--</div>--></div>
            </td>
           <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[13].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[13].homestayDetail.name}}</div><!--</div>--></div>
            </td>
            <td style="height:342px;"><div id="fatherbackroundimg"><!--<div id="fatherbackroundimg">--><div id="backgroundimg" :style="{ backgroundImage: 'url( '+ HomestayInformation[14].homestayDetail.picture_url+' )'}" style="background-size:100%;background-repeat:no-repeat;"></div><div id="beforeImg">{{HomestayInformation[14].homestayDetail.name}}</div><!--</div>--></div>
            </td>
        </tr>
    </table>
    <div v-if="!switchParams"><el-pagination background layout="prev, pager, next" :total="140" @size-change="sizeChange" @current-change="switchcCurrentChange"></el-pagination></div>
    </div>
    
</div>
</template>
<script>
import $ from 'jquery';
import { mapState } from 'vuex';
export default {
  props:{
      HomestayInformation:Array,  //后端发送过来的数据
      /**
       * 
       *分页按钮位置:switchParams
       **/
      switchParams:Boolean, 
      inputData:String
  },
  data () {
      return {
          picture_Urls:'',
          currentPage:0,
          arr:[],
          str:'http://www.baidu.com',
          id:1313 //测试使用
      }
  },
  computed:mapState(['user_info']),
  created:{
      
  },
  /**
   * 当用户点击分页按钮
   * 渲染的内容是从下往上
   * 懒加载应该是从下往上
    */
//   updated(){
//         if(this.switchParams){
//         /* 
//         * 变量声明和赋值
//          */
//         var self =this;
//         var headBody1Toimg = "#head-body1>#head>ul>li>a>div>div>img"
//         var headToimg = '#head>ul>li>a>div>div>img'
//         var scrolltop = $('#head-body1')[0].scrollTop;
//         var item = $(headBody1Toimg);

//          /* 
//         * 逻辑实现
//          */
//         if(scrolltop>0&&item.length>0){
//             var length = $(headToimg).length;
//             for(var i=length-1;i>0;i--){
//                  if(item[i].src!=''){
//                         continue;
//                 }
//                 var offsetTop = item[i].offsetTop;
//                 var scrollTop = $('#head-body1')[0].scrollTop;
//                 var clientHeight = $('#head-body1')[0].clientHeight;

                
//                 if(offsetTop-scrollTop<clientHeight){
//                     self.arr.push(item[i]);
//                 }
//             }
//         }
//       }
        
//   },
//   watch:{
//    arr(newValue,oldValue){
//      this.arr.forEach((data)=>{
//          data.src = data.getAttribute('data-url');
//      })
//     }
//   },
  methods:{
      currentChange(currentPage){
          this.currentPage = currentPage;
          this.$http.get(`api/index/home/${this.currentPage}?input="${this.inputData}"`).then((data)=>{
              this.HomestayInformation = data.data;
          })
      },
      switchcCurrentChange(currentPage){
        this.currentPage = currentPage;
        console.log(1)
        this.$http.get(`api/index/home/${this.currentPage}?input="${this.inputData}"`).then((data)=>{
                this.HomestayInformation = data.data;
            })
      }
  }
}
</script>
<style lang="stylus" scoped>
.sub3_head-body2_item3
    width 100px
    height 30px
    border-width 0px
    border-radius 30px
    border-style solid
    background rgb(242, 242, 242)
    opacity 70%
    margin-left 30px
    float left
    color rgb(72, 72, 72)
    font-size 13px
    line-height 30px
.sub2_head-body2_item3
    width 100px
    height 30px
    border-width 0px
    border-radius 30px
    border-style solid
    background rgb(247, 243, 234) 
    opacity 70%
    margin-left 30px
    float left
    color rgb(138, 36, 0)
    font-size 13px
    line-height 30px
.sub1_head-body2_item3
    width 120px
    height 30px
    border-width 0px
    border-radius 30px
    border-style solid
    background rgb(234, 247, 234)
    opacity 70%
    margin-left 30px
    float left
    color rgb(41, 110, 0)
    font-size 13px
    line-height 30px
.head-body2_item2
    height :30px;
    width 100%
#firstUl li a
    text-decoration none
.head-body2_item1
    font-size:11px
    color #767676
    font-weight bold
    width 100%
    height 30px
    margin-top 20px
    text-align left
    padding-left 10px
#beforeImg
   margin-top:10px;
   white-space pre-wrap;
#fatherbackroundimg
    position absolute;
    top:20px;
    left:15px;
    width :90%;

#backgroundimg
    width :100%;
    height:200px;
.span_name
    font-family :Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    height :30px;
    font-weight :bold;
    word-break:normal;
    width:auto; 
    display:block; 
    white-space:pre-wrap;
    word-wrap : break-word
    color black
    text-align left 
    padding-left 10px
#nonemapcontain tr td div img 
    padding-bottom:85px;
#nonemapcontain
    border :green 1px solid;
    width :100%;
    height :1140px;
#nonemapcontain tr td
    border :green 1px solid ;
    width :94px;
    position relative;
#merge
    display:flex;
    flex-direction:row;
    height :200px;
ul li
    list-style-type:none;
    margin-top:20px;
#head-body1
    width :300px;
    border:1px black solid 
#head-body2
    width :530px;
    border: 1px solid rgb(235, 235, 235);
    white-space:pre-wrap;
   
#fatherbackroundimg a
    text-decoration:none;
    color:black;
</style>