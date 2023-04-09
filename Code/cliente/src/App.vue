<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-app-bar-nav-icon>
          <v-icon x-large>mdi-motion-sensor</v-icon>
        </v-app-bar-nav-icon>
      </div>
      <v-app-bar-title> Sensor Secure </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item link to="/">
            <v-list-item-title>Alertas</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/graficos">
            <v-list-item-title>Graficos</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
