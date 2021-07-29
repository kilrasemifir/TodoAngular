import { TestBed } from '@angular/core/testing';

import { NotEmptyTodoListGuard } from './not-empty-todo-list.guard';

describe('NotEmptyTodoListGuard', () => {
  let guard: NotEmptyTodoListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotEmptyTodoListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
