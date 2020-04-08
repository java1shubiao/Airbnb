<template>
    <div id="type_airbnb">
        <div class="type_airbnb_div1">
            <button v-on:click="shutdown_xllb">房源类型</button>
        </div>
       <div class="type_airbnb_div2"  v-if="this.$store.state.switch_selected_typeairbnb">
           <div class="type_airbnb_div2_div">
                <div class="type_airbnb_div2_div_div" >
                    
                    <div class="type_airbnb_div2_div_div_div2">
                        <div class="type_airbnb_div2_div_div_div2_div1">
                              <el-checkbox v-model="checked1" class="type_airbnb_div2_div_div_div2_div1">{{for_typeAirbnb[0].type}}</el-checkbox>
                        </div>
                        <div class="type_airbnb_div2_div_div_div2_div2" >
                            <span>独享整个房源，无需与房东或他人共住</span>
                        </div>
                    </div>

                    <div class="type_airbnb_div2_div_div_div2">
                        <div class="type_airbnb_div2_div_div_div2_div1">
                              <el-checkbox v-model="checked2" class="type_airbnb_div2_div_div_div2_div1">{{for_typeAirbnb[0].type}}</el-checkbox>
                        </div>
                        <div class="type_airbnb_div2_div_div_div2_div2" >
                            <span>独享整个房源，无需与房东或他人共住</span>
                        </div>
                    </div>

                    <div class="type_airbnb_div2_div_div_div2">
                        <div class="type_airbnb_div2_div_div_div2_div1">
                              <el-checkbox v-model="checked3" class="type_airbnb_div2_div_div_div2_div1">{{for_typeAirbnb[0].type}}</el-checkbox>
                        </div>
                        <div class="type_airbnb_div2_div_div_div2_div2" >
                            <span>独享整个房源，无需与房东或他人共住</span>
                        </div>
                    </div>
                </div>  
           </div>
           <div class="type_airbnb_div2_div2">
               <div style="width:40px;margin-left:20px;" class="type_airbnb_div2_div2_div1"><button style="border:1px;background:white;width:50px;font-size:15px;font-weight:bold" v-on:click="shutdown_xllb">取消</button></div>
               <div style="width:40px;margin-left:20px;font-weight:bold"><button v-on:click="button_resetting_event" style="border:0px;background:white;width:50px;font-size:15px;font-weight:bold">重置</button></div>
               <div  style="width:250px;" ><button v-on:click="button_save_event" style="border:0px;background:white;width:50px;font-size:15px;font-weight:bold;margin-left:60px;color:#008489">确认</button></div>
           </div>
       </div>
    </div>
</template>
<script >
export default ({
    props:{
        changecheck:Function
    },
    data(){
        return {
            for_typeAirbnb:[
                {
                    type:"整栋房源"
                },
                {
                    type:"单独房间"
                },
                {
                    type:"合住房源"
                }
            ],
            checked1:false,
            checked2:false,
            checked3:false,
            switch_xllb_notxllb:true,
        }
    },
    watch:{
        checked1(){
            if(this.checked1==true){
                this.changecheck('整栋房源')
            }
        },
        checked2(){
            if(this.checked2==true){
                this.changecheck('单间房间')
            }
        },
        checked3(){
            if(this.checked3==true){
                this.changecheck('合住房源')
            }
        }
    },
    methods:{
        shutdown_xllb(){
            this.$store.commit("updateswitch_selected_typeairbnb")
                if(this.$store.state.switch_selected_number==true)
                    this.$store.commit("updateswitch_selected_number")
        },
        button_resetting_event(){
            this.checked1 = false
            this.checked2=false
            this.checked3=false
        },
        button_save_event(){
            if(this.checked1){
                this.$store.commit("updatetypeAirbnbVueData","整栋房源")
            }
            if(this.checked2){
                this.$store.commit("updatetypeAirbnbVueData","单独房间")
            }
            if(this.checked3){
                this.$store.commit("updatetypeAirbnbVueData","合住房源")
            }
             this.$store.commit("updateswitch_selected_typeairbnb")
        }
    }
})
</script>
<style lang="stylus" scoped>
#type_airbnb
   
.type_airbnb_div2_div2 div
    float left
    margin-top:25px
.type_airbnb_div2
    width 409px
    height 285px
    position absolute
    z-index 3
    background white
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
.type_airbnb_div2_div
        width 349px
        height 200px
        margin auto 
        position relative
        top 40%
        transform translateY(-50%)

.type_airbnb_div2_div_div
            width 349px
            height 60px

.type_airbnb_div2_div_div_div2
    margin-top:20px

.type_airbnb_div2_div_div_div2_div1
    text-align left
    font-weight bold
.type_airbnb_div2_div_div_div2_div2
    text-align left
    margin-top:10px
    font-size 13px
    color grayscale
.type_airbnb_div1
.type_airbnb_div1 button
    border: 1px solid rgb(235, 235, 235);  
    background white
    border-radius 3px
    width 100px
    height 35px
    z-index 4
</style>