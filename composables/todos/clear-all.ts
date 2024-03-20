import { useTodosFetchList } from './fetch-list';
import { TodoCreatedData } from './../../types/todo.d';

export const useTodosClearAll = async () => {
  const runtimeConfig = useRuntimeConfig();
  const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
  const { refresh: refreshList } = await useTodosFetchList();

  const clearAll = async () => {
    const response = await fetch(`${API_BASE_URL}/todo`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await refreshList();
  }

  return { clearAll };
}
