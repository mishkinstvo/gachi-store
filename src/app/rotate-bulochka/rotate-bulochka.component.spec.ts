import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateBulochkaComponent } from './rotate-bulochka.component';

describe('RotateBulochkaComponent', () => {
  let component: RotateBulochkaComponent;
  let fixture: ComponentFixture<RotateBulochkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotateBulochkaComponent]
    });
    fixture = TestBed.createComponent(RotateBulochkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
