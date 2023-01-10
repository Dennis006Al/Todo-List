import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralFormComponent } from './general-form/general-form.component';
import { FullFormComponent } from './full-form/full-form.component';

const routes: Routes = [
  { path: 'basic', component: GeneralFormComponent },
  { path: 'full', component: FullFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
