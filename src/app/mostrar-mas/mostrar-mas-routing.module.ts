import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarMasPage } from './mostrar-mas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarMasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarMasPageRoutingModule {}
