/**
 * @description 轮播图思路
 * 结果：每隔1秒钟切换一张图片
 * 每个一秒钟执行一次函数：setInterval(XXX,1000)
 * 函数：
 * 变量：i=0
 * 语句：
 * 1.判断i是否等于Length
 * 1.1等于Length，将i=0
  */
 const async = require('async')

function RotationChar(arr){
    var ImgArr=arr
    var Length = ImgArr.length
    var background = document.querySelector('#sub_initPage_head')
    var obj = {Arr:ImgArr,Length:Length,background:background}
    promise(obj)
}

function promise(object){
    let {Arr,Length,background} = object
    let timer=null
    const fore = async ()=>{ 
        Arr.reduce((pre,data)=>{
            return pre.then(({i})=>{
                return new Promise((resolve)=>{
                    if(i==0){
                        background.style.backgroundImage = "url("+data+")"
                        background.style.backgroundSize="100%"
                        background.style.backgroundRepeat ="no-repeat"
                        resolve({i:i+1}) 
                    }else{
                        setTimeout(()=>{
                            background.style.backgroundImage = "url("+data+")"
                            background.style.backgroundSize="100%"
                            background.style.backgroundRepeat ="no-repeat"
                            resolve({i:i+1,timer:timer}) 
                        },3000)
                    }
                })
            })
         },Promise.resolve({i:0}))
    }
    (async ()=>{
        await fore()
    })()
    setInterval(async ()=>{
        await fore()
    },6000)
       
   
}

export default  RotationChar