




import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {

  cricketPlayer: ICricketPlayer[] = [];
  ngOnInit() {
    this.cricketPlayer = [{
      name: "mohammad",
      lastName: 'kaif'
    },
    {
      name: "MS",
      lastName: 'Dhoni'
    },
    {
      name: "Irfan",
      lastName: 'Pathan'
    },
    {
      name: "Zaheer",
      lastName: 'Khan'
    },
    {
      name: "Zaheer",
      lastName: 'Khan'
    },{
      name: "Zaheer",
      lastName: 'Khan'
    },{
      name: "Zaheer",
      lastName: 'Khan'
    },{
      name: "Zaheer",
      lastName: 'Khan'
    },{
      name: "Zaheer",
      lastName: 'Khan'
    },{
      name: "Kapil",
      lastName: 'Dev'
    },
    {
      name: "Virat",
      lastName: 'Kohli'
    }]

  }
}

interface ICricketPlayer {
  name: string;
  lastName: string;
}
