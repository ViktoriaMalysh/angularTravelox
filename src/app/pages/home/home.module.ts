import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ]
})
export class HomeModule { }
