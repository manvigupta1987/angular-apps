import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeDetailsComponent } from './recipe-details.component';

describe('recipeDetailsComponent', () => {
  let component: recipeDetailsComponent;
  let fixture: ComponentFixture<recipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ recipeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
