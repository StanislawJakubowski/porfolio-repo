import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownPageComponent } from './down-page.component';

describe('DownPageComponent', () => {
  let component: DownPageComponent;
  let fixture: ComponentFixture<DownPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
