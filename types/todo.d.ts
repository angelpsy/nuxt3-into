export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoCreatedData = Omit<Todo, 'id'>;
export type TodoUpdatedData = Omit<Todo, 'id'>;