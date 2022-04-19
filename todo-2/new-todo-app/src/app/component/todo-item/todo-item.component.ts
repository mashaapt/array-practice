import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
// import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent 
      implements OnInit {

  @Input() todo: Todo;
  @Output() todoClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  // @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   tippy(this.editBtnElRef.nativeElement, {
  //     content: 'Edit Todo'
  //   });
  // }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditCliked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}


