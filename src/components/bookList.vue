<template>
  <div class="book-list">
    <div class="book-list-title">
        <p class="title">{{data.title}}</p>
        <p class="scribe">{{data.scribe}}</p>
    </div>
    <div class="book-list-content">
        <div class="book-list-box clearfix" v-for="(item,index) in data.data" :key="index">
          <div class="book-list-info">
            <span class="list-num">{{index+1}}</span>
            <span class="list-name">{{item.name}}</span>
            <p>{{item.writer}}</p>
          </div>
          <div class="book-list-img">
            <img :src="item.image" alt="" >
          </div>
        </div>
    </div>
    <p class="book-detail" @click="detail">查看详情</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'BookList',
  props: {
    data : Object,
  },
  mounted(){
    // console.log(this.data);
  },
  data(){
    return{
      
    }
    
  },
  methods:{
    detail(){
      // console.log("detail");
      this.$router.push({path:'/detail',query:{type:this.data.type}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    body {
      background: #f8f9f9;
    }
    .book-list {
        width: 240px;
        height: 550px;
        padding: 20px;
        background-color: #FFF;
        position: relative;
        // background-color: pink;
        .book-list-title {
            text-align: left;
            .title {
                font-size: 16px;
                font-weight: 800;
                color: #bb996d;
            }
            .scribe {
                color: #a6a6a6;
                font-size: 12px;
                margin: 5px 0px;
            }
        }
        .book-list-content {
          .book-list-box {
            // height: 40px;
            // margin-top: 10px;
            text-align: left;
            min-height: 30px;
            padding: 5px;
            img {
              width: 80px;
              height: 120px;
              // margin: 10px 5px;
            }
            .book-list-info {
              float: left;
              overflow: hidden;
              span:first-child {
                display: inline-block;
                width: 30px;
              }
            }
            .book-list-img {
              float: right;
              display: none;
            }
            span {
              font-size: 14px;
            }
            p {
              margin-top: 20px;
              display: none;
              font-size: 12px;
              opacity: 0.75;
              margin-left: 30px;
            }
          }
          .book-list-box:hover .book-list-img {
            display: block;
          }
          .book-list-box:hover p {
            display: block;
          }
        }
      .book-detail {
        position: absolute;
        bottom: 10px;
        // margin: 0 auto;
        left: 110px;
        color: #68abb7;
        cursor: pointer;
        // text-align: center;
      }
    }
    .clearfix:after {
          content: ' ';
          height: 0;
          display: block;
          clear: both;
      }
</style>
