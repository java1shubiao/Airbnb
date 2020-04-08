<template>
    <div id="selected">
        <div class="selected_div1">
            <button v-on:click="switch_selected_button_event"><!-- :style="{width:width+'px',height:height+'px'}" -->
                <div class="selected-button-div1">
                    人数
                </div>
                <div class="selected-button-div2" v-if="false">
                    <svg v-if="!this.$store.state.switch_selected_number" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"></path></svg>
                    <svg v-if="this.$store.state.switch_selected_number" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fill-rule="evenodd"></path></svg>
                </div>
            </button>
        </div>
        <div class="selectd_div2" v-if="this.$store.state.switch_selected_number">
         <div>
             <table>
                 <tr style="height:80px">
                     <td style="width:60px"><span>成人</span></td>
                     <td style="">
                         <div class="selectd_div2_table_div1 selectd_div2_table_div1_one">
                             <button class="selectd_div2_table_div_button " id="adult_button_up" v-on:click="up_Num1">
                                    <span class="_1y1icpxd">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="减" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                             </button>
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div2_one" style="margin-top:6px">
                             {{Num1}}
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div3_one">
                             <button class="selectd_div2_table_div_button adult_button_add" v-on:click="add_Num1">
                                    <span class="_1y1icpxd">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="加" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><rect height="2" rx="1" width="12" x="6" y="11"></rect><rect height="12" rx="1" width="2" x="11" y="6"></rect></svg>
                                    </span>
                             </button>
                         </div>
                     </td>
                 </tr>
                 <tr style="height:80px">
                     <td>儿童</td>
                     <td>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div1_one">
                             <button class="selectd_div2_table_div_button children_button_up" v-on:click="up_Num2">
                                    <span class="_1y1icpxd">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="减" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                             </button>
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div2_one" style="margin-top:6px">
                            {{Num2}}
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div3_one">
                             <button class="selectd_div2_table_div_button children_button_add" v-on:click="add_Num2">
                                    <span class="_1y1icpxd">
                                       <svg viewBox="0 0 24 24" role="img" aria-label="加" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><rect height="2" rx="1" width="12" x="6" y="11"></rect><rect height="12" rx="1" width="2" x="11" y="6"></rect></svg>
                                    </span>
                             </button>
                         </div>
                     </td>
                 </tr>
                  <tr style="height:80px">
                     <td>婴儿</td>
                     <td>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div1_one">
                             <button class="selectd_div2_table_div_button baby_button_up" v-on:click="up_Num3">
                                    <span class="_1y1icpxd">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="减" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                             </button>
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div2_one" style="margin-top:6px">
                             {{Num3}}
                         </div>
                         <div class="selectd_div2_table_div1 selectd_div2_table_div3_one">
                             <button class="selectd_div2_table_div_button baby_button_add" v-on:click="add_Num3">
                                    <span class="_1y1icpxd">
                                       <svg viewBox="0 0 24 24" role="img" aria-label="加" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><rect height="2" rx="1" width="12" x="6" y="11"></rect><rect height="12" rx="1" width="2" x="11" y="6"></rect></svg>
                                    </span>
                             </button>
                         </div>
                     </td>
                 </tr>
             </table>
         </div>
         <div style="padding-left:0px;color: rgb(72, 72, 72) !important;font-size: 14px !important;">
             <span style="margin-left:-80px;">最多4位房客，婴幼儿不计算在内。</span>
         </div>
         <div class="uehbbfk">
            <button class='dshun' v-on:click="BypeopleGetaiebnb">确定</button>
            <button style="color: #008489 !important;border:0px;background:white;font-size:15px" v-on:click="switch_selected_button_event">关闭</button>
         </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{
     large_Num:Number,
     changepeopleNunber:Function,
     getairbnbByPEOPLE:Function
    },
    data(){
        return {
            // large_Num:4,
            Num1:1,
            Num2:0,
            Num3:0,
            switch_selected_button:false
        }
    },
    computed:{
        NumAll(){
            return this.Num2+this.Num1
        }
    },
    methods:{
        switch_selected_button_event(){
          this.$store.commit("updateswitch_selected_number")
           if(this.$store.state.switch_selected_typeairbnb==true)
                this.$store.commit("updateswitch_selected_typeairbnb")
        },
        add_Num1(){
          if(this.Num2!=0){
              if(this.NumAll<this.large_Num){
                  this.Num1++
              }
          }else{
              if(this.Num1<this.large_Num){
                  this.Num1++
              }
          }
           
        },
        up_Num1(){
            if(0<this.Num1)
                this.Num1--
            console.log("this.Num1=>",this.Num1)
        },
        up_Num2(){
            if(0<this.Num1<this.large_Num||this.Num1+this.Num2<this.large_Num)
            this.Num2--
        },
        add_Num2(){
           if(this.Num1!=0){
              if(this.NumAll<this.large_Num){
                  this.Num2++
              }
          }else{
              if(this.Num2<this.large_Num){
                  this.Num2++
              }
          }
        },
        up_Num3(){
            this.Num3--
        },
        add_Num3(){
            this.Num3++
        },
        BypeopleGetaiebnb(){
        }
    },
    watch:{
      Num1(){
          this.changepeopleNunber(1,this.Num1)
      },
      Num2(){
          this.changepeopleNunber(2,this.Num2)
      },
      Num3(){
          this.changepeopleNunber(2,this.Num3)
      }
    }
}
</script>
<style lang="stylus" scoped>
.uehbbfk
    margin-left:200px
.dshun
    border 0px
    background white
    color #008489
    font-size:15px
#selected
    width 100px
    height:70px
    z-index 1
.selectd_div2
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
    z-index 2
.selectd_div2 tr td
    font-weight bold
.selectd_div2_table_div2_one
     margin-left 20px
     margin-right 20px
.selectd_div2_table_div1_one
    margin-left 130px
.selectd_div2_table_div1
    float left
.selectd_div2_table_div_button
    width 30px
    height 30px
    border-width: 1px !important;
    background: transparent !important;
    border-style: solid !important;
    border-radius: 50% !important;
#adult_button_up
    border-color: rgb(0, 132, 137) !important;
.adult_button_add
    border-color: rgb(0, 132, 137) !important;
.children_button_up
     border-color: rgb(0, 132, 137) !important;
.children_button_add
    border-color: rgb(0, 132, 137) !important;
.baby_button_up
    border-color: rgb(0, 132, 137) !important;
.baby_button_add
    border-color: rgb(0, 132, 137) !important;
.selectd_div2
    position absolute
    width 326px;
    height 300px
    background white
#selected .selected_div1 button
    z-index inherit
    width 100px
    height 35px
    background white
    border: 1px solid rgb(235, 235, 235);
    border-radius 10px
#selected button .selected-button-div2
    margin-left  280px
.selected-button-div1
    float left
</style>