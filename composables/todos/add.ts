import { useTodosFetchList } from './fetch-list';
import { TodoCreatedData } from './../../types/todo.d';

export const useTodosAdd = async () => {
  const runtimeConfig = useRuntimeConfig();
  const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
  const { refresh: refreshList } = await useTodosFetchList();

  const add = async (data: TodoCreatedData) => {
    const response = await fetch(`${API_BASE_URL}/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    await refreshList();

    return response.body;
  }

  return { add };
}
