<template>
  <div class="myOrder">
      <div class="myOrder-item" v-for="item in orderData" :key="item.orderNum">
          <div class="item-header">
              <span>订单号：<span class="item-bla">{{item.orderNum}}</span></span>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{{item.date}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span class="item-bla">￥{{item.money}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{{item.payWay}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span>{{item.nickName}}</span>
          </div>
          <div class="item-con">
              <div class="item-con-img" v-for="(img,index) in item.merchan" :key="index">
                  <img :src="img" alt="">
              </div>
          </div>
          <div class="item-type item-detail">
              <span>评价商品</span>
              <span>订单详情</span>
              <span>删除</span>
          </div>
          <div class="item-type">
              <span>{{item.busiType}}</span>
          </div>
          
      </div>
  </div>
</template>

<script>
/* eslint-disable */ 
// import WriterSpecial from '../components/writerSpecial'
import ReadShare from '../components/readShare'

export default {
  name: 'MyOrder',
  components : {
      
  },
  mounted(){
  },
  data(){
    return{
      readShareData: [
        {
          title: "普吉&斯米兰",
          author: "zhiyanmememda",
          watch: 335,
          favour: 699,
          link: require("../../public/imgs/lunbo/special_1.jpeg")
        },{
          title: "普吉&斯米兰",
          author: "zhiyanmememda",
          watch: 335,
          favour: 699,
          link: require("../../public/imgs/lunbo/special_1.jpeg")
        }
      ],
      orderData : [
          {
              orderNum : "9824684632131",
              date : "2019-04-24 19:00:30",
              money : 98,
              payWay : "网上支付",
              nickName : "zhiyan",
              merchan : [
                  require("../../public/imgs/books/santi.jpg"),
                  require("../../public/imgs/books/santi.jpg")
              ],
              busiType : "交易成功",
          }
      ] 

         
      
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .myOrder {
        width: 1000px;
        padding: 24px;
        margin: 20px auto;
        text-align: left;
        position: relative;
        .myOrder-item {
            width: 1000px;
            height: 150px;
            // background-color: pink;
            border: 1px solid #e6e8ea;
            // padding: 0px 20px;
            .item-header {
                height: 50px;
                background-color: #eff3ff;
                line-height: 50px;
                padding: 0 20px;
                color: #a1a3a5;
                .item-bla {
                    color: #4f4f4f;
                }
            }
            .item-con-img {
                margin-top: 5px;
                width: 80px;
                height: 90px;
                border: 1px solid #e6e8ea;
                float: left;
                margin-left: 20px;
                text-align: center;
                // line-height: 90px;
                img {
                    width: 70px;
                    height: 80px;
                    margin-top: 5px;
                }
            }
            .item-type {
               position: absolute;
               right: 200px;
                line-height: 90px;
                width: 100px;
            }
            .item-detail {
                // position: relative;
                position: absolute;
                right: 0px;
                // text-align: center;
                span {
                    position: relative;
                }
                span:first-child {
                    bottom: 24px;
                }
                span:nth-child(2){
                    bottom: 88px;
                }
                span:last-child {
                    bottom: 60px;
                    right: 40px;
                }
            }

        }
    }
</style>
