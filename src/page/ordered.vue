<template>
  <div class="ordered">
    <p class="ordered-receipt-title">收货人信息</p>
    <div class="order-receipt-card">
        <p class="order-receipt-name">
            <span>杨智妍</span>
            <span>18719668500</span>
        </p>
        <p class="order-receipt-address">
            中国 江苏 无锡市 江阴市 新桥镇 河西社河西社一号
        </p>
        <p class="order-receipt-edit">
            <span @click="edit">编辑</span>
        </p>
    </div>
    <el-button plain @click="newAddress">新增地址</el-button>
    <p class="ordered-receipt-title">送货清单</p>
    <div class="ordered-receipt-list">
        <div class="receipt-list-title">
            <span>商品名称</span>
            <span>单价</span>
            <span>数量</span>
            <span>总价</span>
        </div>
        <div class="receipt-list-title receipt-list-con" v-for="item in orderData" :key="item.id">
            <span><img :src="item.img" alt=""><span class="title">{{item.title}}</span></span>
            <span>{{item.price}}</span>
            <span>{{item.num}}</span>
            <span>{{item.totalPrice}}</span>
        </div>
    </div>
    <div class="receipt-order-total">
        合计：<span>{{orderTotal}}</span>
    </div>
    <p class="ordered-receipt-title">支付方式</p>
    <div class="order-receipt-pay">
        <el-button type="danger" @click="dialogVisible = true">网上支付</el-button>
        <el-button type="danger" plain>货到付款</el-button>
        <el-button type="danger" plain>银行转账</el-button>
        <el-button type="danger" plain>他人代付</el-button>
    </div>

    <el-dialog
    title="请使用支付宝或者微信扫描二维码"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
        <img :src="img" alt="">
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Ordered',
  components : {
     
  },
  mounted(){
  },
  data(){
    return{
        dialogVisible: false,
         orderData: [
            {
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体1",
                price: 7,
                num: 2,
                totalPrice: 99,
                id: 2
            },{
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体2",
                price: 5,
                num: 2,
                totalPrice: 99,
                id: 3
            },{
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体3",
                price: 1,
                num: 2,
                totalPrice: 99,
                id: 4
            }
        ],
        orderTotal:998.00,
        img:require("../../public/imgs/books/santi.jpg"),
    }
  },
  methods: {
      edit(){
          console.log("edit");
      },
      newAddress(){
          console.log("newaddress");
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      sure(){
          this.$router.push('/myOrder');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .ordered {
        width: 1000px;
        margin: 20px auto;
        border-top: 3px solid #ff9d00;
        padding: 24px 24px;
        text-align: left;
        .ordered-receipt-title {
            text-align: left;
            font-size: 20px;
            font-weight: 600;
        }
        .order-receipt-card:hover .order-receipt-edit {
            display: block;
        }
        .order-receipt-card {
            margin-top: 10px;
            width: 240px;
            height: 140px;
            padding: 10px;
            // background-color: pink;
            border: 2px solid #ff9d00;
        }
        .order-receipt-name {
            height: 30px;
            line-height: 30px;
            position: relative;
            border-bottom: 1px solid #e6e6e6;
            // font-size: 20px;
            span {
                font-size: 16px;
                font-weight: 600;
            }
            span:first-child {
                position: absolute;
                left: 15px;
            }
            span:last-child {
                position: absolute;
                right: 5px;;
            }
        }
        .order-receipt-address {
            height: 60px;
            // background-color: pink;
            margin-top: 10px;
            font-size: 16px;
            text-align: left;
            line-height: 30px;
        }
        .order-receipt-edit {
            text-align: right;
            margin-top: 10px;
            color: #b17474;
            display: none;
        }
        .el-button {
            margin-top: 20px; 
            margin-bottom: 30px;
        }
        .ordered-receipt-list {
            width: 670px;
            background-color: #f1f5f8;
            margin: 20px 0px; 
            padding: 10px 20px;
            border: 1px solid #dcdcdc;
            span {
                width: 120px;
            }
            span:first-child {
                width: 300px;
            }
            img {
                width: 80px;
                height: 90px;
            }
            .receipt-list-title {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #dcdcdc;
            }
            .receipt-list-title:last-child {
                border: none;
            }
            .receipt-list-con {
                
                span{
                    position: relative;
                    bottom: 30px;
                }
                span:first-child {
                    bottom: 0px;
                }
                .title {
                    margin-left: 20px;
                }
                
            }
        }
        .receipt-order-total {
            width: 680px;
            height: 60px;
            // background-color: pink;
            text-align: right;
            span {
                font-size: 16px;
                color: #ff2832;
                font-weight: 600;
            }
        }
        
    }
</style>
