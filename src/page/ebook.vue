<template>
  <div class="ebook">
    <book-list :data="bookData"></book-list>
  </div>
</template>

<script>
/* eslint-disable */ 
import BookList from '../components/bookList'
export default {
  name: 'Ebook',
  props: {

  },
  components : {
    BookList
  },
  mounted(){
    
  },
  data(){
    return{
      bookData : {
        title : "图书 ● 畅销榜",
        scribe : "本周销量 TOP 15",
        type : "good_sale",
        data : [
          {
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          }
        ]
      }
    }
    
  }
}
</script>

<style lang="scss">
  .ebook {
    width: 960px;
    padding: 20px;
    margin: 0 auto;
  }
</style>