<template>
    <div id="DateSet">
        <div id="DateSet_tittle">
            <h1>可订日期</h1>
        </div>
        <div id="DateSet_tittle">
            <span>请根据旅程日期来查看确切的价格和可订状态</span>
        </div>
        <div id="calendar_component">
            <table>
                <tr>
                    <td>
                        <Calendar :currentDate=2 :currentYear=2020 :currentDay=1></Calendar>
                    </td>
                    <td>
                        <Calendar1 :currentDate=3 :currentYear=2020 :currentDay=1></Calendar1>
                    </td>
                </tr>
            </table>
            
        </div>
    </div>
</template>
<script>
import Calendar from '../../commonComponent/calendar'
import Calendar1 from '../../commonComponent/calendar1'
export default {
    data:function(){
        return {
            date:''
        }
    },
    components:{
        Calendar,
        Calendar1
    }
}
</script>
<style lang="stylus">
#calendar_component
    width 322px
#DateSet_tittle
    text-align left
    height:60px
</style>