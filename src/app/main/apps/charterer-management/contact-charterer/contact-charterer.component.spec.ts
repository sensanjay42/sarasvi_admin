import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChartererComponent } from './contact-charterer.component';

describe('ContactChartererComponent', () => {
  let component: ContactChartererComponent;
  let fixture: ComponentFixture<ContactChartererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactChartererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChartererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
