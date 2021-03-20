import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LanguageselectService {
  constructor() { }
  lang = false;
  changeLang = () => {
    this.lang = !this.lang ;
    console.log(this.lang);
  }
}
