<template>
  <div>
    <ul v-if="planets.length">
      <li
        v-for="planet in planets"
        :key="planet.id">
        <h2>{{ planet.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const planetsRepository = usePlanets();
  const { planets } = planetsRepository;
</script>
