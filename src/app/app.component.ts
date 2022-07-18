import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoList';
  todoList: string[] = [];
  completedList: string[] = [];

  constructor() {}

  ngOnInit() {
    const todoList = window.localStorage.getItem('todoList') || '';
    const parsedTodoList = JSON.parse(todoList);
    if (parsedTodoList) {
      this.todoList = parsedTodoList.todoList || [];
      this.completedList = parsedTodoList.completedList || [];
    }
  }

  newToDoInput(input: string) {
    console.log(input);
    this.todoList.push(input);
    this.storeTodoList();
  }
  moveToCompletedList(indexes: number[]) {
    let newTodoList = [];
    for (let i = 0; i < this.todoList.length; i++) {
      if (!indexes.includes(i)) {
        newTodoList.push(this.todoList[i]);
      } else {
        this.completedList.push(this.todoList[i]);
      }
    }
    this.todoList = newTodoList;
    this.storeTodoList();
  }

  moveToTodoList(indexes: number[]) {
    let todoListAgain = [];
    for (let i = 0; i < this.completedList.length; i++) {
      if (!indexes.includes(i)) {
        todoListAgain.push(this.completedList[i]);
      } else {
        this.todoList.push(this.completedList[i]);
      }
    }
    this.completedList = todoListAgain;
     this.storeTodoList();
  }

  storeTodoList() {
    const list = {
      todoList: this.todoList,
      completedList: this.completedList
    };
    window.localStorage.setItem('todoList', JSON.stringify(list));
  }
}
