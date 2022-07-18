import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  @Output() addedInput = new EventEmitter<string>();
  public toDoInput: string = 'Reshma';
  public label: string = `Todo List`;
  constructor() { }

  ngOnInit(): void {
  }
  saveTodoItem() {
    this.addedInput.emit(this.toDoInput);
    this.toDoInput = '';
  }


}
