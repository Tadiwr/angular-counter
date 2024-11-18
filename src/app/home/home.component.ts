import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  count = 0;

  public increment() {
    this.count++;
  }

  public decrement() {
    this.count--;
  }

  public reset() {
    this.count = 0;
  }
}
