import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';


//import components
import { HomeComponent } from './components/home/home.component';
import { NewInComponent } from './components/new-in/new-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { BagsComponent } from './components/bags/bags.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { DesignersComponent } from './components/designers/designers.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClosetComponent } from './components/closet/closet.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//routes setup
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new-in', component: NewInComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'bags', component: BagsComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'consulting', component: ConsultingComponent},
  {path: 'designers', component: DesignersComponent},
  {path: 'shoes', component: ShoesComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'editorial', component: EditorialComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'closet', component: ClosetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
