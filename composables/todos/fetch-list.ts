import { Todo } from '~/types/todo';

export const useTodosFetchList = async() => {
  const runtimeConfig = useRuntimeConfig();
  const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
  const { data, error, execute, refresh } = await useFetch<{
    items: Todo[],
    total: number,
  }>(`${API_BASE_URL}/todo`);
  const todos = computed(() => data.value?.items || []);
  const total = computed(() => data.value?.total || todos.value.length);

  return { todos, total, refresh };
}
