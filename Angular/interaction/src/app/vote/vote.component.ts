import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    @Input() name: string
    @Output() voted = new EventEmitter<boolean>()
    didVote: boolean = false

    vote(agreed: boolean) {
        this.voted.emit(agreed)
        this.didVote = true
    }
}
