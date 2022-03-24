import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostComponent } from './components/lista-post/lista-post.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/ListaPost' },
  { path: 'post', component: ListaPostComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', redirectTo: '/ListaPost' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
