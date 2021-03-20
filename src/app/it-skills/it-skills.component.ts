import { Component, OnInit } from '@angular/core';
import { skillslist } from './it-skills-list';
import { skillslisten } from './it-skills-list-en';
import { LanguageselectService } from '../languageselect.service';
@Component({
  selector: 'app-it-skills',
  templateUrl: './it-skills.component.html',
  styleUrls: ['./it-skills.component.scss']
})
export class ItSkillsComponent implements OnInit {
  constructor(public languageSelectService: LanguageselectService) { }
  ngOnInit(): void {

    if (this.languageSelectService.lang) {
      skillslistch = skillslist;
    } else {
      skillslistch = skillslisten;
    }
  }

}
