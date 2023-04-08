<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon>
          <v-icon x-large>mdi-motion-sensor</v-icon>
        </v-app-bar-nav-icon>
        
        <v-app-bar-title>
          Sensor de movimiento
        </v-app-bar-title>
      </div>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
