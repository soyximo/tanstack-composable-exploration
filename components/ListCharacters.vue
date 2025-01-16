<script setup lang="ts">
  const { characters, switchSide } = useCharacters();
</script>

<template>
  <div>
    Component: ListCharacters
    <ul v-for="character in characters">
      <li
        :class="{ dark: character.darkSide }"
        @click="switchSide(character.name)">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li {
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-light);
    color: var(--color-dark);
  }

  .dark {
    background-color: var(--color-dark);
    color: var(--color-light);
  }
</style>
