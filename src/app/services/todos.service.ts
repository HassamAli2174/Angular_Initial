import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
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

  constructor() { }
}
