import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItSkillsComponent } from './it-skills/it-skills.component';
import { PersonalityComponent } from './personality/personality.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipItSkillsComponent } from './it-skills/tooltip-it-skills/tooltip-it-skills.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItSkillsComponent,
    PersonalityComponent,
    TooltipItSkillsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
