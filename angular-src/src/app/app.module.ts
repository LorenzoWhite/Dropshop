import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import carousel module for banner
//component imports
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewInComponent } from './components/new-in/new-in.component';
import { DesignersComponent } from './components/designers/designers.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { BagsComponent } from './components/bags/bags.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClosetComponent } from './components/closet/closet.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SamplebannerComponent } from './components/samplebanner/samplebanner.component';

import { NgxCarouselModule } from 'ngx-carousel';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    BannerComponent,
    NewInComponent,
    DesignersComponent,
    ClothingComponent,
    ShoesComponent,
    BagsComponent,
    AccessoriesComponent,
    ConsultingComponent,
    EditorialComponent,
    SalesComponent,
    ClosetComponent,
    LoginComponent,
    RegisterComponent,
    SamplebannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
