<template>
  <div class="share-detail">
        <div class="share-personal-info">
            <div class="avatar"></div>
            <div class="share-info-title">
            <p class="title">{{articleData.title}}</p>
            <p class="time">
                <span class="info-text">{{articleData.publishInfo.author}}</span>
                <span class="info-text">{{articleData.publishInfo.time}}</span>
                <span class="info-text  el-icon-view">{{articleData.publishInfo.watch}}</span>
            </p>
            </div>
        </div>
        <div class="share-content">
            <div v-for="(item,index) in articleData.article" :key="index">
                <div v-if="Object.keys(item) == 'title'" class="share-content-title">
                    {{item.title}}
                </div>
                <div v-if="Object.keys(item) == 'content'" class="share-content-content">
                    {{item.content}}
                </div>
                <div v-if="Object.keys(item) == 'imgSrc'" class="share-content-imgSrc">
                    <!-- {{item.imgSrc}} -->
                    <img :src="item.imgSrc" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
// import ReadShare from '../components/readShare'
export default {
  name: 'shareDetail',
  components : {
    //   ReadShare
  },
  mounted(){
    
  },
  props: {

  },
  data(){
    return{
      articleData : {
          publishInfo : {
            time : "2019/10/27",
            watch : 2950,
            author : "yyy",
            avatar : require("../../public/imgs/lunbo/special_1.jpeg")
          },
          time : "2019/10/06",
          days : 9,
          partner : "朋友",
          title : "富国岛五日游 | 高性价比海岛来得容易走的方便",
          article : [
              { title : "景点分布"},
              { content : "这次行程比较悠闲，一共去了泥浆浴、夜市、香岛缆车、Sao Beach、夜钓鱿鱼、JW万豪酒店这几个地方，其中缆车、Sao Beach和JW万豪酒店都在 富国岛 南端，从岛中间的阳东镇打车过去约350000 越南 盾。"},
              {
                title : "泥浆浴"
              },
              {
                  content : "泡泥浆浴的地点叫Galina，对比了一下在飞猪买票是最便宜的，票价包含20分钟泥浆浴+泳池+沙滩+按摩浴池，会提供泳衣和一次性内裤，泥浆浴是比较稀的那种"
              },
              {
                  imgSrc : require("../../public/imgs/lunbo/special_1.jpeg")
              }
          ]
      }
    }
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
    .share-detail {
        width : 1200px;
        min-height : 200px;
        // background-color: pink;
        margin: 0 auto 100px;
        .share-personal-info {
            height: 110px;
            // background-color: red;
            padding: 20px;
            position: relative;
            .avatar {
                width:100px;
                height: 100px;
                border-radius: 50%;
                background-color: antiquewhite;
                float: left;
            }
            .share-info-title {
                width: 1000px;
                // background-color: red;
                height: 100px;
                float: left;
                margin-left: 30px;
                text-align: left;
                .title {
                    height: 50px;
                    line-height: 50px;
                    margin-left: 20px;
                    font-size: 26px;
                    font-weight: 800;
                }
                .time {
                    height: 50px;
                    // background-color: aqua;
                    line-height: 50px;
                    .info-text {
                        // width: 100px;
                        margin-left: 30px;
                    }
                }
            }
        }
        .share-content {
            height: 500px;
            // background-color: aqua;
            padding: 10px 24px;
            .share-content-title {
                text-align: left;
                height: 50px;
                line-height: 50px;
                font-size: 20px;
                font-weight: 600;
            }
            .share-content-content {
                text-align: left;
                text-indent: 32px;
                font-size: 16px;
                line-height: 30px;
            }
            .share-content-imgSrc {
                margin: 20px 0px; 
                text-align: left;
                img{
                    width: 500px;
                }
                
            }
        }
    }
</style>