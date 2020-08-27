<template>
<ul class="nav">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/contacts">Contacts</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/myproj">My Projects</router-link>
  </li>
  
</ul>
    
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.nav {
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
};
</style>

