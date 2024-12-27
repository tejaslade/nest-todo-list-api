import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  create(todo: Todo): void {
    const currentMaxId = Math.max(...this.storage.map((todo) => todo.id), 0);
    todo.id = currentMaxId + 1;
    this.storage.push(todo);
  }

  findAll(): Todo[] {
    return this.storage;
  }

  findOne(id: number): Todo {
    return this.storage.find((todo) => todo.id === id);
  }

  remove(id: number): void {
    const index = this.storage.findIndex((todo: Todo) => todo.id === id);
    this.storage.splice(index, 1);
  }
}
