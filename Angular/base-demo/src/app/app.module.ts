import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { HerosComponent } from './heros/heros.component'
import { HerosInfoComponent } from './heros-info/heros-info.component'
import { from } from 'rxjs';
import { MessagesComponent } from './messages/messages.component'

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosInfoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
