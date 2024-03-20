<template>
  <div>
    <div>args: {{ JSON.stringify(args, null, 2) }}</div>
    <div>getResponse: {{ JSON.stringify(getResponse, null, 2) }}</div>
    <!-- <div>postResponse: {{ JSON.stringify(postResponse, null, 2) }}</div> -->
  </div>
</template>

<script setup>
const route = useRoute();
const getResponse = useResponseHello();
// const postResponse = useFetch('/api/hello', {
//   method: 'POST',
//   body: JSON.stringify({ hello: 'hello world from client to server' })
// }).data;

const args = route.params.args;
</script>