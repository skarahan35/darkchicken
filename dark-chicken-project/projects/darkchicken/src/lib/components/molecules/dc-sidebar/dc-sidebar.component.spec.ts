import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSidebarComponent } from './dc-sidebar.component';

describe('DcSidebarComponent', () => {
  let component: DcSidebarComponent;
  let fixture: ComponentFixture<DcSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcSidebarComponent]
    });
    fixture = TestBed.createComponent(DcSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
