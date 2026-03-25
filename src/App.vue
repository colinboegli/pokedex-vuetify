<template>
  <!--
  Conteneur principal de l'application utilisant Vuetify
    * <v-app> est l'enveloppe principale pour l'intégration des composants Vuetify
  -->
  <v-app>
    <!-- Header -->
    <app-header />

    <!-- Contenu principal -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Nouveau footer -->
    <app-footer />
  </v-app>
</template>

<script setup>
// Importation du composant AppHeader
import AppHeader from '@/components/AppHeader.vue'

// Importation du footer
import AppFooter from '@/components/AppFooter.vue'
</script>
