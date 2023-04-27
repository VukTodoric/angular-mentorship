import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveFilterComponent } from './dialog-save-filter.component';

describe('DialogSaveFilterComponent', () => {
  let component: DialogSaveFilterComponent;
  let fixture: ComponentFixture<DialogSaveFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
