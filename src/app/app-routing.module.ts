import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'uno',
    pathMatch: 'full'
  },
  {
    path: 'uno',
    loadChildren: () => import('./Ejercicios/uno/uno.module').then( m => m.UnoPageModule)
  },
  {
    path: 'dos',
    loadChildren: () => import('./Ejercicios/dos/dos.module').then( m => m.DosPageModule)
  },
  {
    path: 'tres',
    loadChildren: () => import('./Ejercicios/tres/tres.module').then( m => m.TresPageModule)
  },
  {
    path: 'cuatro',
    loadChildren: () => import('./Ejercicios/cuatro/cuatro.module').then( m => m.CuatroPageModule)
  },
  {
    path: 'cinco',
    loadChildren: () => import('./Ejercicios/cinco/cinco.module').then( m => m.CincoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
