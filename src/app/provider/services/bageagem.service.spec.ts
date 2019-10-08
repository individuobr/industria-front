import { TestBed } from '@angular/core/testing';

import { BageagemService } from './bageagem.service';

describe('BageagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BageagemService = TestBed.get(BageagemService);
    expect(service).toBeTruthy();
  });
});
