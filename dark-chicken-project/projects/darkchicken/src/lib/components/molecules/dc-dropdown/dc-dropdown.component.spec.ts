import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDropdownComponent } from './dc-dropdown.component';

describe('DcDropdownComponent', () => {
  let component: DcDropdownComponent;
  let fixture: ComponentFixture<DcDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcDropdownComponent]
    });
    fixture = TestBed.createComponent(DcDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
