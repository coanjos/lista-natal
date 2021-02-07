import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFrontComponent } from './gift-front.component';

describe('GiftFrontComponent', () => {
  let component: GiftFrontComponent;
  let fixture: ComponentFixture<GiftFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
