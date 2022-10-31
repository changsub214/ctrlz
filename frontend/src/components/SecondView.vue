<template>
    <v-col>
        <h>Welcome {{ $route.params.id }}</h>
        <div>
            <v-btn to ="/">로그아웃</v-btn>
            <v-btn>회원 탈퇴</v-btn>
        </div>
       
    <form enctype="multipart/form-data">
        <v-file-input
        v-model="image"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an image"
        prepend-icon="mdi-camera"
        label="img"
        >
        </v-file-input>
        <v-btn @click = "upload">submit</v-btn>
    </form>
    <div v-for="item in images" :key ="item.filepath">
        <p v-bind:href="item"></p>
    <v-img 
    :src="'/../'+item.filepath"
    width="600"></v-img>
    <h>{{item.filename}}</h>
    <v-btn
    icon>
        <v-icon @click="deleteImage(item.filepath)">mdi-delete</v-icon>
    </v-btn>
    <v-divider></v-divider>
    </div>
</v-col>

</template>

<script>
import {data} from "../data"

export default {
    data(){
        return{
            name:data.name,
            image:[],
            images:[],
        }
    },
    created(){
        this.updateImage();
    },
    methods:{
        upload(){
            const formData = new FormData();
            formData.append('image',this.image)
            formData.append('email',this.$route.params.id)
            this.$axios.post("/files/upload",formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            .then(res =>{
                console.log(res)
                this.updateImage();
            })
            
        },
        updateImage(){
            this.image = []
            const params = {email:this.$route.params.id}
            this.$axios.get('/files/getImage',{params})
                .then(res=>{
                    this.images = res.data
                }
            )
            //console.log("이미지 경로 : ",this.images.filepath)
        },
        deleteImage(path){
            console.log(path)
            this.$axios.post('/files/deleteImage',{
                email:this.$route.params.id,
                filepath:path
            })
            .then(res=>{
                console.log(res)
                this.updateImage();
            })
        },
        deleteUser(){
            console.log("Delete user")
            this.$axios.post('/files/deleteUser',{email:this.$route.params.id})
                .then(res=>{
                    console.log(res)
                })
        }
    }
}
</script>