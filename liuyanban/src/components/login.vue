<template>
    <div id="login">
         <img src="../assets/logo.png" alt="">
         <form action="">
             <label for="">邮箱</label>
             <input type="email" v-model="email">
             <label for="">密码</label>
             <input type="password" v-model="password">
             <button type="submit" @click="osub">登陆</button>
            <router-link to="/register"> <button >注册</button></router-link> 
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
            password:''
        }
    },
    methods: {
        osub(){
            axios.get('./user.json')
            .then(res=>{
                const data=res.data
                let users=[]
                for(let  key in data){
                    const user=data[key]
                    users.push(user)
                }
                let result=users.filter((user)=>{
                    return user.email==this.email&& user.password==this.password
                })
                if(result !=null&&result.length>0){
                    this.$router.push({name:'comment'})
                }else{
                    alert("密码不准确")
                }
            })
        }

    },
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
