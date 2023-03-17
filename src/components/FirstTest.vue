<template>

  <div class="liste">
  
    <h3>LISTE</h3>
    <ItemTest v-for="(item,index) in items" :name="item.name" :key="index"  />
    
  </div>

</template>

<script>

import ItemTest from './ItemTest.vue'
  export default {
      components : {
        ItemTest
      }, 
      data: ()=> {
        return {
                items : [
                  {name : 'item 1' },
                  {name : 'item 2' },
                  {name : 'item 3' },
                  {name : 'item 4' },
                  {name : 'item 5' },
                  {name : 'item 6' },
                ] 
        }
      }
  }

</script>


<style>
     .liste{
      max-width : 40%;
      margin : 0 auto;
      background-color: rgb(233,233,233);
      padding: 30px;
     }

     
</style>