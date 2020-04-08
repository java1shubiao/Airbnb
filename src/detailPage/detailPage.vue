<template>
    <div id="detailPage-boot" >
         <div id="fixed"  v-if="switch_dhl_notdhl">
                <ul>
                    <li><button  text='button' aria-busy="false" v-on:click="scroll_event('details')">详情</button></li>
                    <li><button v-on:click="scroll_event('appraise')">评价</button></li>
                    <li><button v-on:click="scroll_event('DateSet')">可订日期</button></li>
                    <li><button v-on:click="scroll_event('location')">位置</button></li>
                    <li><button v-on:click="scroll_event('youknow')">须知</button></li>
                    <li><button v-on:click="scroll_event('landlord')">房东</button></li>
                </ul>
        </div>
        <div id="detailPage-first">
            
        </div>
        <div id="deatailPage-second">
            <!-- <div id="show-first-image" :style="{ backgroundImage: 'url('+msxx_mongodb_data.msxx_listing_details.photos[0].large+')'}" style="background-size:100%;background-repeat:no-repeat;">
            </div> -->
            <div style="margin-left:-700px" >
                <el-image  style="width: 705px; height: 444px" :src="msxx_mongodb_data.msxx_listing_details.photos[0].large"  :preview-src-list="srcList"> </el-image>
            </div>
            
            <div id="show-second-image">
               <table style="width:100%;height:100%">
                   <tr>
                       <td style="width:350px;height:218px">
                           <el-image  style="width: 350px; height: 218px" :src="msxx_mongodb_data.msxx_listing_details.photos[1].large"  :preview-src-list="srcList"> </el-image>
                           <!-- <div :style="{ backgroundImage: 'url('+msxx_mongodb_data.msxx_listing_details.photos[1].large+')'}" style="background-size:100%;background-repeat:no-repeat;width:353px;height:218px"></div> -->
                       </td>
                       <td>
                           <el-image  style="width: 350px; height: 218px" :src="msxx_mongodb_data.msxx_listing_details.photos[2].large"  :preview-src-list="srcList"> </el-image>
                           <!-- <div :style="{ backgroundImage:'url('+msxx_mongodb_data.msxx_listing_details.photos[2].large+')'}" style="background-size:100%;background-repeat:no-repeat;width:353px;height:218px"></div> -->
                       </td>
                   </tr>
                   <tr>
                       <td style="width:350px;height:218px">
                           <!-- <div :style="{ backgroundImage: 'url('+msxx_mongodb_data.msxx_listing_details.photos[3].large+')'}" style="background-size:100%;background-repeat:no-repeat;width:353px;height:218px"></div> -->
                           <el-image  style="width: 350px; height: 218px" :src="msxx_mongodb_data.msxx_listing_details.photos[3].large"  :preview-src-list="srcList"> </el-image>
                       </td>
                       <td style="width:350px;height:218px">
                           <el-image  style="width: 350px; height: 218px" :src="msxx_mongodb_data.msxx_listing_details.photos[4].large"  :preview-src-list="srcList"> </el-image>
                           <!-- <div :style="{ backgroundImage: 'url('+msxx_mongodb_data.msxx_listing_details.photos[4].large+')'}" style="background-size:100%;background-repeat:no-repeat;width:353px;height:218px"></div> -->
                       </td>
                   </tr>
               </table>
            </div>
        </div>
       <div>
            
       </div>
        <div id="detailPage-third">
            <div id="detailPage-third-div">
                <nav>
                <ul>
                    <li><button text='button' aria-busy="false" v-on:click="scroll_event('details')">详情</button></li>
                    <li><button v-on:click="scroll_event('appraise')">评价</button></li>
                    <li><button v-on:click="scroll_event('DateSet')">可订日期</button></li>
                    <li><button v-on:click="scroll_event('location')">位置</button></li>
                    <li><button v-on:click="scroll_event('youknow')">须知</button></li>
                    <li><button v-on:click="scroll_event('landlord')">房东</button></li>
                </ul>
                </nav>
            </div>
        </div>
        <div id="detailPage-finally">
            <div id="details">
                <Details></Details>
            </div>
            <div id="appraise">
                <!--:appraise_review=appraise_reviews :appraiseNumbers = appraiseNumber  -->
                <Appraise ></Appraise>
            </div>
            <div id="DateSet">
                <table>
                    <tr>
                        <td>
                            <DateSet ></DateSet>
                        </td>
                    </tr>
                </table> 
            </div>
            <div id="location">
           {{query}}
            </div>
            <div id="youknow">
               <NeedKnow></NeedKnow>
            </div>
            <div id="landlord">
                <Landlord></Landlord>
            </div>
            <div v-bind:class="{schedules:switch_schedules_schedules_plan,schedules_plan:!switch_schedules_schedules_plan}" >
                <Schedule :_id=user_id :id =query></Schedule>
            </div>
        </div>
        <div class="detailPage_login" v-if="this.$store.state.switch_zdc">
            <Login></Login>
        </div>
        <div id="tmbjss" v-if="this.$store.state.switch_zdc"></div>
    </div>
</template>
<script>
import Details from '../detailPage/detailPageComponent/details'
import NeedKnow from '../detailPage/detailPageComponent/needKnow'
import Appraise from '../detailPage/detailPageComponent/appraise'
import sendAjax from '../assets/js/http'
import Landlord from './detailPageComponent/landlord'
import DateSet from './detailPageComponent/DateSet'
import Calendar from '../commonComponent/calendar'
import Schedule from '../detailPage/detailPageComponent/schedule'
import { mapState } from 'vuex'
import async from'../../node_modules/async'
import Login from '../mainPageComponent/loginDiv'
export default {
    props:{
        query:Number,
        user_id:{}
    },
    data(){
        return{
            appraiseNumber:0,
            appraise_reviews:[],
            scrollHeight:1,
            switch_dhl_notdhl:false,//dhl:导航栏
            switch_schedules_schedules_plan:true,
            msxx_mongodb_data:{},
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']

        }
    },
    computed:mapState['msxx_listingsj'],
    components:{
        Details,
        Appraise,
        DateSet,
        Calendar,
        NeedKnow,
        Landlord,
        Schedule,
        Login
    },
    beforeMount(){
        console.log("detailPage的user_id:",this.user_id)
        const query = this.query
        const self = this
        console.log("this.switch_zdc",this.$store.state.switch_zdc)
       /**
        * 
        *   this.$http.get('api/detailPage/msxx_listing_details/2255667').then((data)=>{
            this.msxx_mongodb_data = data.data[0].msxx_listing_details
            this.$store.commit('changeCommentsTwo',this.msxx_mongodb_data)
        }) */
     
        sendAjax(`api/detailPage/msxx_listing_details/${query}`,(data)=>{
            console.log(`"访问/detailPage/msxx_listing_details/${query}时的data"`,data)
            self.msxx_mongodb_data = data[0]
            self.msxx_mongodb_data.homestayDetail.picture_urls.forEach((data)=>{
                self.srcList.push(data)
            })
            //执行mutations的方法，setting数据
            console.log(`"访问/detailPage/msxx_listing_details/${query},后端传过来的数据msxx_mongodb_data=>"`,self.msxx_mongodb_data)
            self.$store.commit("updatemsxx_homestaydetailssy",self.msxx_mongodb_data)
            self.$store.commit("updatemsxx_listingsj",self.msxx_mongodb_data)
            self.$store.commit("updatemsxx_qbsj",self.msxx_mongodb_data)
            self.$store.commit("updatedetailVueDate",self.msxx_mongodb_data)
            self.$store.commit("updateappraiseVueDate",self.msxx_mongodb_data)
            self.$store.commit("updateDateSetVueDate",self.msxx_mongodb_data)
            // self.$store.commit("updatelandlordVueDate",self.msxx_mongodb_data)
        })
        console.log("路由的参数=>",this.query)
        setInterval(()=>{
                this.scrollHeight = window.scrollY
                var schedules = document.getElementById('schedules')
                if(this.scrollHeight>=527){
                    this.height = this.scrollHeight
                    this.switch_schedules_schedules_plan = false
                    this.switch_dhl_notdhl = true
                }
                if(this.scrollHeight<587){
                this.switch_schedules_schedules_plan =true
                this.switch_dhl_notdhl=false
                }
            })
    },
    updated(){
    },
    methods:{
        // getParams () {
        //     // 取到路由带过来的参数 
        //     var routerParams = this.$route.params.id
        //     // 将数据放在当前组件的数据内
        //     this.id = routerParams
        //     console.log(this.id) 
        //   }
        scroll_event(idName){
            const height = document.getElementById(idName).offsetTop-80
            window.scrollTo({
                top:height,
                behavior: "smooth"
            })
        }
    }
    // watch:{
    //     '$router':'getParams'
    // }
}
</script>
<style lang="stylus" scoped>
.detailPage_login
    position fixed
    top:250px
    left:450px
    z-index 1
.schedules
    position:absolute;
    top:579px
    left:850px
.schedules_plan
    position fixed
    top:100px
    left 850px
#fixed
    position:fixed;
    top:0px
    width 1423px
    height 50px
    box-shadow:rgba(0,0,0,0.15) 0px 2px 6px 
    background white
    z-index 1
#fixed ul li button
    border 0px
    background-color white
    color: #008489 !important;
    font-weight bold
#DateSet table tr td
    width 282px
    height 304px
#DateSet
    margin-top 60px;
    height 500px;
#detailPage-third-div ul li button
    border 0px
    background-color white
    color: #008489 !important;
    font-weight bold
#detailPage-third-div ul li
    list-style-type none
    float left
    margin-left 10px
#detailPage-third-div
    width 640px
    height 30px
    border-bottom:0.1px black solid  
    margin-left 194px
#show-second-image
    width 711px
    height 442px
    position absolute
    top -3px;
    left 711px
#show-first-image
    width 709px
    height 442px
    border 1px red solid    
body{
    margin:0px;
    border 0px
    padding 0px
}
#detailPage-first
    width 1420px
    height 81px
    border 1px red solid    
#deatailPage-second
    position relative
    width 1410px
    height 442px
#detailPage-third
    width 1420px
    height 51px
#detailPage-finally
    width 595px
    height 2500px
    margin-left 194px
#youknow
    width 595px
    height 420px
#tmbjss{
    position fixed
    top 0px
    left 0px
    width: 1423.33px;
    height: 813px;
    background-color:#000;
    filter:(opacity=50);
    -moz-opacity:0.5;
    opacity:0.5;
    z-index 0
}
</style>