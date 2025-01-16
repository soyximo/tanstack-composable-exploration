<script setup lang="ts">
  const { characters, switchSide } = useCharacters();
</script>

<template>
  <div>
    Page: characters
    <pre>{{ characters }}</pre>
    <div>
      <ul v-for="character in characters">
        <li
          :class="{ dark: character.darkSide }"
          @click="switchSide(character.name)">
          {{ character.name }}
        </li>
      </ul>
    </div>
    <hr />
    <ListCharacters />
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
