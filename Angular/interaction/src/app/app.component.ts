import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Interaction'
    agreed = 0
    disagreed = 0
    voters = ['Narco', 'Celeritas', 'Bombasto']

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++
    }
}
