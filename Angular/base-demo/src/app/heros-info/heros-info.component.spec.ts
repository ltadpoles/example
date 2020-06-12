import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosInfoComponent } from './heros-info.component';

describe('HerosInfoComponent', () => {
  let component: HerosInfoComponent;
  let fixture: ComponentFixture<HerosInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
