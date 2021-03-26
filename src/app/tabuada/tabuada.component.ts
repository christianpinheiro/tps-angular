import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  tbd: number;

  constructor() {
    this.tbd = 1;
  }

  getTabuada() {
    return this.tbd;
  }

  getTabuadaList() {
    let list: number[] = [];

    for (let i = 1; i<= 10; i++) list.push(this.getTabuada());
    
    return list;
  }

  ngOnInit() {}

} 