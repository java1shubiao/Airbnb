export default {
    regIcon:true,
    registerIcon:false,
    loginIcon:false,
    islogin:false,
    headImageButtonState:false,
    starLabel:true,
    test:{
        appraiseNumber:0,
        appraise_reviews:[]
    },
    testTwo:1,
    //head
    switch_logginVue:false,
    switch_reregiste:false,
    switch_logginButton:true,
    switch_registerButton:true,
    /** 
     * 搜素页面请求后端放回的数据
     *  msxx_qbsj:全部数据
     * msxx_listingsj:用户details页面的数据
     * msxx_homestaydetailssy:homestay部分的数据
     * detailVueDate:detail组件需要用到的数据
     * 下面的以此类推
     */
    msxx_qbsj:{},
    msxx_listingsj:{},
    msxx_homestaydetailssy:{},
    detailVueDate:{
        ms_name:"",
        ms_bedroom:0,
        ms_bed:0,
        ms_ws:0,
        ms_enough:0, //民宿能够容纳的人数
        ms_user_name:"",
        ms_user_img:"",  
        ms_fdxx:{},  //民宿附加信息
        ms_sb:[] //民宿的设备
    },
    appraiseVueDate:{
        ms_listing_reviewsNumber:0,
        ms_listing_reviews:[]
    },
    landlordVueDate:{
        ms_user_name:"",
        ms_self_introduction:"",
        ms_self_headImg:"",
        ms_user_tel:""
    },
    needKnowVueDate:{},
    DateSetVueDate:{
        ms_dateset:[]  //记录不同天数不同价格
    },

    /**
     * 订单详情页放回的后端数据
     * 
      */
    orderDetailVueData:[],
    orderNotAppraiseData:[],
    mergedata:{},//根据id整理不同的订单信息
    //
    typeAirbnbVueData:{
        type:[]
    },
    priceControlVueData:{
        price:[]
    },
    switch_selected_number:false,
    switch_selected_typeairbnb:false,
    switch_selected_price:false,
    switch_headVue_notheadVue:false,
    //detailPage
    switch_zdc:false,
    //userinfo:用户登录时保存的用户表的id
    user_info:{_id:''},
    //上传图片的files
    files:[],
    reviewee_id:'',
    installationObj:{},
    switch_installation:false,
    switch_tmbjs:false,
    switch_edit_add:false,
    login:false,
    reviewee_id:'',
    Returnresult:[]
}