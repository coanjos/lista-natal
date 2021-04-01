import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasWishlistComponent } from './christmas-wishlist.component';

describe('ChristmasWishlistComponent', () => {
  let component: ChristmasWishlistComponent;
  let fixture: ComponentFixture<ChristmasWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
