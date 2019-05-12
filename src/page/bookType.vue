<template>
  <div class="book-type">
    <div class="bt-header">
        <span class="bt-header-text">综合排序</span>
        <span class="bt-header-text">销量 <span class="el-icon-caret-bottom"></span> </span>
        <span class="bt-header-text">好评 <span class="el-icon-caret-bottom"></span> </span>
        <span class="bt-header-text">出版时间 <span class="el-icon-caret-bottom"></span> </span>
        <span class="bt-header-text">价格 <span class="el-icon-caret-top"></span></span>
    </div>
    <div class="bt-content">
        <div class="bt-con-item" v-for="(item,index) in bookData" :key="index">
            <div class="bt-item-img" >
                <img :src="item.img" alt="">
            </div>
            <div class="bt-item-con">
                <router-link class="item-con-title" tag="p" :to="{path:'/bookDetail',query:{id:item.id}}">{{item.title}}</router-link>
                <p class="item-con-price">
                    <span class="now-price">￥{{item.price}}</span>
                    <span v-if="item.oldPrice" class="old-price">定价：￥<span class="del">{{item.oldPrice}}</span></span>
                </p>
                <p class="item-con-date">
                    <span>{{item.author}}</span>/
                    <span>{{item.date}}</span>/
                    <span>{{item.publish}}</span>
                </p>
                <el-rate
                    v-model="item.value"
                    disabled 
                    :colors="colors">
                </el-rate>
                <p class="item-con-desc">{{item.desc}}</p>
                <div class="item-con-btn">
                    <el-button type="danger" @click="addCart">加入购物车</el-button>
                    <el-button type="danger" plain @click="favor">收藏</el-button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'BookType',
  props: {
    // data: Array
  },
  mounted(){
    
  },
  data(){
    return{
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        bookData: [
            {
                id: 1,
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！",
                price: 64.10,
                oldPrice: 93.00,
                author: "刘慈欣",
                date: "2010-11-01",
                publish: "重庆出版社",
                value: 4,
                desc: "相关推荐：三体中的物理学 《三体》的幻想源于经典物理中的三体问题，即三个体积质量相当的天体，在远离其它星系以致其它星系的引力影响可忽略不计的情况下，三个天体在互相引力的作用下互相围绕运行，其运行轨迹将产生不....."
            },{
                id: 1,
                img: require("../../public/imgs/books/santi.jpg"),
                title: "三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！",
                price: 64.10,
                author: "刘慈欣",
                date: "2010-11-01",
                publish: "重庆出版社",
                value: 3,
                desc: "相关推荐：三体中的物理学 《三体》的幻想源于经典物理中的三体问题，即三个体积质量相当的天体，在远离其它星系以致其它星系的引力影响可忽略不计的情况下，三个天体在互相引力的作用下互相围绕运行，其运行轨迹将产生不....."
            }
        ]
    }
    
  },
  methods: {
      addCart(){
          console.log("add");
      },
      favor(){
          console.log("favor");
      }
  }
}
</script>

<style lang="scss">
   .book-type {
       width: 1200px;
       min-height: 200px;
    //    background-color: pink;
       margin: 50px auto; 
       .bt-header {
            height: 30px;
            border: solid 1px #efefef;
            line-height: 30px;
            background-color: #f5f5f5;
            text-align: left;
            .bt-header-text {
                // margin-left: 10px;
                // margin-right: 20px;
                width: 100px;
                padding-left: 10px;
            }
            .bt-header-text:hover {
                background-color: #d1cfcf;
            }
       }
       .bt-content {
           padding: 20px;
           min-height: 200px;
           margin-top: 30px;
           .bt-con-item {
               width: 1160px;
               margin: 0 auto;
               height: 350px;
            //    background-color: pink;
               .bt-item-img {
                   width: 300px;
                   height: 100%;
                   float: left;
                //    background-color: gold;
                   position: relative;
                   img {
                        position: absolute;
                        top: -14px;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                        width: 250px;
                        height: 280px;
                   }
               }
               .bt-item-con {
                    width: 790px;
                    height: 260px;
                    float: left;
                    margin-top: 20px;
                    padding: 10px 20px;
                    text-align: left;
                    .item-con-title {
                        font-size: 20px;
                        color: #1a66b3;
                        cursor: pointer;
                    }
                    .item-con-title:hover {
                        color: rgba(255, 157, 0, 1);
                    }
                    .item-con-price {
                        height: 30px;
                        line-height: 30px;
                        margin: 10px 0px;
                        .now-price {
                            color: #ff2832;
                            font-size: 24px;
                            font-weight: 600;
                        }
                        .old-price {
                            margin-left: 30px;
                            color: #969696;
                        }
                        .del {
                            text-decoration: line-through; 
                        }
                    }
                    .item-con-date {
                        color: #787878;
                    }
                    .item-con-desc {
                        font-size: 16px;
                        height: 44px;
                        overflow: hidden;
                        // background-color: #1a66b3;
                        margin: 20px 0px;
                    }
               }
               
           }
           .bt-con-item:hover {
               background-color: #efefef;
           }
       }
       .el-rate{
           margin: 10px 0px;
           line-height: 30px;
           span {
               font-size: 24px;
           }
           .el-rate__text {
               font-size: 16px;
               margin-top: 4px;
           }
       }
   }

</style>
