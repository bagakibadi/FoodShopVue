<template>
  <div>
    <div class="sidebar">
      <ul>
        <li><img src="@/assets/fork.png" alt=""></li>
        <li><img src="@/assets/clipboard.png" alt=""></li>
        <li><img src="@/assets/add.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar{
  position: fixed;
  bottom: 0;
  width: 70px;
  height: 90vh;
  background: white;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  /* justify-content: space-around; */
}
ul li {
  margin-top: 30px;
  margin-left: 10px;
}
ul li img{
  width: 45px;
  height: 45px;
  cursor: pointer;
}
</style>
