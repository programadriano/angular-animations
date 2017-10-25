import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Example01Module } from './example01/example01.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    Example01Module,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
