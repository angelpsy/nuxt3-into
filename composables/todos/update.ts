import { Todo, TodoUpdatedData } from '~/types/todo.d';

export const useTodosUpdate = async () => {
  const runtimeConfig = useRuntimeConfig();
  const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
  const { refresh: refreshList } = await useTodosFetchList();

  const update = async (id: Todo['id'], data: TodoUpdatedData) => {
    const response = await fetch(`${API_BASE_URL}/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    await refreshList();

    return response.body;
  }

  return { update };
}
