<script lang="ts" setup>
import { Todo, TodoUpdatedData } from '~/types/todo';

const { todos } = await useTodosFetchList();
const { update } = await useTodosUpdate();
const { clearAll } = await useTodosClearAll();

const handlerUpdateItem = async (id: Todo['id'], data: TodoUpdatedData) => {
  try {
    await update(id, data);
  } catch (error) {
    console.error(error);
  }
};

const countOfCompleted = computed(() => {
  return todos.value.filter((todo) => todo.completed).length;
});
const countOfUncompleted = computed(() => {
  return todos.value.filter((todo) => !todo.completed).length;
});
const total = computed(() => {
  return todos.value.length;
});
const onClearAll = () => {
  clearAll();
};
</script>

<template>
  <div>
    <TodosAddForm />
    <div>
      <div v-if="!countOfUncompleted && total">
        <button @click="onClearAll">Clear all</button>
      </div>
    </div>
    <TodosList :todos="todos">
      <template #item="{ item, index }: {item: Todo, index: number}">
        <TodosListItem :key="item.id" :item="item" :order="index+1" @update="handlerUpdateItem" />
      </template>
    </TodosList>
  </div>
</template>

<style module></style>
