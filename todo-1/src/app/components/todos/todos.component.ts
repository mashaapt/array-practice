import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  inputTodo: string = '';
  date: Date;
  editingTodo: Todo;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    this.date.setDate(this.date.getDate());
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }





  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    })
  }


  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  clickedEditTodo(i) {
    this.editingTodo = this.todos[i];
    this.inputTodo = this.editingTodo.content;

  }

  saveEditingTodo() {

  }


}
