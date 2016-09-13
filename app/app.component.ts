import { Component } from '@angular/core';

export class Hero {
  constructor (
    public id: number,
    public name: string
  ) {}
}

const HEROES: Hero[] = [
  { id: 11, name: "Luna" },
  { id: 12, name: "Dark Seer" },
  { id: 13, name: "Axe" },
  { id: 14, name: "Drow Ranger" },
  { id: 15, name: "Troll" },
  { id: 16, name: "Terror Blade" },
  { id: 17, name: "Antimage" },
  { id: 18, name: "Invoker" },
  { id: 19, name: "Crystal Maiden" },
  { id: 20, name: "Bristleback" }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{heroes[0].name}} details!</h2>
  <div><label>id: </label>{{heroes[0].id}}</div>
  <div>
    <label>name: </label>
    <input value="{{heroes[0].name}}" placeholder="name">
  </div>
  <div>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  </div>
  `
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]  
})

export class AppComponent {
  title = "Tour of Heroes";
  heroes = HEROES;
}
