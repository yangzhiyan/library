<template>
  <div class="test">
    <!-- <writer-special :wSpecialText="wSpecialText"></writer-special> -->
    <read-share :data="readShareData"></read-share>
  </div>
</template>

<script>
// import WriterSpecial from '../components/writerSpecial'
import ReadShare from '../components/readShare'

export default {
  name: 'Test',
  components : {
      // WriterSpecial,
    ReadShare
  },
  data(){
    return{
      value1:"",
      value2:"默认",
      readShareData: [
        {
          title: "普吉&斯米兰",
          content: "精彩提前看 心路历程 过完年后生活太苦，必须要出去玩一下调节一下心态 ……提前3周定机票，提前2周安排的行程，，是一场准备很仓促的旅行（ 好听点就是说走就走的旅行）…… 重点注意事项",
          author: "zhiyanmememda",
          watch: 335,
          favour: 699,
          link: require("../../public/imgs/lunbo/special_1.jpeg")
        },{
          title: "普吉&斯米兰",
          content: "精彩提前看 心路历程 过完年后生活太苦，必须要出去玩一下调节一下心态 ……提前3周定机票，提前2周安排的行程，，是一场准备很仓促的旅行（ 好听点就是说走就走的旅行）…… 重点注意事项",
          author: "zhiyanmememda",
          watch: 335,
          favour: 699,
          link: require("../../public/imgs/lunbo/special_1.jpeg")
        }
      ]

         
      
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .test {
        padding: 100px 500px;
    }
</style>
