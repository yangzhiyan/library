<template>
  <div class="writer-special">
    <div class="writer-special-title clearfix">
        <span>{{wSpecialText.title}}</span>
        <a :href="wSpecialText.link">{{wSpecialText.linkname}}</a>
    </div>
    <el-carousel>
        <el-carousel-item v-for="(item,index) in wSpecialText.content" :key="index">
            <img :src="item.src" alt="">
            <a :href="item.link">{{item.conTitle}}</a>
            <div>{{item.conText}}</div>
        </el-carousel-item>
    </el-carousel>
    <!-- <div>hello</div> -->
  </div>
</template>

<script>
export default {
  name: 'WriterSpecial',
  props: {
    wSpecialText : Object,
  },
  mounted(){
    //   console.log(this.wSpecialText);
  },
  data(){
    return{
        
    }
    
  }
}
</script>

<style lang="scss">
    .writer-special {
        width: 260px;
        height: 310px;
        padding: 8px;
        // background-color: pink;
        position: relative;
        .writer-special-title {
            padding: 4px 0px;
            span:first-child {
                font-size: 18px;
                float: left;
            }
            a {
                font-size: 14px;
                color: #999;
                line-height: 30px;
                float: right;
                cursor: pointer;
            }
            a:hover {
                text-decoration: underline; 
            }
        }
        .el-carousel__item {
            text-align: left;
            a {
                margin-left: 0px;
                line-height: 30px;
                color: rgba(0,0,0,0.75)
            }
            a:hover {
                color: #F5AA10;
            }
            div {
                text-align: left;
                line-height: 24px;
            }
        }
        .el-carousel__arrow {
            display: none;
            position: absolute;
            top: 0px;
        }
        .el-carousel__indicators {
            position: absolute;
            top: 120px;
            left: 190px;
            li {
                button {
                     width: 14px;
                     height: 6px;
                     border-radius: 4px;
                     position: relative;
                     right: -30px;
                     bottom: 4px;
                }
               
            }
        }
        
    }

</style>
