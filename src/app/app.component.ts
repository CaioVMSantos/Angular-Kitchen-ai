import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeGeneratorComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeGeneratorComponent],
  template: `
  <main>
    <app-home></app-home>
  </main>
`,
styles: '',
})
export class AppComponent {
  title = 'kitchen-ai';
}
