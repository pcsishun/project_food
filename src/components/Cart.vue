<template>
    <div class="cart">
        <div class="cart-container" v-if="$root.state.userLogin === null">
            <h1>Please login first to see your cart.</h1>
            <router-link class="btn btn-secondary" to="./login"><b>Login</b></router-link>
        </div>
        <div class="cart-container" v-if="$root.state.userLogin !== null">
            <h3>User {{$root.state.userLogin}} cart</h3>
            <div class="total-sum">
                <h5>Total price {{$root.state.sumOfPrice}}</h5>
                <h5>Count product {{$root.state.countMenu}}</h5>
            </div>
            <br>
            <div class="cart-table">
                <div v-if="$root.state.countMenu === 0">
                    <h1>No item in cart.</h1>
                </div>
                <table class="table table-striped" v-if="$root.state.countMenu !== 0">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody v-for="(data, idx) in $root.state.cratList" :key="idx">
                        <tr>
                        <td><img :src="require('../assets/'+data.img)" width="150" height="200"/></td>
                        <td>{{data.name}}</td>
                        <td>{{data.price}}</td>
                        <td><button class="btn btn-danger"  @click="haddleRemove(idx, data.price)">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"cart",
    data(){
        return{

        }
    },
    methods:{
        haddleRemove(idx, price){
            console.log(idx)
            this.$root.state.cratList.splice(idx,1);
            this.$root.state.countMenu -= 1;
            this.$root.state.sumOfPrice -= price;
        }
    }
}
</script>

<style scoped>
.cart-container{
    text-align: center;
    margin-top: 150px;
}

.cart-container{
    text-align: center;
}

.cart-table{
    background-color:rgb(197, 197, 197);
    border-radius: 30px;
    width:80%;
    margin: auto;

}

.total-sum{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:35%;
    background-color:rgb(197, 197, 197);
    margin: auto;
    border-radius: 30px;
    
}
</style>