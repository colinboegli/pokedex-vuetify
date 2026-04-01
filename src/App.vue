<template>
  <!-- Conteneur principal Vuetify -->
  <v-app>
    <!-- Header -->
    <app-header />

    <!-- Contenu principal -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <app-footer />
  </v-app>
</template>

<script setup>
// Header
import AppHeader from '@/components/AppHeader.vue'

// Footer
import AppFooter from '@/components/AppFooter.vue'

import { usePokemonStore } from '@/stores/pokemonStore'

onMounted(async () => {
  const pokemonStore = usePokemonStore()
  await pokemonStore.init()
})
</script>
