import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('./basic-form/basic-form.module').then((m) => m.BasicModule),
  },
  {
    path: 'full',
    loadChildren: () =>
      import('./full-form/full-form.module').then((m) => m.FullModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
