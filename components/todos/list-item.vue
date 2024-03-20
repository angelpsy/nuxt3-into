<script lang="ts" setup>
const emit = defineEmits(['update']);
const props = defineProps({
  item: {
    type: Object as PropType<Todo>,
    required: true,
    validator: (value: Todo) => {
      return 'id' in value && 'title' in value && 'completed' in value;
    },
  },
  order: {
    type: Number,
    required: true,
  },
});
const onUpdateField = (fieldName: 'title' | 'completed', value: string | boolean) => {
  emit('update', props.item.id, {
    [fieldName]: value,
  });
};
</script>

<template>
  <div>
    <span>{{order}} </span>
    <span>{{ item.title }} </span>
    <input
      type="checkbox"
      :checked="item.completed"
      @change="onUpdateField('completed', !item.completed)"
    />
  </div>
</template>

<style scoped></style>
