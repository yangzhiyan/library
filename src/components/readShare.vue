<template>
  <div class="read-share">
    <div class="read-share-content" v-for="(item,index) in data" :key="index">
        <img :src="item.src" alt="">
        <a class="read-share-title">{{item.title}}</a>
        <span class="read-share-text">{{item.content}}</span>
        <div class="read-share-icon">
          <span class="el-icon-location">hello</span>
          <span class="read-share-img"></span>
          <a class="read-share-imgText">shiyao</a>
          <span class="el-icon-view">550</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadShare',
  props: {
    data: Array
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
    .read-share {
        // width: 632px;
        .read-share-content {
            width: 630px;
            height: 150px;
            margin-bottom: 18px;
            padding: 16px 16px;
            // background-color: pink;
            position: relative;
            img{
                width: 220px;
                height: 150px;
            }
            a {
              color: #000;
              opacity: 0.75;
            }
            a:hover {
              text-decoration: underline;
            }
            .read-share-title {
                position: absolute;
                top: 16px;
                left: 250px;
                font-size: 20px;
                // line-height: 30px;
            }
            .read-share-text {
                position: absolute;
                top: 60px;
                left: 250px;
                width: 380px;
                height: 60px;
                // background-color: aliceblue;
                overflow: hidden; 
            }
            .read-share-text:after {
                content:"...";
                position:absolute;
                bottom: 6px;
                right: 14px;
                padding: 0 5px;
                // background-color: #fff;
            }
            .read-share-icon {
              position: absolute;
              left: 256px;
              top: 140px;
              opacity: 0.6;
              span {
                margin-right: 10px;
              }
              .read-share-img {
                background-color: #ff9d00;
                width: 20px;
                height: 20px;
                border-radius: 10px;
                position: relative;
                top: 5px;
                margin-right: 2px;
              }
              a {
                margin-right: 10px;
              }
              a:hover {
                color: #ff9d00;
                cursor: pointer;
                text-decoration: underline;
              }
            }
        }
        .read-share-content:hover {
          background-color: #eef1f6;
          cursor: pointer;
          a {
            color: #ff9d00;
          }
        }
    }

</style>
