import { TestBed } from '@angular/core/testing';

import { SharedetailsService } from './sharedetails.service';

describe('SharedetailsService', () => {
  let service: SharedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
