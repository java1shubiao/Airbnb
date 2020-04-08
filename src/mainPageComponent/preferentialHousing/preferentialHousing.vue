<template>
    <div id="thfyzj">
        <div id="headzj">
            <Head :season=thfyjj></Head>
        </div>
        <div id="Middlezj">
            <Middle :populeCity=thfymz :width=thfyanzjwd :height=thfyanzjgd :space=thfyanzjjg></Middle>
        </div>
        <div id="Finally">
           <Show :capable=capable :row=row :width=imgwidth :height=imgheight></Show>
        </div>
    </div>
</template>
<script>
import Head from './Head'
import Middle from './Middle'
import Show from '../../commonComponent/show'
export default {
    props:{
        // :Returnresult=thfyxx
        capable:Number,
        row:Number,
        thbool:Boolean,
        thfyjj:String, //thfyjj:特惠房源季节
        thfymz:Array, //特惠房源名字
        thfyanzjwd:Number,//thfyanzjwd:特惠房源按钮组件宽度
        thfyanzjgd:Number,//thfyanzjgd:特惠房源按钮组件高度
        thfyanzjjg:Number,//thfyanzjjg:特惠房源按钮组件间隔
        // thfyxx:Array, //特惠房源信息
        imgwidth:Number,
        imgheight:Number
    },
    data(){
        return{

        }
    },
    components:{
        Head,
        Middle,
        Show
    }
}
</script>
<style lang="stylus">
#thfyzj
    width:1048px;
#headzj
    width:1032px;
    height:78px;
#Middlezj
    margin-top:50px;
#Finally
    width:1032px;
    heigth:711px;
    margin-top:20px;
    display:inline-block;
    text-align :center;
</style>