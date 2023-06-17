import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    RouterModule.forChild([
      { path: '', component:TermsOfServiceComponent, pathMatch: 'full' }
    ])
  ]
})
export class TermsOfServiceModule { }
