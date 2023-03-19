<template>

    <h2>Page Deux </h2>
    
    <button @click="goHome()">Go dd</button>
   </template>
   
   <script>
   
   export default{
    methods : {
        goHome(){
        //   this.$router.push('/');
          // ou this.$router.push({ name : 'home'})
          this.$router.push({ name: 'dd', params : {id : 20}});
         
        }
    }
   }
   </script>