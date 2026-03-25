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
      v-if="error"
      type="error"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <v-card
      v-else-if="pokemon"
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
import { getImageUrl } from '@/utils/imageUrl'

const route = useRoute()

const pokemon = ref(null)
const error = ref('')

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3535/pokemons')
    const data = await response.json()

    pokemon.value = data.find(p => p.id === route.params.id)

    if (!pokemon.value) {
      error.value = 'Pokémon introuvable'
    }
  } catch (err) {
    error.value = 'Erreur lors du chargement du Pokémon'
    console.error(err)
  }
})
</script>
