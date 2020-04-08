const axios = require('axios')
const async = require('async')
 function sendAjax(url,callback){
     axios.get(url).then((response)=>{
        callback(response.data,response.headers)
    })
}
export default sendAjax