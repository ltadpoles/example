import { Component, OnInit } from '@angular/core'
import { HeroService } from '../hero.service'
import { Hero } from '../hero'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  heros: Hero[]

  select: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros()
  }

  selectHero(hero: Hero): void {
    this.select = hero
  }
  getHeros(): void {
    // this.heros = this.heroService.getHeros()
    console.log(this.heroService.getHeros())
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros)
  }
}
