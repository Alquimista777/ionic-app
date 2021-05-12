import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTratamientoPage } from './detalle-tratamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTratamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTratamientoPageRoutingModule {}
