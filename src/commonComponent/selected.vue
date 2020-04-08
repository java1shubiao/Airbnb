<template>
    <div id="selected">
        <div class="selected_div1">
            <button v-on:click="switch_selected_button_event"><!-- :style="{width:width+'px',height:height+'px'}" -->
                <div class="selected-button-div1">
                    {{NumAll}}人
                </div>
                <div class="selected-button-div2">
                    <svg v-if="!switch_selected_button" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"></path></svg>
                    <svg v-if="switch_selected_button" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fill-rule="evenodd"></path></svg>
                </div>
            </button>
        </div>
        <div class="selectd_div2" v-if="switch_selected_button">
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
         <div>
            <span style="padding-left:230px;color: #008489 !important;" v-on:click="switch_selected_button_event">关闭</span>
         </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
     large_Num:Number
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
            this.switch_selected_button = !this.switch_selected_button
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
        }
    },
    watch:{
        // Num1(){
        //     const temporary_div_class1 = 'adult_button_add'
        //     const temporary_div_class2 = 'adult_button_up'
        //     const temporary_div_class3 = 'children_button_up'
        //     const temporary_div_class4 = 'children_button_add'

        //     if(this.Num1==0){
        //         console.log(document.getElementById(temporary_div_class2).style)
        //         document.getElementById(temporary_div_class2).style.background = '#0000FF'
        //     }
        // }
    }
}
</script>
<style lang="stylus" scoped>
#selected
    width 326px
    height:70px
    z-index 1
.selectd_div2
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
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
    width 326px
    height 40px
    background white
    border 0.5px black solid 
#selected button .selected-button-div2
    margin-left  280px
.selected-button-div1
    float left
</style>