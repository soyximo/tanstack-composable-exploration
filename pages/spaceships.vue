<script setup lang="ts">
  const { spaceships } = useSpaceships();
  const spaceship = ref("");
  const add = () => {
    addSpaceship(spaceship.value);
    spaceship.value = "";
  };
</script>

<template>
  <div>
    Page: spaceships
    <pre>{{ spaceships }}</pre>
    <input
      type="text"
      v-model="spaceship" />
    <button @click="add()">Add Spaceship</button>
    <div>
      <hr />
      Component ListSpaceships:
      <ListSpaceships />
    </div>
  </div>
</template>

<style scoped></style>
