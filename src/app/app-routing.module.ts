import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramasDisponiblesComponent } from './programas-disponibles/programas-disponibles.component';

const routes: Routes = [

{
   path:'',
   component: LoginComponent
},
{
 path:'Login',
 component: LoginComponent
},
{
 path:'Programas-disponibles',
 component: ProgramasDisponiblesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
