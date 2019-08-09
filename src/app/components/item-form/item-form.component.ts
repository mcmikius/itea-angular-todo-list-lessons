import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  title = '';
  text = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  addNew() {
    this.todoService.addNew({
      title: this.title,
      text: this.text
    });
  }

}
