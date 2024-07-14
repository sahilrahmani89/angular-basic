import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; // Import the About component
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path:'',   component:AppComponent},
  { path: 'about', component: AboutComponent },
  // other routes can go here
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
