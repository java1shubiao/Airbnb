<template>
    <div id="tem">
        <Show :capable=2 :row=3 :Returnresult=xcthfy :width='469' :height='270'></Show>
    </div>
</template>
<script>
import Show from '../../commonComponent/show'
export default {
    props:{
        xcthfy:Array  //xcthfy:新春特惠房源
    },
    data(){
        return{
            
        }
    },
    components:{
        Show
    }
}
</script>
<style lang="stylus">
#tem
    margin:auto;
</style>