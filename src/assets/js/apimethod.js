import {photosurl,burl,submitByediturl} from '../js/apiurl'
const axios = require('axios')

export function submitphotos(files,ID){
    console.log('ID=',ID)
    var formdata =new FormData()
    files.forEach((data)=>{
        formdata.append('file',data)
    })
    axios.post(`api/photos/upload/`,formdata).then((data)=>{
        var phtos = data.data.photos
        axios.post(`api/savePhotos`,{phtos,ID}).then((data)=>{
            if(data.data.code==200)
                console.log('图片已经上传和保存成功')
        })
    })
}

export function submitairbnbmanagedata(submitdata){
    axios.post(burl,submitdata)
}
export function editairbnbmanagedata(data,ID){
    axios.post(submitByediturl,{data,ID})
}

export async function SUBMIT(submitdata,files,func){
    return new Promise(async (resolve,reject)=>{
        axios.post(burl,submitdata).then(async (data)=>{
            console.log('数据已经提交到后端,且放回_id',data.data._id)
            console.log('开始提交照片,此时state中的files=',files)
            var formdata =new FormData()
            files.forEach((dT)=>{
               formdata.append('file',dT)
            })
            var ID= data.data._id
            axios.post(`api/photos/upload`,formdata).then(async (data)=>{
                if(data.data.code==200){
                    func(ID)
                    console.log('照片上传成功')
                    var phtos = data.data.photos
                    console.log('开始存储图片')
                    axios.post(`api/savePhotos`,{phtos,ID}).then(async (data)=>{
                        if(data.data.code==200){
                            console.log('图片已经存储在数据库中')
                            resolve()
                        }
                    })
                }
                
             })
        })
    }).catch((e)=>{

    })
   
}
