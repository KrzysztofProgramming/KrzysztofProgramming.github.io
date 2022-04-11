import { AboutComponent } from './router-components/about/about.component';
import { HomeComponent } from './router-components/home/home.component';
import { ProjectsComponent } from './router-components/projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
