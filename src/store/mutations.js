export default {
    changeState(state){
        state.loginIcon = !state.loginIcon
        console.log("loginIcon",state.loginIcon)
    },
    changeStateRegister(state){
        state.registerIcon = !state.registerIcon
    },
    changeisLogin(state){
        state.loginIcon = !state.loginIcon
    },
    changeheadImageButtonState(state){
        state.headImageButtonState = !state.headImageButtonState
    },
    changeStarLabel(state){
        state.starLabel = !state.starLabel 
    },
    changeComments(state,newValue){
       
        console.log(state.test.appraise_reviews)
        state.testTwo = 2;
    },
    changeCommentsTwo(state,newValue){
        state.test.appraiseNumber = newValue.reviews.length;
        state.test.appraise_reviews = newValue.reviews;
       console.log(state.testTwo)
    },

    /**
     * detailPage页面对数据进行分类
      */
     updatemsxx_qbsj(state,newValue){
         state.msxx_qbsj = newValue
     },
     updatemsxx_listingsj(state,newValue){
        state.msxx_listingsj = newValue.msxx_listing_details
     },
     updatemsxx_homestaydetailssy(state,newValue){
        state.msxx_homestaydetailssy = newValue.homestayDetail
     },
     //detail.vue
     updatedetailVueDate(state,newValue){

        /**
         * 日志
          */
       console.log(`"commit时传进来的newValue=>${newValue}"`) 
       var littletime =(()=>{
           return {
            ms_name:newValue.msxx_listing_details.name,
            ms_bedroom:newValue.msxx_listing_details.ms_bedroom,
            ms_bed:newValue.msxx_listing_details.ms_bed,
            ms_ws:newValue.msxx_listing_details.ms_ws,
            ms_enough:newValue.msxx_listing_details.ms_enough, //民宿能够容纳的人数
            ms_user_name:newValue.msxx_listing_details.ms_user_name,
            ms_user_img:newValue.msxx_listing_details.ms_user_img,  
            ms_fdxx:newValue.msxx_listing_details.ms_fdxx,  //民宿附加信息
            ms_sb:newValue.msxx_listing_details.ms_sb  
           }
       })()
       state.detailVueDate = littletime
       console.log("赋值后的detailVueDate",state.detailVueDate)
     },
     //appraise.vue
     updateappraiseVueDate(state,newValue){
         var littletime = (()=>{
             return {
                ms_listing_reviewsNumber:newValue.msxx_listing_details.reviews.length,
                ms_listing_reviews:newValue.msxx_listing_details.reviews
             }
         })()
         state.appraiseVueDate = littletime
         console.log("赋值后的appraiseVueDate",state.appraiseVueDate)
     },
     //DateSet.vue
     updateDateSetVueDate(state,newValue){
        state.DateSetVueDate = {
            ms_dateset:newValue.dateSet
        }
     },
     //landlord.vue
     updatelandlordVueDate(state,newValue){
        var littletime = (()=>{
            return {
                ms_user_name:newValue.user_information.name,
                ms_self_introduction:newValue.user_information.self_introduction,
                ms_self_headImg:newValue.user_information.headImg,
                ms_user_tel:newValue.user_information.tel
            }
        })()
        state.DateSetVueDate = littletime
     },
     //订单页的全部订单数据
     updateorderDetailVueData(state,newValue){
         state.orderDetailVueData = newValue.message
         console.log('全部订单信息orderDetailVueData:',state.orderDetailVueData)
         state.orderNotAppraiseData = state.orderDetailVueData.filter((data)=>{
            return data.ifappraise == false
        })
        console.log('待评价的订单信息orderNotAppraiseData:',state.orderNotAppraiseData)
     },
     //订单页的待点评的数据
     updatetypeAirbnbVueData(state,newValue){
         state.typeAirbnbVueData.type.push(newValue)
     },
     updateswitch_selected_number(state){
         state.switch_selected_number = !state.switch_selected_number
     },
     updateswitch_selected_typeairbnb(state){
         state.switch_selected_typeairbnb =!state.switch_selected_typeairbnb
     },
     updateswitch_selected_price(state){
         state.switch_selected_price = !state.switch_selected_price
     },
    //  updatepriceControlVueData(state,newValue){
    //      state.priceControlVueData.price.push(newValue)
    //      console.log('price',state.priceControlVueData.price)
    //  },
     updateswitch_headVue_notheadVue(state){
         state.switch_headVue_notheadVue = !state.switch_headVue_notheadVue
         console.log('switch_headVue_notheadVue',state.switch_headVue_notheadVue)
     },
     //head
     updateswitch_reregiste(state){
         state.switch_reregiste = !state.switch_reregiste
     },
     updateswitch_logginVue(state){
         state.switch_logginVue = !state.switch_logginVue
     },
     updateswitch_logginButton(state){
         state.switch_logginButton = !state.switch_logginButton
     },
     updateswitch_registerButton(state){
         state.switch_registerButton =!state.switch_registerButton
     },
     updateswitch_zdc(state){
         state.switch_zdc = !state.switch_zdc
         console.log('switch_zdc=>',state.switch_zdc)
     },
     updateuser_info(state,newValue){
         state.user_info._id = newValue
         console.log('此时user_info._id=>',state.user_info._id)
     },
     deluser_info(state){
         state.user_info._id = null
     },
     updatefiles(state,newValue){
         state.files.push(newValue)
     },
     delfiles(state,index){
        state.files.splice(index,1)
     },
    //orderDatail  根据id整理不同的订单信息
    accordingIDmergenews(state){
        state.orderNotAppraiseData.forEach((data,index)=>{
            state.mergedata[data.Ms_id] =  state.orderNotAppraiseData[index]
        })
        console.log('根据id整合的数据mergenews:',state.mergedata)
    },
        //存放照片的file
            updatefiles(state,newValue){
              state.files.push(newValue)
            },
        //删除file中的某个数据
            delfiles(state,index){
              state.files.splice(index,1)
           },
        //存放房东的id
           updatereviewee_id(state,newValue){
             state.reviewee_id = newValue
           },
           delfilesAll(state){
               state.files.pop()
           },
           changeinstallationObj(state,newValue){
               var num = newValue.arr[newValue.key-1]
               console.log(num,Object.prototype.toString.call(num))
            state.installationObj[num] = newValue.key
           },
           changeswitch_installation(state){
             state.switch_installation=!state.switch_installation
           },
           changeswitch_tmbjs(state){
            state.switch_tmbjs = !state.switch_tmbjs
           },
           edittrue(state){
             state.switch_edit_add = true
             console.log("switch_edit_add=", state.switch_edit_add )
           },
           editfalse(state){
             state.switch_edit_add=false
           },
           delobj(state){
             for(var key in state.installationObj){
                delete state.installationObj[key]
            }            
          },
          changeLogin(state,newValue){
            state.login = newValue
          },
          savereviewee_id(state,newValue){
              state.reviewee_id = newValue
          },
          changeReturnresult(state,newValue){
              state.Returnresult = newValue
          }
}