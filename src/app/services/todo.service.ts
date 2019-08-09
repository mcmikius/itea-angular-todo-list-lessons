import {Injectable} from '@angular/core';
import ITodo from '../interfaces/todo';
import IForm from '../interfaces/form';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor() {
    }

    getDate(): Promise<ITodo[]> {
        return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
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

    addNew(data: IForm) {
        if (!data.text) {
            return false;
        }
        const newItem: ITodo = {
            id: Math.random(),
            status: false,
            text: data.text,
            title: data.text
        };
        return fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(todo => console.log('TODO ADDED', todo));
    }

}
