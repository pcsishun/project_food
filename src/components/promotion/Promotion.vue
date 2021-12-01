<template>
    <div class="promotion">
        <div class="promotion-container">
            <div v-for="(data, idx) in promotionList" :key="idx" class="loop-promotion">
                <div class="promotion-card" v-if="data.promoId === slidePromo">
                    <div class="promo-logo">
                        <img v-if="data.promoId === '0'" src="../.././assets/aft1.jpg" class="promo-img" width="564" height="851">
                        <img v-if="data.promoId === '1'" src="../.././assets/aft2.jpg" class="promo-img" width="564" height="851">
                        <img v-if="data.promoId === '2'" src="../.././assets/aft3.jpg" class="promo-img" width="564" height="851">
                    </div>
                    <div class="promotion-content">
                        <div class="first-pro">
                            <h2>{{data.name}}</h2>
                        </div>
                        <div class="sec-pro">
                            <h4>{{data.desc}}</h4>
                        </div>
                        <div class="third-pro">
                            <span><h2>{{data.price}} <button class="btn btn-secondary"><b>Buy</b></button></h2> </span>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-slide">
                <button class="dot btn btn-secondary" @click="haddleSelectionPromo('0')"></button>
                <button class="dot btn btn-secondary" @click="haddleSelectionPromo('1')"></button>
                <button class="dot btn btn-secondary" @click="haddleSelectionPromo('2')"></button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            slidePromo: "0",
            promotionList:[
                {
                    promoId: "0",
                    name: "Beautiful View from Backyard",
                    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a, voluptates itaque obcaecati ut harum aliquam vel ipsam nesciunt cum illo expedita perferendis excepturi impedit quidem iste! Consequuntur sint sed assumenda impedit. Voluptatum eius atque autem, ab quasi adipisci molestias eaque minima ea ullam totam velit, qui vel optio debitis et magni quis ex tenetur architecto laboriosam nobis ipsam facilis. Nemo fugit rerum neque ex possimus hic repudiandae quae quisquam nihil fuga repellat animi aspernatur maiores porro deleniti, maxime cumque quo provident nobis. Repellat dolores, fuga aliquam veniam a eius impedit iste nisi commodi, quasi eaque eos magni molestias debitis deserunt sed libero voluptates. Perspiciatis nisi tempore rem repudiandae nemo incidunt. Aspernatur repellendus cupiditate temporibus. Excepturi nobis autem soluta delectus sint dolore qui minima! Impedit natus sed voluptate sit tempore est modi amet. Accusamus, fugiat itaque autem incidunt nesciunt, quod in odio repellat impedit id officiis ad. Ullam exercitationem doloremque minima laborum molestias magni quia pariatur sequi maiores! Iure quasi repellat ex nemo tenetur harum consequuntur at maxime corrupti porro, fuga omnis ab, eum vero illo veniam voluptatum. Unde ex assumenda cupiditate fugiat alias ea beatae earum adipisci repudiandae provident in, expedita explicabo obcaecati non accusamus, enim doloribus eligendi debitis?",
                    price: "1,500 THB"
                },
                {
                    promoId: "1",
                    name: "lassic Colonial House on Sathorn",
                    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a, voluptates itaque obcaecati ut harum aliquam vel ipsam nesciunt cum illo expedita perferendis excepturi impedit quidem iste! Consequuntur sint sed assumenda impedit. Voluptatum eius atque autem, ab quasi adipisci molestias eaque minima ea ullam totam velit, qui vel optio debitis et magni quis ex tenetur architecto laboriosam nobis ipsam facilis. Nemo fugit rerum neque ex possimus hic repudiandae quae quisquam nihil fuga repellat animi aspernatur maiores porro deleniti, maxime cumque quo provident nobis. Repellat dolores, fuga aliquam veniam a eius impedit iste nisi commodi, quasi eaque eos magni molestias debitis deserunt sed libero voluptates. Perspiciatis nisi tempore rem repudiandae nemo incidunt. Aspernatur repellendus cupiditate temporibus. Excepturi nobis autem soluta delectus sint dolore qui minima! Impedit natus sed voluptate sit tempore est modi amet. Accusamus, fugiat itaque autem incidunt nesciunt, quod in odio repellat impedit id officiis ad. Ullam exercitationem doloremque minima laborum molestias magni quia pariatur sequi maiores! Iure quasi repellat ex nemo tenetur harum consequuntur at maxime corrupti porro, fuga omnis ab, eum vero illo veniam voluptatum. Unde ex assumenda cupiditate fugiat alias ea beatae earum adipisci repudiandae provident in, expedita explicabo obcaecati non accusamus, enim doloribus eligendi debitis?",
                    price: "1,750 THB"
                },
                {
                    promoId: "2",
                    name: "Day and Night Tea Time",
                    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a, voluptates itaque obcaecati ut harum aliquam vel ipsam nesciunt cum illo expedita perferendis excepturi impedit quidem iste! Consequuntur sint sed assumenda impedit. Voluptatum eius atque autem, ab quasi adipisci molestias eaque minima ea ullam totam velit, qui vel optio debitis et magni quis ex tenetur architecto laboriosam nobis ipsam facilis. Nemo fugit rerum neque ex possimus hic repudiandae quae quisquam nihil fuga repellat animi aspernatur maiores porro deleniti, maxime cumque quo provident nobis. Repellat dolores, fuga aliquam veniam a eius impedit iste nisi commodi, quasi eaque eos magni molestias debitis deserunt sed libero voluptates. Perspiciatis nisi tempore rem repudiandae nemo incidunt. Aspernatur repellendus cupiditate temporibus. Excepturi nobis autem soluta delectus sint dolore qui minima! Impedit natus sed voluptate sit tempore est modi amet. Accusamus, fugiat itaque autem incidunt nesciunt, quod in odio repellat impedit id officiis ad. Ullam exercitationem doloremque minima laborum molestias magni quia pariatur sequi maiores! Iure quasi repellat ex nemo tenetur harum consequuntur at maxime corrupti porro, fuga omnis ab, eum vero illo veniam voluptatum. Unde ex assumenda cupiditate fugiat alias ea beatae earum adipisci repudiandae provident in, expedita explicabo obcaecati non accusamus, enim doloribus eligendi debitis?",
                    price: "1,200 THB"
                }
            ]
        }
    },
    methods:{
        haddleSelectionPromo(pageSelection){
            this.slidePromo = pageSelection
        }
    }

}
</script>

<style scoped>
.promo-logo{
    text-align: center;

}
.promo-img{
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
}
.promotion-card{
    display:grid;
    grid-template-columns: 1fr 4.5fr;
    width: 80%;
    background-color: rgb(114, 110, 110);
    border-radius: 30px;
    margin: auto;
}

.promotion-content{
    margin-left: 30px;
}

.button-slide{
    text-align: center;
    margin-top: 10px;
}

.dot {
  height: 25px;
  width: 25px;
  background-color: rgb(212, 211, 211);
  border-radius: 50%;
  display: inline-block;
  margin-top: 10px;
  margin-left: 5px;
}

.btn-secondary :hover{
    background-color: rgb(71, 71, 71) !important; 
}

.first-pro{
    margin-top: 3%;
    margin-bottom: 5%;
}

.sec-pro{
    margin-right: 3%;
}

.third-pro{
    text-align: center;
    margin-top: 10%;
}
</style>