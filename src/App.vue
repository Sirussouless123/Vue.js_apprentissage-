<template>
<p>header</p>
<router-link to="/">MaHome</router-link> |
<router-link to="/deux">PageDeux</router-link>
<p>side</p>
 <router-view />

 <p>footer</p>
</template>

<script>



export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
