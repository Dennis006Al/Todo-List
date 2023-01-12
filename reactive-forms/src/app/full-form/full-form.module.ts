import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullFormComponent } from './full-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: FullFormComponent }];

@NgModule({
  declarations: [FullFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class FullModule {}
