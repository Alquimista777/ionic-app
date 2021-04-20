import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroCanDdeactivateGuard } from './core/guard/intro-can-ddeactivate.guard';
import { IntroGuard } from './core/guard/intro.guard';

const routes: Routes = [
  
  {
    path: 'folder',
    canActivate: [IntroGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'intro',
    canActivate: [IntroCanDdeactivateGuard],
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'tratamiento/:id',
    loadChildren: () => import('./tratamiento/tratamiento.module').then( m => m.TratamientoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
