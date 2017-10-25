import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { Example01Component } from './example01.component';

@NgModule({
  declarations: [Example01Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: '', component: Example01Component },
    ])
  ],
})
export class Example01Module { }
