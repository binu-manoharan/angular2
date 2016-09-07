import { Component } from '@angular/core';
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
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  </div>
  `
})

export class AppComponent {
  title = "Tour of Heroes";
  heroes = [
    new Hero(1, "Maiev Shadowsong"),
    new Hero(2, "Illidan Stormrage"),
    new Hero(3, "Arthus"),
    new Hero(4, "Priestess of the Moon"),
    new Hero(5, "Thrall")
  ]
}

export class Hero {
  constructor (
    public id: number,
    public name: string
  ) {}
}

