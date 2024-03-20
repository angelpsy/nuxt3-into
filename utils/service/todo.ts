import { TodoServiceImpl } from './../../services/todo';
import { TodoRepositoryMemoryImpl } from './../../repositories/todo/memory';

export const todoServiceInstance = new TodoServiceImpl(new TodoRepositoryMemoryImpl());