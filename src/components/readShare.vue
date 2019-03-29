<template>
  <div class="read-share">
    <div class="read-share-content" v-for="(item,index) in data" :key="index">
        <img :src="item.src" alt="">
        <a class="read-share-title">{{item.title}}</a>
        <span class="read-share-text">{{item.content}}</span>
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
            background-color: pink;
            position: relative;
            img{
                width: 220px;
                height: 150px;
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
        }
    }

</style>
