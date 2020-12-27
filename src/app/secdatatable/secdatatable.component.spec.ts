import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecdatatableComponent } from './secdatatable.component';

describe('SecdatatableComponent', () => {
  let component: SecdatatableComponent;
  let fixture: ComponentFixture<SecdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
