<template>
    <div id="sdsd">
        <div id="float-newui" class="">
            <div class='fdaddad'>
                <div class="dsadjaoi">
                    <div class="dadadklan form-icon"></div>
                    <div  class="fashfnoefn">表单</div>
                </div>
            </div>
            <div class='fdaddad'>
                <div class="dsadjaoi">
                    <div class="dadadklan advice-icon"></div>
                    <div  class="fashfnoefn">意见</div>
                </div>
            </div>
            <div class='fdaddad'>
                <div class="dsadjaoi">
                    <div class="dadadklan flowprocess-icon"></div>
                    <div  class="fashfnoefn">意见</div>
                </div>
            </div>
            <div class='fdaddad'>
                <div class="dsadjaoi">
                    <div class="dadadklan console-icon"></div>
                    <div  class="fashfnoefn">打印</div>
                </div>
            </div>
            <div class='fdaddad'>
                <div class="dsadjaoi">
                    <div class="dadadklan askTo-icon"></div>
                    <div  class="fashfnoefn">意见</div>
                </div>
            </div>
            <div class='fdaddad'>
                <div class="dsadjaoi" >
                        <div class="dadadklan1 more-icon"></div>
                        <div  class="fashfnoefn sajnd">更多</div>
                </div>
            </div>
            <div class="fsifna" id="wrapper" >
                <div class="daiudhai">
                <div class="dhajkdna">
                    <div class="isndnd"></div>
                    <div class="djienff">绿色通道</div>
                </div>
                </div>
                <div class="daiudhai">
                    <div class="dhajkdna">
                    <div class="isndnd"></div>
                    <div class="djienff fontsize" >添加会签人</div>
                    </div>
                </div>
                <div class="daiudhai">
                    <div class="dhajkdna">
                    <div class="isndnd"></div>
                    <div class="djienff">取消</div>
                    </div>
                </div>
                <div class="daiudhai">
                    <div class="dhajkdna">
                    <div class="isndnd"></div>
                    <div class="djienff">强行终止</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li id="jdisndan">
                    <input type="checkbox"  id="aaa" style="width:20px;height:30px;opacity:1;position:absolute;top:22px;left:725px;opacity:0;z-index:0" checked>
                    <label for="aaa"></label>
                    <div class="single-selected-lable-div" style="z-index:1"></div>
                    <div class="single-selected-checked" style="z-index:1"></div>
                </li>
            </ul>
        </div>
        <div class="dhadadafafgere1">
            <div class="dhadadafafgere" ></div>
        </div>
        <div class="dhadadafafgere1"></div>
        <div class="a">
            <table class="b">
                <tr class="c">
                    <td>
                        <div class="dd">
                            <div style="margin-bottom:4px" v-click="a([1,2,3])"><span style="font-size:15px">目前进度紧张</span></div>
                            
                            <div style="color:#CCCCCC" id="daidnas"><span>部门经理</span>&nbsp;&nbsp;<span>{{arr}}</span></div>
                        </div>
                        <div style="margin-bottom:4px;background:black;" id="iiwhbff"><span style="color:#CCCCCC">2021293103</span>&nbsp;&nbsp;<span style="color:#1C86EE">haonan</span></div>
                        
                    </td>
                </tr>
            </table>
            <div id="aa">1111111</div>
            <div id="poperver" class="poperver-style"></div>
        </div>
        
    </div>
</template>
<script>
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import '../../node_modules/popper.js'
import $ from'jquery'
export default {
   mounted(){
       $("[data-toggle='popover']").popover({
           html:true
       });
       var con = 1
       function one() {
           con++
          $('#iiwhbff').html(con)
       }
       document.getElementById('daidnas').onmousemove = this.debounce(one,1000)
   },
   data(){
       return {
           arr:1
       }
   },
   methods:{
        changeClass()  {
            var func =  (()=>{
                function editClass(keys,element,object) {
                    for(var key in object){
                        switch(keys){
                            case 1:$(element).addClass(object[key]);break;
                            case 0:$(element).removeClass(object[key]);break;
                        }
                    }
                }
                function getValue(data){
                    for(var key in data){
                        var index = (typeof data[key] =='number'&&data[key])||null
                        if(typeof data[key] =='object'){
                            for(var key in data[key]){
                            editClass(index,key, data[key])
                            }
                        }
                        
                    }
                }
                return {getValue:getValue}
            })()
            func.getValue(arguments[0])
            arguments.length>1&&func.getValue(arguments[1])

        },
        a(arr){
            console.log(typeof arr)
        },
        debounce (func,wait)  {
            let previous = 0
            return function () {
                let nowTime = Date.now()
                let context = this
                let args = arguments
                if(nowTime - previous >= wait) {
                    func.apply(context)
                    previous = nowTime
                }
            }

        }
   }
}
</script>

<style lang="stylus">
.poperver-style {
    width:250px;
    height:140px;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
    display:none;
}
#aa:hover+.poperver-style {
   
    display:block;
}
#sdsd {
    overflow hidden;
    clear both
}
.dhadadafafgere1{
     width 400px
     height 400px
}
#triangle-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid red;
}
.a{
   width 981px
   position absolute
   top 100px
   left 400px
}
.b{
   width 100%
   height 100%
}
.c{
   width 100%
   height 80px
   border 1px solid black
}
.c  {
    background #ffffff
    font-size 14px
    text-align left
}
.dd{
    margin-left 10px
}
.dhadadafafgere {
    width 300px
    height 300px
    border: 1px solid black
    position absolute
    top 350px
    left 300px
    background green
    z-index auto
    clear both
}
.single-selected-lable-div1 {
    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #1E90FF;
    margin-right: 15px;
    margin-top:30px;
    vertical-align: middle;
}
 .single-selected-lable-div2{
    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background:#87CEFF;
    margin-right: 15px;
    margin-top:30px;
    vertical-align: middle;
    border:0px;
}
 .single-selected-checked{
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 728px;
    bottom: 775px;
    background-color: #63B8FF;
}


.djienff{
    width 100%;
    height 40%;
    border:1px solid black
    font-size 15px
}
.isndnd{
    width 100%;
    height 50%;
    margin-bottom 10%
    border:1px solid black
}

.dhajkdna {
    height 85%
    width 85px
    margin auto
    position absolute
    top 0px;left 0px;right 0px;bottom 0px
    border:1px solid black
}
.fsifna 
    opacity 0
.fdaddad:hover+.fsifna{
    height 60px
    width 450px
    border:1px solid black
    position relative
    top -40px
    left 50px
    opacity: 1;
    cursor:pointer
    text-transform: none
}

.daiudhai{
    width 90px;
    height 53px
    border:1px solid black
    float:left
    position relative
    margin-left:10px
}
#float-newui
    width: 40px;
    position: fixed;
    left:250px;
    top: 200px;
     

.fdaddad
    width:100%;
    height:50px;
    background:#FCFCFC;
    position:relative;
    margin-top:5px;
    border-radius:0px 5px 5px 0px 
    border:1.5px solid #F7F7F7
    cursor:pointer
.dsadjaoi
    width:100%;
    height:32px;
    margin:auto;
    position:absolute;
    top: 0; left: 0; bottom: 0; right: 0;

.dadadklan
    width:40%;
    height:15px;
    margin:0px auto 2px auto;
.dadadklan1
    width:40%;
    height:15px;
    margin:0px auto -2px auto;
.fashfnoefn
    width:100%;
    height:15px;
    margin:auto;
    text-align:center
    font-size:11px;
    font-weight 510
.sajnd
    margin-bottom :3px

.form-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGODQ3QkFBNzAwNTExRUFCMTI4RkUzOEM3NDYwNTE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGODQ3QkFCNzAwNTExRUFCMTI4RkUzOEM3NDYwNTE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkY4NDdCQTg3MDA1MTFFQUIxMjhGRTM4Qzc0NjA1MTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkY4NDdCQTk3MDA1MTFFQUIxMjhGRTM4Qzc0NjA1MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dQeWgAAAAz0lEQVR42mLk7f3JAASqQNwBxC5AzMdAHPgExHuAuOJTEdttJiBDHYiPAPFBIFYEYkYisSJUzxG+vl/qjEAXrQVyDgHxRAbyQDkQm4EM+gg1/R2ZBgkB8UMmaJiQawgDMHxAenmYcMg/BOL/OPBDbBpYcBgkT6rLmBioBGhu0GgYkR5G/4DYBJ9BgzOMPkEzHlkAWISA9H5hghZOsRQ4JgWId4HCqBpaQIECdTEQvyfSAEGoA4qB2B7kohtAbAfiEEjR2FI4SI8dsCi5ARBgADVRSACp6ZBlAAAAAElFTkSuQmCC');
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.advice-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4RUFDNzc2NzAwNTExRUFCNjI0QzUzOTUwMDI0M0MxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4RUFDNzc3NzAwNTExRUFCNjI0QzUzOTUwMDI0M0MxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzhFQUM3NzQ3MDA1MTFFQUI2MjRDNTM5NTAwMjQzQzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzhFQUM3NzU3MDA1MTFFQUI2MjRDNTM5NTAwMjQzQzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hToJOAAABWElEQVR42mLk7f3JAASqQNwBxC5AzMdAHPgExHuAuOJTEdttkAATEKsD8REgPgjEikDMSCRWhOo5wtf3C2QGAwsQt0HxJAbSwDuoHk6o/mAmqNcWM5APZgOxG8ybfFBbyALA8ALp5YEZhg4eAvF/AvghNoNZsIjJk+tKJgbqgLNUMwwYbibEhNlsNDlhIJ4LxB+heC4wjQnj86Y8UsJMRRJnB+J90JhXguK3IDGggeyketMXiF8CcSnUEBAug4r5kmqYGBDfxiJ+C4jFiQkz5PR0HIh9gJgfSYwf6qpjpKaz80C8HIhPAnE2VGwqSAwYm+dxGYYPVADxL1CmhvJXAQ2qQ45NULkkRIKBz3GwGRiBheNaIH0IiCfiMeAtmoXToXQmcpEE8mY1tJD7Dy2K3mMxTAia7tBBFtCbYAYwrf1nhBbb6tACzhWIeZFdDqU/oMUiNvAZIMAArm1dtuhpCdMAAAAASUVORK5CYII=');
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.flowprocess-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyQUFGNDYzNzAwNTExRUE4RDlEOTdEOTA4OEJFNkRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyQUFGNDY0NzAwNTExRUE4RDlEOTdEOTA4OEJFNkRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDJBQUY0NjE3MDA1MTFFQThEOUQ5N0Q5MDg4QkU2REIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDJBQUY0NjI3MDA1MTFFQThEOUQ5N0Q5MDg4QkU2REIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz62UtluAAAApklEQVR42mL8//8/Azrg6/sFojyBeC4QS6JJPwfiZCDe/qmIDUMvEwNuADIsDIgZ0XAYVA4rwGcgyGVHsIgfweJqogwkCwxtA0GxaYNF3BqIX+DSxILHwBQgXg3EEmjiT6HJhmQDt+GLTVyAkbf3J0FFsAQMTfAEwxCUI54B8X80/Awqhw7wqmciI0fgVc9ERo7Aq36E5hRScwRe9Sxk5Ai86gECDAAlwjRHEs0HIgAAAABJRU5ErkJggg==');
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.askTo-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAASCAYAAACq26WdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGOTZDQUEyNzAwNTExRUE4MTk2RkM4RUUwMEEzQjM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGOTZDQUEzNzAwNTExRUE4MTk2RkM4RUUwMEEzQjM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REY5NkNBQTA3MDA1MTFFQTgxOTZGQzhFRTAwQTNCMzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REY5NkNBQTE3MDA1MTFFQTgxOTZGQzhFRTAwQTNCMzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Oe8qgAAACAElEQVR42rzVS0hUURzH8Xt9DGQaWUQgJIaY9qbV7CIMXOgmNCS0cqNBEb0WadAuCKTGIjRFUIQWSoRBhAoKQos2bUSkB+4UiSglRBMlmr7/+AnX6c6ZQcQ/fGDuPeeex/88xs+LrXqOyMRNXEIJ4viCHnTpOWks3olseM7y3PEUR3EFH+HjBGIoxD3Xx7va1jY8+46ZHcAEivEzoWwfplU276UZGY6yw/gQ0pHFd820JOF9JYY205mfYk3+aE3X4xxeIW8znS0j17Uktgf0uxbP0YwirWWd1jWtDWIjz06xU63ORbSiQinP0UCq8AxjuIYFV2eTKMPukHUrENskr9GHKZW1BurtwGO8xWlXGpfwEldDym6jF2ua0QXcwjGMYgRtOILrWEGTn+JQ2257r0a+6V2Z3h3HXOCYjGl2h3AXp9CId3iBRxkpjoalqQOD2Il8DOBBoCOLWZzRTCzlw3ioQe5HNUqzHLvU0lODcuzFfS18kVJ2Ev1Km22Ur+rwcqCdX3qesUEkpjFbhS22ezT9Ud2HiQf+rO7MPZqF1f2dZPDWxo/1NEaUX2u0XndhFO0hHVl8UllUda3Tz2ojElLfZtZpnR3UHXheH1naxr30Y1zfNKiNCbUZjDe2USyNNson6Pa2Juyo3FCq/7v147oHtzL+tZns/yzubUP8FWAAQd529bLPGDIAAAAASUVORK5CYII=');
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.console-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyNTQyMDI3NzAwNTExRUFCQUQwODdBREM5MTk4ODRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyNTQyMDI4NzAwNTExRUFCQUQwODdBREM5MTk4ODRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTI1NDIwMjU3MDA1MTFFQUJBRDA4N0FEQzkxOTg4NEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTI1NDIwMjY3MDA1MTFFQUJBRDA4N0FEQzkxOTg4NEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz48+w2FAAABGklEQVR42mL8//8/AzLg6/sFojyBeC4QSzLgB8+BOBmIt38qYkORYMKhAWRoGBAzEsBhULUYAJfBIJceYSAMjuDyFSNv709s4v+hLiIGYFULcjEocCYC8Vuoov9IGojByGrfQc1iAxncBcRqQKxDRJgSwtpQs5pAQfEWauhzBuoAUJhfAblYiIqGwpKgEBMDjcDwMRiUpZ8RkdSeQdVizSDYEvizrcGMkhZS+F11Amis99r/oMhCV/kfZ5YmZCgIQNVI4goKkI02VAxeayB+wQIkUoB4NRBLUGAYctn7FFSUggzehsU7/0k0GKMQYkEvoJEKe6IBNjNwRd5zUIwTAichBcELbHIsOPSkAJPRXCLCHRSeadgkAAIMAFKYVMTwh1IUAAAAAElFTkSuQmCC');
    background-size:100% 100%;
    background-repeat: no-repeat;

}
.more-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAFCAYAAACn39dKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OTY1NTNENzAwNTExRUE5RjFBODEzNkI5ODVFMkE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3OTY1NTNFNzAwNTExRUE5RjFBODEzNkI5ODVFMkE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc5NjU1M0I3MDA1MTFFQTlGMUE4MTM2Qjk4NUUyQTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc5NjU1M0M3MDA1MTFFQTlGMUE4MTM2Qjk4NUUyQTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HpUwIAAAAaElEQVR42mLk7f0px8DAMAeILYH4OBCnAPEjBgggSY4JSMwF4gNALAmlFzIgAElyjECXfQYyhIH4FxDzAPFbIGaHaiBJDuSyE0BcAhXIA+JjSLaTJAcyLBmIHYH4BZROQNJAkhxAgAEAmKEqxpOCoCAAAAAASUVORK5CYII=');
    background-size:100% 30%;
    background-repeat: no-repeat;
    margin-top:5px
}


.single-selected { 
  display:none
}
.single-selected-label {
  cursor: pointer;
  position: relative;
}



#jdisndan:active .single-selected-checked {
 
}
</style>