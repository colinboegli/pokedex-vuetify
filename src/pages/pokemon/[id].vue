<template>
  <v-container class="py-6">
    <v-btn
      class="mb-4"
      prepend-icon="mdi-arrow-left"
      @click="$router.back()"
    >
      Retour
    </v-btn>

    <v-alert
      v-if="!pokemon"
      type="error"
      class="mb-4"
    >
      Pokémon introuvable
    </v-alert>

    <v-card
      v-else
      class="pa-4"
    >
      <v-img
        :src="getImageUrl(pokemon.img)"
        :alt="pokemon.name"
        height="300"
        contain
      />

      <v-card-title class="text-h4">
        {{ pokemon.name }}
      </v-card-title>

      <v-card-subtitle class="mb-4">
        Niveau {{ pokemon.level }}
      </v-card-subtitle>

      <v-card-text>
        {{ pokemon.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/utils/imageUrl'
import { usePokemonStore } from '@/stores/pokemonStore'

const route = useRoute()
const pokemonStore = usePokemonStore()

const pokemon = computed(() => {
  return pokemonStore.getPokemonById(route.params.id)
})
</script>
