import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplebannerComponent } from './samplebanner.component';

describe('SamplebannerComponent', () => {
  let component: SamplebannerComponent;
  let fixture: ComponentFixture<SamplebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
