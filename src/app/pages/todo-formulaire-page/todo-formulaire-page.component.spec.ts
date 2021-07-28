import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormulairePageComponent } from './todo-formulaire-page.component';

describe('TodoFormulairePageComponent', () => {
  let component: TodoFormulairePageComponent;
  let fixture: ComponentFixture<TodoFormulairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormulairePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormulairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
