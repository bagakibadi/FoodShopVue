<template>
  <div class="navbar">
    <div class="nav1">
      <div class="burger">
          <button class="sidebarBtn">
            <span></span>
          </button>
        </div>
        <div class="title-navbar">
          <h1>Food Items</h1>
        </div>
        <div class="search">
          <i class="material-icons" style="font-size:36px">search</i>
        </div>
    </div>
    <div class="nav2">
      <h1>Cart <span>0</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

.navbar{
  position: fixed;
  width: 100vw;
  height: 65px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.nav1{
  position: absolute;
  width: 65%;
  height: 65px;
  /* border-right: 2px solid black; */
  background: white;
}
.nav2{
  position: absolute;
  width: 35%;
  height: 100%;
  right: 0;
  background: white;
  border-left: 1px solid black;
}
.burger{
  left: 10px;
  top: 2px;
  width: 5%;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  /* background: red; */
}
.sidebarBtn{
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: whitesmoke;
  border: none;
  outline: none;
  transition: .3s all;
}
.sidebarBtn span {
  display: block;
  width: 20px;
  height: 3px;
  background: #262626;
  position: absolute;
  top: 30px;
  right: 13px;
  transition: .3s;
}
.sidebarBtn span:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #262626;
  transition: .3s;
}
.sidebarBtn span:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #262626;
  transition: .3s;
}
.title-navbar{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
}
.title-navbar h1 {
  font-weight: bold;
}
.search{
  position: relative;
  right: 10px;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
}

</style>
