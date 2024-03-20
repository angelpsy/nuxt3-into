<template>
  <main>
    <div>TODO: About component.</div>
    <div>{{ message }}</div>
    <ClientOnly>
      <div>{{ number }}</div>
    </ClientOnly>
    <div>numberState1: {{ numberState1 }}</div>
    <div>numberState2: {{ numberState2 }}</div>

    <ClientOnly>
      <div>numberRef1: {{ numberRef1 }}</div>
      <div>numberRef2: {{ numberRef2 }}</div>
    </ClientOnly>
  </main>
</template>

<script setup>
const message = ref("Hello World!");
const number = ref(Math.random());

const numberState1 = useNumberState();
const numberState2 = useNumberState();
const numberRef1 = useNumberRef();
const numberRef2 = useNumberRef();
</script>
