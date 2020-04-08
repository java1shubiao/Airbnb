/**
 * 鼠标点击后获取鼠标的位置
    监听鼠标位置
    计算出鼠标移动的x位移和y位移，区分正负
    将距离映射到div的top上
 */

function lagger(Root){
    const root = document.getElementsByClassName('sskwz_div')[0]
    console.log("class为",Root,"的元素:",root)
    root.addEventListener('click',(e)=>{
        console.log(1)
        var e = e || window.event
        var mouseX,mouseY,mouseOverX,mouseOverY
        var chazhiX,chazhiY
        mouseX = e.pageX
        mouseY= e.pageY
        console.log("点击时鼠标的位置,x:",mouseX,"y:",mouseY)
        console.log(event)
        setInterval(()=>{
                var e = event || window.event
                console.log("e=>",e,"event=>",event)
                mouseOverX = e.clientX
                mouseOverY = e.clientY
                console.log("鼠标移动时的位置,x:",mouseOverX,"y:",mouseOverY)
    
                chazhiX = mouseOverX-mouseX
                chazhiY = mouseOverY-mouseY
                console.log("鼠标位移,chazhiX:",chazhiX,"chazhiY:",chazhiY)
    
                if(chazhiX){
                    if(chazhiY){
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.marginTop = document.getElementsByClassName(Root)[0].style.marginTop-chazhiY
                        document.getElementsByClassName(Root)[0].style.marginLeft = document.getElementsByClassName(Root)[0].style.marginLeft+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                    }else{
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                        document.getElementsByClassName(Root)[0].style.marginTop = document.getElementsByClassName(Root)[0].style.marginTop+chazhiY
                        document.getElementsByClassName(Root)[0].style.marginLeft = document.getElementsByClassName(Root)[0].style.marginLeft+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                    }
                }else{
                    if(chazhiY){
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.top = document.getElementsByClassName(Root)[0].style.top-chazhiY
                        document.getElementsByClassName(Root)[0].style.left = document.getElementsByClassName(Root)[0].style.top-chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                    }else{
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.top = document.getElementsByClassName(Root)[0].style.top-chazhiY
                        document.getElementsByClassName(Root)[0].style.left = document.getElementsByClassName(Root)[0].style.top+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                    }
                }
                
        },1000)
    })
           /*  document.getElementsByClassName(Root)[0].addEventListener('mousemove',(e)=>{
                var e = e || window.event
                mouseOverX = e.pageX
                mouseOverY = e.pageY
                console.log("鼠标移动时的位置,x:",mouseOverX,"y:",mouseOverY)
    
                chazhiX = mouseOverX-mouseX
                chazhiY = mouseOverY-mouseY
                console.log("鼠标位移,chazhiX:",chazhiX,"chazhiY:",chazhiY)
    
                if(chazhiX){
                    if(chazhiY){
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.marginTop = document.getElementsByClassName(Root)[0].style.marginTop-chazhiY
                        document.getElementsByClassName(Root)[0].style.marginLeft = document.getElementsByClassName(Root)[0].style.marginLeft+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                    }else{
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                        document.getElementsByClassName(Root)[0].style.marginTop = document.getElementsByClassName(Root)[0].style.marginTop+chazhiY
                        document.getElementsByClassName(Root)[0].style.marginLeft = document.getElementsByClassName(Root)[0].style.marginLeft+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.marginTop",document.getElementsByClassName(Root)[0].style.marginTop)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.marginLeft",document.getElementsByClassName(Root)[0].style.marginLeft)
                    }
                }else{
                    if(chazhiY){
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.top = document.getElementsByClassName(Root)[0].style.top-chazhiY
                        document.getElementsByClassName(Root)[0].style.left = document.getElementsByClassName(Root)[0].style.top-chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                    }else{
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素此时top值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                        document.getElementsByClassName(Root)[0].style.top = document.getElementsByClassName(Root)[0].style.top-chazhiY
                        document.getElementsByClassName(Root)[0].style.left = document.getElementsByClassName(Root)[0].style.top+chazhiX
                        console.log("元素修改后top值:document.getElementsByClassName(Root)[0].style.top",document.getElementsByClassName(Root)[0].style.top)
                        console.log("元素修改后left值:document.getElementsByClassName(Root)[0].style.left",document.getElementsByClassName(Root)[0].style.left)
                    }
                }
            }) */
        
   
        // },1000)

    // })    
    
}

export default lagger