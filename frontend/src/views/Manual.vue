<template>
    <row>
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
        <v-card
        class = "mx-auto"
        max-width="500">
            <v-list three-line>
                <v-list-item
                v-for = "item in images"
                :key="item.email">
                    <v-list-item-content>
                        <v-list-item-tile v-html="item.email"></v-list-item-tile>
                        <v-list-item-subtile v-html="item.filename"></v-list-item-subtile>
                        <v-list-item-subtile v-html="item.filepath"></v-list-item-subtile>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </row>
</template>

<script>
export default {
    
    data(){
        return {
            users:[],
            images:[]
        }
    },
    created () {
        this.$axios.get('/users/inf')
        .then((res)=>{
            console.log(res.data)
            this.users = res.data
        })
        this.$axios.get('/files/inf')
        .then((res)=>{
            this.images = res.data
            this.$route.push('/')
        })
    },
}
</script>

<style>

</style>