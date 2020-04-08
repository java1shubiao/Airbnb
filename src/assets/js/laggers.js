function laggers(document){
    var switch_null_notnull = true
    document.onclick = function(ev){
     switch_null_notnull = !switch_null_notnull
      if(switch_null_notnull){
         document.onmousemove = null
       }else{
          document.onmousemove=function(ev){
            var oEvent=ev||event;
            var oDiv=document.getElementsByClassName('register-component')[0];
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
            console.log("scrollLeft:",scrollTop,"scrollLeft:",scrollLeft)
            oDiv.style.left=oEvent.clientX+scrollLeft+'px';
            oDiv.style.top=oEvent.clientY+scrollTop+'px';
          }
      }
    }
    
}
export default laggers