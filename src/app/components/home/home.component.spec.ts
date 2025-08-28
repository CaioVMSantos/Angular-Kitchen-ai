import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGeneratorComponent } from './home.component';

describe('HomeComponent', () => {
  let component: RecipeGeneratorComponent;
  let fixture: ComponentFixture<RecipeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
