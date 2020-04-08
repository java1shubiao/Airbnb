export default{
    increate({commit}){
        commit('changeComments')
    },
        UPDATAFILES({commit,state},newValue){
            commit('updatefiles',newValue)
            console.log("执行UPDATAFILES函数后，files=",state.files)
        },
        DELFILES({commit},index){
            commit('delfiles',index)
        },
        UPDATEID({commit},value){
            commit('updatereviewee_id',value)
        },
        CHANGESTATE({commit},num){
            switch(num){
                case 1:commit("changeswitch_installation");break;
                case 2:commit("changeswitch_tmbjs");
                case true:commit("edittrue");break;
                case false:commit('editfalse');break;
            }
        },
        DELALLFILES({commit,state}){
            for(var i=0;i<state.files.length;i++)
                commit("delfilesAll")
        },
        CHANGEINS({commit,state},argument){
            commit('delobj')
            console.log(argument)
            for(var key in argument.obj){
                console.log('key=>',key)
                var arr = argument.arr
                commit("changeinstallationObj",{arr,key})
            }
        },
        CHANGELOGIN({commit},newValue){
            commit('changeLogin',newValue)
        },
        SAVE({commit},newValue){
            commit('savereviewee_id',newValue)
        },
        UPDATESDT({commit},newValue){
            commit('changeReturnresult',newValue)
        }
}