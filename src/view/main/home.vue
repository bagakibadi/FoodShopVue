<template>
  <div class="all">
    <Navbar/>
    <Sidebar/>
    <Content/>
  </div>
</template>

<script>
import Navbar from '../../components/navbar.vue';
import Sidebar from '../../components/sidebar.vue';
import Content from '../../components/content.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Content,
  },
};
</script>

<style scoped>
.all{
  width: 100vw;
  height: 100vh;
  position: absolute;
}
</style>
