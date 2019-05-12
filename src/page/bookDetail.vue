<template>
  <div class="book-detail">
    <div class="book-info clearfix">
        <div class="book-info-img">
            <img :src="bookData.img" alt="">
            <div class="book-info-imgs">
                <img v-for="(item,index) in bookData.imgs" :key="index" :src="item" alt="">
            </div>
        </div>
        <div class="book-info-text">
            <p>{{bookData.title}}</p>
            <p class="info-text-desc">{{bookData.desc}}</p>
            <p class="info-text-author">
                <span>作者：{{bookData.author}}</span>
                <span class="info-text-span">出版社：{{bookData.publish}}</span>
                <span class="info-text-span">出版时间：{{bookData.date}}</span>
            </p>
            <p class="info-text-rate">
                <el-rate
                    v-model="bookData.value"
                    disabled 
                    :colors="colors">
                </el-rate>
                <span class="info-text-span"><span class="comment_num">{{bookData.comment_num}}</span>条评论</span>
            </p>
            <p class="info-text-price">
                <span class="info-text-nowPrice">￥{{bookData.nowPrice}}</span>
                <span class="info-text-oldPrice">定价： ￥<span>{{bookData.oldPrice}}</span></span>
            </p>
            <p>
                <span>月销{{bookData.mSale}}件</span>
            </p>
            <p>
                <span>发货：</span><i class="el-icon-location-outline"></i><span>甘肃天水</span>
            </p>
            <div class="info-text-sale">
                <div class="sale-num">
                    <input type="text" class="sale-input" v-model="bookNum">
                    <span class="el-icon-plus" @click="addNum"></span>
                    <span class="el-icon-minus" @click="minusNum"></span>
                </div>
                <el-button type="danger">加入购物车</el-button>
                <el-button type="danger" plain>立即购买</el-button>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'BookDetail',
  components : {

  },
  mounted(){
    
  },
  props: {

  },
  data(){
    return{
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      bookNum: 0,
      bookData: {
        title : "三体",
        author : "沈复 著周公度 译注",
        //   translator : "mmm",
        type : " 图书 / 非虚构",
        publish : "中信出版社",
        date : "2019-04",
        provide : "大星文化",
        words : 166000,
        isbn : "9787508696645",
        img : require("../../public/imgs/books/santi.jpg"),
        imgs : [
            require("../../public/imgs/books/santi.jpg"),
            require("../../public/imgs/books/santi.jpg"),
            require("../../public/imgs/books/santi.jpg"),
        ],
        desc: "三体中的物理学 《三体》的幻想源于经典物理中的三体问题，即三个体积质量相当的天体，在远离其它星系以致其它星系的引力影响可忽略不计的情况下，三个天体在互相引力的作用下互相围绕运行，其运行轨迹将产生不.....",
        value: 4,
        comment_num: 1919,
        nowPrice: 77.03,
        oldPrice: 99.01,
        mSale: 3000,
      }
    }
    
  },
  methods: {
    addNum(){
        this.bookNum++;
        console.log(this.bookNum);
    },
    minusNum(){
        if(this.bookNum===0)
            return false;
        this.bookNum--;
    }
  }
}
</script>

<style lang="scss" scoped>
    .book-detail {
        width: 1100px;
        min-height: 200px;
        // background-color: aqua;
        margin: 0 auto;
        padding: 30px 20px;
        .book-info {
            .book-info-img {
                width: 400px;
                height: 400px;
                float: left;
                // background-color: pink;
                img {
                    width: 350px;
                    height: 300px;
                }
                .book-info-imgs {
                    height: 100px;
                    // background-color: antiquewhite;
                    text-align: left;
                    img {
                        width: 60px;
                        height: 60px;
                        margin: 10px 0px 0px 10px;
                    }
                    img:first-child {
                        margin-left:30px;
                    }
                }
            }
            .book-info-text {
                float: left;
                width: 600px;
                height: 350px;
                margin-left: 30px;
                // background-color: pink;
                text-align: left;
                p:first-child {
                    font-size: 24px;
                    font-weight: 600;
                }
                p {
                    font-size: 16px;
                    line-height: 40px;
                }
                .info-text-desc {
                    height: 64px;
                    line-height: 30px;
                    // background-color: pink;
                    overflow: hidden;
                    border-bottom: 1px solid #afafab;

                }
                .info-text-span {
                    margin-left: 40px;
                }
                .info-text-rate {
                    // width: 100px;
                    margin-top: -10px;
                    .el-rate {
                        width: 130px;
                        float: left;
                        margin-top: 10px;
                    }
                    .info-text-span {
                        span {
                            color: #1a66b3;
                        }
                        span:hover {
                            color: rgba(255, 157, 0, 1);
                            cursor: pointer;
                        }
                    }
                }
                .info-text-price {
                    height: 40px;
                    line-height: 30px;
                    .info-text-nowPrice {
                        font-size: 26px;
                        color:#e52222;
                    }
                    .info-text-oldPrice {
                        margin-left: 30px;
                        opacity: 0.75;
                        span{
                            text-decoration: line-through;
                        }
                    }
                    // background-color: pink;
                }
                .info-text-sale {
                    .sale-num {
                        position: relative;
                        width: 71px;
                        height: 40px;
                        border: 1px solid #e9e9e9;
                        padding-left: 2px;
                        float: left;
                        span {
                            position: absolute;
                            width: 20px;
                            height: 18px;
                            font-size: 14px;
                            // right: 6px;
                            text-align: center;
                            line-height: 18px;
                            color: #a1a19e;
                            background-color: #e2e2dc;
                        }   
                        span:first-child {
                            top: 0px;
                        }
                        span:last-child {
                            bottom: 0px;
                        }
                    }

                    input {
                        width: 50px;
                        height: 40px;
                        outline: none;
                    }
                    .el-button {
                        margin-left: 30px;
                    }
                }
            }
        }
        .book-intro {
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