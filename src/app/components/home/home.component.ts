import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h2>Home</h2>
      <p>Welcome to our homepage!</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
    }
  `],
  standalone: false
})
export class HomeComponent { }