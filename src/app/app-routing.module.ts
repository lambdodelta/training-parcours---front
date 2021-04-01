import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterListComponent } from './filter-list/filter-list.component';
import { LayoutFormComponent } from './generic-form/layout-form/layout-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: FilterListComponent },
  { path: 'create', component: LayoutFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }