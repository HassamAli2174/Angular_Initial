import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  todoItems: Array<Todo> = [
    {
      title: 'Buy groceries',
      userId:1,
      id: 0,
      completed: false
    },
    
    {
      title: 'car wash',
      userId:2,
      id: 1,
      completed: false
    },
    
    {
      title: 'washing',
      userId:3,
      id: 1,
      completed: false
    },
    
  ]
  set: any;

  getTodoFromApi() {
    const url  = `https://jsonplaceholder.typicode.com/todos/`
    return this.http.get<Array<Todo>>(url);
   }
}
