const axios = require('axios')
function sendAjaxPost(url,data,callback){
    axios.post(url,data).then((datas)=>{
        callback(datas.data)
    })
}
export default sendAjaxPost