import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnersComponent } from './spinners.component';

describe('SpinnersComponent', () => {
  let component: SpinnersComponent;
  let fixture: ComponentFixture<SpinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnersComponent]
    });
    fixture = TestBed.createComponent(SpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
