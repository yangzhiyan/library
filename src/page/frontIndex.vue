<template>
  <div class="frontIndex">
    <div class="slideshow">
        <el-carousel :interval="5000" arrow="always" height="634px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src= item.url  alt="" />
                <h3>{{ item.url }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="content clearfix">
        <div class="left-content">
            <writer-special :wSpecialText="wSpecialText"></writer-special>
            <writer-special :wSpecialText="oneimg"></writer-special>
        </div>
        <div class="right-content">
            <div class="title">
                <span class="hot-share" :class="{'hot-share-line':hotShareLine}" @click="changeTitle('hotShareLine')">热门分享</span>
                <span class="lasted-publish" :class="{'lasted-publish-line':lastedPublishLine}" @click="changeTitle('lastedPublishLine')">最新发表</span>
            </div>
            <read-share :data="readShareData"></read-share>
        </div>
    </div>
    
  </div>
</template>

<script>
import WriterSpecial from '../components/writerSpecial'
import ReadShare from '../components/readShare'
export default {
  name: 'FrontIndex',
  components : {
      WriterSpecial,
      ReadShare
  },
  props: {
      
  },
  data(){
    return{
        // 选中热门分享时样式
        hotShareLine: true,
        // 选中最新分享时样式
        lastedPublishLine: false,
        imgs: [
            {
                url: require('../assets/imgs/index/1.jpg')
            },{
                url: require("../assets/imgs/index/2.jpg")
            },{
                url: require("../assets/imgs/index/3.jpg")
            },{
                url: require("../assets/imgs/index/4.jpg")
            }
        ],
        wSpecialText: {
            title: "作家专栏",
            linkname: "专栏首页",
            link: "/",
            content: [
                {
                    conTitle: "《三体》",
                    conText: "一个你所不知道的世界，你想象不到的世界",
                    src: require("../../public/imgs/lunbo/special_1.jpeg"),
                    link: "#"
                },{
                    conTitle: "《三体2》",
                    conText: "一个你所不知道的世界2，你想象不到的世界2",
                    src: require("../../public/imgs/lunbo/special_2.jpeg"),
                    link: "#"
                },{
                    conTitle: "《三体3》",
                    conText: "一个你所不知道的世界3，你想象不到的世界3",
                    src: require("../../public/imgs/lunbo/special_3.jpeg"),
                    link: "#"
                    
                }
            ]
        },
        oneimg: {
            title: "旅游攻略",
            linkname: "更多",
            link: "/",
            content: [
                {
                    conTitle: "《三体》",
                    conText: "一个你所不知道的世界，你想象不到的世界",
                    src: require("../../public/imgs/lunbo/special_3.jpeg"),
                    link: "#"
                }
            ]
        },
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
  methods: {
      changeTitle(value){
        if(value==="hotShareLine"){
            this.hotShareLine = true;
            this.lastedPublishLine = false;
        }else if(value==="lastedPublishLine"){
            this.hotShareLine = false;
            this.lastedPublishLine = true;
        }
      }
  }
}
</script>

<style lang="scss">
    .frontIndex {
        width: 100%;
        min-height: 700px;
        margin: 10px auto;
        text-align: left;
        .slideshow {
            .el-carousel__container {
                height: 500px;
            }
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .content {
            width: 1000px;
            min-height: 305px;
            margin: 20px auto;
            .left-content {
                width: 300px;
                min-height: 300px;
                float: left;
            }
            .right-content {
                width: 632px;
                min-height: 300px;
                float: left;
                padding: 24px 24px;
                .title {
                    width: 632px;
                    border-bottom: 1px solid #e4e4e4;
                    margin-bottom: 20px;
                    .hot-share,.lasted-publish {
                        width: 130px;
                        height: 50px;
                        font-size: 18px;
                        line-height: 50px;
                        text-indent: 6px;
                        text-align: center;
                    }
                    .hot-share-line,.lasted-publish-line {
                        border-bottom: 3px solid #ff9d00;
                    }
                }
            }
        }
    }
</style>