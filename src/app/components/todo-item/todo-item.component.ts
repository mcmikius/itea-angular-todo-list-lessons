import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import ITodo from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() deleteItem = new EventEmitter<string>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {

  }

  delete(id: string) {
    this.todoService.deleteTodo(id);
  }

  edit() {
    this.todoService.editTodo(this.todo);
  }
}
