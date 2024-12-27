import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log(`Creating todo with label: ${todo.label}`);
    return this.todoService.create(todo);
  }
  @Get()
  findAll(): Todo[] {
    this.logger.log('Finding all todos');
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log('handling findOne request');
    return this.todoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.logger.log('handling remove request');
    return this.todoService.remove(id);
  }
}
