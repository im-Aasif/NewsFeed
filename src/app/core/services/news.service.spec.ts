import { TestBed, async, inject } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it('getSources', async(inject([NewsService], (service: NewsService) => {
    service.getSources('business').subscribe(
      (response: any) => {
        console.log(JSON.stringify(response, null, 2));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  })));
});
