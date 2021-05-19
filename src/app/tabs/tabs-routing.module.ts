import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IntroCanDdeactivateGuard } from './core/guard/intro-can-ddeactivate.guard';
// import { IntroGuard } from './core/guard/intro.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
        
      },
      {
        path: 'ejercicio',
        loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule)
      },
      {
        path: 'opciones',
        loadChildren: () => import('../opciones/opciones.module').then(m => m.OpcionesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ejercicio',

      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ejercicio',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
