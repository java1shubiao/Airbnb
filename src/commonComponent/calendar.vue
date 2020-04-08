<template>
    <div id="calendar">
        <div style="text-align:center;font-weight:bold;width:282px;height:23px" class="list">
            <ul>
                <li v-on:click='up'>
                    <button id="button"  >
                       <div id="up_button_div">-</div>
                    </button>
                </li>
                <li>{{currentYear}}年{{currentDate}}月</li>
                <li v-on:click=' add'>
                    <button id="button"  >
                       <div id="up_button_div">+</div>
                    </button>
                </li>
            </ul>
        </div>
        <div style="width:282px;height:22px;" id="calendar_titlle">
            <table>
                <tr>
                    <td><small>一</small></td>
                    <td><small>二</small></td>
                    <td><small>三</small></td>
                    <td><small>四</small></td>
                    <td><small>五</small></td>
                    <td><small>六</small></td>
                    <td><small>七</small></td>
                </tr>
            </table>
        </div>
        <div style="width:282px;height:198px;" id="calendar_day">
            <table >
               
                <tr id="one" >
                    <td class="one_td" ></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
                <tr id="one">
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
                <tr id="one">
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
                <tr id="one">
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
                <tr id="one">
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
                <tr id="one">
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                    <td class="one_td"></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        currentDate:Number,
        currentYear:Number,
        currentDay:Number
    },
    data:function(){
        return {
          
        }
    },
    mounted(){
            const self = this;
            function calendarEvent(){
                function comoutedWeek(y,c,m,d){
                    return y+(parseInt(y/4))+parseInt(c/4)-2*c+(parseInt(26*(m+1)/10))+d-1
            }
            
            /**
             *@description  根据日期获取星期
             * week：表示星期 几
             *   */
            var y = self.currentDate==1||self.currentDate==2?parseInt(self.currentYear.toString().slice(-2))-1:parseInt(self.currentYear.toString().slice(-2))
            var c = parseInt(self. currentYear.toString().slice(0,2));
        
            var m = self.currentDate==1||self.currentDate==2?self.currentDate+12*1:self.currentDate;
            var d = self.currentDay;
            var w =  Math.abs(comoutedWeek(y,c,m,d))
            // console.log(w)
            var week = parseInt(w%7)
            //星期天时，week=0,所以要把week变成7,才能代入数组中
            if(week==0){
                week=week+7;
            }
           
            var div = document.getElementById("calendar_day")

            var tr = div.getElementsByTagName('tr')

            var days = 1;
            for(var i=0;i<=6;i++){
                for(var j=0;j<7;j++){
                    if((self.currentDate==4||self.currentDate==6||self.currentDate==9||self.currentDate==11)&&days==31){
                        break  
                    }
                    if((self.currentDate==1||self.currentDate==3||self.currentDate==5||self.currentDate==7||self.currentDate==8||self.currentDate==10||self.currentDate==12)&&days==32){
                        break
                    }
                    if(self.currentDate==2&&days>=30){
                        break
                    }
                    if((i>=1)||(i==0&&j>=week-1)){
                        tr[i].cells[j].innerHTML=days
                        if(days>=self.currentDay){
                            
                            tr[i].cells[j].style.background="rgb(237, 246, 246)"
                            tr[i].cells[j].style.color="rgb(0, 132, 137)"
                            tr[i].cells[j].addEventListener('mouseover',(e)=>{
                                // console.log(tr[i])
                                // console.log(e)
                                e.target.style.background="rgb(280, 246, 246)"
                                
                            })
                            tr[i].cells[j].addEventListener('mouseout',(e)=>{
                                e.target.style.background="rgb(237, 246, 246)"
                            })
                        }
                        days++
                    }
                }
            }
        }
       calendarEvent()
    },
    methods:{
        add(){
            this.currentDate++
            if(this.currentDate>=13){
                this.currentDate = 1
                this.currentYear++
            }
           
        },
        up(){
            this.currentDate--
         
        }
    },
    watch:{
        
        currentDate(){
            

            function comoutedWeek(){
                        return y+(parseInt(y/4))+parseInt(c/4)-2*c+(parseInt(26*(m+1)/10))+d-1
            }


            var y = this.currentDate==1||this.currentDate==2?parseInt(this.currentYear.toString().slice(-2))-1:parseInt(this.currentYear.toString().slice(-2))
            var c = parseInt(this. currentYear.toString().slice(0,2));
            var m = this.currentDate==1||this.currentDate==2?this.currentDate+12*1:this.currentDate;
            var d = this.currentDay;
            var w =  Math.abs(comoutedWeek(y,c,m,d))
            var week = parseInt(w%7)
            var div_againt = document.getElementById("calendar_day")
            var tr_againt = div_againt.getElementsByTagName('tr')


            if(week==0){
                week=week+7;
            }
            // console.log(w)
           
            for(var i = 0;i<6;i++){
                for(var j =0;j<7;j++){
                
                tr_againt[i].cells[j].innerHTML = null
                tr_againt[i].cells[j].style.background="repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px)"
                }
            }

           
            var div_againt = document.getElementById("calendar_day")
            var tr_againt = div_againt.getElementsByTagName('tr')
            


            var days = 1;
            for(var i=0;i<=6;i++){
                for(var j=0;j<7;j++){
                    if((this.currentDate==4||this.currentDate==6||this.currentDate==9||this.currentDate==11)&&days==31){
                        break
                    }
                    if((this.currentDate==1||this.currentDate==3||this.currentDate==5||this.currentDate==7||this.currentDate==8||this.currentDate==10||this.currentDate==12)&&days==32){
                        break
                    }
                    if(this.currentDate==2&&days>=30){
                        break
                    }
                    if((i>=1)||(i==0&&j>=week-1)){
                        tr_againt[i].cells[j].innerHTML=days
                        if(days>=this.currentDay){
                            
                            tr_againt[i].cells[j].style.background="rgb(237, 246, 246)"
                            tr_againt[i].cells[j].style.color="rgb(0, 132, 137)"
                            tr_againt[i].cells[j].addEventListener('mouseover',(e)=>{
                                // console.log(tr_againt[i])
                                // console.log(e)
                                e.target.style.background="rgb(280, 246, 246)"
                                
                            })
                            tr_againt[i].cells[j].addEventListener('mouseout',(e)=>{
                                e.target.style.background="rgb(237, 246, 246)"
                            })
                        }
                        days++
                    }
                }
            }
        }
    }

}
</script>
<style lang="stylus" >
*:focus 
{ outline: none; }
#up_button_div
    width 14px
    height 14px
    border-radius 50%
    border-width: 2px !important;
    border-style: solid !important;
    display table-cell
    vertical-align center
#button
    border:0px
    background white
    height 14px
.list ul li
    list-style-type none
    float left
    margin-left 20px
#calendar_day table tr td
    background: repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px);
    color: rgb(0, 0, 0);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 7px;
    padding: 0px;
    width 38px
    height 37.33px
#calendar_titlle table tr td
    width:40px;
    height:20px
</style>