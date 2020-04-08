<template>
    <div id="b">
        <div class="hududan">
            <div class="jsjnabw">
                <div style="color:white">小小民宿</div>
                <div><span style="color:#FFDF00">刘浩楠</span><button class="sjdandna">退出</button></div>
            </div>
            <div class="ksdhhaj">
                <button class="jsjda">房源管理</button>
                <button class="jsjda">入住管理</button>
                 <button class="jsjda">退房管理</button>
            </div>
        </div>
        <!-- 左边部分 -->
        <div class="jiejdna">
            <table>
                <tr>
                    <td style="width:200px;height:35px;border-bottom: 1px solid #e5e5e5;font-weight:900"><span>添加新的房源</span></td>
                </tr>
            </table>
        </div>
        <!-- main部分 -->
        <div class="jdiasdkn">
            <div class="joqwudna">
                <div class="jskoqnn">
                    <span>刘浩楠的民宿</span>
                </div>
                <div class="iiwopqwn">
                   <div class="iiwqnd">
                        <table class="nfjakasd" v-for="(item,index) in airbnbTable" v-bind:key="index">
                            <tr style="width:100%;height:100%" >
                                <Detail :change_event=change_event :item=item :installation=item.installation :index=index ></Detail>
                            </tr>
                        </table>
                   </div>
                    <div>
                        <el-button type="primary" plain style="margin-top:10px" v-on:click="changeairbnbInformation">添加</el-button>
                    </div>
                </div>
            </div>
        </div>
        
       <div class="ufhfabj" v-if="switch_airbnbInformation">
           <div class="dijaona">
                    <div class="ueenjdm">
                        <div v-on:click="changeairbnbInformation" style="position:relative;top:10px;left:10px;"><i class="el-icon-circle-close" ></i></div>
                    </div>
                   <table>
                        <tr>
                            <td>
                                <span >ID</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="airbnb_ID"  clearable></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>房源名称</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="name"  clearable></el-input>
                            </td>
                        </tr>
                            <tr>
                            <td>
                                <span>价格</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="price"  clearable></el-input>
                            </td>
                        </tr>
                            <tr>
                            <td>
                                <span>容纳人数</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="enoughPeople"  clearable></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>民宿地址</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="msaddress"  clearable></el-input>
                            </td>
                        </tr>
                            <tr>
                            <td>
                                <span>民宿城市</span>
                            </td>
                            <td>
                                <el-input placeholder="请输入内容" v-model="mscity"  clearable></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>民宿介绍</span>
                            </td>
                            <td>
                                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="introduction"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>民俗类型</span>
                            </td>
                            <td>
                                    <el-checkbox-group v-model="checkList">
                                        <el-checkbox label="整栋房源"></el-checkbox>
                                        <el-checkbox label="合租房源"></el-checkbox>
                                        <el-checkbox label="单独房间"></el-checkbox>
                                    </el-checkbox-group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>民宿设施</span>
                            </td>
                            <td>
                                <el-cascader  :options="options"  :props="props"  collapse-tags  clearable v-model="val" ></el-cascader>
                            </td>
                        </tr>
                   </table>
                    <div>
                        <Upload></Upload>
                    </div>
           </div>
            <div style="width:100%">
                    <el-button type="success"  v-on:click="addairbnb('add')" v-if="switch_edit_add">提交</el-button>
                   <el-button type="success" v-on:click="addairbnb('edit')" v-if="!switch_edit_add">修改</el-button>
            </div>
       </div>
      
         <div v-if="switch_installation"  class="tjnjfj">
            <Installation :installationObj=installationObj :ins_selected=ins_selected></Installation>
        </div>
        <div id="tmbjs" v-if="switch_tmbjs"></div>
    </div>
</template>
<script>
import Upload from './upload'
import Installation from'./installation'
import {mapState} from 'vuex'
import Detail from './detail'
import {submitphotos,submitairbnbmanagedata,editairbnbmanagedata,SUBMIT} from '../assets/js/apimethod'
export default {
    data() {
      return {
        //  switch_installation:false,
         props: { multiple: true },
         //提交数据后端放回的名宿数据表的_id
         homestayId:'',
         switch_airbnbInformation:false,
         tableData:[],
         index:0,
         action:'入住',
         switch_management:'',
         msaddress:'',
         airbnb_ID:'',
         installation:{},
         mscity:"",
         introduction:'',
         enoughPeople:0,
         room_type:'',
         price:0,
         name:"",
         val:'',
         textarea:'',
         switch_inputNotinput:undefined,
         switch_span:false,
         checkList:[],
         ins_selected:{}, //记录对应的设施是否被选择
         airbnbTable:[],
         options:[
             {
                 value:1,
                 label:'基础设施',
                 children:[
                     {
                         value:2,
                         label:'无线网络'
                     },
                     {
                         value:3,
                         label:'早餐'
                     },
                     {
                         value:4,
                         label:'洗发水'
                     },{
                         value:5,
                         label:'吹风机'
                     },
                      {
                         value:6,
                         label:'空调'
                     },
                     {
                         value:7,
                         label:'电视'
                     },
                     {
                         value:8,
                         label:'洗衣机'
                     },{
                         value:9,
                         label:'电脑桌'
                     },
                      {
                         value:10,
                         label:'衣架'
                     },
                     {
                         value:11,
                         label:'熨斗'
                     },
                     {
                         value:12,
                         label:'沐浴露'
                     },{
                         value:13,
                         label:'拖鞋'
                     },
                      {
                         value:14,
                         label:'矿泉水'
                     },
                     {
                         value:15,
                         label:'桌游'
                     },
                     {
                         value:16,
                         label:'厨房'
                     }
                 ]
             },
             {
                 value:17,
                 label:'配套设施',
                 children:[
                     {
                         value:18,
                         label:"免费停车位",
                     },
                      {
                         value:19,
                         label:"游泳池",
                     },
                      {
                         value:20,
                         label:"电梯",
                     },
                      {
                         value:21,
                         label:"健身房",
                     },
                      {
                         value:22,
                         label:"独立入口",
                     },
                      {
                         value:23,
                         label:"热水浴缸",
                     },
                       {
                         value:24,
                         label:"阳台",
                     }
                 ]
             },
             {
                 value:25,
                 label:'安全设施',
                 children:[
                     {
                         value:26,
                         label:'烟雾报警器'
                     },
                     {
                         value:27,
                         label:'一氧化碳报警器'
                     }
                 ]
             }
         ]
      }
    },
    computed:mapState(["files","switch_edit_add","reviewee_id","installationObj","switch_installation","switch_tmbjs"]),
    methods:{
        switch_management_event(methodname,index){
            var self = this
           class Management{
               switch_rzgl(){
                   self.switch_management = 'rzgl'
               }
               switch_tfgl(){
                   self.switch_management = 'tfgl'
               }
               switch_fygl(){
                   self.switch_management = 'fygl'
               }
               button_addcapable_event(){
                   var tableObj= {
                       "airbnb_ID":"111",
                       "introduction":"",
                       "price":"",
                       "enoughPeople":"",
                       "area":"",
                       "to_time":"",
                       "go_time":"",
                       "room_type":""
                   }
                   self.tableData.push(tableObj)
               }
               button_delcapable_event(index){
                   console.log(index)
                 self.tableData.splice(index,1)
               }
               //点击编辑按钮时的事件
               input_event(index){
                     self.switch_span=false
                     //把对应行的下标赋值给self.switch_inputNotinput
                   self.switch_inputNotinput=index
                   console.log(self.switch_inputNotinput)
               }
               blur_input_event(){
                   self.switch_span=true
                   self.switch_inputNotinput=undefined
               }
           }
           var manege = new Management()
           switch(methodname){
               case 'rzgl' :manege.switch_rzgl();break;
               case 'tfgl': manege.switch_tfgl();break;
               case 'fygl': manege.switch_fygl();break;
               case 'button_addcapable_event':manege.button_addcapable_event();break;
               case 'button_delcapable_event':manege.button_delcapable_event(index);break;
               case 'input_event':manege.input_event(index);break;
               case 'blur_input_event':manege.blur_input_event();break;
           }
        },
        // v-on:change="handlechangecascader()"
        handlechangecascader(){
            var self =this
            var installations={}
           //val是一个数组，数组的每个元素也是一个数组，里面是对应选择的按钮value
           function childrendigui(arr,subNum){
               arr.forEach((data)=>{
                   if(data.value==subNum){
                        installations[data.value]=data.label
                        console.log(self.installation)
                        console.log('房东选中的设施value=>',data.value,"房东选中的设施label=>",data.label)
                   }
                   else if("children" in data){
                       childrendigui(data.children,subNum)
                    }
               })
           }
           console.log(this.val)
           //初始化self.ins_selected
           self.ins_selected['jcss']=false
           self.ins_selected['ptss']=false;
           self.ins_selected['aqss']=false
           self.val.forEach((data)=>{
               var subNum = data[1]
                switch(data[0]){
                    case 1:self.ins_selected['jcss']=true;break;
                    case 17:self.ins_selected['ptss']=true;break;
                    case 25:self.ins_selected['aqss']=true;break;
                }
                childrendigui(self.options,subNum)
           })
           return installations
        },
        delval(){
            this.val =undefined
        },
        initData(){
            this.airbnb_ID="",
            this.name="",
            this.price="",
            this.enoughPeople="",
            this.msaddress="",
            this.mscity="",
            this.introduction="",
            this.checkList=[]
            this.val=""
        },
        fixedarr(){
            var installation=''
            if(this.val){
                installation =this.handlechangecascader()
            }
            var obj =  this.airbnbTable[this.index]
            obj.airbnb_ID=this.airbnb_ID,
            obj.name=this.name,
            obj.price=this.price,
            obj.enoughPeople=this.enoughPeople,
            obj.msaddress=this.msaddress,
            obj.mscity=this.mscity,
            obj.introduction=this.introduction,
            obj.checkList=this.checkList, 
            obj.installation=installation
        },
        changeairbnbInformation(){
            this.initData()
            this.$store.commit('edittrue')
            this.$store.commit("changeswitch_tmbjs")
            this.switch_airbnbInformation = !this.switch_airbnbInformation 
        },
       async addairbnb(label){
            console.log('用户点击了提交了新宿信息')
            var self=this
            if(this.files[0]){
                 var imgurl = window.URL.createObjectURL(this.files[0])
            }
            var installation =this.val?this.handlechangecascader():'';
            var obj ={
                airbnb_ID:this.airbnb_ID,
                name:this.name,
                price:this.price,
                enoughPeople:this.enoughPeople,
                msaddress:this.msaddress,
                mscity:this.mscity,
                introduction:this.introduction,
                checkList:this.checkList, 
                //installation还没传到后端
                installation:installation,
                imgurl:imgurl,
                reviewee_id:this.reviewee_id
            }
            //切换
            this.$store.commit("changeswitch_tmbjs")
            //切换
            this.switch_airbnbInformation = !this.switch_airbnbInformation
            //删除所有files
            //图片提交
            if(label=='add'){
                this.airbnbTable.push(obj)
                console.log('数据即将提交到后端')
                
               await SUBMIT(obj,this.files,(data)=>{
                      self.$store.dispatch('DELALLFILES')
                      self.homestayId = data
                      console.log('homestayId',self.homestayId)
                })
               console.log('this.homestayId',this.homestayId)
               console.log('异步转同步完成')
            }
            else if(label=='edit'){
                console.log('用户开始修改数据')
                console.log(`'修改前airbnbTable[${this.index}]=${this.airbnbTable[this.index]}'`)
                //前端显示部分
                this.fixedarr()
                console.log(`'修改后airbnbTable[${this.index}]=${this.airbnbTable[this.index]}'`)
                //后端照片部分
                if(this.files.length!=0){
                    submitphotos(this.files,this.homestayId)
                }
                //后端数据部分
                editairbnbmanagedata(obj,this.homestayId)
            }
            //删除val
            this.delval()
        },
        change_event(index){
            this.switch_airbnbInformation = !this.switch_airbnbInformation 
            var airbnbcell = this.airbnbTable[index]
            this.airbnb_ID = airbnbcell.airbnb_ID
            this.name = airbnbcell.name
            this.price = airbnbcell.price
            this.enoughPeople = airbnbcell.enoughPeople
            this.msaddress = airbnbcell.msaddress
            this.mscity= airbnbcell.mscity
            this.introduction = airbnbcell.introduction
            this.checkList = airbnbcell.checkList
            this.val = airbnbcell.val
            this.index = index
        }
    },
    components:{
        Upload,
        Installation,
        Detail
    }
}
</script>
<style lang="stylus" scoped>
.tjnjfj
    position:fixed;
    top:50%
    transform translateY(-50%)
    background white
    display inline-block
    left 450px
    z-index 2
    border-radius 10px
.ionehhj
    border 0px
    background white
    color #009f7b
    font-size 13px
    margin-left -6px
.iwqinff
    height 180px

.dafuhsda
    width 100%
    height 100%
.ueenjdm
    position fixed
    top 80px 
    left 940px
.dijaona table tr
    height:55px
.dijaona
    margin-top 30px
    margin-left 50px
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
.trjshduiaund
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
.ieifakfnkla
    margin-top -30px
.duuena
    font-weight bold
.diwindn
    text-align left
.owondnaaa
    width 200px
    height:100%;
    padding-left:10px
.owondna
    width:253px;
    height:100%;
    padding-left:10px
.owondnas
    width:250px;
    height:100%;
    padding-left:10px
.nfjakasd
    width 100%
    height 100%
.iiwqnd
    width 95%
    margin-left 20px
.iiwopqwn
    width 100%
    height 670px
    overflow-y:auto;
    border: 1px solid #ebebeb;
.joqwudna
    width 90%
    height 90%
    margin-top 20px
    margin-left 60px
.jskoqnn
    border 1px solid #e5e5e5
    width 100px
    height 50px
    font-size 15px
    line-height 50px
    background #f2f2f2
.jsjnabw
    margin-right 1000px
    position absolute
    width 350px
    transform translateY(8%)
    font-size: 14px;    
.sjdandna
    border 0px
    background #009f7b
    color white
.jsjda
    border 0px
    background #009f7b
    color white
    font-weight bold
    font-size 15px
    margin-left 30px
.ksdhhaj
    transform translateY(50%)
    margin-left 900px
.jdiasdkn
    margin 0px 0px 0px 200px
    height 700px
.jiejdna
    position absolute
    width 200px
    height 750px
    background #f2f2f2
.hududan
    width 100%
    height 50px
    background: #009f7b
.iisajasn
    width 310px
    height 80px
.ufhfabj
    width 500px
    height 700px
    position fixed
    top 70px
    left 500px
    z-index:2
    background white
    border-radius 10px
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
.ieirhas
    border 0px
    width:40px
    height 30px
    border-radius 5px
    font-weight bold
    font-size 12px
    background #4EEE94
.el-aside {
    color: #333;
}
.rereasd
    width 100%
</style>