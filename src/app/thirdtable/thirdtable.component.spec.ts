import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtableComponent } from './thirdtable.component';

describe('ThirdtableComponent', () => {
  let component: ThirdtableComponent;
  let fixture: ComponentFixture<ThirdtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
