<template>
    <div class="login">
        <div class="login-container" v-if="$root.state.userLogin === null">
            <div class="set-login">
                <h1>LOGIN</h1>
                <form @submit.prevent="haddleLogin">
                    <div class="set-form-control">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label"><b>Email</b></label>
                            <div class="col-sm-10">
                                <input type="text"  class="form-control" id="staticEmail" value="email@example.com" v-model="email">
                            </div>
                            </div>
                            <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>Password</b></label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword"  v-model="password">
                            </div>
                            </div>
                            <div class="login-btn">
                            <button class="btn btn-primary">Login</button>
                            <button class="btn btn-primary" style="margin-left: 1rem;">Register</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="login-container" v-if="$root.state.userLogin !== null">
            <div class="set-login">
                <h3>Welcome back user {{$root.state.userLogin}}</h3>
                <button class="btn btn-danger" @click="haddleLogout">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            email:null,
            password:null,
            loginUser: null,
        }
    },
    methods:{
        haddleLogin(){
            fetch('http://localhost:8080/auth',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email, password: this.password
                    })  
            }).then((res)=> {
                return res.json()
            }).then(data => {
                this.loginUser = data[0].username
                this.$root.state.userLogin = this.loginUser

            }).catch(err=>{
                console.log(err.message)
            })
        },
        haddleLogout(){
            this.$root.state.userLogin = null
            this.$router.push('./')
        }
    }
}
</script>

<style scoped>
.login-container{
    text-align: center;
    width: 50%;
    margin: auto;
}

.set-login{
    margin-top: 65px;
    background-color: rgb(150, 148, 148);
    border-radius: 30px;
    height: 350px;
}

.set-form-control{
    width: 80%;
    margin: auto;
}

h1{
    margin-bottom: 100px;
}
</style>