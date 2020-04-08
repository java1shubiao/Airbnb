<template>
    <div id="appraise">
        <div id="appraise_one">
            <div id="appraise_tittle">
                <h1>评价</h1>
            </div>
            <div>
                <table>
                    <tr style="height:48px">
                        <td style="width:110px;height:48px;">
                                <Star :starWidth=20 :starHeight=25></Star>
                        </td>
                        <td style="width:280px;display:inline-block;text-align:left">
                            <div style="height:48px;display:table-cell;vertical-align:middle;">
                                {{appraiseVueDate.ms_listing_reviewsNumber}}条评论
                            </div>
                            
                        </td>
                        <td style="width:205px;">
                            <div>
                                <input type="text">
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr v-for="(data,index) in array.length/2" v-bind:key = 'index'>
                        <td>{{array[index*2]}}</td>
                        <td>
                            <div>
                                <Star :starWidth=20 :starHeight=25></Star>
                            </div>
                        </td>
                        <td>
                            {{array[index*2+1]}}
                        </td>
                        <td>
                            <Star :starWidth=20 :starHeight=25></Star>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="appraise_two">
            <div v-for="(appraise_content,index) in appraiseVueDate.ms_listing_reviews" v-bind:key="index" id="appraise_show_section">
                <div id="consumer_headimage">
                    <table>
                        <tr>
                            <td>
                                <div id="imgs">
                                    <img :src="appraise_content.reviewer.picture_url" alt="" style="width:48px;height:48px">
                                </div>
                            </td>
                            <td>
                                <div id="consumer_name">
                                    {{appraise_content.reviewer.host_name}}
                                </div>
                                <div id="appraise_time">
                                    {{appraise_content.localized_date}}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="appraise_comments">
                    {{appraise_content.comments}}
                </div>
                <div id="user_headimage" v-if="appraise_content.response">
                    <table>
                        <tr>
                            <td>
                                <div id="details-landlord-image">
                                    <img src="https://z1.muscache.cn/im/pictures/user/56e99580-9af6-4ade-8a1c-8007ee696eb9.jpg?aki_policy=profile_x_medium" alt="">
                                </div>
                            </td>
                            <td style="padding-left:10px">
                                <div style="text-align:left;font-size:13px;font-weight:bold">
                                    {{appraise_content.reviewee.host_name}}的回复{{testTwo}}
                                </div>
                                <div style="text-align:left;font-size:15px;">
                                    {{appraise_content.response}}
                                </div>
                            </td>
                        </tr>
                    </table>
                
                </div>
            </div>  
        </div>
        <div id="splite_page">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>
<script>
import Star from '../../commonComponent/star'
import sendAjax from '../../assets/js/http'
import { mapState, mapMutations } from 'vuex'
export default {

    data(){
        return{
            array:['如实描述','位置便利','沟通交流','入住顺利','干净卫生','高性价比']
        }
    },
    computed:mapState(['appraiseVueDate']),
    
    components:{
        Star
    }
}
</script>
<style lang="stylus">
#user_headimage
    margin-bottom  20px
    margin-left 40px
#appraise_comments
    width 100%
    margin-top:15px
    margin-bottom 10px
#imgs
    background-color: rgb(242, 242, 242) !important;
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 2px !important;
    display: inline-block !important;
    text-align: center !important;
    width: 48px !important;
    height: 48px !important;
    border-radius: 50% !important;
    overflow: hidden !important;
#appraise_two
     width 595px
#consumer_headimage ul li 
    float left
    list-style-type none
    
#consumer_headimage

    width 595px
    height 48px
#appraise_one
    width:595px;
    height:204px;
#appraise_one div h1
    text-align left 
#appraise_tittle
    margin-left 8 px
#details-landlord-image img 
    width 100%
    height 100%
#details-landlord-image
    background-color: rgb(242, 242, 242) !important;
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 2px !important;
    display: inline-block !important;
    text-align: center !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    overflow: hidden !important;
#appraise_show_section
    border-bottom 1px #EBEBEB solid
    margin-top 20px
    overflow-wrap: break-word !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important
    text-align left
</style>