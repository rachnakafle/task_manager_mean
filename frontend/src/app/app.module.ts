import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    SignupPageComponent,
    NewTaskComponent,
    NewListComponent,
    LoginPageComponent,
    EditTaskComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
