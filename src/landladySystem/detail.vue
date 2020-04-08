<template>
    <div id="detail">
                <!-- 照片 -->
            <div class="iwqinff iennff anffloat"  >
                        <img :src="item.imgurl" alt="" class="dafuhsda">
            </div>  
             <!-- 详细信息 -->
            <div style="width:815px;height:195px;margin-left:220px" class="trjshduiaund">
                <table style="width:100%;height:100%">
                                    <tr style="width:100%;height:100%" >
                                        <td class="owondnaaa">
                                            <div>
                                                <div class="diwindn"><span class="duuena">民宿ID</span></div>
                                                <div class="diwindn">{{item.airbnb_ID}}</div>
                                            </div>
                                            <div>
                                                <div class="diwindn"><span class="duuena">民宿名称</span></div>
                                                <div class="diwindn">{{item.name}}</div>
                                            </div>
                                            <div>
                                                <div class="diwindn"><span class="duuena">民宿价格</span></div>
                                                <div class="diwindn">{{item.price}}</div>
                                            </div>
                                            <div class="diwindn" >
                                                <div><span class="duuena">民宿容纳人数</span></div>
                                                <div>
                                                       {{item.enoughPeople}}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="owondna">
                                            <div class="diwindn">
                                                <div>
                                                    <div><span class="duuena">民宿民宿地址</span></div>
                                                </div>
                                                <div>
                                                    {{item.msaddress}}
                                                </div>
                                            </div>
                                            <div class="diwindn">
                                                <div><span class="duuena">民宿城市</span></div>
                                                <div>{{item.mscity}}</div>
                                            </div>
                                            <div class="diwindn">
                                                <div><span class="duuena">民俗类型</span></div>
                                                <div>{{item.checkList}}</div>
                                            </div>
                                            <div class="diwindn">
                                                <div><span class="duuena">民宿设施</span></div>
                                                <div ><button class="ionehhj" v-on:click="moreinstallation()">查看全部设施</button></div>
                                                <div></div>
                                            </div>
                                        </td>
                                        <td class="owondnas">
                                            <div class="diwindn ieifakfnkla">
                                                <div><span class="duuena">民宿的评价</span></div>
                                                <div>
                                                    <el-input type="textarea" :rows="5"  placeholder="请输入内容"  v-model="item.introduction"></el-input>
                                                </div>
                                            </div>
                                            
                                        </td>
                                        <td>
                                           <el-button type="primary" plain v-on:click="edit_event">修改</el-button>
                                        </td>
                                    </tr>
                </table> 
             </div>
           
    </div>
</template>
<script>
import Installation from './installation'
export default {
    props:{
        item:{},
        installation:{},
        index:Number,
        change_event:Function
    },
    data(){
        return{
            installationObj:{},
            arrs:['jcss','wxwl','zc','xfs','cfj','kt','ds','xyj','dnz','yj','yd','myl','tx','kqs','zy','cf','ptss','mftcw','yyc','dt','jsf','dlrk','rsyg','yt','aqss','ywbjq','yyhtbjq']
        }
    },
    methods:{
         moreinstallation(){
             var obj = this.installation
             var arr = this.arrs
            this.$store.dispatch("CHANGEINS",{obj,arr})
            this.$store.commit('changeswitch_installation')
            this.$store.commit("changeswitch_tmbjs")
        },
        edit_event(){
           this.$store.commit('editfalse')
            this.$store.commit("changeswitch_tmbjs")
            this.change_event(this.index)
        }
    },
    components:{
        Installation
    }
}
</script>
<style lang="stylus" scoped>
#detail
    margin-top 30px
.anffloat
    float left
.iennff
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
.ionehhj
    border 0px
    background white
    color #009f7b
    font-size 13px
    margin-left -6px
.trjshduiaund
    border: 1px solid #ebebeb;
.iwqinff
    height 195px
    width 215px
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
    width:203px;
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
    height 200px
    margin-left 20px
.iiwopqwn
    border 1px solid black
    width 100%
    height 670px
.joqwudna
    border 1px solid black
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
    height 800px
.jiejdna
    position absolute
    width 200px
    height 800px
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