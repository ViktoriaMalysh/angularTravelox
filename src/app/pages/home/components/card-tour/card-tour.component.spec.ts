import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTourComponent } from './card-tour.component';

describe('CardTourComponent', () => {
  let component: CardTourComponent;
  let fixture: ComponentFixture<CardTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTourComponent]
    });
    fixture = TestBed.createComponent(CardTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
