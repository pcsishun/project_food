const store = {
    state:{
        cratList:[],
        userLogin:null,
        countMenu: 0,
        sumOfPrice:0
    },

    addCartList(imgPath, productName, price){
        this.state.countMenu += 1;
        this.state.sumOfPrice += parseFloat(price);
        console.log(price)
        console.log(this.state.sumOfPrice)
        
        const menulist = {
            id: this.state.countMenu,
            img: imgPath,
            name:productName,
            price: price
        }
        this.state.cratList.push(menulist)
    }

}

export default store;