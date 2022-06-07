import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIDFormComponent } from './components/customer-id-form/customer-id-form.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

const routes: Routes = [ 
  {
  path: 'login',
  component: CustomerIDFormComponent
},
{
  path:'customer-details',
  component: CustomerDetailsComponent
},
{
  path: '',
  component: CustomerIDFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
