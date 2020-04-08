<template>
    <div>
         <table id="mainPageShowHomestay">
              <tr v-for="index in capable" v-bind:key="index">
                  <td v-for="key in row" v-bind:key="key">
                          <div id="fatherbackroundimg">
                              <div id="backgroundimg" :style="{ backgroundImage:'url( '+Returnresult[(index-1)*3+key-1].homestayDetail.picture_url+' )',width:width+'px',height:height+'px'}" style="background-size:100%;background-repeat:no-repeat;"></div>
                              <div id="xxbf" :style="{width:width+'px'}">
                                <div id="beforeImg">{{Returnresult[(index-1)*3+key-1].homestayDetail.name}}</div>
                                <!--  <div><h1>{{Returnresult[index*row+key].homestayDetail.yhjg}}</h1>{{Returnresult[index*row+key].homestayDetail.yxjg}}每晚</div>-->
                                <div id="showprice">
                                    {{Returnresult[(index-1)*3+key-1].homestayDetail.pricing_quote.amount_formatted}} 每晚
                                </div>
                                <div id="starComponent">
                                    <Star :starWidth=13 :starHeight=20></Star>
                                    <div id="pffs">{{crimitcores}}分</div>
                                </div>
                              </div>
                          </div>
                  </td> 
              </tr>
            </table>
            <div id="moreContent">
                <a href="http://localhost:8080/detailPage">查看更多内容</a>
            </div>
    </div>
</template>
<script>
import Star from './star'
import {mapState} from 'vuex'
export default {
    props:{
        capable:Number,
        row:Number,
        // Returnresult:Array,
        width:Number,
        height:Number
    },
    data(){
        return{
            crimitcores:45
        }
    },
    computed:mapState(['Returnresult']),
    mounted(){
        console.log("Returnresult",this.Returnresult)
    },
    components:{
        Star 
    }
}
</script>
<style lang="stylus">
#pffs
    float:left
    height 13px
    font-size 11px
    margin-left 3px
#moreContent
    text-align left 
#moreContent a
    text-decoration:none
    color #008489
#starComponent
    margin-top:10px
#xxbf
    height:121px;
    padding :8px 0px;
#beforeImg
    font-weight:bold
    margin-top:10px;
    text-align :left;
#backgroundimg
    animation-timing-function: ease-out !important;
    border-bottom-left-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    background-size: cover !important;
    margin-left:4px
#fatherbackroundimg
    width :90%;
    position relative;
    width :90%;
#mainPageShowHomestay tr td
    position relative;
#showprice
    text-align left 
    margin-top:10px

</style>