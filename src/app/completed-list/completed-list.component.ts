import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  constructor() { }
  @Input() completedList: string[];
  @Output() todoListAgain = new EventEmitter<number[]>();
  completedItem: number[];
  ngOnInit(): void {
  }

  moveToTodoList() {
    console.log(this.todoListAgain);
    this.todoListAgain.emit(this.completedItem);

  }

}
