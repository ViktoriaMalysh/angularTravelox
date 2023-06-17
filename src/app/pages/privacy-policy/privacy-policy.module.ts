import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    RouterModule.forChild([
      { path: '', component: PrivacyPolicyComponent, pathMatch: 'full' }
    ])
  ]
})
export class PrivacyPolicyModule { }
