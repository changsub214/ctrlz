<template>
  <v-app>
    <v-row class="mb-6">
    <v-navigation-drawer permanent expand-on-hover>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Name
          </v-list-item-title>
          <v-list-item-subtitle>
            email@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-system-bar>
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dark Mode"
            persistent-hint
          ></v-switch>
        </v-system-bar>
      </v-list-item>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items" 
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content><router-view/></v-content>
  </v-row>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Login', icon: 'mdi-login', to:'/login' },
          { title: 'information', icon: 'mdi-book',to:'/manual'},
        ],
        right: null,
      }
    },
  }
</script>