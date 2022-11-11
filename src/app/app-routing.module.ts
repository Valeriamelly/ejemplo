import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEspacioComponent } from './components/new-espacio/new-espacio.component';
import { HomeComponent } from './components/home/home.component';
import { ListEspaciosComponent } from './components/list-espacios/list-espacios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/espacios/new', component:NewEspacioComponent},
  { path: 'business/espacios', component:ListEspaciosComponent},
  { path: '', redirectTo:'home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
