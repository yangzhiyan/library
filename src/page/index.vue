<template>
  <div class="index">
    <!-- 头部导航栏 -->
    <div class="index-nav">
        <div class="logo"></div>
        <div class="logo-text">北斗星</div>
        <router-link to="/index" class="nav">
            <div class="text">首页</div>
        </router-link>
        <router-link to="/book" class="nav">
            <div class="text">一本好书</div>
        </router-link>
        <router-link to="/ebook" class="nav">
            <div class="text">电子书</div>
        </router-link>
        <router-link to="/shop" class="nav">
            <div class="text">商城</div>
        </router-link>
        <div class="search"><input type="text"><span class="el-icon-search"></span></div>
        <div class="login" v-if="loginStatus"><span @click="login">登录</span>|<span @click="register">注册</span></div>
        <div class="loging" v-else>
            <span>时妖i</span><span class="el-icon-caret-bottom"></span>
            <div class="log-content">
                <div>个人中心</div>
                <div @click="shopCart">购物车</div>
                <div @click="myOrder">我的订单</div>
                <div>写日志</div>
                <div>退出登录</div>
            </div>
        </div>
        
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
    
    <!-- 底部 -->
    <div class="footer">
        <div class="footer-content">
            <div class="title">北斗星照亮您前进的路</div>
            <div class="footer-logo">
                <span class="logo"></span>
                <span class="logo-text">北斗星</span>
                <span class="copyright">© 2019 BeiDouXing.cn 京ICP备11015476号 京公网安备11010502013401号 京ICP证110318号</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Index',
  props: {

  },
  data(){
    return{
      loginStatus : false,

    }
    
  },
  methods: {
      login(){
        axios.get('/users')
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.$router.push('/login');
      },
      register(){
          this.$router.push('/register');
      },
      shopCart(){
          this.$router.push('/shopCart');
      },
      myOrder(){
          this.$router.push('/myOrder');
      }
  }
}
</script>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
    }
    .index {
        width: 100%;
        min-height: 800px;
        padding: 0 auto;
        .index-nav {
            width: 1000px;
            height: 70px;
            margin: 0 auto;
            .nav {
                color: #3c3c3c;
                float: left;
            }
            div {
                float: left;
            }
            clear: both;
        }
        
        .logo {
            width: 70px;
            height: 70px;
            background-image: url("../assets/kongleme.png");
            background-position: 10px 10px;
            background-size: 350% 350%;
        }
        .logo-text {
            font-size: 30px;
            font-family: '华文行楷','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            line-height: 70px;
            opacity: 0.75;
        }
        .text {
            width: 116px;
            line-height: 70px;
            font-size: 24px;
            font-family: '方正舒体','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            opacity: 0.75;
        }
        .search {
            width: 200px;
            border: 1px solid rgba(217,217,217,1);
            border-radius: 4px;
            margin-top: 22px;
            margin-left: 20px;
            input {
                height: 24px;
                width: 180px;
                outline: none;
                // line-height: 70px
            }
            span {
                font-size: 20px;
                line-height: 24px;
                font-weight: 900;
                opacity: 0.75;
            }
        }
        .login {
            width: 100px;
            color: #c9c9c9;
            font-size: 18px;
            line-height: 70px;
            text-align: right;
            margin-left: 50px;
            span {
                margin: 0px 5px;
                color:#ff9d00;
            }
        }
        .loging {
            position: relative;
            z-index: 999;
            width: 130px;
            // background-color: pink;
            height: 70px;
            margin-left:20px;
            line-height: 70px;
            font-size: 16px;
            font-weight: 900;
            span:nth-child(2){
                font-size: 16px;
                font-weight: 400;
                margin-left: 20px;
            }
            // margin-left: 20px;
            // float: left;
            .log-content {
                display: none;
                width: 140px;
                background-color: white;
                
                // margin-top: 30px;
                div {
                    clear: both;
                    height: 50px;
                    width: 140px;
                    line-height: 50px;
                }
                div:hover {
                    background-color: #c9c9c9;
                }
            }
        }
        .loging:hover .log-content{
            display: block;
        }
    }
    .content {
        margin-top: 0px;
    }
    .footer {
        width: 100%;
        height: 220px;
        background-color: #3c3c3c;
        padding: 10px 0px;
        color: #c2c2c2;
        .footer-content {
            width: 1000px;
            height: 220px;
            margin: 0px auto;
            .title {
                font-size: 18px;
                height: 50px;
                line-height: 30px;
                margin-top: 20px;
                letter-spacing: 5px;
                border-bottom: 1px solid #575a5b;
            }
            .footer-logo {
                .logo {
                    display: inline-block;
                    width: 60px;
                    height: 55px;
                    background-image: url("../assets/footer.png");
                    background-position: 6px -50px;
                    background-size: 400% ;
                    float: left;
                    margin: 38px 0px 30px 80px;
                }
                .logo-text {
                    float: left;
                    margin-left: 30px;
                    margin-top: 30px;
                    color: #F5AA10;
                }
                .copyright {
                    float: left;
                    margin-left: 30px;
                    margin-top: 54px;
                }
            }
        }
    }
    .index .index-nav .router-link-exact-active {
        // color: aqua;
        background-color: #F5AA10;
    }
</style>