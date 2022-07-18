import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list: string[];
  @Output() todoListChange = new EventEmitter<number[]>();
  selectedOptions: any;
  constructor() { }

  ngOnInit(): void {
  }

  moveToComplete() {
    console.log(this.selectedOptions);
    this.todoListChange.emit(this.selectedOptions);
  }

}
