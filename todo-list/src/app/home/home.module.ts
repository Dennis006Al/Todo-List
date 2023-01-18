import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NewTodoComponent },
];
@NgModule({
  declarations: [HomeComponent, NewTodoComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
})
export class HomeModule {}
