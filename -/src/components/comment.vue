<template>
    <div id="comment">
        <form action="">
            <h1>留言</h1>
            <label for="">留言人：</label>
            <input type="text" v-model=" people.preple">
            <!-- <label for="">留言内容：</label> -->
            <textarea name="" id="" cols="30" rows="10" v-model=" people.comm"></textarea>
            <button @click="getcomm">留言</button>
            <router-link to="/list"> <button>查看留言</button></router-link>
        </form>
    </div>
</template>
<script>
 import axios from 'axios'

export default {
    name:'comment',
    data(){
       return {  
           people:{
            preple:'',
            comm:''
        }
        }  
    },
    methods: {
        getcomm(){
            const people=this.people
            if(this.people.preple != '') {
                axios.post('/people.json',people)
                    .then(
                        res=>console.log(res.data)
                    )
            }
            
        }
    },
    
}
</script>
<style scoped>
form{
    width: 800px;
    height: auto;
    margin: 0 auto;
}
form input{
    width: 90%;
    height: 35px;
    float: right;
  
}
form label{
    display: inline-block;
}
form textarea{
      width: 90%;
    height: 80px;
    margin-top: 50px;
    float: right;
     
}
form button{
    width: 90%;
    height: 30px;
    text-align: center;
    margin-top: 30px;
    background: rgb(64, 224, 126);
    float: right;
}
</style>
