import { TestBed } from '@angular/core/testing';

import { JsonInterpreterService } from './json-interpreter.service';

describe('JsonInterpreterService', () => {
  let service: JsonInterpreterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonInterpreterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
