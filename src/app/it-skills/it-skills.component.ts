import { Component, OnInit } from '@angular/core';
import { skillslist } from './it-skills-list';
@Component({
  selector: 'app-it-skills',
  templateUrl: './it-skills.component.html',
  styleUrls: ['./it-skills.component.scss']
})
export class ItSkillsComponent implements OnInit {
  skillslist = skillslist;
  constructor() { }

  ngOnInit(): void {
  }

}
