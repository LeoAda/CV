import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSkillsComponent } from './it-skills.component';

describe('ItSkillsComponent', () => {
  let component: ItSkillsComponent;
  let fixture: ComponentFixture<ItSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
