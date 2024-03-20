import { Todo, TodoCreatedData, TodoUpdatedData } from './../../types/todo.d';
import { TodoRepository } from '../../types/todo-repository';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export class TodoRepositoryMemoryImpl implements TodoRepository {
  private todos: Todo[] = [];

  async create(data: TodoCreatedData): Promise<Todo> {
    const todo = {
      ...data,
      id: uuidv4(),
    };
    this.todos.push(todo);
    return todo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findById(id: Todo['id']): Promise<Todo | undefined> {
    return this.todos.find((todo) => todo.id === id);
  }

  async update(id: Todo['id'], data: TodoUpdatedData): Promise<Todo> {
    const index = this.todos.findIndex((t) => t.id === id);
    const todo = {
      ...this.todos[index],
      ...data,
    };
    console.log(data);
    console.log(todo);
    this.todos[index] = todo;
    console.log(this.todos[index]);
    return todo;
  }

  async delete(id: Todo['id']): Promise<void> {
    const index = this.todos.findIndex((t) => t.id === id);
    this.todos.splice(index, 1);
  }
  async deleteAll(): Promise<void> {
    this.todos = [];
  }
};