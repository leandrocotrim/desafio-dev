import { TestBed } from '@angular/core/testing';

import { CnabLojaService } from './cnab-loja.service';

describe('CnabLojaService', () => {
  let service: CnabLojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnabLojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
