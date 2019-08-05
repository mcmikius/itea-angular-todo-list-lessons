import {Component, OnInit} from '@angular/core';
import {ITodo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  title = 'TODO';
  todosArray: ITodo[] = [];
  newTitle = '';
  newText = '';

  addNew() {
    if (!this.newText) {
      return false;
    }
    const newItem = {
      id: 1,
      status: false,
      text: this.newText,
      title: this.newTitle
    };
    this.todosArray.unshift(newItem);
    this.newText = '';
    this.newTitle = '';
  }

  deleteItem(text) {
    const index = this.todosArray.findIndex(el => el.text === text);
    this.todosArray.splice(index, 1);
    // alert(text);
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.map((td) => {
        return {
          id: td.id,
          status: td.completed,
          text: td.title,
          title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
        };
      }))
      .then(todos => {
        todos.length = 10;
        return todos;
      })
      .then(todos => {
        this.todosArray = todos;
      });
  }

  ngOnInit(): void {
    this.getData();
  }

}
