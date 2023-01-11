import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseFormComponent } from './choose-form/choose-form.component';

const routes: Routes = [
  { path: '', component: ChooseFormComponent },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./choose-form/choose-form.module').then(
        (m) => m.ChooseFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
