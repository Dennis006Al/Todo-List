import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FullFormComponent } from './full-form/full-form.component';

const routes: Routes = [
  { path: 'basic', component: BasicFormComponent },
  { path: 'full', component: FullFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseFormRoutingModule {}
