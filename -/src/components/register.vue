<template>
    <div id="login">
         <img src="../assets/logo.png" alt="">
         <form action="">
             <label for="" >邮箱</label>
             <input type="email" v-model='email'>
             <label for="">密码</label>
             <input type="password" v-model='password'>
               <label for="">确认密码</label>
             <input type="password" v-model='confirmpass'>
             <button type="submit" @click="osubmit()">注册</button>
         </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return {
            email:'',
            password:'',
            confirmpass:''
        }
    },
    methods: {
        osubmit(){
           if(this.password==this.confirmpass){
               const formdate={
                   email:this.email,
                   password:this.password,
                   confirmpass:this.confirmpass
               }
               axios.post('/user.json',formdate)
               .then(
                   res=>this.$router.push({name:'login'})
               )

           }else{
               alert('密码输入不一致')
           }
        }
    }
}
</script>
<style scoped>
#login{
    width: 800px;
    height: auto;
    margin: 0 auto;
    text-align: center;
}
#login img{
    width: 300px;
    height: 250px;
}
#login input{
    width: 100%;
    height: 40px;
    margin-top: 20px;
}
#login  button{
    width: 100%;
    height: 40px;
    margin-top: 40px;
    background: rgb(62, 243, 117);
}

</style>
