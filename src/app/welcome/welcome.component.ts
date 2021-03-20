import { Component, OnInit } from '@angular/core';
import { LanguageselectService } from '../languageselect.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  lang: boolean;
  constructor(public languageSelectService: LanguageselectService) { }
  ngOnInit(): void {
  }
}

