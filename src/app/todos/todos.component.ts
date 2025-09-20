import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    //  console.log(this.todoService.todoItems);
    //  this.todoItems.set(this.todoService.todoItems);
    this.todoService.getTodoFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err
      })
    )
      .subscribe((todos) => { 
        this.todoItems.set(todos);
      });
  }

  getCompletedCount(): number {
    return this.todoItems().filter(todo => todo.completed).length;
  }

  getPendingCount(): number {
    return this.todoItems().filter(todo => !todo.completed).length;
  }

  updateTodoItem(todoItem: Todo){ 
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id == todoItem.id) {
          return{
            ...todo,
            completed:!todo.completed
          }
        }
        return todo;
      })
    })
   }
}




