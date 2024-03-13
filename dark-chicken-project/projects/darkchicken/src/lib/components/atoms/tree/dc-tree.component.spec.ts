import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcTreeComponent } from './dc-tree.component';

describe('DcTreeComponent', () => {
  let component: DcTreeComponent;
  let fixture: ComponentFixture<DcTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcTreeComponent]
    });
    fixture = TestBed.createComponent(DcTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
