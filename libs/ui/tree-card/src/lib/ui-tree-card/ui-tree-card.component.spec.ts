import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTreeCardComponent } from './ui-tree-card.component';

describe('UiTreeCardComponent', () => {
  let component: UiTreeCardComponent;
  let fixture: ComponentFixture<UiTreeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTreeCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiTreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
