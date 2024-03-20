<template>
  <div>
    category: {{ category }} <br />
    id: {{ id }}
    <div>numberState1: {{ numberState1 }}</div>
    <div>numberState2: {{ numberState2 }}</div>

    <ClientOnly>
      <div>numberRef1: {{ numberRef1 }}</div>
      <div>numberRef2: {{ numberRef2 }}</div>
    </ClientOnly>
    <div>{{ JSON.stringify(getResponse, null, 2) }}</div>
    <div>{{ JSON.stringify(getResponse2, null, 2) }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const category = route.params.category;
const id = route.params.id;

const numberState1 = useNumberState();
const numberState2 = useNumberState();
const numberRef1 = useNumberRef();
const numberRef2 = useNumberRef();

const getResponse = useResponseHello();
const getResponse2 = useResponseHello();
</script>
