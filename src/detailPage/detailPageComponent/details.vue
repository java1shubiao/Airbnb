<template>
    <div id="details">
        <div id="details-div">
            <div id="details-div-firsdt">
              111
            </div>
            <div id="details-div-second">
                <h1>{{detailVueDate.ms_name}}</h1>
                <!-- <h1>大大啊</h1> -->
            </div>
            <div id="details-div-third">            
                    {{detailVueDate.ms_bedroom}} 间卧室&nbsp;&nbsp;
                    {{detailVueDate.ms_bed}} 张床&nbsp;&nbsp;
                    {{detailVueDate.ms_ws}} 间卫生间&nbsp;&nbsp;
                    最多住 {{detailVueDate.ms_enough}} 人&nbsp;&nbsp;
                     <!-- 1 间卧室&nbsp;&nbsp;
                    2 张床&nbsp;&nbsp;
                    1 间卫生间&nbsp;&nbsp;
                    最多住 2 人&nbsp;&nbsp; -->
            </div>
            <div id="details-div-finally">
            </div>
        </div>
        <div id="details-landlord">
            <div>
                <table>
                    <tr>
                        <td>
                            <div id="details-landlord-image">
                            <img src="https://z1.muscache.cn/im/pictures/user/56e99580-9af6-4ade-8a1c-8007ee696eb9.jpg?aki_policy=profile_x_medium" alt="">
                            </div>
                        </td>
                        <td >
                            <div id="details-landlord-information">
                            <div>
                                    <span>房东：{{detailVueDate.ms_user_name}}</span>
                                    <!-- <span>房东：益君</span> -->
                                    <a href="#">联系房东</a>
                            </div>
                            <div>
                                共482条评价 已验证
                            </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
           
            <div id="sjx">
                <svg role="presentation" focusable="false" class="_jm48hl">
                    <path class="_1truz6z" d="M0,10 20,10 10,0z"></path>
                </svg>
            </div>
            <div id="landrold-notification">
                111
            </div>
            <div id="path"></div>
        </div>
        <div id="rzxinxi">
                <div><span>整套房子/公寓</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>独享整个房源，无需与房东或他人共住</span></div>
                <div style="margin-top:10px"><span>入住/退房</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>入住时间 下午3:00后· 退房时间 下午12:00</span></div>
                <div style="margin-top:10px"><span>自助入住</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>通过密码钥匙盒自助入住</span></div>
        </div>
        <div id="installation">
            <div>
                <table>
                    <tr>
                        <td>
                            <div>
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 24px; width: 24px; fill: currentcolor;">
                                    <path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fill-rule="evenodd">
                                    </path>
                                </svg>
                                <div>
                                    无线网络
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 24px; width: 24px; fill: currentcolor;">
                                    <path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fill-rule="evenodd">
                                    </path>111
                                </svg>
                                <div>
                                    厨房
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 24px; width: 24px; fill: currentcolor;"><path d="m14.5 4h .5v-1.5c0-1.39-1.12-2.5-2.5-2.5h-.99a2.5 2.5 0 0 0 -2.51 2.5v1.5zm-4.5-1.5c0-.83.67-1.5 1.51-1.5h.99c.83 0 1.5.67 1.5 1.5v.5h-4zm5.5 2.5h-7a3.5 3.5 0 0 0 -3.5 3.49v12.01c0 1.93 1.57 3.5 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.49v-12.02c0-1.92-1.57-3.49-3.5-3.49zm2.5 15.51a2.5 2.5 0 0 1 -2.5 2.49h-7a2.5 2.5 0 0 1 -2.5-2.49v-12.02a2.5 2.5 0 0 1 2.5-2.49h7a2.5 2.5 0 0 1 2.5 2.49v12.01zm-1-11.01a.5.5 0 0 1 -.5.5h-9a .5.5 0 0 1 0-1h9a .5.5 0 0 1 .5.5z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div>
                                洗发水
                            </div>
                        </td>
                        <td>
                            <div>
                               <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 24px; width: 24px; fill: currentcolor;"><path d="m6.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.15-4.09a125.01 125.01 0 0 0 -1.43-.45 217.8 217.8 0 0 0 -3.98-1.21c-2.68-.78-4.51-1.23-5.24-1.25-3.43.04-6.01 2.28-6.01 5.5 0 2 .98 3.62 2.53 4.57 0 .02 0 .04.01.06.19.68.31 1.6.39 2.7a40.42 40.42 0 0 1 .05 4.17 2.01 2.01 0 0 0 2.03 2h2.03c1.25 0 1.97-.73 1.97-1.98 0-.07 0-.14 0-.31-.03-1.86.16-3.27.89-4.81a7.75 7.75 0 0 1 1-1.59.5.5 0 0 0 .09-.17 71.83 71.83 0 0 0 1.53-.4 97.27 97.27 0 0 0 4.15-1.24.5.5 0 0 0 .34-.48v-4.65a.5.5 0 0 0 -.35-.48zm-7.67 8.57c-.81 1.71-1.01 3.26-.98 5.25v.29c0 .7-.28.98-.97.98h-2.03c-.6 0-1.03-.48-1.03-.98a41.35 41.35 0 0 0 -.05-4.26 18.74 18.74 0 0 0 -.26-2.15c.71.25 1.5.39 2.33.39.85 0 2.05-.19 3.53-.51-.21.32-.39.65-.55.99zm7.02-6.98v3.17a96.43 96.43 0 0 1 -3.76 1.11 69.77 69.77 0 0 1 -1.72.45c-1.98.49-3.55.76-4.52.76-2.89 0-5-1.85-5-4.5 0-2.63 2.11-4.47 5.01-4.5.59.01 2.41.46 4.97 1.21a216.71 216.71 0 0 1 4.99 1.53l.04.01v.75zm7.92 3.1a1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.62-.78c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53zm-5.81-2.95a.5.5 0 0 1 .08-.7c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53 1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.7-.08z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div>
                                吹风机
                            </div>
                        </td>
                        <td>
                            <div>
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 24px; width: 24px; fill: currentcolor;"><path d="m23.5 4h-1.5v-1.5c0-1.38-1.12-2.5-2.5-2.5h-15a2.5 2.5 0 0 0 -2.5 2.5v1.5h-1.5a.5.5 0 1 0 0 1h1.5v15.5c0 .83.67 1.5 1.5 1.5h1.5v.5c0 .83.67 1.5 1.5 1.5h14c .83 0 1.5-.67 1.5-1.5v-17.5h1.5a.5.5 0 0 0 0-1zm-20.5-1.5c0-.82.67-1.5 1.5-1.5h15.01c.82 0 1.49.67 1.49 1.5v1.5h-2v-.51a.5.5 0 0 1 .5-.49.5.5 0 0 0 0-1 1.5 1.5 0 0 0 -1.5 1.5v11.5h-15zm0 13.5h15v2h-15zm .5 5a .5.5 0 0 1 -.5-.5v-1.5h15v1.51c0 .27-.23.5-.5.5h-14zm17.5 1.5c0 .28-.22.5-.5.5h-14a .5.5 0 0 1 -.5-.5v-.5h11.5c.83 0 1.5-.67 1.5-1.5v-15.5h2z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div>
                                生活必需品
                            </div>
                        </td>
                        <td>
                            <div>
                                <div class="_qayx7q">
                                    <div style="margin-bottom: 12px;">
                                        <div class="_1a5a9507">
                                            <button type="button" class="_1k03xgts" aria-busy="false">10+</button>
                                        </div>
                                    </div>
                                    <span class="_1lcyzyhk">
                                        <button type="button" class="_1jyr48cu" aria-busy="false">更多设施</button>
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed:mapState(['detailVueDate']),
    data(){
        return {

        }
    }
}
</script> 
<style lang="stylus">
#installation
    width 595px
    height 104px
    margin-top 20px
    border-bottom 1px #EBEBEB solid 
#installation div table tr td
    padding-left 30px
._1jyr48cu
    color: #008489 !important;
    border 0px
    background-color white
    font-weight bold
._1k03xgts
    color: #008489 !important;
    border 0px
    background-color white
    font-weight bold
#rzxinxi
    width 595px
    height 114px
    text-align left 
    margin-top 20px
    border-bottom 1px #EBEBEB solid 
#path
    width 595px
    margin-top 20px
    border-bottom 1px #EBEBEB solid 
#sjx
    width 20px
    height 10px
    margin-left 20px
._jm48hl
    width 20px
    height 10px
._1truz6z
   fill: #f8f8f8 !important
#landrold-notification {
    position relative
    position: relative !important;
    display: inline-block !important;
    width: 595px
    height 98px
    border-radius: 5px !important;
    background: rgb(248, 248, 248) !important;
}
#details-landlord-information a
    color: #008489 !important;
    text-decoration none
#details-landlord-image img 
    width 100%
    height 100%
#details-landlord-image
    background-color: rgb(242, 242, 242) !important;
    box-shadow: rgb(235, 235, 235) 0px 0px 0px 2px !important;
    display: inline-block !important;
    text-align: center !important;
    width: 64px !important;
    height: 64px !important;
    border-radius: 50% !important;
    overflow: hidden !important;
#details-landlord
    margin-top 30px
    width 595px
    height  220px
#details-div
    width 595px
    border-bottom 1px #EBEBEB solid 
#details-div-firsdt
    text-align left 
    width 595px
    height 20
#details-div-second
    width 595px
    text-align left 
#details-div-third
    text-align left     
    width 595px
    height 23px
#details-div-finally
    width 595px
    height 32px
</style>
