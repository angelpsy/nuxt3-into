<script lang="ts" setup>
defineProps({
  todos: {
    type: Array as PropType<Todo[]>,
    required: true,
  },
});
</script>

<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <slot name="item" :item="todo" :index="index"/>
    </li>
  </ul>
</template>

<style module></style>
