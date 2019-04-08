<template>
  <div class="book">
    <div class="book-title">
      <p class="book-text">北斗星最受欢迎的好书分享</p>
      <p class="book-select"><span @click="change('best')" :class="{'best':best}">最受欢迎的</span>/<span @click="change('latest')" :class="{'latest':latest}">最新书评</span></p>
    </div>
    <div  class="book-content">
      <read-share :data="readShareData"></read-share>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import ReadShare from '../components/readShare'
export default {
  name: 'Book',
  props: {

  },
  components : {
      ReadShare
  },
  data(){
    return{
      best : true,
      latest : false,
      readShareData: [
            {
                title: "普吉&斯米兰",
                content: "精彩提前看 心路历程 过完年后生活太苦，必须要出去玩一下调节一下心态 ……提前3周定机票，提前2周安排的行程，，是一场准备很仓促的旅行（ 好听点就是说走就走的旅行）…… 重点注意事项精彩提前看 心路历程 过完年后生活太苦，必须要出去玩一下调节一下心态 ……提前3周定机票，提前2",
                author: "zhiyanmememda",
                watch: 335,
                favour: 699,
                src: require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                title: "普吉&斯米兰",
                content: "精彩提前看 心路历程 过完年后生活太苦，必须要出去玩一下调节一下心态 ……提前3周定机票，提前2周安排的行程，，是一场准备很仓促的旅行（ 好听点就是说走就走的旅行）…… 重点注意事项",
                author: "zhiyanmememda",
                watch: 335,
                favour: 699,
                src: require("../../public/imgs/lunbo/special_1.jpeg")
            }
        ]
    }
    
  },
  methods : {
    change(value){
      console.log(value);
      if(value === "best"){
        this.best = true;
        this.latest = false;
      } else {
        this.best = false;
        this.latest = true;
      }
    }
  }
}
</script>

<style lang="scss">
    .book {
      width: 960px;
      margin: auto;
      padding: 20px 20px;
      .book-title {
        float: left;
        p {
          font-family: '宋体','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          font-size: 18px;
          text-align: left;
          span {

          }
        }
        p:first-child {
          margin-bottom: 20px;
        }
        .book-select {
          span {
            margin: 0px 5px;
          }
          span:hover {
            cursor: pointer;
          }
          .best,.latest {
            color: #666699;;
          }
        }
      }
      .book-content {
        width: 632px;
        // float: left;
        position: relative;
        top: 80px;
        padding-bottom:80px;
        img {
          position: absolute;
          left: 14px;
        } 
      }
    }
</style>