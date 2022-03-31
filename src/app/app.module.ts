import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { SchoolComponent } from './school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
