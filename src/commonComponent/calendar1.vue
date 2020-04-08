<template>
    <div id="calendar">
        <div style="text-align:center;font-weight:bold;width:282px;height:23px">
            <ul>
                <li v-on:click='up'>
                    <button id="button"  >
                       <div id="up_button_div">-</div>
                    </button>
                </li>
                <li>{{currentYears}}年{{currentDates}}月</li>
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
        <div style="width:282px;height:198px;" id="calendar_days">
            <table >
               
                <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
                <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
               <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
                 <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
                 <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
                 <tr id="ones" >
                    <td class="one_tds" ></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                    <td class="one_tds"></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props:{
   
    },
    data:function(){
        return {
          currentDates:3,
        currentYears:2020,
        currentDays:1
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
            var y = self.currentDates==1||self.currentDates==2?parseInt(self.currentYears.toString().slice(-2))-1:parseInt(self.currentYears.toString().slice(-2))
            var c = parseInt(self.currentYears.toString().slice(0,2));
        
            var m = self.currentDates==1||self.currentDates==2?self.currentDates+12*1:self.currentDates;
            var d = self.currentDays;
            var w =  Math.abs(comoutedWeek(y,c,m,d))
            // console.log(w)
            var week = parseInt(w%7)
            //星期天时，week=0,所以要把week变成7,才能代入数组中
            if(week==0){
                week=week+7;
            }
           
            var div = document.getElementById("calendar_days")

            var tr = div.getElementsByTagName('tr')

            var days = 1;
            for(var i=0;i<=6;i++){
                for(var j=0;j<7;j++){
                    if((self.currentDates==4||self.currentDates==6||self.currentDates==9||self.currentDates==11)&&days==31){
                        break  
                    }
                    if((self.currentDates==1||self.currentDates==3||self.currentDates==5||self.currentDates==7||self.currentDates==8||self.currentDates==10||self.currentDates==12)&&days==32){
                        break
                    }
                    if(self.currentDates==2&&days>=30){
                        break
                    }
                    if((i>=1)||(i==0&&j>=week-1)){
                        tr[i].cells[j].innerHTML=days
                        if(days>=self.currentDays){
                            
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
            this.currentDates++
            if(this.currentDates>=13){
                this.currentDates = 1
                this.currentYears++
            }
           
        },
        up(){
            this.currentDates--
         
        }
    },
    watch:{
        
        currentDates(){
            

            function comoutedWeek(){
                        return y+(parseInt(y/4))+parseInt(c/4)-2*c+(parseInt(26*(m+1)/10))+d-1
            }
            console.log(this.currentYears.toString().slice(-2))
            var y = this.currentDates==1||this.currentDates==2?parseInt(this.currentYears.toString().slice(-2))-1:parseInt(this.currentYears.toString().slice(-2))
            var c = parseInt(this.currentYears.toString().slice(0,2));
            var m = this.currentDates==1||this.currentDates==2?this.currentDates+12*1:this.currentDates;
            var d = this.currentDays;
            var w =  Math.abs(comoutedWeek(y,c,m,d))
            var week = parseInt(w%7)
            var div_againt = document.getElementById("calendar_days")
            console.log(div_againt)
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

           console.log(week)
           



            var days = 1;
            for(var i=0;i<6;i++){
                for(var j=0;j<7;j++){
                    if((this.currentDates==4||this.currentDates==6||this.currentDates==9||this.currentDates==11)&&days==31){
                        break
                    }
                    if((this.currentDates==1||this.currentDates==3||this.currentDates==5||this.currentDates==7||this.currentDates==8||this.currentDates==10||this.currentDates==12)&&days==32){
                        break
                    }
                    if(this.currentDates==2&&days>=30){
                        break
                    }
                    if((i>=1)||(i==0&&j>=week-1)){
                        tr_againt[i].cells[j].innerHTML=days
                        if(days>=this.currentDays){
                            
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
<style lang="stylus">
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
li
    list-style-type none
    float left
    margin-left 20px
#calendar_days table tr td
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