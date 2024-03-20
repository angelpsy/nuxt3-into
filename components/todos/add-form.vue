<script lang="ts" setup>
const { add } = await useTodosAdd();
const title = ref("");

const onSubmit = async (e: Event) => {
  try {
    await add({
      title: title.value,
      completed: false,
    });
    title.value = "";
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" name="title" v-model="title" />
    <UiInput />
    <button type="submit">Send</button>
  </form>
</template>

<style module></style>
