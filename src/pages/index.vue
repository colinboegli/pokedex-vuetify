<template>
  <v-container class="py-6">
    <h1 class="text-h3 mb-6">
      Pokédex
    </h1>

    <v-alert
      v-if="isLoading"
      type="info"
      class="mb-4"
    >
      Chargement des Pokémon...
    </v-alert>

    <v-alert
      v-else-if="error"
      type="error"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <v-row v-else>
      <v-col
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <pokemon-card :pokemon="pokemon" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'

const pokemonStore = usePokemonStore()
const { pokemons, isLoading, error } = storeToRefs(pokemonStore)
</script>
