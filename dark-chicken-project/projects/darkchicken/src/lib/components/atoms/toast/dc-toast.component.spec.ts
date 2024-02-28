import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcToastComponent } from './dc-toast.component';

describe('DcToastComponent', () => {
  let component: DcToastComponent;
  let fixture: ComponentFixture<DcToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcToastComponent]
    });
    fixture = TestBed.createComponent(DcToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
