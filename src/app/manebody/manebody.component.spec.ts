import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManebodyComponent } from './manebody.component';

describe('ManebodyComponent', () => {
  let component: ManebodyComponent;
  let fixture: ComponentFixture<ManebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
