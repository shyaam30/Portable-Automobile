/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemologinComponent } from './Demologin.component';

describe('DemologinComponent', () => {
  let component: DemologinComponent;
  let fixture: ComponentFixture<DemologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
