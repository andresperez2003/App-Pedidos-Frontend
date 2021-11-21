import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasDisponiblesComponent } from './programas-disponibles.component';

describe('ProgramasDisponiblesComponent', () => {
  let component: ProgramasDisponiblesComponent;
  let fixture: ComponentFixture<ProgramasDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramasDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
