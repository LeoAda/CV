import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipItSkillsComponent } from './tooltip-it-skills.component';

describe('TooltipItSkillsComponent', () => {
  let component: TooltipItSkillsComponent;
  let fixture: ComponentFixture<TooltipItSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipItSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipItSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
