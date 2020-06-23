import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { VoteComponent } from './vote/vote.component'
import { AdDirective } from './ad.directive'

@NgModule({
    declarations: [AppComponent, VoteComponent, AdDirective],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
