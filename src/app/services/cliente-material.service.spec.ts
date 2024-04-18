import { TestBed } from '@angular/core/testing';

import { ClienteMaterialService } from './cliente-material.service';

describe('ClienteMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteMaterialService = TestBed.get(ClienteMaterialService);
    expect(service).toBeTruthy();
  });
});
