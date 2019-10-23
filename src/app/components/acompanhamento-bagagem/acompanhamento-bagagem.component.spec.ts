import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoBagagemComponent } from './acompanhamento-bagagem.component';

describe('AcompanhamentoBagagemComponent', () => {
  let component: AcompanhamentoBagagemComponent;
  let fixture: ComponentFixture<AcompanhamentoBagagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoBagagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoBagagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
