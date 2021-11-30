<template>
  <div class="Navbar">
      <div class="navbar-container">
        <header>
            <h1>AFTERNOON TEA</h1>
        </header>
        <div class="menu-on-click">
            <router-link class="btn btn-secondary" to="./marketplace"><b>MarketPlace</b></router-link>
            <router-link class="btn btn-secondary"  to="./cart"><b>Cart</b></router-link>
            <router-link class="btn btn-secondary" to="./login"><b>Login</b></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>


.navbar-container{
    display: grid;
    height: 150px;
    text-align: center;
    grid-template-rows: 4fr 1fr;
}

header{
    background-color: rgb(53, 53, 53);
    text-align:  center;
}

.menu-on-click{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    padding: 10px
}

 .btn{
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
     font-size: 20px;
     text-align: center;
 }

</style>