<template>
    <div class = "wrap">
      <component 
      class="left-menu"
      v-bind:is="mode"
      @clickPen="pen_mode"/>
        <v-container>CANVAS
        <canvas id="c" width="1200" height="800" style="border:1px solid #ccc"></canvas>
        <!--<v-btn @click = "mode_change">모드변경</v-btn>-->
        </v-container>
    </div>
  </template>
  

<script> 
/* eslint-disable */
import { fabric } from "fabric";
var canvas;
var line;
var isDown;
var isLineDrawingMode = false;
var json;
var isRedoing = false;
var h = [];
var _clipboard = false;

export default {
    data(){
        return{
            mode:"default"
        }
    },
    mounted() {
        canvas = new fabric.Canvas('c',{isDrawingMode: false})

        canvas.on('object:added',function(){
            if(!isRedoing){
                h = [];
            }
            isRedoing = false;
        })

        document.onkeydown = this.onKeyDownHandler;
        
    },
    methods:{
        onKeyDownHandler(event){
            var key;
            if(window.event){
                key = window.event.keyCode;
            }
            else{
                key = event.keyCode;
            }

            switch(key){
                case 8: //back space
                    this.delete();
                    break;
                // Shortcuts
                case 67: // Ctrl+C
                        if(event.ctrlKey){
                            event.preventDefault();
                            this.copy();
                        }
                    break;
                // Paste (Ctrl+V)
                case 86: // Ctrl+V
                        if(event.ctrlKey){
                            event.preventDefault();
                            this.paste();
                        }
                    break;
                case 88: // Ctrl+X
                        if(event.ctrlKey){
                            event.preventDefault();
                            this.cut();
                        }
                    break;
                case 89: // Ctrl+Y
                    if(event.ctrlKey){
                        event.preventDefault();
                        this.redo();
                    }
                    break;    
                case 90: // Ctrl+Z
                    if(event.ctrlKey){
                        event.preventDefault();
                        this.undo();
                    }
                    break;
                default:
                    // TODO
                    break;
            }
        },
        copy(){
            canvas.getActiveObject().clone(function(cloned) {
            _clipboard = cloned;
            });
        },
        paste(){
            _clipboard.clone(function(clonedObj) {
            canvas.discardActiveObject();
            clonedObj.set({
                left: clonedObj.left + 10,
                top: clonedObj.top + 10,
                evented: true,
            });
            if (clonedObj.type === 'activeSelection') {
                // active selection needs a reference to the canvas.
                clonedObj.canvas = canvas;
                clonedObj.forEachObject(function(obj) {
                    canvas.add(obj);
                });
                // this should solve the unselectability
                clonedObj.setCoords();
            } else {
                canvas.add(clonedObj);
            }
            _clipboard.top += 10;
            _clipboard.left += 10;
            canvas.setActiveObject(clonedObj);
            canvas.requestRenderAll();
            });
        },
        cut(){
            if(canvas.getActiveObject() === null){
                return;
            }
            canvas.getActiveObject().clone(function(cloned) {
                _clipboard = cloned;
                //remove after cloned to clipboard
                if(canvas.getActiveObject().type == "activeSelection"){
                    canvas.getActiveObject().getObjects().forEach(function(obj){
                        canvas.remove(obj)
                    })
                }
                else{
                    canvas.remove(canvas.getActiveObject)
                }
            });
        },
        delete(){
            var obj = canvas.getActiveObject()
            if(obj.type == "activeSelection"){
                obj.getObjects().forEach(function(o){
                    canvas.remove(o)
                })
                console.log("remove")
            }
            else {
                canvas.remove(obj)
                console.log("remove1")
            }

            canvas.requestRenderAll()
        },
        redo(){
  
  if(h.length>0){
    isRedoing = true;
   canvas.add(h.pop());
  }
},
        undo(){
  if(canvas._objects.length>0){
   h.push(canvas._objects.pop());
   canvas.renderAll();
  }
},
        pen_mode(color){
            console.log("emit")
            canvas.isDrawingMode = true;
            canvas.freeDrawingBrush.color = color;
            canvas.renderAll();
        },
        falseDrawing(){
            canvas.isDrawingMode = false;
        },
        
        
        drawSymbol(image){
            console.log(image);
            fabric.loadSVGFromURL(image, (objects) => {
                var obj = fabric.util.groupSVGElements(objects);
                obj.scale(0.2)
                canvas.add(obj)
            });
            canvas.renderAll();
        },
        linedrawing(){
            isLineDrawingMode = !isLineDrawingMode;
            if(isLineDrawingMode){
                canvas.selection=false;
            canvas.on('mouse:down', function(o){
                
                isDown = true;
                var pointer = canvas.getPointer(o.e);
                var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
                line = new fabric.Line(points, {
                    strokeWidth: 1.5,
                    fill: 'black',
                    stroke: 'black',
                    originX: 'center',
                    originY: 'center'
                });
                canvas.add(line);
            

            });
            canvas.on('mouse:move', function(o){
                if (!isDown) return;
                var pointer = canvas.getPointer(o.e);
                line.set({ x2: pointer.x, y2: pointer.y });
                canvas.renderAll();
            });

            canvas.on('mouse:up', function(o){
                
                isDown = false;
            });
            
        }else{
            canvas.selection=true;
            canvas.off('mouse:down')
            canvas.off('mouse:move')
            canvas.off('mouse:up')
        }
        },
        save(){
            const json = JSON.stringify(canvas)
            console.log(json)
            const element = document.createElement('a');
            element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(json))
            element.setAttribute('download','임시.txt');
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element)
        },
        load(){
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'text/plain'
            input.onchange = function(){
                const file = new FileReader()
                file.onload = () =>{
                    canvas.clear()
                    canvas.loadFromJSON(file.result)
                }
                file.readAsText(this.files[0])
            }
            input.click()
        },

    }

}
</script>

<style>

</style>