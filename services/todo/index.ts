import { TodoRepository } from './../../types/todo-repository.d';
import { TodoService } from '../../types/todo-service';
import { Todo, TodoCreatedData, TodoUpdatedData } from '~/types/todo';

export class TodoServiceImpl implements TodoService {
    constructor(private todoRepository: TodoRepository) {}
    async create(data: TodoCreatedData) {
        return this.todoRepository.create(data);
    }
    async findAll() {
        return this.todoRepository.findAll();
    }
    async findById(id: Todo['id']) {
        return this.todoRepository.findById(id);
    }
    async update(id: Todo['id'], data: TodoUpdatedData) {
        return this.todoRepository.update(id, data);
    }
    async delete(id: Todo['id']) {
        return this.todoRepository.delete(id);
    }
    async deleteAll() {
        return this.todoRepository.deleteAll();
    }
}