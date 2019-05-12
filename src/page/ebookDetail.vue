<template>
  <div class="ebook-detail">
    <div class="ebook-info clearfix">
        <div class="ebook-info-img">
            <img :src="bookData.img" alt="">
        </div>
        <div class="ebook-info-text">
            <p>{{bookData.title}}</p>
            <p>作者：{{bookData.author}}</p>
            <p v-if="bookData.translator">译者：{{bookData.translator}}</p>
            <p>类别：{{bookData.type}}</p>
            <p>出版方：{{bookData.publish}}</p>
            <p>提供方：{{bookData.provide}}</p>
            <p>字数：约{{bookData.words}}字</p>
            <p>ISBN：{{bookData.isbn}}</p>
        </div>
        <el-button plain class="readbtn">阅读</el-button>
    </div>
    <div class="ebook-intro">
        <p>作品简介：</p>
        <p v-for="(item,index) in bookData.intro" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'EBookDetail',
  components : {

  },
  mounted(){
    
  },
  props: {

  },
  data(){
    return{
      bookData: {
        title : "浮生六记",
        author : "沈复 著周公度 译注",
        //   translator : "mmm",
        type : " 图书 / 非虚构",
        publish : "中信出版社 / 2019-01",
        provide : "大星文化",
        words : 166000,
        isbn : "9787508696645",
        img : require("../../public/imgs/books/book1.jpg"),
        intro : [
            "这是沈复写给妻子芸娘的绝美情书。",
            "从初见的怦然心动到婚后的举案齐眉；从谈诗论画到赏月弄花，平平淡淡的柴米夫妻，将清贫的日子过成了一首诗。",
            "他们遭逢家庭变故，半生坎坷，颠沛流离，却一直相扶相依，不离不弃。"
        ]
       
      }
    }
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .ebook-detail {
        width: 960px;
        min-height: 200px;
        // background-color: aqua;
        margin: 0 auto;
        padding: 30px 20px;
        .ebook-info {
            // width: 220px;
            .ebook-info-img {
                width: 220px;
                height: 330px;
                float: left;
            }
            .ebook-info-text {
                float: left;
                width: 700px;
                height: 350px;
                margin-left: 30px;
                // background-color: pink;
                text-align: left;
                p:first-child {
                    font-size: 28px;
                }
                p {
                    font-size: 16px;
                    line-height: 40px;
                }
            }
        }
        .ebook-intro {
            margin: 50px 0px;
            text-align: left;
            font-size: 16px;
            p {
                font-size: 16px;
                line-height: 40px;
            }
            p:first-child {
                font-size: 24px;
                margin-bottom: 20px;
            }
        }
        .readbtn {
            width: 100px;
        }
    }
</style>