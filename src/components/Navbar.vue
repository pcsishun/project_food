<template>
  <div class="Navbar">
      <div class="navbar-container">
        <header>
            <div class="header-container">
                <h1>AFTERNOON TEA</h1>               
            </div> 
        </header>
        <div class="menu-on-click">
            <router-link class="btn btn-secondary" to="./marketplace"><b>MarketPlace</b></router-link>
            <router-link class="btn btn-secondary"  to="./cart">
                <b>Cart</b>
                <span class="notic-count" v-if="$root.state.userLogin !== null && $root.state.countMenu !== 0"> 
                    <b>   {{  $root.state.countMenu}}</b></span>
            </router-link>
            <router-link class="btn btn-secondary" to="./login" v-if="$root.state.userLogin === null"><b>Login</b></router-link>
            <button class="btn btn-danger" v-if="$root.state.userLogin !== null" @click="haddleLogout"><b>Logout</b></button>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name:"Navbar",
    methods:{
        haddleLogout(){
            this.$root.state.userLogin = null
            this.$router.push('./')
        }
    }
}
</script>

<style scoped>
h1{
    color: rgb(180, 179, 177);
}

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

.notic-count{
 
    border-radius: 50%;
    width: 150px;
    text-align: center;
}
</style>