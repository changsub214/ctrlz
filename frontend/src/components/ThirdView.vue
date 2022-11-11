<template>
    <v-app>
      <v-app-bar
        app
        clipped-left
        flat
        height="72"
      >App-Bar
      <v-spacer></v-spacer>
        <v-btn icon @click = "click_undo"><v-icon>mdi-undo</v-icon></v-btn>
        <v-btn icon @click = "click_redo"><v-icon>mdi-redo</v-icon></v-btn>
        <v-btn icon @click = "click_cut"><v-icon>mdi-content-cut</v-icon></v-btn>
        <v-btn icon @click = "click_paste"><v-icon>mdi-content-paste</v-icon></v-btn>
        <v-btn icon @click = "click_copy"><v-icon>mdi-content-copy</v-icon></v-btn>
        <v-btn icon @click = "click_delete"><v-icon>mdi-delete</v-icon></v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        permanent
      >
      <v-tabs
      background-color="deep-purple accent-4"
      dark
    >
      <v-tab @click = "changeToPen">Pen</v-tab>
      <v-tab @click = "changeToElec">Elec</v-tab>
    </v-tabs>
        <v-list>
          <v-list-item
            v-for="n in currentList"
            :key="n"
            @click="click_menu(n.action)"
          >
            <v-list-item-content>
              <v-list-item-title> {{ n.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-navigation-drawer
        app
        right
      >
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            link
          >
            <v-list-item-content>
              <v-list-item-title>Item {{ n }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <Drawing ref="childComponent" 
    />
      </v-main>
    </v-app>
  </template>
  
  <script>
import Drawing from '../views/Drawing.vue';

    export default {
        components:{
            Drawing,
        },
      data () {
        return{
            drawer: null,
            PenList:[
                {
                    name:"Pen",
                    action:"pen"
                },
                {
                    name:"Cancel",
                    action:"cancel"
                },
                {
                    name:"Eraser",
                    action:"erase"
                }
            ],
            ElecList:["저항","전선","축전기","전원"],
            currentList: ["Default"]
        }
    },
        created(){
            this.changeToPen()
        },
        methods:{
            changeToPen(){
                this.currentList = this.PenList
            },
            changeToElec(){
                this.currentList = this.ElecList
            },
            click_menu(action){
                if(action == "pen"){
                    this.$refs.childComponent.pen_mode("red")
                }
                else if(action == "cancel"){
                    this.$refs.childComponent.falseDrawing()
                }
            },

            click_undo(){

            },
            click_redo(){

            },
            click_cut(){

            },
            click_copy(){

            },
            click_paste(){

            },
            click_delete(){

            },

        }
    }
  </script>