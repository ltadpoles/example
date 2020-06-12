import { Component, OnInit, Input } from '@angular/core'
import { Hero } from '../hero'

@Component({
  selector: 'app-heros-info',
  templateUrl: './heros-info.component.html',
  styleUrls: ['./heros-info.component.scss']
})
export class HerosInfoComponent implements OnInit {

  @Input() hero: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
