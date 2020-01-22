import { TestBed } from '@angular/core/testing';

import { EmpDataServiceService } from './emp-data-service.service';

describe('EmpDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpDataServiceService = TestBed.get(EmpDataServiceService);
    expect(service).toBeTruthy();
  });
});
