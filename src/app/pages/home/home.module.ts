import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer.module';
import { HeaderModule } from '../../shared/header/header.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoaderModule } from '../../shared/components/louder/loader.module';
import { CardTourComponent } from './components/card-tour/card-tour.component';
import { ToursModule } from '../../store/tours/tours.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchFormComponent,
    CardTourComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    LoaderModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    ToursModule
  ]
})
export class HomeModule { }
