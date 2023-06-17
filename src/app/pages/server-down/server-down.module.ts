import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerDownComponent } from './server-down/server-down.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';


@NgModule({
  declarations: [
    ServerDownComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: ServerDownComponent, pathMatch: 'full' }
    ])
  ]
})
export class ServerDownModule { }
