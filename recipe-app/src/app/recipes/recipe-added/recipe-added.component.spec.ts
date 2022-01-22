import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddedComponent } from './recipe-added.component';

describe('RecipeAddedComponent', () => {
  let component: RecipeAddedComponent;
  let fixture: ComponentFixture<RecipeAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
