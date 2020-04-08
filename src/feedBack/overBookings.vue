<template>
    <div id="overBook_wrap">
        <!-- 头部的星级评价 -->
        <div class="overBook_head">
            <table>
                <tr>
                    <td class="overBook_head_td">
                        <div class="overBook_head_td_div1"><span>房源信息准确度</span></div>
                        <div class="overBook_head_td_div2"><el-rate v-model="airbnb_accurate" show-score></el-rate></div>
                    </td>
                    <td class="overBook_head_td">
                        <div class="overBook_head_td_div1"><span>客服服务态度</span></div>
                        <div class="overBook_head_td_div2"><el-rate v-model="airbnb_serve" show-score></el-rate></div>
                    </td>
                    <td class="overBook_head_td">
                        <div class="overBook_head_td_div1"><span>房源舒适度</span></div>
                        <div class="overBook_head_td_div2"><el-rate v-model="airbnb_comfortable" show-score></el-rate></div>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
        <!-- 主要部分 -->
        <div class="overBook_main">
            <!-- 房源信息展示 -->
            <div class="house_information">
                <div class="house_information_div1">
                   <div class="sub_house_information">
                        <img src="https://z1.muscache.cn/im/pictures/bf36c17c-3d97-447b-8258-42862d74de43.jpg?aki_policy=large" alt="" class="house_information_img">
                   </div>
                </div>
                <div class="house_information_div2">
                    <div class="house_information_temporary_class">
                        <div class="marginTop_class">
                            <div class="float_class"><span>一阿松大</span></div>
                            <div class="marginTop_class distance_class">价格</div>
                        </div>
                        <div class="marginTop_class"><span style="margin-left:-480px">入住时间</span></div>
                        <div class="marginTop_class"><span style="margin-left:-480px">离开时间</span></div>
                        <div class="marginTop_class"><span style="margin-left:-480px"   >订单编号</span></div>
                    </div>
                </div>
            </div>
            <!-- 评价部分 -->
            <div class="house_appraise">
                <div class="house_appraise_div1">
                    <div style="float:left;margin-left:50px;"><span>房源评分</span></div>
                    <div style="width:300px"><el-rate v-model="airbnb_appraise" show-score></el-rate></div>
                </div>
                <div style="margin-top:20px">
                    <div>
                        <span style="margin-left:-820px;">订购者印象</span>
                    </div>
                    <!-- 8个给定标签 -->
                    <div class="house_appraise_label">
                        <table class="house_appraise_label_table">
                            <tr>
                                <td>
                                    <el-tag class="masfadas" v-on:mouseover.native="mouse_label_event">物超所值</el-tag>
                                    <!-- <el-button>物超所值</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">超赞房东</el-tag>
                                    <!-- <el-button>超赞房东</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">自助入住</el-tag>
                                    <!-- <el-button>自助入住</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">位置方便</el-tag>
                                    <!-- <el-button>位置方便</el-button> -->
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <el-tag class="masfadas">如实描述</el-tag>
                                    <!-- <el-button>如实描述</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">沟通方便</el-tag>
                                    <!-- <el-button>沟通方便</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">干净卫生</el-tag>
                                    <!-- <el-button>干净卫生</el-button> -->
                                </td>
                                <td>
                                    <el-tag class="masfadas">性价比高</el-tag>
                                    <!-- <el-button>性价比高</el-button> -->
                                </td>
                            </tr>
                        </table>
                    </div>
                        <slot></slot>
                    <div>
                    </div>
                </div>
                <div style="margin-top:20px">
                    <div><span style="margin-left:-835px">我要评价</span></div>
                    <!-- 评价框 -->
                    <div style="margin-top:10px">
                        <textarea name="" id="" cols="130" rows="10" style="margin-top:10px">
                        </textarea>
                    </div>
                    <div class="upload_photos">
                        <table>
                            <tr>
                                <td>
                                  <Upload></Upload>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- 提交部分 -->
         <div class="overBook_submit">
                <div style="float:left;margin-left:50px;margin-top:-10px">
                    <el-button type="danger" v-on:click='submit'>提交</el-button>
                </div>
                <div style="width:300px">
                    <el-checkbox v-model="checked">匿名评价</el-checkbox>
                </div>
        </div>
    </div>
</template>
<script>
import $ from '../../node_modules/jquery'
import Upload from '../commonComponent/upload'
import {mapState} from 'vuex'
export default {
    props:{
        airbnb_id:''
    },
     data() {
      return {
        imageUrl: '',
        checked:true,
        picture_arr:[],
        airbnb_accurate:0,//房源信息准确度
        airbnb_serve:0,//客服服务态度
        airbnb_comfortable:0,//房源舒适度
        airbnb_appraise:0,//房源评分
        label_:[],//标签选择
        self_label:'',//自定义标签
        appraise_content:'',//评论内容
        upload_photo:'',//上传照片
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      }
    },
    watch:{

    },
    computed:mapState(['files','user_info']),
    methods:{
        /* 
        1.点击时背景颜色为蓝色
        */
        mouse_label_event(){
            var label_class = '.masfadas'
            var label = document.querySelectorAll(label_class)
            console.log("label标签=>",label)
           
            label.forEach((data)=>{
                let i=0
                data.addEventListener('click',()=>{
                    i++;
                    if(i%2!=0){
                        data.style.background = 'white'
                        this.label_.push(data.innerText)
                        console.log(data.innerText)
                    }else{
                         data.style.background = '#d9ecff'
                    }
                   
                 })
            })
        },
        submit(){
            //图片的提交
            var formdata = new FormData()
            //this.files是state中的共享属性
            //为formdata添加多个file属性，实现上传多张图片
            this.files.forEach((data)=>{
                formdata.append('file',data)
            })
            //发送axios请求
            var url = 'api/photos/upload'
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.$http.post(url,formdata,config)
            
            //内容的提交
            /* 
            1. 评价者的信息
            2. 房东的信息
            3. 房源的id
            4. 评价数据
            */
            var submitmergedata ={}
            submitmergedata[airbnb_accurate]= this.airbnb_accurate
            submitmergedata[airbnb_serve] = this.airbnb_serve
            submitmergedata[airbnb_comfortable] =this.airbnb_comfortable
            submitmergedata[airbnb_appraise] =this.airbnb_appraise
            submitmergedata[label_] = this.label_
            submitmergedata[appraise_content]=this.appraise_content
            submitmergedata.airbnb_id = this.user_info._id
           const url1 = `api/submitData/${this.user_info._id}`
           this.$http.post(url1,submitmergedata)
           
        }
    },
    components:{
        Upload
    }
}
</script>
<style lang="stylus" scoped>
.overBook_submit
    margin-top 70px
.upload_photos
    height 100px
    width 900px
    margin-left 55px
.masfadas
    margin-left:-128px
.house_appraise_label
    width 100%
    margin-top:10px
.house_appraise_label_table
    width 800px
    height 90px
    margin-left 50px
.house_appraise_div1
    height 30px
    width 100%
.house_appraise
    width 100%
.marginTop_class
    margin-top 10px
    color black
.float_class
    float left
    margin-left 163px
.house_information_temporary_class
    width 100%
    height 100px
.sub_house_information
    width 120px
    height 120px
.house_information_div2
    margin 20px 100px 0px 30px
    height 120px

.house_information_div1
    width 300px
    height 150px
    position absolute
    top 70px
    left 50px
.house_information_img
    width 100%
    height 100%
.overBook_main
    width 100%
.house_information
    width 100%
    height 150px
    
.overBook_head
    height 50px
    width 100%
    margin-top 15px
    border-bottom: 1px #ebebeb solid;
.overBook_head_td
    width 300px
    font-size 12px
    
.overBook_head_td_div1
    float left
    margin-left 50px
.overBook_head_td_div2
    margin-right 25px
#overBook_wrap
    width 1000px
    height 700px
    margin auto
    position relative
    top 50%
    transform translateY(5%)
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>