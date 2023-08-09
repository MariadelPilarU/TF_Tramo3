import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqServicesComponent } from './arq-services.component';

describe('ArqServicesComponent', () => {
  let component: ArqServicesComponent;
  let fixture: ComponentFixture<ArqServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArqServicesComponent]
    });
    fixture = TestBed.createComponent(ArqServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
