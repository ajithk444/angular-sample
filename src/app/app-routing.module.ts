import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateprojectComponent } from './projects/createproject/createproject.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'createproject', component: CreateprojectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
