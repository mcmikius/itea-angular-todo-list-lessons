import {Component, Input, OnInit} from '@angular/core';
import ITodo from './models/todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title = 'TODO';
    todosArray: ITodo[] = [];
    newTitle = '';
    newText = '';


    ngOnInit(): void {

    }

    // getData() {
    //   fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
    //     .then(todos => {
    //       this.todosArray = todos;
    //     });
    // }

}
