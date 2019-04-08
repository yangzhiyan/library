<template>
  <div class="book-list">
    <div class="book-list-title">
        <p class="title">{{data.title}}</p>
        <p class="scribe">{{data.scribe}}</p>
    </div>
    <div class="book-list-content">
        <div v-for="(item,index) in data.data" :key="index">
            <span class="list-num">{{index+1}}</span>
            <span class="list-name">{{item.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    data : Object,
  },
  data(){
    return{
      
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .book-list {
        width: 240px;
        height: 560px;
        padding: 20px;
        background-color: pink;
        .book-list-title {
            text-align: left;
            .title {
                font-size: 16px;
                font-weight: 800;
                color: #bb996d;
            }
            .scribe {
                color: #a6a6a6;
                font-size: 12px;
                margin: 5px 0px;
            }
        }
    }
</style>
