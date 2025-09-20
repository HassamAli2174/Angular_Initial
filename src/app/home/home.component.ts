import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingComponent } from "../components/greeting/greeting.component";
import { CounterComponent } from '../components/counter/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Welcome to our amazing Angular application! 🚀');
  lastKeyPressed = signal<string>('');

  constructor(private router: Router) {}

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
    console.log('Event target:', event.target);
    this.lastKeyPressed.set(event.key);
    
    // Clear the last key after 3 seconds
    setTimeout(() => {
      this.lastKeyPressed.set('');
    }, 3000);
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Input value:', target.value);
  }

  navigateToTodos() {
    this.router.navigate(['/todos']);
  }

  refreshData() {
    // Clear the live input data
    this.lastKeyPressed.set('');
    console.log('Refreshing data...');
    // You can add actual refresh logic here
  }
}
