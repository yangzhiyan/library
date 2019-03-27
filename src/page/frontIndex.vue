<template>
  <div class="frontIndex">
    <div class="slideshow">
        <!-- <img src="../../static/imgs/index/1.jpg" alt=""> -->
        <el-carousel :interval="5000" arrow="always" height="634px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src= item.url  alt="" />
                <h3>{{ item.url }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FrontIndex',
  props: {
      
  },
  data(){
    return{
      imgs: [
          {
              url: require('../assets/imgs/index/1.jpg')
          },{
              url: require("../assets/imgs/index/2.jpg")
          },{
              url: require("../assets/imgs/index/3.jpg")
          },{
              url: require("../assets/imgs/index/4.jpg")
          }
      ]
    }
    
  }
}
</script>

<style lang="scss">
    .frontIndex {
        width: 100%;
        min-height: 700px;
        background-color: pink;
        margin: 10px auto;
        text-align: left;
        .slideshow {
            // height: 500px;
            .el-carousel__container {
                height: 500px;
            }
            .el-carousel__item {
                // img {
                //     width: 100%;
                //     height: 400px;
                // }
            }
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        
    }
</style>