<template>
  <div class="rank-list">
      <div class="rank-list-title">
          <p>图书·畅销榜</p>
          <p>作品三周内有更新，按周热度排行</p>
      </div>
    <router-link to="/bookDetail">
        <div class="rank-list-box clearfix" v-for="(item,index) in list" :key="index">
            <div class="rank-list-img">
                <img :src="item.image" alt="">
            </div>
            <div class="rank-list-text">
                <p class="rank-text-title">{{item.name}}</p>
                <p class="rank-text-writer">{{item.writer}}</p>
                <div class="rank-text-text">
                    {{item.text}}
                </div>
                <p class="rank-text-words">
                    <span>{{item.words}} 万字</span> | 
                    <span>{{item.type}}</span>
                </p>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'RankList',
  props: {

  },
  components : {
    
  },
  mounted(){
    
  },
  data(){
    return{
        list: [
            {
                id : 12456,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 12457,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 12458,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 12459,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 12489,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 12486,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                id : 124521,
                name : "月亮与六便士",
                writer : "[英] 毛姆",
                type : "世界名著",
                text : "银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途...",
                words : 22.9,
                image : require("../../public/imgs/lunbo/special_1.jpeg")
            }
        ]
    }
    
  }
}
</script>

<style lang="scss">
  .rank-list {
    width: 960px;
    padding: 20px;
    margin: 0 auto;
    a {
        color: rgba(0,0,0,0.75);
    }

    .rank-list-title {
        height: 110px;
        // background-color: aqua;
        text-align: left;
        padding: 20px 20px;
        p {
            font-size: 18px;
            line-height: 50px;
        }
        p:first-child {
            font-size: 30px;
            font-weight: 800;
        }
        
    }
    .rank-list-box {
        width: 760px;
        height: 130px;
        margin: 0 auto;
        padding: 10px 20px 0px;
        border-bottom: 1px solid #ddd;
        .rank-list-img {
            float: left;
            width: 80px;
            height: 120px;
            img {
                width: 80px;
                height: 120px;
            }
        }
        .rank-list-text {
            float: left;
            width: 640px;
            padding: 0px 10px;
            p,div {
                text-align: left;
                margin-bottom: 5px;
            }
            div {
                width: 680px;
            }
            .rank-text-title {
                font-size: 16px;
                font-weight: 600;
            }
            .rank-text-writer,.rank-text-words {
                opacity: 0.75;
            }
        }
    }
    .rank-list-box:hover {
        background-color: #ddd;
    }
  }
  .clearfix:after {
      content: ' ';
      height: 0;
      display: block;
      clear: both;
  }
</style>