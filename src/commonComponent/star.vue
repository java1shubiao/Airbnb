<template>
    <div id="star">
      <div id="starimage" :style="{width:starWidth+'px',height:starHeight+'px'}"></div>
       <div id="starimage" :style="{width:starWidth+'px',height:starHeight+'px'}"></div>
        <div id="starimage" :style="{width:starWidth+'px',height:starHeight+'px'}"></div>
         <div id="starimage" :style="{width:starWidth+'px',height:starHeight+'px'}"></div>
          <div id="starimage" :style="{width:starWidth+'px',height:starHeight+'px'}"></div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    props:{
        crimitcore:Number,
        starWidth:Number,
        starHeight:Number
    },
    data(){
        return {
            crimitcores:45
        }
    }
}
</script>
<style lang="stylus">

#starimage
    background-image url("../assets/images/star.png")
    background-repeat no-repeat
    background-size: 100% !important;
    float:left
</style>