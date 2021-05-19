import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './core/guard/intro.guard';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    // canActivate: [IntroGuard],
    loadChildren: () => import('./intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'tratamiento/:id/:id2',
    loadChildren: () => import('./tratamiento/tratamiento.module').then(m => m.TratamientoPageModule)
  },
  {
    path: 'mostrar-mas/:id',
    loadChildren: () => import('./mostrar-mas/mostrar-mas.module').then(m => m.MostrarMasPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/intro',
    
  },
  {
    path: 'detalle-tratamiento/:id/:id2/:id3',
    loadChildren: () => import('./detalle-tratamiento/detalle-tratamiento.module').then( m => m.DetalleTratamientoPageModule)
  },  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
