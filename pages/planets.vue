<template>
  <div>
    <div v-if="isError">There was an error</div>
    <div v-if="isLoading">Is loading</div>
    <ul v-else>
      <li v-for="planet in planets">
        {{ planet.name }}
      </li>
    </ul>
    <ListPlanets />
  </div>
</template>

<script setup lang="ts">
  const planetsRepository = usePlanets();
  const { planets, isLoading, isError } = planetsRepository;
</script>
