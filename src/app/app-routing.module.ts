import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewSidebarComponent } from './components/new-sidebar/new-sidebar.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { WelcomeInWorkComponent } from './components/welcome-in-work/welcome-in-work.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'services',
        component: ServicesComponent,
        outlet: 'main',
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'main',
        pathMatch: 'full',
      },
      {
        path: 'contact',
        component: ContactComponent,
        outlet: 'main',
        pathMatch: 'full',
      },
      {
        path: '',
        component: NewSidebarComponent,
        outlet: 'main',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'work',
    component: WorkComponent,
    children: [
      {
        path: '',
        component: WelcomeInWorkComponent,
        outlet: 'Do',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
        outlet: 'Do',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        outlet: 'Do',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
