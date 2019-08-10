import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import ITodo from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosArray: ITodo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    TodoService.getDate().then((response) => {
      this.todosArray = response;
    });
  }

  deleteItem(text: string) {
    const index = this.todosArray.findIndex(element => element.text === text);
    this.todosArray.splice(index, 1);
  }

}
