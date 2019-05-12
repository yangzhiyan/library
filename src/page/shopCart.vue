<template>
  <div class="shop-cart">
    <div class="shop-cart-title">
        <span class="cart-title-check cart-title-span">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </span>
        <span class="cart-title-info cart-title-span">商品信息</span>
        <span class="cart-title-price cart-title-span">单价</span>
        <span class="cart-title-num cart-title-span">数量</span>
        <span class="cart-title-total cart-title-span">金额（元）</span>
        <span class="cart-title-opt cart-title-span">操作</span>
    </div>
    <div class="shop-cart-item" v-for="item in shopData" :key="item.id">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox  :label="item.id" >&nbsp;</el-checkbox>
        </el-checkbox-group>
        <div class="cart-item-img">
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
        </div>
        <div class="cart-item-price">
            <span>￥{{item.price}}</span>
        </div>
        <div class="cart-item-num">
            <span class="el-icon-plus"></span>
            <input type="text" v-model="nums" :key="item.id">
            <span class="el-icon-minus"></span>
        </div>
        <div class="cart-item-total">
            <span>￥{{totalPrice}}</span>
        </div>
        <div class="cart-item-opt">
            <span @click="del">删除</span>
        </div>
    </div>
    <div class="shop-cart-total">
        <div class="cart-total-con">
            <span>总计： ￥64.00</span>
            <el-button type="danger" @click="settle">结算</el-button>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'ShopCart',
  components : {
    
  },
  mounted(){

  },
  computed: {
      totalPrice : function(item){
          for(let i in this.checkedCities){
            if( i === item.id ){
                return item.price*this.nums;
            }
          }
          return 0;
      }
  },
  data(){
    return{
        checkAll: false,
        checkedCities: [],
        isIndeterminate: true,
        nums: 3,
        shopData: [
            {
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体1",
                price: 7,
                id: 2
            },{
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体2",
                price: 5,
                id: 3
            },{
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体3",
                price: 1,
                id: 4
            }
        ]
    }
  },
  methods: {
      handleCheckAllChange(val) {
        // this.checkedCities = val ? this.shopData : [];
        if(val){
            for(let item in this.shopData){
                this.checkedCities.push(this.shopData[item].id);
                // console.log(this.shopData[item].id);
            }
        }else{
            this.checkedCities=[];
        }
        // console.log(this.checkedCities);
        this.isIndeterminate = false;
      },
    handleCheckedCitiesChange(value) {
        //   console.log(value);
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.shopData.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.shopData.length;
    },
    del(){
        console.log("del");
    },
    //   结算
    settle(){
        this.$router.push('/ordered');
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   .shop-cart {
       width: 1100px;
    //    min-height: 200px;
       margin: 50px auto 0px;
       padding: 24px;
       text-align: left;
       .shop-cart-title {
           margin-bottom: 20px;
           .cart-title-span {
               color: #969696;
               width: 130px;
           }
           .cart-title-check {
               width: 250px;
           }
           .cart-title-info {
               width: 330px;
           }
       }
       .shop-cart-item {
           height: 120px;
           padding: 10px;
        //    background-color: pink;
        //    margin-bottom: 10px;
           position: relative;
           border-top: 1px solid #e4e4e4;
           .el-checkbox-group {
               width: 100px;
               display: inline-block;
               position: absolute;
               top: 50px;
               left: 30px;
           }
           .cart-item-img {
                position: relative;
                left: 120px;
                top: 10px;
               width: 400px;
               height: 120px;
            //    background-color: #969696;
                img {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                }
                span {
                    position: absolute;
                    left: 150px;
                    top: 10px;
                }
           }
           .cart-item-price {
               position: absolute;
               left: 580px;
            //    background-color: red;
               top: 0px;
               width: 100px;
               height: 140px;
               line-height: 90px;
               opacity: 0.75;
           }
           .cart-item-num {
               width: 108px;
               height: 36px;
               background-color: #f4f4f4;
               position: absolute;
               left: 680px;
               top: 34px;
               span {
                   width: 36px;
                   height: 36px;
                   line-height: 36px;
                   text-align: center;
               }
               input {
                   width: 36px;
                   height: 36px;
                   line-height: 36px;
                   text-align: center;
                   outline: none;
               }
           }
           .cart-item-total {
               position: absolute;
               left: 850px;
               top: 40px;
               color: #ff2832;
           }
           .cart-item-opt {
               position: absolute;
               right: 100px;
               top: 40px;
               opacity: 0.75;
           }
       }
       .shop-cart-total {
           width: 1100px;
           height: 60px;
        //    background-color: #ff2832;
           .cart-total-con {
               width: 300px;
               height: 60px;
               float: right;
                .el-button {
                    width: 100px;
                    margin-left: 20px;
                }
           }
       }
   }
</style>
