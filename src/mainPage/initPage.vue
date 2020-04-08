<template>
    <div id="initPage_wrap">
        <div class="initPage_headone">
            <div id="sub_initPage_head">
                <div id="subheadOne">
                    <div style="float:left">
                        <el-input v-model="inputcontent" placeholder="请输入内容" style="width:400px;height:100px;"></el-input>
                    </div>
                    <div>
                        <div style="padding-right:200px">
                            <el-button type="danger" round><router-link :to="{path:`/inputsearch?inputdata=${inputcontent}`}" style="text-decoration:none;" >搜索</router-link></el-button>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
        <div class="sub_initPage_headtwo">
             <div>
                        <div id="specHomestay">
                            <PreferentialHousing :capable=2 :row=3 :thfyjj=fyjj :thfymz=fymz :thfyanzjwd=fyanzjwd :thfyanzjgd=fyanzjgd :thfyanzjjg=fyanzjjg :thfyxx=fyxx :imgwidth=333 :imgheight=222 ></PreferentialHousing>
                        </div>
                        <div id="sourceSpace">
                            <PreferentialHousing :capable=2 :row=3 :thfyjj=rmmdd :thfymz=fymz :thfyanzjwd=fyanzjwd :thfyanzjgd=fyanzjgd :thfyanzjjg=fyanzjjg :thfyxx=fyxx :imgwidth=333 :imgheight=222  ></PreferentialHousing>
                        </div>
                        <div id="trovleHistory">
                              <PreferentialHousing :capable=2 :row=4 :thfyjj=jclyhistory :thfymz=fymz :thfyanzjwd=fyanzjwd :thfyanzjgd=fyanzjgd :thfyanzjjg=fyanzjjg :thfyxx=fyxx :imgwidth=246 :imgheight=246  ></PreferentialHousing>
                        </div>
                        <div id="weeklyRent">
                                 <PreferentialHousing :capable=2 :row=3 :thfyjj=weeklyRent :thfymz=fymz :thfyanzjwd=fyanzjwd :thfyanzjgd=fyanzjgd :thfyanzjjg=fyanzjjg :thfyxx=fyxx :imgwidth=333 :imgheight=222  ></PreferentialHousing>
                        </div>
             </div>
        </div>
       <div class="subheadTwo">
            <Nav></Nav>
        </div>
    </div>
</template>
<script >
import { mapState, mapMutations } from 'vuex';
import Nav from '../commonComponent/nav'
import store from '../store/index'
import Register from '../mainPageComponent/register'
import Login from '../mainPageComponent/loginDiv'
import RotationChar from '../assets/js/rotationChar'
import Show from '../commonComponent/show'
import sendAjax from '../assets/js/http'
import PreferentialHousing from '../mainPageComponent/preferentialHousing/preferentialHousing'
export default {
    data(){
        return {
            a:false,
            inputOne:'',
            inputcontent:'',
            ImgArr:['https://z1.muscache.cn/pictures/hongbao/marquee/original/16a3c67f-80f2-4ab1-b14b-306064f0a134.jpg',
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/8247863b-37c0-47ca-9aa6-9ac9a6d6fa62.jpg'],
            Returnresult:[],
            fyjj:"新春特惠房源",
            rmmdd:'热门目的地',
            jclyhistory:'精彩旅游故事',
            weeklyRent:'周租月租房源优惠',
            fymz:["广州","上海","深圳","成都","西安","重庆","杭州","大理"],
            fyanzjwd:1032,
            fyanzjgd:48,
            fyanzjjg:15,
            fyxx:[]
        }
    },
    computed:mapState(['switch_logginVue','switch_reregiste',"user_info",'Returnresult']),
    created() {
        
    },
    mounted() {
        RotationChar(this.ImgArr)
        const url  = `api/initPage/hotairbnb/广州`
        console.log('进入初始页，向后端发送请求，根据热度算法进行排序')
        sendAjax(url,(data)=>{
            console.log('排序后的数据',data)
            //将后端放回的数据保存在state中的
            this.$store.dispatch('UPDATESDT',data.message)
            // this.fyxx = data.message
        })
        // const newurl = `api/logining`
        // sendAjax(newurl,(data,headers)=>{
        //         if(data.ok){
        //             this.$store.commit('updateswitch_logginButton')
        //             this.$store.commit('updateswitch_registerButton')
        //             console.log("cookies",headers)
        //             console.log('user_id=>',data.user_id)
        //             window.localStorage.setItem('user_id',data.user_id)
        //             console.log('存入Localstorage的变量user_id:',window.localStorage.getItem('user_id'))
        //             alert(data.message)
        //         }else{
        //             alert(data.message)
        //             console.log('接受数据错误')
        //         }
        // })
        // var millisecond =new Date().getTime()
        // console.log('millisecond=>',millisecond)
    },
    methods:{
        logining(){
            this.$store.commit('changeState')
           console.log(this)
           
        },
     /*    shutDown(sendDataSign){
          
        }, */
        handleRegister(){
            this.$store.commit('changeStateRegister')
        },
        changeHeadImageButton(){
            this.$store.commit('changeheadImageButtonState')
        },
        LoginoutEvent(){
            this.$store.commit('changeheadImageButtonState')
            this.$store.commit('changeisLogin')
        }
    },
    components:{
    Show,
    PreferentialHousing,
    Login,
    Register,
    Nav
    }
}
</script>
<style lang="stylus" scoped>
#initPage_wrap
    position relative
.initPage_headone
    width: 100%;
    height: 529px;
    
#sub_initPage_head
    width: 100%;
    height: 100%;
    border:1px red solid;
#subheadOne
    width: 50%;
    height: 60px;
    position relative
    top 400px
    left 450px
.subheadOne_1
    position fixed
    top:20px
    left 780px
.subheadTwo
    position absolute
    top 20px
    left 750px
.sub_initPage_headtwo
    margin-left 180px
</style>