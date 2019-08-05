import { Component, Input, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import ITodo from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosArray: ITodo[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getDate();
  }

  ngOnInit(): void {
    this.todoService.getDate().then((response) => {
      this.todosArray = response;
    });
  }

  deleteItem(text) {
    const index = this.todosArray.findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
  }

}
