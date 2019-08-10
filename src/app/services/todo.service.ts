import {Injectable} from '@angular/core';
import ITodo from '../interfaces/todo';
import IForm from '../interfaces/form';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor() {
    }

    static getDate(): Promise<ITodo[]> {
        return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => todos.map(todo => {
                return {
                    id: todo.id,
                    status: todo.completed,
                    text: todo.title,
                    title: todo.reqtitle ? todo.reqtitle : `Untitled ${todo.id}`
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
            .then(todo => console.log('NEW TODO ADDED', todo));
    }

    editTodo(item: ITodo) {
        return fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(todo => console.log('TODO ITEM EDITTED', todo));
    }

    deleteTodo(id: string) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(todo => console.log('TODO ITEM DELETED', todo));
    }


}
