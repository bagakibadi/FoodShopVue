<template>
  <div>
    <div class="container">
      <div class="menu">
        <div class="card" v-for="item in getMenu.result" :key="item.id" @click="select(item.id)">
          <img :src="item.image" alt="">
          <h2>{{item.name}}</h2>
          <h1>Rp. {{item.price}}</h1>
        </div>
      </div>
      <div class="cart">
        <div class="list-cart">
          <div class="card-cart" v-for="card in menuClick" :key="card.id">
            <div class="img">
              <img :src="card.image" alt="">
            </div>
            <div class="mid-cart">
              <p>{{card.name}}</p>
              <div class="count">
                <button class="minus">-</button>
                <input type="number" value="1">
                <button class="plus">+</button>
              </div>
            </div>
            <div class="price">
              <h3>Rp. {{card.price}}</h3>
            </div>
          </div>
        </div>
        <div class="button-cart">
          <div class="total">
            <h1>Total: <span>Rp.105.000*</span></h1>
            <p>*Belum termasuk ppn</p>
          </div>
          <div class="button">
            <button class="checkout">Checkout</button>
            <button class="cancle">Cancle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  computed: {
    getMenu() {
      return this.$store.state.menu;
    },
    menuClick() {
      return this.$store.state.menuClick;
    },
  },
  methods: {
    select(id) {
      // console.log(id);
      this.$store.commit('select', id);
    },
  },
  mounted() {
    this.$store.dispatch('getApi');
  },
};
</script>

<style scoped>
.container{
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  width: 95%;
  float: right;
  height: 90vh;
  background: rgba(190, 195, 202, 0.3);
}
.menu{
  display: flex;
  flex-wrap: wrap;
  width: 63.2%;
  height: 100%;
  background: rgba(190, 195, 202, 0.3);
}
.cart{
  width: 36.8%;
  height: 100%;
  background: white;
}
.card{
  margin-top: 20px;
  margin-left: 50px;
  height: 230px;
  width: 200px;
  cursor: pointer;
}
.card img{
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 150px;
}
.card h2 {
  font-size: 25px;
  line-height: 33px;
  /* font-weight: 600; */
}
.card h1{
  /* font-size: 25px; */
  line-height: 33px;
  font-weight: bolder;
}
.list-cart{
  overflow-y: scroll;
  width: 100%;
  height: 65%;
  /* background: #000; */
}
.button-cart{
  width: 100%;
  height: 35%;
  /* background: red; */
}
.total{
  margin-bottom: 10px;
  margin-left: 50px;
}
.total h1{
  font-weight: bold;
}
.total h1 span{
  font-weight: bold;
  float: right;
  margin-right: 50px;
  /* right: 20px; */
}
.total p {
  font-weight: 600;
}
.button{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout{
  width: 80%;
  height: 60px;
  background: #57CAD5;
  color: white;
  font-weight: bold;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
}
.cancle{
  margin-top: 10px;
  width: 80%;
  height: 60px;
  background: #F24F8A;
  color: white;
  font-weight: bold;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
}
.card-cart{
  top: 20px;
  position: relative;
  width: 80%;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
}
.img img{
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.count button{
  margin-bottom: 30px;
  width: 40px;
  height: 35px;
  color: #82DE3A;
  font-weight: bold;
  /* font-size: 40px; */
  background: rgba(130, 222, 58, 0.2);
  border: 1px solid #82DE3A;
  outline: none;
  cursor: pointer;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.count input{
  font-weight: bold;
  width: 40px;
  height: 31px;
  outline: none;
  text-align: center;
  /* padding-left: 20px; */
}
.mid-cart p{
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
}
.price{
  position: relative;
  top: 60px;
}
.price h3{
  font-size: 20px;
  font-weight: bold;
}
</style>
