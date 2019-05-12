<template>
  <div class="ebook clearfix">
    <book-list :data="bookData" v-on:select="select"></book-list>
    <book-list :data="bookData" v-on:select="select"></book-list>
    <book-list :data="bookData" v-on:select="select"></book-list>
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
            id : 12456,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12457,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12458,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12459,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12489,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12486,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 124521,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 12444,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 124575,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          },{
            id : 1245632,
            name : "月亮与六便士",
            writer : "[英] 毛姆",
            image : require("../../public/imgs/lunbo/special_1.jpeg")
          }
        ]
      }
    }
    
  },
  methods : {
    select(item){
      console.log(item);
      this.$router.push({path:'/ebookDetail',query:{id:item.id}});
    }
  }
}
</script>

<style lang="scss">
  .ebook {
    width: 960px;
    padding: 20px;
    margin: 0 auto;

    .book-list {
      float: left;
      margin-right: 40px;
    }
  }
  .clearfix:after {
      content: ' ';
      height: 0;
      display: block;
      clear: both;
  }
</style>