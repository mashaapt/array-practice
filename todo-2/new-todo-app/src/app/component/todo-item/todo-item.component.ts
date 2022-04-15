import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditCliked() {
    this.editClicked.emit()
  }


}


