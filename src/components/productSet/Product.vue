<template>
    <div class="product">
        <div class="product-container">
            <div class="product-grid">
                <div class="data-loading" v-if="menuList === null">
                    Loading...
                </div>
                <div  v-for="(data, idx) in menuList" :key="idx">
                    <div v-if="data.page_running === currentPage" class="product-grid-card">
                        <div class="card-content">
                            <div class="crad-title">
                                <h4>{{data.title}}</h4>
                            </div>
                            <div class="card-desc">
                                <div class="img-card">
                                    <img class="img-src" :src="require('../.././assets/'+data.path_img)" width="270" height="370" />
                                </div>
                                <div class="desc-card">
                                    <h5>{{data.desc}}</h5>
                                </div>
                            </div>
                            <div class="btn-buy-card">
                                <h3>{{data.price}} THB</h3>
                            </div>
                        </div>
                        <div class="btn-buy-card">
                            <button class="btn btn-secondary" @click="haddleAddMenu(data.path_img, data.title, data.price)"><b>Add to cart</b></button>
                        </div>
                    </div>
                </div> 
            </div>
 
            <div class="pagination">
                <b-pagination
                    class="pagination-op"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    ></b-pagination>
            </div>
      
        </div>
    </div>
</template>

<script>
import store from '../../store'

export default {
    name: 'product',
    components:{
        
    },
    data(){
        return{
            menuList: null,
 
            perPage:6,
            currentPage: 1,
        }
    },
    methods:{
        apiMenuList(){

            const url = `http://localhost:8080/fullmenu`
            console.log(url)

            fetch(url,{
                headers:{
                    "Access-Control-Allow-Origin": "*",
                }
            })
            .then((res) => {
                return res.json()
            }).then((data) => {
                this.menuList = data
                console.log(data)
            }).catch(err=> {
                console.log(err)
            })
        },
        haddleAddMenu(imgPath, productName, price){
            if(this.$root.state.userLogin === null){
                alert("Login first to add product!")
            }else{
                store.addCartList(imgPath, productName, price)
                console.log(this.$root.state.cratList)
            }
            
        }
 
    },
    mounted(){
        this.apiMenuList()  
  
    },
    computed:{
        rows(){
            return this.menuList.length;
        }
    }
}
</script>

<style scoped>
.product-container{
    background-color: rgb(204, 200, 200);
    width: 90%;
    margin: auto;
    border-radius: 30px;
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
}

.product-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.pagination{
    margin: auto;
    margin-top: 10px;   
    margin-bottom: 10px
}

.pagination-op{
    background-color: black !important;
}

.page-item{
    background-color: rgb(185, 184, 184);
}

.product-grid-card{
    background-color: rgb(216, 216, 216);
    margin: 15px;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.crad-title{
    text-align: center;
}

.card-desc{
    display: grid;
    grid-template-columns:  1fr 1fr;
}

.img-src{
    border-radius: 30px;
}

.img-card{
    text-align: center;
}

.btn-buy-card{
    margin: 10px;
    text-align: center;
}

.btn-secondary{
    width: 50%;
    margin-bottom: 20px;
}
 
h4{
    margin-bottom: 50px;
}
</style>