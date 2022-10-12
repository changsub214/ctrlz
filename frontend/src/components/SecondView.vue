<template>
    <form enctype="multipart/form-data">
        <v-file-input
        @change="selectFile"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
        >
        </v-file-input>
        <v-btn @click = "upload">submit</v-btn>
    </form>

</template>

<script>
import {data} from "../data"

export default {
    data(){
        return{
            name:data.name,
            image:'',
        }
    },
    methods:{
        upload(){
            const formData = new FormData();
            formData.append('image',this.image)
            this.$axios.post("/users/",formData)
        },
        selectFile(file){
            this.image = file;
        }
    }
}
</script>