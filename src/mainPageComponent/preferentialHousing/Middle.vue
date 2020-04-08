<template>
    <div id="middle">
        <div id="middleChildren" :style="{width:width+'px',height:height+'px'}">
            <button v-for="(city,index) in populeCity" v-bind:key='index' :style="{width:buttonwidth+'px',height:height+'px',marginLeft:space+'px'}" id="buttonid" v-on:click="button_city_event(city)">
                {{city}}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        /**
         * @description populeCity:是一个对象，值为按钮的名字
         *                  width:每个按钮的宽度
         *                  height:每个按钮的高度
         *                  space:每个按钮的间隔
         */
        populeCity:Array,  
        width:Number,
        height:Number,
        space:Number
    },
    
    computed:{
        
    },
    beforeMount(){
        /**
         * @description this.buttonwidth:根据div的宽度和传进来的按钮间隔space计算按钮的宽度
         *  */
        this.buttonwidth = (this.width-8*this.space)/8
    },
    data(){
        return{
            buttonwidth:0
        }
    },
    methods:{
        button_city_event(city){
            const url = `api/initPage/hotairbnb/${city}`
            this.$http.get(url).then((data)=>{
                this.$store.dispatch('UPDATESDT',data.message)
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
#buttonid
    border-radius: 3px !important;
    box-sizing: border-box !important;
    box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15) !important;
    font-size: 17px !important;
    text-align: center !important;
    font-weight: bold !important;
    outline: none !important;
    border: solid 0.5px #00848A !important;
</style>