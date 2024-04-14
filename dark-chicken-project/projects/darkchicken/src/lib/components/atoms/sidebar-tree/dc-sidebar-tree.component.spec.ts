import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DcSidebarTreeComponent } from './dc-sidebar-tree.component';



describe('SidebarTreeComponent', () => {
  let component: DcSidebarTreeComponent;
  let fixture: ComponentFixture<DcSidebarTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcSidebarTreeComponent]
    });
    fixture = TestBed.createComponent(DcSidebarTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
