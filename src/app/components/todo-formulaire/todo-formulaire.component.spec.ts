import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormulaireComponent } from './todo-formulaire.component';

describe('TodoFormulaireComponent', () => {
  let component: TodoFormulaireComponent;
  let fixture: ComponentFixture<TodoFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
