import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent, pathMatch: 'full' }
    ])
  ]
})
export class NotFoundModule { }
