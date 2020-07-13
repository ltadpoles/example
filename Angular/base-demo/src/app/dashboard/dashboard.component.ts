import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    heros: Hero[] = []

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.getHeroes()
    }

    getHeroes(): void {
        this.heroService
            .getHeros()
            .subscribe((heros) => (this.heros = heros.slice(1, 5)))
    }
}
