<template>
  <v-footer class="text-center">
    <v-col>
      <slot>
        {{ currentYear }} — Pokédex
      </slot>
    </v-col>
  </v-footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
