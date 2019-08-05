import {Injectable} from '@angular/core';
import ITodo from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todoArray: ITodo[] = [];

    constructor() {
    }

    async getDate(): Promise<ITodo[]> {
        return await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => todos.map((td) => {
                return {
                    id: td.id,
                    status: td.completed,
                    text: td.title,
                    title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
                };
            }));
    }

    async addNew(todo: ITodo): Promise<TodoService> {
        if (!this.newTitle) {
            return false;
        }
        this.todoArray.push(todo)
        return this;
    }

}
