const axios = require('axios')
class Api_methods{
    constructor(){

    }
    api_sendajax(url,callback){
        axios.get(url).then((response)=>{
           callback(response.data,response.headers)
       })
    }
    api_sendajaxpost(url,data,callback){
        axios.post(url,data).then((datas)=>{
            callback(datas.data)
        })
    }
}
export default Api_methods