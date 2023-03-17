<template>

    <div class="item" v-if="showItem" @click="hideItem()">{{name}}</div>

</template>

<script>

    export default {
         props : {
            name : {
               default: 'Valeur par défaut'
            }
         },

         data : ()=>{
                return{
                    showItem: true
                }
         },
         methods: {
             hideItem() {
                console.log('hideItem');
                this.showItem = false;
             }
         }
    }
</script>


<style>

 

 .item{
       max-width : 80%;
       background-color:rgb(255, 255, 255) ;
       margin :15px auto  ;
       padding : 15px;
       transition:  0.2s;
       cursor : pointer;
     }

     .item:hover{
      background-color: rgba(30, 123, 241);
      color : white;
     }

     .item:active{
     transition: all 0.1s;
     transform: scale(0.9);
     }
</style>