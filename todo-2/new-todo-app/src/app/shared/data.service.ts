import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Kiss my boy.', false),
    new Todo('Cook for my boy.',false)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  } 

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
;  }
}
