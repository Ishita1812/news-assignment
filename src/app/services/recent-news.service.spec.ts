import { TestBed } from '@angular/core/testing';

import { RecentNewsService } from './recent-news.service';

describe('RecentNewsService', () => {
  let service: RecentNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
