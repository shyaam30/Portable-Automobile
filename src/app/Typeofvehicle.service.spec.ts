/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Typeofvehicle } from './Typeofvehicle.service';


describe('Service: Typeofvehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Typeofvehicle]
    });
  });

  it('should ...', inject([Typeofvehicle], (service: Typeofvehicle) => {
    expect(service).toBeTruthy();
  }));
});
