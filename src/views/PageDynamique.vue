<template>

    <h2>Page dynamique</h2>
   <p>identifiant {{ id }}</p>
   </template>
   
   <script>
      export default{
        props: ['id'],
        created(){
            setTimeout(() => {
              console.log(this.id)
            }, 1500);
        }
      }
   </script>