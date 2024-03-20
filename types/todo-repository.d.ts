import { Todo, TodoCreatedData, TodoUpdatedData } from './todo.d';

export type TodoRepository = {
  create: (todo: TodoCreatedData) => Promise<Todo>;
  findAll: () => Promise<Todo[]>;
  findById: (id: string) => Promise<Todo | undefined>;
  update: (id: Todo['id'], data: TodoUpdatedData) => Promise<Todo>;
  delete: (id: string) => Promise<void>;
  deleteAll: () => Promise<void>;
};