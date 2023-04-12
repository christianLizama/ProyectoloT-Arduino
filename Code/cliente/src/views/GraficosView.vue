<template>
    <div>
      
      <v-card elevation="5" class="mx-auto mt-4" max-height="1000px" max-width="1400px"><grafico-dia></grafico-dia></v-card>
    </div>
</template>

<script>
import GraficoDia from '@/components/GraficoDia.vue';
export default {
  components: {
    GraficoDia

  },
};
</script>
