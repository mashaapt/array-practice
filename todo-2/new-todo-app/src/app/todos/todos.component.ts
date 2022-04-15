import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
