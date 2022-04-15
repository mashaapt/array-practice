import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    // console.log(form);
    
    if(form.invalid) return this.showValidationErrors = true;
    
    this.dataService.addTodo(new Todo(form.value.text));
    this.showValidationErrors = false;

    form.reset();
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;

  }

  editTodo() {
    const index = this.todos.indexOf(todo);
  }
}


