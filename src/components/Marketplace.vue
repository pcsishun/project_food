<template>
    <div class="marketplace">
 
        <div class="market-container">
            <div class="promotion-container">
                <div class="text-content">
                    <h1>Promotion</h1>
                </div>
                <Horizontal/>
                <Promotion class="promo-card-contant"/>
            </div>
            <div class="product-set-container">
                <div style="text-align: center;">
                    <h1>Market Place</h1>
                </div>
                <Horizontal/>
                <div class="product-card-contant"> 
                    <Product/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from './productSet/Product.vue'
import Promotion from './promotion/Promotion.vue'
import Horizontal from './horizontal/Horizontal.vue'

export default {
    name:"marketplace",
    components: {
        Product,
        Promotion,
        Horizontal
  }
}
</script>

<style scoped>
.market-container{
    display: grid;
    grid-auto-rows: 0.9fr 1fr;
}
 
 
.text-content{
    text-align: center;
 
}
 
    
</style>