import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Note the plural 'styleUrls'
})
export class AboutComponent {}
