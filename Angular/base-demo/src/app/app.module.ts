import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HerosComponent } from './heros/heros.component';
import { HerosInfoComponent } from './heros-info/heros-info.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { StrengthPipe } from './strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosInfoComponent,
    MessagesComponent,
    DashboardComponent,
    HighlightDirective,
    UnlessDirective,
    StrengthPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
