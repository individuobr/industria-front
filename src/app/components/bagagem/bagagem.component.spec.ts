import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagagemComponent } from './bagagem.component';

describe('BagagemComponent', () => {
  let component: BagagemComponent;
  let fixture: ComponentFixture<BagagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
