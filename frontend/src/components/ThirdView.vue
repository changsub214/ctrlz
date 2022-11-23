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
      <v-btn icon @click = "click_copy"><v-icon>mdi-content-copy</v-icon></v-btn>
      <v-btn icon @click = "click_paste"><v-icon>mdi-content-paste</v-icon></v-btn>
      <v-btn icon @click = "click_delete"><v-icon>mdi-delete</v-icon></v-btn>
      <v-btn icon @click = "click_pen"><v-icon>mdi-pen</v-icon></v-btn>
      <v-btn icon @click = "click_save"><v-icon>mdi-file-download</v-icon></v-btn>
      <v-btn icon @click = "click_load"><v-icon>mdi-file-upload</v-icon></v-btn>
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
      <v-list  v-if="listType === 'Pen'">
        <v-list-item
          v-for="n in PenList"
          :key="n"
          @click="click_menu(n.action)"
        >
          <v-list-item-content>
            <v-list-item-title> {{ n.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-if="listType ==='Elc'" class="overflow-y-auto">
        <v-list-group 
        v-for = "item in items" :key = "item.title" 
        v-model = "item.active" :prepend-icon = "item.action"
        no-action
        >

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text = "item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for = "child in item.items" :key = "child.image"
          @click ="clickSymbol(child.image)">
            <img :src = "child.image" width="100px" height="100px">
        </v-list-item>
      </v-list-group>
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
          items: [
    {
      action: "mdi-play",
      title: "Wire",
    },
    {
      action: "mdi-play",
      title: "Power Supply",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/AC_Supply.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/BatteryStack.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/DC_Supply.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/Fuse.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/Fuse_IEC_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/Fuse_IEEE_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/Fuse_IEEE_2.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/Fuse_obsolete_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/MonoCell_Battery.svg") },
        { image: require("@/assets/Electronic circuit symbols/Power_Supply/MutiCell_Battery_Tapped.svg") },
      ],
    },
    {
      action: "mdi-play",
      title: "Transistors",
      items: [
        { image: require("@/assets/Electronic circuit symbols/transistors/BJT_NPN_.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/BJT_PNP_.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/Dual_Gate_MOSFET_N_.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/Dual_Gate_MOSFET_P_.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/MOSFET_N_.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/MOSFET_No_Bulk(N).svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/MOSFET_No_Bulk(P).svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/MOSFET(P).svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/N_Channel_JFET.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/NMOS.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/P_Channel_JFET.svg") },
        { image: require("@/assets/Electronic circuit symbols/transistors/PMOS.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Meters",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Meters/AMMeter.svg") },
        { image: require("@/assets/Electronic circuit symbols/Meters/GalvanoMeter.svg") },
        { image: require("@/assets/Electronic circuit symbols/Meters/Oscilloscope.svg") },
        { image: require("@/assets/Electronic circuit symbols/Meters/VoltMeter.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Diodes",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Diodes/Diode.svg") },
        { image: require("@/assets/Electronic circuit symbols/Diodes/LED_Diode.svg") },
        { image: require("@/assets/Electronic circuit symbols/Diodes/Photo_Diode.svg") },
        { image: require("@/assets/Electronic circuit symbols/Diodes/Schottky_Diode.svg") },
        { image: require("@/assets/Electronic circuit symbols/Diodes/Tunnel_Diode.svg") },
        { image: require("@/assets/Electronic circuit symbols/Diodes/Zener_Diode.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Capacitors",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Capacitor_US__1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Capacitor_US__2_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Electrolytic_Capacitor_US__1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Electrolytic_Capacitor_US__2_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Trimmer_Variable_Capacitor_US__1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Trimmer_Variable_Capacitor_US__2_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Tunning_Variable_Capacitor_US__1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Capacitors/Tunning_Variable_Capacitor_US__2_.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Resistors",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Resistors/Potentiometer_Resistor(1).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/Potentiometer_Resistor(2).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/Resistor(1).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/Resistor(2).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/RHEOSTAT_Resistor(1).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/RHEOSTAT_Resistor(2).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/Trimmer_Resistor(1).svg") },
        { image: require("@/assets/Electronic circuit symbols/Resistors/Trimmer_Resistor(2).svg") },          
      ]
    },
    {
      action: "mdi-play",
      title: "Switches",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Switches/Limit_Switch.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/PushButton_NC.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/PushButton_NO.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/SPDT.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/Switch_Disconnector.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/Temperature_Switch.svg") },
        { image: require("@/assets/Electronic circuit symbols/Switches/Thermostat.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Output Device",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Bell.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Buzzer.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Inductor.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Lamp.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Motor.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Piezo_Sounder.svg") },
        { image: require("@/assets/Electronic circuit symbols/Output_Deivices/Speaker.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Input Device",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Input_Deivices/Electret_Microphone.svg") },
        { image: require("@/assets/Electronic circuit symbols/Input_Deivices/Microphone.svg") }
      ]
    },
    {
      action: "mdi-play",
      title: "Miscellaneous",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Antenae.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Dual_In-Line_IC.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Operational_AMP_1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Operational_AMP_2_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Overcurrent_Relay_125-400A.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Quad_Flat_Package_IC.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Transformer_IronCore__1_.svg") },
        { image: require("@/assets/Electronic circuit symbols/Miscellaneous/Transformer_IronCore__2_.svg") },
      ]
    },
    {
      action: "mdi-play",
      title: "Logic Gates",
      items: [
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/AND.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/Buffer.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/D-type_Filp_Flop.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/D-type_RS_Filp_Flop.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/Inverter.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/NAND.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/NOR.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/OR.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/XNOR.svg") },
        { image: require("@/assets/Electronic circuit symbols/Logic_Gates/XOR.svg") },
      ],
    }
  ],
          listType : "Pen"
      }
  },
      created(){
          this.changeToPen()
      },
      methods:{
          changeToPen(){
              this.listType = "Pen"
          },
          changeToElec(){
              this.listType = "Elc"
          },
          click_menu(action){
              if(action == "pen"){
                  this.$refs.childComponent.pen_mode("red")
              }
              else if(action == "cancel"){
                  this.$refs.childComponent.falseDrawing()
              }
          },
          clickSymbol(image){
            this.$refs.childComponent.drawSymbol(image)
          },
          click_undo(){
            this.$refs.childComponent.undo()
          },
          click_redo(){
            this.$refs.childComponent.redo()
          },
          click_cut(){
            this.$refs.childComponent.cut()
          },
          click_copy(){
            this.$refs.childComponent.copy()
          },
          click_paste(){
            this.$refs.childComponent.paste()
          },
          click_delete(){
            this.$refs.childComponent.delete()
          },
          click_pen(){
            this.$refs.childComponent.linedrawing()
          },
          click_save(){
            this.$refs.childComponent.save()
          },
          click_load(){
            this.$refs.childComponent.load()
          },

      }
  }
</script>