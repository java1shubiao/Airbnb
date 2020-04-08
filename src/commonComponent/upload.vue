<template>
    <div id="upload">
        <!--  -->
        <div class=dasfiaolm>
            <table class="_dasldfq">
                <tr class="fiuassdahan">
                    <td v-for="(value,index) in files" v-bind:key="index" class="fiuashan">
                       <div class="_oenam" v-on:click='delImg(index)'>
                            <svg>
                                <line x1="0" y1='0' x2='10' y2='10' style="stroke:#bac2c9;stroke-width:2"/>
                                <line x1="0" y1='10' x2='10' y2='0' style="stroke:#bac2c9;stroke-width:2"/>
                            </svg>
                       </div>
                        <img :src="value.imgurl" alt="" class="dafuhda">
                    </td>
                    <td  class="fiuashan">
                        <div class="_oaejnrn">
                             <div >
                             <svg class="fsfasda">
                                <line x1="12" y1="25" x2="38" y2="25" style="stroke:#bac2c9;stroke-width:2"/>
                                <line x1="25" y1="12" x2="25" y2="38" style="stroke:#bac2c9;stroke-width:2"/>
                            </svg>
                            </div>
                            <div class="dasdkak">
                                <input type="file" v-on:change="filechange(this)" class="upload_img_input" enctype="multipart/form-data" multiple="multiple">
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>  
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:mapState(['files']),
    methods:{
        filechange(eve){
            var file = event.target.files
            var imgurl;
            var binaryData =[]
            for(var key in file){
                if(Object.prototype.toString.call(file[key])=='[object File]'){
                     imgurl = window.URL.createObjectURL(file[key])
                     file[key].imgurl = imgurl
                     this.$store.commit('updatefiles',file[key])
                }
            }
        },
        delImg(index){
          this.$store.commit('delfiles',index)
        }
    }
}
</script>
<style lang="stylus" scoped>
.ejfnnad
    opacity 0%
    position absolute
    top 15px
    left 50px
._oenam
    position absolute
    margin-left 60px
    margin-top 5px
    width 10px
    height 10px
._oaejnrn
    height 50px
._dasldfq
    height 100%
.dasfiaolm 
    height 100px
    width 100%
.fiuashan
    height 80px
    width 80px
.dafuhda
    width 100%
    height 100%
.dasdkak
    width 50px
    height 50px
    border 1px #dfe0e1 solid 
    position relative
    top -57px
    left 14px
.upload_img_input
    opacity 0% 
    width 50px
    height 50px
    z-index 2
    border 1px red solid 
.fsfasda
    border 1px #dfe0e1 solid 
    width 50px
    height 50px
</style>