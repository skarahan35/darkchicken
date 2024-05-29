import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchEditableComponent } from './batch-editable.component';

describe('BatchEditableComponent', () => {
  let component: BatchEditableComponent;
  let fixture: ComponentFixture<BatchEditableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchEditableComponent]
    });
    fixture = TestBed.createComponent(BatchEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
