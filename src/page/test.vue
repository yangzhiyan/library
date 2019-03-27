<template>
  <div class="test">
    <writer-special :wSpecialText="wSpecialText"></writer-special>
  </div>
</template>

<script>
import WriterSpecial from '../components/writerSpecial'

export default {
  name: 'Test',
  components : {
      WriterSpecial
  },
  data(){
    return{
      value1:"",
      value2:"默认",
      wSpecialText: {
        title: "作家专栏",
        linkname: "专栏首页",
        link: "/",
        content: [
            {
                conTitle: "《三体》",
                conText: "一个你所不知道的世界，你想象不到的世界",
                src: require("../../public/imgs/lunbo/special_1.jpeg")
            },{
                conTitle: "《三体2》",
                conText: "一个你所不知道的世界2，你想象不到的世界2",
                src: require("../../public/imgs/lunbo/special_2.jpeg")
            },{
                conTitle: "《三体3》",
                conText: "一个你所不知道的世界3，你想象不到的世界3",
                src: require("../../public/imgs/lunbo/special_3.jpeg")
                
            }
        ]
      }
         
      
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
