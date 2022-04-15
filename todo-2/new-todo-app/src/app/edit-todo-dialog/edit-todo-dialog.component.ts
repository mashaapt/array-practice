import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {

  }
}
