import { Todo, TodoCreatedData, TodoUpdatedData } from './todo.d';

export type TodoService = {
  create: (data: TodoCreatedData) => Promise<Todo>;
  findAll: () => Promise<Todo[]>;
  findById: (id: string) => Promise<Todo | undefined>;
  update: (id: Todo['id'], data: TodoUpdatedData) => Promise<Todo>;
  delete: (id: string) => Promise<void>;
};