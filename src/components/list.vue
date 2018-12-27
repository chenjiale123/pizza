<template>
    <div id='list'>
        <h1>查看留言</h1>
        <div class="list" v-for="(item,index) in users" :key="index">
            <h1>{{item.preple}}</h1>
            <p>{{item.comm}}</p>
        </div>
    </div>
</template>
<script>
 import axios from 'axios'

export default {
    name:'list',
    data(){
        return {
            users:[],
            preple:'',
            comm:''
        }
    },
    created() {
        

    //    if(this.preple==""||this.comm==""){
    //         return
    //     }
        axios.get('/people.json')
       
        .then(res=>{
             const data=res.data
                let users=[]
                for(let  key in data){
                    const user=data[key]
                    users.push(user)
                }
                this.users=users
             
        })
    }
}
</script>
<style scoped>
.list{
    width: 500px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #eee
}

</style>
