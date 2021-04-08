import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratamientoPage } from './tratamiento.page';

const routes: Routes = [
  {
    path: '',
    component: TratamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamientoPageRoutingModule {}
