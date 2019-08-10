import {Component, Input, OnInit} from '@angular/core';
import ITodo from './interfaces/todo';
import {TodoService} from './services/todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title = 'TODO';


    ngOnInit(): void {

    }

}
