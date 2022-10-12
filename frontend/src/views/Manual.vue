<template>
    <v-card
    class = "mx-auto"
    max-width="500">
        <v-list two-line>
            <v-list-item
            v-for = "item in users"
            :key="item.email"
            >
                <v-list-item-content>
                    <v-list-item-title v-html="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.email"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    
    data(){
        return {
            users:[]
        }
    },
    created () {
        this.$axios.get('/users/inf')
        .then((res)=>{
            console.log(res.data)
            this.users = res.data
        })
    },
}
</script>

<style>

</style>