<template>
    <div id="price_controll">
        <!-- <div class="price_controllz_div"> -->
                   <div class="price_controllz_div_div">
                        <button v-on:click="button_shutdown_event">价格</button>
                    </div>
                    <div class="price_controllz_div_div2" v-if="this.$store.state.switch_selected_price">
                            <div class="price_controllz_div_div3">
                                <el-slider v-model="price_change" range :marks="marks" :max="1200" style="width:350px"></el-slider>
                            </div>
                            <div>
                                <button class="price_controllz_div_div2_button">￥{{price_change[0]}}</button>
                                <button style="margin-left:50px" class="price_controllz_div_div2_button">￥{{price_change[1]}}</button>
                            </div>
                            <div class="price_controllz_div_div4">
                                <button class="price_controllz_div_div4_button" v-on:click="button_shutdown_event">取消</button>
                                <button class="price_controllz_div_div4_button" style="margin-left:70px" v-on:click="button_yes_event">确认</button>
                            </div>
                    </div>
         
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    props:{
        changePRICE:Function
    },
    data(){
        return {
            price_change:0
        }
    },
    methods:{
        button_shutdown_event(){
            this.$store.commit("updateswitch_selected_price")
            
        },
        button_yes_event(){
            // this.$store.commit('updatepriceControlVueData',this.price_change[0])
            //  this.$store.commit('updatepriceControlVueData',this.price_change[1])
            this.changePRICE(this.price_change[0],this.price_change[1])
             this.$store.commit("updateswitch_selected_price")  
        }
    }
}
</script>
<style lang="stylus" scoped>
.price_controllz_div_div4
    margin-top 40px
.price_controllz_div_div4_button
    border 0px
    background  white
    font-size 15px
    font-weight bold
.price_controllz_div_div3-3
    width 30px
    height 30px
    border-radius 50%
    border-color: rgb(0, 132, 137) !important;
    border-width 1px 
    border-style solid
.price_controllz_div_div3-2
    height 2px
    width 250px 
    background rgb(0, 132, 137) !important;
.price_controllz_div_div3-1
    width 30px
    height 30px
    border-radius 50%
    border-color: rgb(0, 132, 137) !important;
    border-width 1px 
    border-style solid
    position relative
.price_controllz_div_div3
    margin-top:40px
    margin-left 20px
.price_controllz_div
    width 500px
    height 300px
    border 1px black solid
.price_controllz_div_div
    width 100px
    height 35px
.price_controllz_div_div button
    width 100px
    height 35px
    border: 1px solid rgb(235, 235, 235);   
    background white
    border-radius 5px
.price_controllz_div_div2
    width 400px
    height 265px
    position absolute
    background white
    z-index 3
.price_controllz_div_div2_button
    width 150px
    height 50px
    border 0.5px black solid 
    border-radius 5px
    margin-top:30px
    background white
</style>