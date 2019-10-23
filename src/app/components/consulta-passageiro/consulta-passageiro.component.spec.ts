import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPassageiroComponent } from './consulta-passageiro.component';

describe('ConsultaPassageiroComponent', () => {
  let component: ConsultaPassageiroComponent;
  let fixture: ComponentFixture<ConsultaPassageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPassageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
