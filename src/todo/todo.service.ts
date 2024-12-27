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
}
