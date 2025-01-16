<script setup lang="ts">
  const { spaceships } = useSpaceships();
</script>

<template>
  <div>
    <ul v-for="spaceship in spaceships">
      <li>{{ spaceship.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
