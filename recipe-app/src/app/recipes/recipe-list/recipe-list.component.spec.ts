import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeListComponent } from './recipe-list.component';

describe('recipeListComponent', () => {
  let component: recipeListComponent;
  let fixture: ComponentFixture<recipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ recipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
