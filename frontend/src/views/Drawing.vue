<template>
    <div class = "wrap">
      <component 
      class="left-menu"
      v-bind:is="mode"
      @clickPen="pen_mode"/>
        <v-container>CANVAS
        <canvas id="c" width="900" height="600"></canvas>
        <!--<v-btn @click = "mode_change">모드변경</v-btn>-->
        </v-container>
    </div>
  </template>
  

<script>
import { fabric } from "fabric";
let canvas;
export default {
    data(){
        return{
            mode:"default"
        }
    },
    mounted() {
        canvas = new fabric.Canvas('c',{isDrawingMode: false})
    },
    methods:{
        pen_mode(color){
            console.log("emit")
            canvas.isDrawingMode = true;
            canvas.freeDrawingBrush.color = color;
            canvas.renderAll();
        },
        falseDrawing(){
            canvas.isDrawingMode = false;
        }
    }

}
</script>

<style>

</style>